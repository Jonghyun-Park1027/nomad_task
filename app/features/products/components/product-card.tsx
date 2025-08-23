import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { MessageCircleIcon, EyeIcon, ChevronUpIcon } from "lucide-react";
//TODO: 카드 컴포넌트는 지난 대화 저장한 카드로 사용
interface ProductCardProps {
  /** 제품의 고유 ID */
  productId: string;
  /** 제품 제목 */
  title: string;
  /** 제품 설명 */
  description: string;
  /** 대화 수 */
  conversationCount: number;
  /** 조회 수 */
  viewCount: number;
  /** 추천 수 */
  upvoteCount: number;
  /** 제품 링크 경로 (기본값: /products/{productId}) */
  href?: string;
}

/**
 * 제품 정보를 카드 형태로 표시하는 컴포넌트
 * 
 * 예시:
 * - 만세력 계산기, 사주 분석 도구 등 다양한 제품을 표시할 때 사용
 * - 각 제품의 통계 정보(대화 수, 조회 수, 추천 수)를 함께 표시
 */
export function ProductCard({
  productId,
  title,
  description,
  conversationCount,
  viewCount,
  upvoteCount,
  href = `/products/${productId}`
}: ProductCardProps) {
  return (
    <Link to={href}>
      <Card className="w-full flex flex-row items-center justify-between p-3 bg-transparent hover:bg-card/100">
        <CardHeader className="flex-auto">
          <CardTitle className="text-xl font-semibold leading-none tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-muted-foreground text-xs">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{conversationCount}</span>
            </div>
            
            <div className="flex items-center gap-px text-muted-foreground text-xs">
              <EyeIcon className="w-4 h-4" />
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0 justify-end flex items-center h-14 w-auto">
          <div className="flex items-center justify-center">
            <Button variant="outline" className="flex h-14 flex-col cursor-pointer justify-center items-center w-full p-1">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{upvoteCount}</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
