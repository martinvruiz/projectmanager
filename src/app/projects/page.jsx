"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
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
    <div className="w-full min-h-screen h-auto bg-gray-200 text-gray-800 md:pt-24 pt-4 md:pb-10 pb-24">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center text-center mx-auto">
          <h2 className="text-2xl font-bold">
            {profile?.full_name ? (
              <p>{profile.full_name}'s projects</p>
            ) : (
              <p>Your projects</p>
            )}
          </h2>
          {profile ? (
            <div>
              {projectsList.length > 0 ? (
                <div>
                  <div className="mt-6">
                    <Button
                      title="+ New Project"
                      onClick={() => setModalOpen(true)}
                    />
                  </div>
                  <ul className="list-none mt-2 p-4">
                    {projectsList.map((project, index) => (
                      <li key={index} className="text-lg">
                        <Link href={`/projects/${project.id}`}>
                          <ProjectCard project={project} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <p className="md:text-lg text-gray-600 my-3">
                    You have no projects yet. Start by creating one!
                  </p>
                  <Button
                    title="+ New Project"
                    onClick={() => setModalOpen(true)}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center mt-2">
              <h4 className="font-semibold text-xl px-3">
                You need to log in or sign up to see your projects
              </h4>
              <div className=" pt-3">
                <Link href={"/account"}>
                  <Button title={"Go to profile"} />
                </Link>
              </div>
            </div>
          )}
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <div>
              <h3 className="py-2 text-xl">Create project</h3>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project's name"
                className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
              />
              <Button title={"Create"} onClick={() => handleCreateProject()} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
