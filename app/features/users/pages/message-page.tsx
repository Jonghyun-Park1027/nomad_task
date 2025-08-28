import type { Route } from "./+types/message-page";

export function meta({ params }: Route.MetaFunction) {
  return [
    { title: "메시지 상세 - 만세력" },
    { name: "description", content: "메시지 대화를 확인하세요" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { messageId } = params;

  return {
    conversation: {
      id: messageId,
      participant: {
        username: "상대방",
        avatar: null,
      },
      messages: [],
    },
  };
}

export function action({ request, params }: Route.ActionArgs) {
  const { messageId } = params;

  // 메시지 전송 로직이 여기에 구현됩니다
  return {
    success: true,
    message: "메시지가 전송되었습니다.",
  };
}

export default function MessagePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { conversation } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b p-4">
          <h1 className="text-xl font-semibold">
            {conversation.participant.username}와의 대화
          </h1>
        </div>
        <div className="p-4 h-96 overflow-y-auto">
          <div className="space-y-4">
            {/* 메시지 목록이 여기에 렌더링됩니다 */}
            {conversation.messages.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                메시지가 없습니다.
              </p>
            )}
          </div>
        </div>
        <div className="border-t p-4">
          <form method="post" className="flex gap-2">
            <input
              type="text"
              name="message"
              placeholder="메시지를 입력하세요..."
              required
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              전송
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
