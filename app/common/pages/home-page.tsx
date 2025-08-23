import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export const meta : MetaFunction = () => {
  return [
    { title: "Home | 사주 AI" },
    { name: "description", content: "사주 AI에 오신 것을 환영합니다." },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold">사주AI 시작페이지</h2>
          <p className="text-xl font-light text-foreground">사주 AI는 사주를 분석하고 추천을 해주는 서비스입니다.</p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk">
              만세력 계산기 &rarr;
            </Link>
          </Button>
        </div>
        
          { Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
            productId="productId"
            title="만세력 계산기"
            description="만세력 계산 서비스"
            conversationCount={12}
            viewCount={12}
            upvoteCount={120}
          />
          ))}
      </div>
      <div className="grid grid-cols-3 gap-4"> 
        {/* TODO1: 이거 어떻게 할지 고민 - 나의 만세력 or 사주 해석모델 */}
        <div>
          <h2 className="text-5xl font-bold">나의 만세력</h2> 
          <p className="text-xl font-light text-foreground">
            나의 사주를 바탕으로 AI의 정확한 상담을 받아보세요.
            </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk">
              내 만세력 보기 &rarr;
            </Link>
          </Button>
        </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <PostCard
          postId="manseryuk"
          title="Discussion Title"
          authorName="Park"
          authorAvatar="https://github.com/apple.png"
          category="Productivity"
          timeAgo="12 hours ago"
        />
      ))}
      </div>
      <div className="grid grid-cols-3 gap-4"> {/* TODO2: GPT는 뭘로 바꿔야하지..? */}
        
        <div>
          <h2 className="text-5xl font-bold">사주AI</h2> 
          <p className="text-xl font-light text-foreground">
            나의 사주를 바탕으로 AI의 정확한 상담을 받아보세요.
            </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk">
              내 사주 상담 보기 &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
                 <IdeaCard
           ideaId="ideaId"
           title="지난 사주 상담 기록"
           viewCount={123}
           likeCount={122} 
           timeAgo="12 hours ago"
           claimed={index % 2 === 0}
         />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4"> {/* TODO3: jobs는 뭘로 바꿔야하지..? */}
        
        <div>
          <h2 className="text-5xl font-bold">Latest Jobs</h2> 
          <p className="text-xl font-light text-foreground">
            Find your dream job with our latest jobs.
            </p>
          <Button variant="link"  className="text-lg p-0" asChild>
            <Link to="/products/manseryuk">
              View all jobs &rarr;  
            </Link>
          </Button>
        </div>
       <Card className = "bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle>Job Title</CardTitle>
          <CardDescription>Job Description</CardDescription>
        </CardHeader>
       </Card>
      </div>
    </div>
  );
}
