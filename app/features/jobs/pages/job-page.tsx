import type { Route } from "./+types/job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Job Detail | wemake` },
    {
      name: "description",
      content: "Job details and application information.",
    },
  ];
};

export default function JobPage() {
  return <div>JobPage</div>;
}
