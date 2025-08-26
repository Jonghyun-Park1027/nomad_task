import { data, isRouteErrorResponse } from "react-router";
import { DateTime } from "luxon";
import type { Route } from "./+types/weekly-manseryuk.tsx";
import { z } from "zod";
import { HeroHeader } from "~/common/components/hero";
import { ProductCard } from "../components/product-card.js";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button.js";
import ProductPagination from "~/common/components/product-pagination.js";

const paramsSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});
export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    weekNumber: Number(params.week),
  });
  return [
    {
      title: `The Best manseryuk of ${date.startOf("week").toLocaleString(DateTime.DATE_MED)} - ${date.endOf("week").toLocaleString(DateTime.DATE_MED)}| manseryuk`,
    },
  ];
};
export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        error_message: "Invalid params",
      },
      {
        status: 400,
      }
    );
  }
  const date = DateTime.fromObject({
    weekYear: parsedData.year,
    weekNumber: parsedData.week,
  }).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        error_message: "Invalid date",
      },
      {
        status: 400,
      }
    );
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        error_message: "Future date",
      },
      {
        status: 400,
      }
    );
  }
  return {
    ...parsedData,
  };
};

export default function WeeklyManseryukPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });
  const previousWeek = urlDate.minus({ weeks: 1 });
  const nextWeek = urlDate.plus({ weeks: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("week"));
  return (
    <div className="space-y-5">
      <HeroHeader
        title={`The Best Manseryuk of ${urlDate.startOf("week").toLocaleString(DateTime.DATE_SHORT)} - ${urlDate.endOf("week").toLocaleString(DateTime.DATE_SHORT)}`}
      />
      <div className="flex justify-center items-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/manseryuk/weekly/${previousWeek.year}/${previousWeek.weekNumber}`}
          >
            &larr; {previousWeek.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/manseryuk/weekly/${nextWeek.year}/${nextWeek.weekNumber}`}
            >
              {nextWeek.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            productId={`manseryuk-${index}`}
            title={`Manseryuk ${index}`}
            description={`Manseryuk ${index}`}
            conversationCount={index}
            viewCount={index}
            upvoteCount={index}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error))
    return (
      <div>
        {error.data.error_message}/{error.status}
      </div>
    );
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
