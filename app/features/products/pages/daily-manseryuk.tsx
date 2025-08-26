import { data, isRouteErrorResponse } from "react-router";
import { DateTime } from "luxon";
import type { Route } from "./+types/daily-manseryuk.tsx";
import { z } from "zod";
import { HeroHeader } from "~/common/components/hero";
import { ProductCard } from "../components/product-card.js";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button.js";
import ProductPagination from "~/common/components/product-pagination.js";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
    day: Number(params.day),
  });
  return [
    {
      title: `The Best manseryuk of ${date.toLocaleString(DateTime.DATE_MED)}| manseryuk`,
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
  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");
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

export default function DailyManseryukPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject(loaderData);
  const previousDate = urlDate.minus({ days: 1 });
  const nextDate = urlDate.plus({ days: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));
  return (
    <div className="space-y-5">
      <HeroHeader
        title={`The best manseryuk of ${urlDate.toLocaleString(DateTime.DATE_MED)}`}
      />
      <div className="flex justify-center items-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/manseryuk/daily/${previousDate.year}/${previousDate.month}/${previousDate.day}`}
          >
            &larr; {previousDate.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/manseryuk/daily/${nextDate.year}/${nextDate.month}/${nextDate.day}`}
            >
              {nextDate.toLocaleString(DateTime.DATE_SHORT)} &rarr;
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
