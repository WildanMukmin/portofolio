export default function Page() {
  return (
    <section className="h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "JavaScript",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "REST API",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm text-center"
            >
              <span className="text-lg text-gray-800 dark:text-gray-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
