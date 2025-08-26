import type { Route } from "../../../+types/categories.$category";

export function loader({ request, params }: Route.LoaderArgs) {
  const { category } = params;
  
  return {
    category,
    categoryProducts: []
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Category - Manseryuk" },
    { name: "description", content: "Products in this category" }
  ];
}

export default function CategoryPage({ loaderData, actionData }: Route.ComponentProps) {
  const { category, categoryProducts } = loaderData;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Category: {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category products will be rendered here */}
      </div>
    </div>
  );
}
