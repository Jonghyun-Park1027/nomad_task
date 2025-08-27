import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { ReviewCard } from "~/features/products/components/review-card";
import CreateReviewDialog from "../components/create-review-dialog";

export function meta() {
  return [
    {
      title: "Product Reviews",
      description: "Product Reviews",
    },
  ];
}

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 w-full max-w-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">10 Reviewed</h2>
          <DialogTrigger>
            <Button variant="secondary">Write a Review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <ReviewCard
              avatarSrc="https://github.com/shadcn.png"
              avatarFallback="CN"
              userName="John Doe"
              username="username"
              rating={5}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              date="10 days ago"
            />
          ))}
        </div>
        <CreateReviewDialog />
      </div>
    </Dialog>
  );
}
