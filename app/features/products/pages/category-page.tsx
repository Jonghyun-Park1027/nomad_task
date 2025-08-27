import type { Route } from "./+types/category-page";
import { HeroHeader } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";
import { ProductCard } from "../components/product-card";

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: `Developer Tools - Manseryuk` },
    {
      name: "description",
      content: `Products in Developer Tools category`,
    },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <HeroHeader
        title={"Developer Tools"}
        description={"Tools for developer to build product faster"}
      />

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            productId={`manseryuk-${index}`}
            title={`Manseryuk ${index}`}
            description={`Manseryuk ${index}`}
            conversationCount={index}
            viewCount={index}
            upvoteCount={index}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
