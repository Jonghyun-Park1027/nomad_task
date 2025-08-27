import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/common/components/ui/dialog";
import { Label } from "~/common/components/ui/label";

export default function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoverStar, setHoverStar] = useState<number>(0);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">
          What do you think about this product?
        </DialogTitle>
        <DialogDescription>
          Your review will help other customers make a better decision.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-10">
        <div className="flex justify-between">
          <Label className="flex flex-col gap-1 items-start">
            Rating{" "}
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => setHoverStar(star)}
                onMouseLeave={() => setHoverStar(0)}
              >
                <StarIcon
                  className="size-5 text-yellow-500"
                  fill={
                    hoverStar >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  type="radio"
                  value="star"
                  name="rating"
                  required
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>
        <InputPair
          label="Review"
          textArea
          placeholder="Tell us more about your experience"
          description="Maximum 1000 characters"
          name="review"
          required
        />
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}
