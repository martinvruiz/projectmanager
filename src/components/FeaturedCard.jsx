export function FeatureCard({ title }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm text-center">
      <h3 className="text-md md:text-lg font-semibold text-gray-700">
        {title}
      </h3>
    </div>
  );
}
