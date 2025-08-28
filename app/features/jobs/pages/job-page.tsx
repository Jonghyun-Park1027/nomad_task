import { Badge } from "~/common/components/ui/badge";
import type { Route } from "./+types/job-page";
import { DotIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

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
  return (
    <div>
      <div
        className="bg-gradient-to-tr from-primary/80 to-primary/10 h-60
       w-full rounded-lg"
      ></div>
      <div className="grid grid-cols-6 -mt-20 gap-20 items-start">
        <div className="col-span-4 space-y-10">
          <div>
            <div className="size-40 bg-white rounded-full  overflow-hidden relative left-10">
              <img
                src="https://github.com/facebook.png"
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold">Software Engineer</h1>
            <h4 className="text-lg text-muted-foreground">Meta Inc.</h4>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">Full-time</Badge>
            <Badge variant="secondary">Remote</Badge>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold">Overview</h4>
            <p className="text-lg">
              We are looking for a software engineer with 3 years of experience
              in React and Node.js.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold">Responsibilities</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                "Design and implement scalable and efficient backend systems",
                "Collaborate with frontend developers to build seamless user experiences",
                "Optimize database queries and improve performance",
                "Implement security measures to protect sensitive data",
                "Troubleshoot and debug issues to ensure smooth operation",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold">Qualifications</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                "Bachelor's degree in Computer Science or related field",
                "3+ years of experience in software development",
                "Strong understanding of React and Node.js",
                "Experience with database optimization and performance tuning",
                "Familiarity with cloud platforms (AWS, GCP, Azure)",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold">Benefits</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                "Competitive salary and benefits",
                "Flexible working hours and remote work options",
                "Professional development opportunities",
                "Collaborative and supportive team environment",
                "Troubleshoot and debug issues to ensure smooth operation",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold">Skills</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Git",
                "Docker",
                "AWS",
                "GCP",
                "Azure",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 mt-32 border rounded-lg sticky top-20 space-y-10 p-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">$100,000 - $120,000</span>
            <span className="text-lg text-muted-foreground">Salary Range</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Remote</span>
            <span className="text-lg text-muted-foreground">Location</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Full-time</span>
            <span className="text-lg text-muted-foreground">
              Employment Type
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg text-muted-foreground">
              Posted 2 days ago
            </span>
            <DotIcon className="w-4 h-4" />
            <span className="text-lg text-muted-foreground">395 views</span>
          </div>
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
