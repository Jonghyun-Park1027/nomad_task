import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { HeroHeader } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";

export const meta = () => {
  return [
    { title: `IdeasGPT | wemake` },
    {
      name: "description",
      content: `IdeasGPT is a platform for generating ideas for your business.`,
    },
  ];
};

export default function IdeaPage() {
  return (
    <div className="space-y-20">
      <HeroHeader title="Idea # 12312312312" />
      <div className="max-w-screen-md mx-auto flex flex-col gap-10 items-center">
        <p className="italic text-center">
          "AI를 통해 나의 사주를 분석하고, 나의 사주를 바탕으로 아이디어를
          생성해주세요AI를 통해 나의 사주를 분석하고, 나의 사주를 바탕으로
          아이디어를 생성해주세요AI를 통해 나의 사주를 분석하고, 나의 사주를
          바탕으로 아이디어를 생성해주세요."
        </p>

        <div className="flex items-center gap-2">
          <EyeIcon className="size-4" />
          <span>123</span>
          <DotIcon className="size-4" />
          <span>12 hours ago</span>
          <DotIcon className="size-4" />
          <Button variant="outline">
            <HeartIcon className="w-4 h-4" />
            <span>12</span>
          </Button>
        </div>
        <Button size="lg">Claim idea →</Button>
      </div>
    </div>
  );
}
