import { useStore } from "@/stores/useStore";

export const useStadistics = () => {
  const projectsList = useStore((state) => state.projectsList);

  const totalProjects = projectsList.length;

  const allTasks = projectsList.flatMap((project) => project.tasks || []);
  const totalTasks = allTasks.length;

  const pendingTasks = allTasks.filter(
    (task) => task.status === "pending"
  ).length;
  const inProcessTasks = allTasks.filter(
    (task) => task.status === "in process"
  ).length;
  const doneTasks = allTasks.filter((task) => task.status === "done").length;

  const progress =
    totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return {
    totalProjects,
    allTasks,
    totalTasks,
    pendingTasks,
    inProcessTasks,
    doneTasks,
    progress,
  };
};
