import { HeroHeader } from "~/common/components/hero";
import type { Route } from "./+types/submit-job-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";
import { Button } from "~/common/components/ui/button";

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
  return (
    <div>
      <HeroHeader
        title="Submit a Job"
        description="Submit a new job posting."
      />
      <Form className="max-w-screen-2xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-3 gap-10">
          <InputPair
            label="Position"
            description="(40 characters max)"
            name="position"
            id="position"
            required
            placeholder="Software Engineer"
            maxLength={40}
          />
          <InputPair
            label="Overview"
            description="(400 characters max)"
            name="overview"
            id="overview"
            required
            textArea
            placeholder="A brief overview of the job"
            maxLength={400}
          />
          <InputPair
            label="Responsibilities"
            description="(400 characters max, comma separated)"
            name="responsibilities"
            id="responsibilities"
            required
            textArea
            placeholder="Responsibility 1, Responsibility 2, Responsibility 3"
            maxLength={400}
          />
          <InputPair
            label="Qualifications"
            description="(400 characters max, comma separated)"
            name="qualifications"
            id="qualifications"
            required
            textArea
            placeholder="Qualification 1, Qualification 2, Qualification 3"
            maxLength={400}
          />
          <InputPair
            label="Benefits"
            description="(400 characters max, comma separated)"
            name="benefits"
            id="benefits"
            required
            textArea
            placeholder="Benefit 1, Benefit 2, Benefit 3"
            maxLength={400}
          />
          <InputPair
            label="Skills"
            description="(40 characters max)"
            name="skills"
            id="skills"
            required
            textArea
            placeholder="Skill 1, Skill 2, Skill 3"
            maxLength={40}
          />
          <InputPair
            label="Company Name"
            description="(40 characters max)"
            name="companyName"
            id="companyName"
            required
            placeholder="Company Name"
            maxLength={40}
          />
          <InputPair
            label="Company Logo URL"
            description="(40 characters max)"
            name="companyLogoUrl"
            id="companyLogoUrl"
            required
            placeholder="https://example.com/logo.png"
          />
          <InputPair
            label="Company Location"
            description="(40 characters max)"
            name="location"
            id="location"
            maxLength={40}
            required
            placeholder="Remote"
          />
          <InputPair
            label="Apply URL"
            description="(40 characters max)"
            name="applyUrl"
            id="applyUrl"
            maxLength={40}
            required
            placeholder="https://example.com/apply"
          />
          <SelectPair
            label="Job Type"
            name="jobType"
            required
            placeholder="Select a job type"
            options={JOB_TYPES.map((type) => ({
              label: type.label,
              value: type.value,
            }))}
            description="The type of job"
          />
          <SelectPair
            label="Job Location"
            name="jobLocation"
            required
            placeholder="Select a job location"
            options={LOCATION_TYPES.map((location) => ({
              label: location.label,
              value: location.value,
            }))}
            description="The location of the job"
          />
          <SelectPair
            label="Salary Range"
            name="salaryRange"
            required
            placeholder="Select a salary range"
            options={SALARY_RANGES.map((range) => ({
              label: range,
              value: range,
            }))}
            description="The salary range of the job"
          />
        </div>
        <Button type="submit" className="w-full mt-10 max-w-sm ">
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}
