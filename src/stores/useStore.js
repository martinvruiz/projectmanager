import { supabase } from "@/lib/supabaseClient";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  fetchProfile: async (userId) => {
    if (!userId) return;

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (!error && data) {
      set({ profile: data });
    }
  },
  initializeProfile: async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) return;

    const userId = data.user.id;
    const profileRes = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (!profileRes.error && profileRes.data) {
      set({ profile: profileRes.data });
      await get().fetchProjects();
    }
  },
  resetStore: () =>
    set({
      profile: null,
      projectsList: [],
    }),
  projectsList: [],
  fetchProjects: async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*, tasks(*)")
      .order("created_at", { ascending: false });

    if (!error && data) {
      set({ projectsList: data });
    }
  },
  addProject: async (projectName) => {
    const user = get().profile;

    const newProject = {
      name: projectName,
      user_id: user.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("projects")
      .insert(newProject)
      .select()
      .single();

    if (error) {
      console.error("error inserting project:", error);
    }

    if (!error && data) {
      set((state) => ({
        projectsList: [...state.projectsList, { ...data, tasks: [] }],
      }));
    }
  },
  getProjectById: async (id) => {
    const localProject = get().projectsList.find(
      (project) => project.id === id
    );
    if (localProject) return localProject;

    const { data, error } = await supabase
      .from("projects")
      .select("*, tasks(*)")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching project by id:", error);
      return null;
    }

    set((state) => ({
      projectsList: [...state.projectsList, data],
    }));

    return data;
  },
  deleteProject: async (projectId) => {
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", projectId);

    if (error) {
      console.error("error deleting project", error);
      return;
    }

    set((state) => ({
      projectsList: state.projectsList.filter(
        (project) => project.id !== projectId
      ),
    }));
  },
  addTaskToProject: async (projectId, taskData) => {
    const newTask = {
      ...taskData,
      project_id: projectId,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("tasks")
      .insert(newTask)
      .select()
      .single();

    if (error) {
      console.error("error inserting project:", error);
    }

    if (!error && data) {
      set((state) => {
        const updatedProjects = state.projectsList.map((project) => {
          if (project.id === projectId) {
            return {
              ...project,
              tasks: [...(project.tasks || []), data],
              updated_at: new Date().toISOString(),
            };
          }
          return project;
        });
        return { projectsList: updatedProjects };
      });
    }
  },
  editTaskInProject: async (projectId, taskId, updatedFields) => {
    const { data, error } = await supabase
      .from("tasks")
      .update({
        ...updatedFields,
      })
      .eq("id", taskId)
      .select()
      .single();

    if (error) {
      console.error("Error updating task:", error);
      return;
    }

    set((state) => {
      const updatedProjects = state.projectsList.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: (project.tasks || []).map((task) =>
              task.id === taskId ? { ...task, ...data } : task
            ),
            updated_at: new Date().toISOString(),
          };
        }
        return project;
      });
      return { projectsList: updatedProjects };
    });
  },
  deleteTaskInProject: async (projectId, taskId) => {
    const { error } = await supabase.from("tasks").delete().eq("id", taskId);

    if (error) {
      console.error("Error deleting task:", error);
      return;
    }

    set((state) => {
      const updatedProjects = state.projectsList.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      });
      return { projectsList: updatedProjects };
    });
  },
}));
