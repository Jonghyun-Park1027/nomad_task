import { HeroHeader } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/submit-post-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "글쓰기 - 커뮤니티" },
    { name: "description", content: "커뮤니티에 새로운 포스트를 작성해보세요" },
  ];
};

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <HeroHeader
        title="글쓰기"
        description="커뮤니티에 새로운 포스트를 작성해보세요"
      />
      <Form className="flex flex-col gap-10 mx-auto max-w-screen-md">
        <InputPair
          label="제목"
          name="title"
          id="title"
          description="제목은 100자 이내로 작성해주세요"
          required
          placeholder="제목을 입력해주세요"
        />
        <SelectPair
          label="카테고리"
          name="category"
          description="카테고리를 선택해주세요"
          placeholder="카테고리를 선택해주세요"
          required
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Programming", value: "programming" },
            { label: "Design", value: "design" },
            { label: "Marketing", value: "marketing" },
            { label: "Business", value: "business" },
            { label: "Other", value: "other" },
          ]}
        />
        <InputPair
          label="Content"
          name="content"
          id="content"
          description="내용은 1000자 이내로 작성해주세요"
          required
          placeholder="내용을 입력해주세요"
          textArea
        />
        <Button className="max-w-xs mx-auto">Creation Discussion</Button>
      </Form>
    </div>
  );
}
