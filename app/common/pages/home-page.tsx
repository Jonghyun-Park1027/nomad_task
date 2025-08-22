import type { Route } from "./+types/home-page";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "홈페이지",
    description: "React Router와 Tailwind CSS로 만든 홈페이지입니다."
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({ data }: Route.MetaFunction) {
  return [
    { title: data?.title || "홈페이지" },
    { name: "description", content: data?.description || "React Router 애플리케이션" }
  ];
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {loaderData?.title || "환영합니다"}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {loaderData?.description || "React Router와 Tailwind CSS로 만든 현대적인 웹 애플리케이션입니다."}
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🚀 빠른 개발
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              React Router와 TypeScript를 사용하여 빠르고 안전한 개발 환경을 제공합니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🎨 현대적인 UI
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tailwind CSS와 Shadcn UI를 활용하여 아름답고 반응형인 사용자 인터페이스를 구현합니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ⚡ 최적화
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Vite를 통한 빠른 빌드와 HMR을 지원하여 개발 생산성을 극대화합니다.
            </p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">시작해보세요</h2>
            <p className="text-xl mb-6 opacity-90">
              지금 바로 개발을 시작하고 멋진 애플리케이션을 만들어보세요!
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              시작하기
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
