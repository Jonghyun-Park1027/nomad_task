import { z } from "zod";
import type { Route } from "./+types/search.tsx";
import { HeroHeader } from "~/common/components/hero.js";
import ProductPagination from "~/common/components/product-pagination.js";
import { ProductCard } from "../components/product-card";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input.js";
import { Button } from "~/common/components/ui/button.js";
import { SearchIcon } from "lucide-react";

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search - Manseryuk" },
    { name: "description", content: "Search for products on Manseryuk" },
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  console.log(parsedData);
  if (!success) {
    throw new Error("Invalid query");
  }
  console.log(parsedData);
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <HeroHeader
        title="Search"
        description="Search for products on Manseryuk"
      />
      <Form className="flex justify-center max-w-screen-sm items-center mx-auto gap-2">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">
          <SearchIcon className="w-4 h-4" />
        </Button>
      </Form>
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
