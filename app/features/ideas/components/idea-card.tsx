import { Link } from "react-router";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  /** 아이디어의 고유 ID */
  ideaId: string;
  /** 아이디어 제목 */
  title: string;
  /** 조회 수 */
  viewCount: number;
  /** 좋아요 수 */
  likeCount: number;
  /** 작성 시간 */
  timeAgo: string;
  /** 아이디어 링크 경로 (기본값: /ideas/{ideaId}) */
  href?: string;
  /** Claim 링크 경로 (기본값: /ideas/{ideaId}/claim) */
  claimHref?: string;
  /** 아이디어가 클레임되었는지 여부 */
  claimed?: boolean;
}

/**
 * 아이디어 정보를 카드 형태로 표시하는 컴포넌트
 * 
 * 예시:
 * - 사주 상담 기록, 아이디어 제안, 토론 주제 등 다양한 아이디어를 표시할 때 사용
 * - 조회 수, 좋아요 수, 작성 시간 등의 통계 정보를 함께 표시
 */
export function IdeaCard({
  ideaId,
  title,
  viewCount,
  likeCount,
  timeAgo,
  claimed,
  href = `/ideas/${ideaId}`,
  claimHref = `/ideas/${ideaId}/claim`
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={href}>
          <CardTitle className="text-xl">
            <span className={cn(
              "px-2 py-1 rounded",
              claimed ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground" : ""
            )}>
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-2">
          <EyeIcon className="w-4 h-4" />
          <span>{viewCount}</span>
        </div>
      
        <DotIcon className="w-4 h-4" />
        <span>{timeAgo}</span>
      
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">
          <HeartIcon className="w-4 h-4" />
          {likeCount}
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={claimHref}>
              Claim idea →
            </Link>
          </Button>
        ):(
          <Button variant="outline"  className="cursor-not-allowed">
            <LockIcon className="w-4 h-4" />
            Claimed
          </Button>)}
      </CardFooter>
    </Card>
  );
}
