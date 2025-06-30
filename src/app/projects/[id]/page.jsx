"use client";

import AddTask from "@/components/AddTask";
import Button from "@/components/Button";
import EditTask from "@/components/EditTask";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import TaskCard from "@/components/TaskCard";
import ViewTask from "@/components/ViewTask";
import { useStore } from "@/stores/useStore";
import { showSuccessToast } from "@/toasts/showSuccesToast";
import { toastConfirmDelete } from "@/toasts/showToastConfirmDelete";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = useStore((state) =>
    state.projectsList.find((p) => p.id === id)
  );
  const addTasktoProject = useStore((state) => state.addTaskToProject);
  const deleteProject = useStore((state) => state.deleteProject);
  const editTaskInProject = useStore((state) => state.editTaskInProject);
  const deleteTaskInProject = useStore((state) => state.deleteTaskInProject);
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "pending",
    priority: "low",
  });

  const handleAddTask = () => {
    if (task.name === "") {
      alert("Task name cannot be empty");
      return;
    }
    addTasktoProject(id, {
      ...task,
    });
    setTask({
      name: "",
      description: "",
      status: "pending",
      priority: "low",
    });
    setModalOpen(false);
    showSuccessToast("Task created successfully");
  };

  const handleDeleteProject = (project) => {
    if (!project) return;

    toastConfirmDelete(project.name, async () => {
      try {
        await deleteProject(project.id);
        showSuccessToast("Project deleted successfully");
      } catch (error) {
        console.error(error);
      }
    });
  };

  if (!project) {
    return (
      <div className="p-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link href="/projects">
          <button className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700">
            ← Back to Projects
          </button>
        </Link>
      </div>
    );
  }

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setIsEditing(false);
    setTaskModal(true);
  };

  const handleViewEditTask = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
  };

  const handleEditTask = async () => {
    if (!selectedTask) return;

    await editTaskInProject(project.id, selectedTask.id, {
      name: selectedTask.name,
      description: selectedTask.description,
      status: selectedTask.status,
      priority: selectedTask.priority,
    });

    setIsEditing(false);
  };

  const handleDeleteTask = async () => {
    if (!selectedTask) return;

    toastConfirmDelete(selectedTask.name, async () => {
      await deleteTaskInProject(project.id, selectedTask.id);
      showSuccessToast("Task deleted");
    });

    setTaskModal(false);
  };

  return (
    <div className="max-w-full min-h-screen bg-gray-200 text-gray-800 overflow-x-hidden pb-24 md:pb-10">
      <div className="md:pt-24 pt-4 flex flex-col items-center w-full">
        <h2 className="text-xl md:text-3xl font-bold text-center">
          {project.name}
        </h2>
        <div>
          <p className="md:text-lg text-gray-600 my-2 text-center">
            Created: {new Date(project.created_at).toLocaleDateString()}
          </p>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold">Tasks for: {project.name}</h3>
            <div className="w-full max-w-lg flex flex-col items-center px-2">
              <div className="mt-4">
                <Button title={"Add task"} onClick={() => setModalOpen(true)} />
              </div>
              {project.tasks.length > 0 ? (
                <div className="flex flex-col justify-center my-4">
                  <AnimatePresence>
                    {project.tasks.map((task) => (
                      <motion.button
                        key={task.id}
                        onClick={() => handleSelectTask(task)}
                        className="w-full text-left focus:outline-none"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        layout
                      >
                        <TaskCard task={task} />
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div>
                  <p className="md:text-lg text-gray-600 my-3">
                    No tasks available for this project.
                  </p>
                  <div className="bg-white shadow-md rounded-lg p-4 mb-2 md:min-w-xl">
                    <p className="text-gray-600 py-2">
                      You can add tasks later.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Link href={`/projects`}>
              <Button
                title={"Delete project"}
                onClick={() => handleDeleteProject(project)}
              />
            </Link>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <AddTask
          task={task}
          onChangeName={(e) =>
            setTask((prev) => ({ ...prev, name: e.target.value }))
          }
          onChangeDescription={(e) =>
            setTask((prev) => ({ ...prev, description: e.target.value }))
          }
          onChangePriority={(e) =>
            setTask((prev) => ({ ...prev, priority: e.target.value }))
          }
          onClick={() => handleAddTask()}
        />
      </Modal>
      <Modal isOpen={taskModal} onClose={() => setTaskModal(false)}>
        {isEditing ? (
          <EditTask
            editTask={selectedTask}
            onChangeName={(e) =>
              setSelectedTask((prev) => ({ ...prev, name: e.target.value }))
            }
            onChangeDescription={(e) =>
              setSelectedTask((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            onChangeStatus={(e) =>
              setSelectedTask((prev) => ({ ...prev, status: e.target.value }))
            }
            onChangePriority={(e) =>
              setSelectedTask((prev) => ({ ...prev, priority: e.target.value }))
            }
            onSubmit={() => handleEditTask()}
          />
        ) : (
          <ViewTask
            task={selectedTask}
            editTask={() => handleViewEditTask(selectedTask)}
            deleteTask={() => handleDeleteTask()}
          />
        )}
      </Modal>
    </div>
  );
}
