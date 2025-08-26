import type { Route } from "../../../+types/categories";

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: []
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Categories - Manseryuk" },
    { name: "description", content: "Browse products by categories" }
  ];
}

export default function CategoriesPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category cards will be rendered here */}
      </div>
    </div>
  );
}
