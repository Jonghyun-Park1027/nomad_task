import { HeroHeader } from "~/common/components/hero";
import type { Route } from "./+types/category-page";
import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Category - Manseryuk" },
    { name: "description", content: "Products in this category" },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-5">
      <HeroHeader title="Category" description="Products in this category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            categoryId={`categoryId-${index}`}
            name="Category Name"
            description="Category Description"
          />
        ))}
      </div>
    </div>
  );
}
