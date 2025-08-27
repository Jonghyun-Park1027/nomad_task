import { HeroHeader } from "~/common/components/hero";
import { ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import type { Route } from "./+types/product-overview-page";

export function meta() {
  return [
    { title: `제품 개요 | Manseryuk` },
    {
      name: "description",
      content: `제품의 상세 정보와 개요를 확인하세요`,
    },
  ];
}

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-2.5">
        <h3 className="text-lg font-bold">What is this product?</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div className="space-y-2.5">
        <h3 className="text-lg font-bold">How does it work? </h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
}
