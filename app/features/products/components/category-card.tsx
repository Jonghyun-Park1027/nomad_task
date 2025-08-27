import { Link } from "react-router";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { ChevronRightIcon } from "lucide-react";

interface CategoryCardProps {
  /** 카테고리 ID - URL 경로에 사용됩니다 */
  categoryId: string;
  /** 카테고리 이름 - 카드 제목으로 표시됩니다 */
  name: string;
  /** 카테고리 설명 - 카드 설명으로 표시됩니다 */
  description: string;
}

/**
 * CategoryCard 컴포넌트
 *
 * 카테고리 정보를 받아서 클릭 가능한 카드 형태로 표시합니다.
 *
 * @example
 * ```tsx
 * <CategoryCard
 *   categoryId="electronics"
 *   name="전자제품"
 *   description="스마트폰, 노트북, 태블릿 등"
 * />
 * ```
 */
export function CategoryCard({
  categoryId,
  name,
  description,
}: CategoryCardProps) {
  return (
    <Link to={`/products/categories/${categoryId}`} className="block">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {name} <ChevronRightIcon className="size-4" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
