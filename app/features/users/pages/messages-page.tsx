import type { Route } from "./+types/messages-page";

export function meta({}: Route.MetaFunction) {
  return [
    { title: "메시지 - 만세력" },
    { name: "description", content: "내 메시지를 확인하세요" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    conversations: [],
  };
}

export default function MessagesPage({ loaderData }: Route.ComponentProps) {
  const { conversations } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">메시지</h1>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="space-y-4">
            {/* 대화 목록이 여기에 렌더링됩니다 */}
            {conversations.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                새로운 메시지가 없습니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
