import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "../components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | 사주 AI" },
    { name: "description", content: "사주 AI에 오신 것을 환영합니다." },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        {/* TODO1: 이거 어떻게 할지 고민 - 나의 만세력 or 사주 해석모델 */}

        <div>
          <h2 className="text-5xl font-bold">나의 만세력</h2>
          <p className="text-xl font-light text-foreground">
            나의 사주를 바탕으로 AI의 정확한 상담을 받아보세요.
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk">내 만세력 보기 &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard /*TODO5: PostCard를 Productcard로 바꿨고, 나중에 PostCard를 어떻게 쓸지 고려해야함*/
            productId="manseryuk"
            title="Discussion Title"
            description="Manseryuk Description"
            conversationCount={123}
            viewCount={123}
            upvoteCount={123}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {" "}
        {/* TODO2: GPT는 뭘로 바꿔야하지..? */}
        <div>
          <h2 className="text-5xl font-bold">사주AI</h2>
          <p className="text-xl font-light text-foreground">
            나의 사주를 바탕으로 AI의 정확한 상담을 받아보세요.
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/ideas">내 사주 상담 보기 &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            key={`idea-${index}`}
            ideaId={`idea-${index}`}
            title="지난 사주 상담 기록"
            viewCount={123}
            likeCount={122}
            timeAgo="12 hours ago"
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {" "}
        {/* TODO3: jobs는 뭘로 바꿔야하지..? */}
        <div>
          <h2 className="text-5xl font-bold">Latest Jobs</h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job with our latest jobs.
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/jobs">View all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <JobCard
            id="jobId"
            company="Tesla"
            companyLogo="https://github.com/Tesla.png"
            companyHq="San Francisco, CA"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-time"
            positionlocation="Remote"
            badges={["Full-time", "Remote"]}
            salary="$100,000 - $120,000"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {" "}
        {/* TODO4: team card는 뭘로 바꿔야하지..? */}
        <div>
          <h2 className="text-5xl font-bold">Find a team</h2>
          <p className="text-xl font-light text-foreground">
            join a team looking for a new member
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/products/manseryuk">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <TeamCard
            teamId="teamId"
            leaderUsername="nico"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            lookingFor={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
