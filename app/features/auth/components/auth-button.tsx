import { Button } from "~/common/components/ui/button";
import { Separator } from "~/common/components/ui/separator";
import { GithubIcon, LockIcon, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router";

export default function AuthButton() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full flex flex-col gap-2 items-center">
        <Separator className="w-full" />
        <span className="text-xs text-muted-foreground uppercase font-light">
          Or continue with
        </span>
        <Separator className="w-full" />
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/kakao/start">
            <MessageCircleIcon className="size-4" />
            Kakao Talk
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/github/start">
            <GithubIcon className="size-4" fill="currentColor" />
            Github
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/otp/start">
            <LockIcon className="size-4" />
            OTP
          </Link>
        </Button>
      </div>
    </div>
  );
}
