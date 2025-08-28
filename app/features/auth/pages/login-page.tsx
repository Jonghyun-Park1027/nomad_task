import { Form, Link } from "react-router";
import type { Route } from "./+types/login-page";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import AuthButton from "../components/auth-button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login - 사주AI" }];
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <Button variant="ghost" className="absolute top-8 right-8" asChild>
        <Link to="/auth/signup">Signup</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
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
            label="Password"
            id="password"
            description="Enter your password"
            placeholder="Enter your password"
            name="password"
            required
            type="password"
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </Form>
        <AuthButton />
      </div>
    </div>
  );
}
