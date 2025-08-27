import type { Route } from "./+types/submit-job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Submit Job | wemake` },
    {
      name: "description",
      content: "Submit a new job posting.",
    },
  ];
};

export default function SubmitJobPage() {
  return <div>SubmitJobPage</div>;
}
