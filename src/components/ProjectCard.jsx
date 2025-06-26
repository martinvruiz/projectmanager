export default function ProjectCard({ project }) {
  return (
    <div className="bg-white hover:bg-gray-200 shadow-md rounded-lg p-4 mb-2 md:min-w-xl">
      <div className="flex items-center justify-between space-x-10">
        <p className="md:text-md text-sm">
          Created on: {new Date(project.created_at).toLocaleDateString()}
        </p>
        <h2 className="font-bold text-md md:text-2xl">{project.name}</h2>
        <p className="md:text-md text-sm">
          Last update: {new Date(project.updated_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
