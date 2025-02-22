import Link from "next/link";

const Page = () => {
  return (
    <section className="h-screen pt-32 pb-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Selamat Datang!
          </h1>
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Wildan Mukmin
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Web Developer | Full-Stack Expertise in React, Next.js, and SQL.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Contact Saya
            </Link>
            <Link
              href="/projects"
              className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white"
            >
              Lihat Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
