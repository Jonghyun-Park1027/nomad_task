import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { DotIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface PostCardProps {
  /** 포스트의 고유 ID */
  postId: string;
  /** 포스트 제목 */
  title: string;
  /** 작성자 이름 */
  authorName: string;
  /** 작성자 아바타 이미지 URL */
  authorAvatar?: string;
  /** 작성자 아바타 폴백 텍스트 */
  authorFallback?: string;
  /** 카테고리 */
  category: string;
  /** 작성 시간 */
  timeAgo: string;
  /** 포스트 링크 경로 (기본값: /products/{postId}) */
  href?: string;
  /** 포스트 확장 여부 */
  expanded?: boolean;
}

/**
 * 커뮤니티 포스트 정보를 카드 형태로 표시하는 컴포넌트
 *
 * 예시:
 * - 사주 관련 토론, 질문, 공유 등 다양한 포스트를 표시할 때 사용
 * - 작성자 정보, 카테고리, 작성 시간 등의 메타데이터를 함께 표시
 */
export function PostCard({
  postId,
  title,
  authorName,
  authorAvatar,
  category,
  timeAgo,
  expanded,
  href = `/products/${postId}`,
}: PostCardProps) {
  return (
    <Link to={href}>
      <Card
        className={cn(
          "bg-transparent hover:bg-card/50 transition-colors",
          expanded && "flex flex-col"
        )}
      >
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarImage src={authorAvatar} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="space-y-2 flex flex-col items-start">
            <CardTitle>{title}</CardTitle>
            <div className="flex flex-row text-sm leading-tight text-muted-foreground gap-2">
              <span>{authorName} on</span>
              <span>{category}</span>
              <DotIcon className="w-4 h-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">Reply →</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
