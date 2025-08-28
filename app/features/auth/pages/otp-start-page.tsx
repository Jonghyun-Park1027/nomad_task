import { Form, Link } from "react-router";
import type { Route } from "./+types/otp-start-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "OTP Start - 사주AI" }];
};

export default function OtpStartPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-semibold">Login with OTP</h1>
        <p className="text-sm text-muted-foreground">
          We will send a 4-digit code to verify your phone number.
        </p>
        <Form className="w-full gap-4 space-y-4">
          <InputPair
            label="Email"
            id="email"
            description="Enter your email"
            placeholder="Enter your email"
            name="email"
            required
            type="email"
          />

          <Button type="submit" className="w-full">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}
