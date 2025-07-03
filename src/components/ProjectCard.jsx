export default function ProjectCard({ project }) {
  return (
    <div className="bg-white hover:bg-gray-100 shadow rounded-2xl p-6 transition-colors duration-200 cursor-pointer md:min-w-3xl min-w-xs">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="font-semibold text-lg md:text-2xl text-gray-900">
          {project.name}
        </h2>
        <p className="text-gray-600 text-sm md:text-base whitespace-nowrap">
          Last update:{" "}
          <span className="font-medium text-gray-800">
            {new Date(project.updated_at).toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
}
