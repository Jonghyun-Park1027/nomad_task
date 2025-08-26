import type { Route } from "../../../+types/promote";

export function loader({ request }: Route.LoaderArgs) {
  return {
    promotionPlans: []
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Promote Product - Manseryuk" },
    { name: "description", content: "Promote your product on Manseryuk" }
  ];
}

export default function PromotePage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Product</h1>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Promotion plans will be rendered here */}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Interested in promoting your product? Get in touch with us to learn more about our promotion options.
          </p>
          <a
            href="mailto:promote@manseryuk.com"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contact Sales Team
          </a>
        </div>
      </div>
    </div>
  );
}
