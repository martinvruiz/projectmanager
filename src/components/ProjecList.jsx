import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projectsList }) {
  return (
    <ul className="list-none mt-4 p-0 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <AnimatePresence>
        {projectsList.map((project) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            layout
            className="cursor-pointer"
          >
            <Link href={`/projects/${project.id}`} className="block">
              <ProjectCard project={project} />
            </Link>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
