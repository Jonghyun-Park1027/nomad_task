import type { Route } from "./+types/submit";
import { HeroHeader } from "~/common/components/hero";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";
import InputPair from "~/common/components/input-pair";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";
import { useState } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product - Manseryuk" },
    { name: "description", content: "Submit your product to Manseryuk" },
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <HeroHeader
        title="Submit Product"
        description="Submit your product to Manseryuk"
      />
      <Form className="grid grid-cols-2 max-w-screen-lg mx-auto gap-10">
        <div className="space-y-4">
          <InputPair
            label="Name"
            description="This is the name of your product"
            name="name"
            id="name"
            required
            placeholder="A concise description of your product"
          />
          <InputPair
            label="Tagline"
            description="This is the tagline of your product"
            name="tagline"
            id="tagline"
            required
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="This is the URL of your product"
            name="url"
            id="url"
            required
            placeholder="https://example.com"
          />
          <InputPair
            textArea={true}
            label="Description"
            description="This is the description of your product"
            name="description"
            id="description"
            required
            placeholder="A detailed description of your product"
          />

          <SelectPair
            label="Category"
            description="This is the category of your product"
            name="category"
            required
            placeholder="Select a category"
            options={[
              { label: "Category 1", value: "category1" },
              { label: "Category 2", value: "category2" },
              { label: "Category 3", value: "category3" },
            ]}
          />
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          {icon ? (
            <div className="size-40 rounded-xl shadow-xl overflow-hidden">
              <img src={icon} className="object-cover w-full h-full" />
            </div>
          ) : null}
          <Label className="flex flex-col items-start gap-2">
            Logo
            <small className="text-muted-foreground">
              This is the logo of your product
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="icon"
          />
          <div className="flex flex-col text-xs">
            <span className="text-muted-foreground">
              Recommended size: 100x100px
            </span>
            <span className="text-muted-foreground">
              Supported formats: PNG, JPEG, GIF, SVG
            </span>
            <span className="text-muted-foreground">
              Maximum file size: 1MB
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
}
