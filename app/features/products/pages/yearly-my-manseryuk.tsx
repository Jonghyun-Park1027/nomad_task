import type { Route } from "../../../+types/products.my-manseryuk.yearly.$year";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year } = params;
  
  return {
    year,
    yearlyMyData: []
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Yearly My Manseryuk - Products" },
    { name: "description", content: "Your yearly Manseryuk data" }
  ];
}

export default function YearlyMyManseryukPage({ loaderData, actionData }: Route.ComponentProps) {
  const { year, yearlyMyData } = loaderData;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Yearly My Manseryuk - {year}</h1>
      <div className="space-y-6">
        {/* Yearly personal data will be rendered here */}
      </div>
    </div>
  );
}
