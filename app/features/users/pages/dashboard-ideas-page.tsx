import type { Route } from "./+types/dashboard-ideas-page";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "내 아이디어 - 만세력" },
    { name: "description", content: "내가 등록한 아이디어들을 관리하세요" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    ideas: [],
  };
}

export default function DashboardIdeasPage({
  loaderData,
}: Route.ComponentProps) {
  const { ideas } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">내 아이디어</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          새 아이디어 등록
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 아이디어 카드들이 여기에 렌더링됩니다 */}
      </div>
    </div>
  );
}
