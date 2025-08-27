import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface ReviewCardProps {
  avatarSrc?: string;
  avatarFallback: string;
  userName: string;
  username: string;
  rating: number;
  content: string;
  date: string;
}

export function ReviewCard({
  avatarSrc,
  avatarFallback,
  userName,
  username,
  rating,
  content,
  date,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div>
        <Avatar>
          <AvatarImage src={avatarSrc} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{userName}</h4>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
        <div className="flex text-yellow-500">
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} className="size-6" fill="currentColor" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{content}</p>
      <span className="text-sm text-muted-foreground">{date}</span>
    </div>
  );
}
