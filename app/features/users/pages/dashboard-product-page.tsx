import type { Route } from "./+types/dashboard-product-page";

export function meta({ params }: Route.MetaFunction) {
  return [
    { title: "제품 관리 - 만세력" },
    { name: "description", content: "내 제품을 관리하고 수정하세요" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const { productId } = params;

  return {
    product: {
      id: productId,
      name: "샘플 제품",
      description: "제품 설명",
      status: "active",
    },
  };
}

export function action({ request, params }: Route.ActionArgs) {
  const { productId } = params;

  // 제품 수정 로직이 여기에 구현됩니다
  return {
    success: true,
    message: "제품이 성공적으로 수정되었습니다.",
  };
}

export default function DashboardProductPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { product } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">제품 관리: {product.name}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              제품 이름
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              defaultValue={product.name}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              제품 설명
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={product.description}
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              제품 수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
