import { HeroHeader } from "~/common/components/hero";
import type { Route } from "./+types/promote";
import SelectPair from "~/common/components/select-pair";
import { Form } from "react-router";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote Product - Manseryuk" },
    { name: "description", content: "Promote your product on Manseryuk" },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod?.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;
  return (
    <div>
      <HeroHeader
        title="Promote Your Product"
        description="Promote your product on Manseryuk"
      />
      <Form className="max-w-sm mx-auto flex flex-col gap-10 items-center">
        <SelectPair
          label="Product"
          description="Select a product to promote"
          name="product"
          required
          placeholder="Select a product"
          options={[
            { label: "Product 1", value: "product1" },
            { label: "Product 2", value: "product2" },
            { label: "Product 3", value: "product3" },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full">
          <Label className="flex flex-col gap-1">
            Select a range of dates for promotion{" "}
            <small className="text-muted-foreground text-center ">
              Minimum duration is 3 days.
            </small>
          </Label>

          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <Button disabled={totalDays === 0}>
          Go to checkout (${totalDays * 20})
        </Button>
      </Form>
    </div>
  );
}
