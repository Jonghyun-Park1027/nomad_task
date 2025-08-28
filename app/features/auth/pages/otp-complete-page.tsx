import { Form, Link } from "react-router";
import type { Route } from "./+types/otp-complete-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "OTP Complete - 사주AI" }];
};

export default function OtpCompletePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-semibold">Confirm OTP</h1>
        <p className="text-sm text-muted-foreground">
          Enter the 4-digit code sent to your email.
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
          <InputPair
            label="OTP"
            id="otp"
            description="Enter the 4-digit code sent to your email"
            placeholder="Enter the 4-digit code"
            name="otp"
            required
            type="number"
          />

          <Button type="submit" className="w-full">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}
