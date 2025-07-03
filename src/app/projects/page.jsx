"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjecList";
import ProjectCard from "@/components/ProjectCard";
import { useStore } from "@/stores/useStore";
import { showSuccessToast } from "@/toasts/showSuccesToast";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Projects() {
  const profile = useStore((state) => state.profile);
  const projectsList = useStore((state) => state.projectsList);
  const [projectName, setProjectName] = useState("");
  const addProject = useStore((state) => state.addProject);
  const [modalOpen, setModalOpen] = useState(false);
  const handleCreateProject = async () => {
    if (projectName === "") {
      alert("Project name cannot be empty");
      return;
    }
    await addProject(projectName);
    setModalOpen(false);
    setProjectName("");
    showSuccessToast("Project created successfully");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800 md:pt-24 pt-6 md:pb-10 pb-24">
      <div className="flex flex-col items-center justify-center min-h-full px-4">
        <div className="flex flex-col items-center text-center max-w-3xl w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {profile?.full_name ? (
              <span>{profile.full_name}'s Projects</span>
            ) : (
              <span>Your Projects</span>
            )}
          </h2>

          {profile ? (
            <>
              {projectsList.length > 0 ? (
                <>
                  <div className="w-full flex justify-center mb-6">
                    <Button
                      title="+ New project"
                      onClick={() => setModalOpen(true)}
                    />
                  </div>
                  <ProjectList projectsList={projectsList} />
                </>
              ) : (
                <div className="w-full bg-white rounded-2xl shadow-md p-8">
                  <p className="text-gray-600 text-lg mb-6">
                    You have no projects yet. Start by creating one!
                  </p>
                  <Button
                    title="+ New project"
                    onClick={() => setModalOpen(true)}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center mt-6 space-y-4 bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
              <h4 className="font-semibold text-xl text-gray-900 px-3">
                You need to log in or sign up to see your projects
              </h4>
              <Link href={"/account"}>
                <Button title={"Go to profile"} />
              </Link>
            </div>
          )}

          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <div>
              <h3 className="py-2 text-xl font-semibold text-gray-900">
                Create project
              </h3>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project's name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <Button title={"Create"} onClick={() => handleCreateProject()} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
