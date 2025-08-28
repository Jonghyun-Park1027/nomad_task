import type { Route } from "./+types/dashboard-page";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "대시보드 - 만세력" },
    { name: "description", content: "내 활동과 통계를 확인하세요" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    stats: {
      totalProducts: 0,
      totalIdeas: 0,
      totalTeams: 0,
    },
    recentActivity: [],
  };
}

export default function DashboardPage({ loaderData }: Route.ComponentProps) {
  const { stats, recentActivity } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">등록한 제품</h3>
          <p className="text-3xl font-bold text-blue-600">
            {stats.totalProducts}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">아이디어</h3>
          <p className="text-3xl font-bold text-green-600">
            {stats.totalIdeas}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">참여 팀</h3>
          <p className="text-3xl font-bold text-purple-600">
            {stats.totalTeams}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
        <div className="space-y-4">
          {/* 최근 활동 목록이 여기에 렌더링됩니다 */}
        </div>
      </div>
    </div>
  );
}
