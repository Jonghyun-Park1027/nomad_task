import { HeroHeader } from "~/common/components/hero";
import type { Route } from "./+types/ideas-page";
import { IdeaCard } from "../components/idea-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `IdeaGPT | wemake` },
    {
      name: "description",
      content: "IdeasGPT is a platform for generating ideas for your business.",
    },
  ];
};

export default function IdeasPage() {
  return (
    <div className="space-y-10">
      <HeroHeader
        title="IdeasGPT"
        description="Generate ideas for your business"
      />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
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
    </div>
  );
}
