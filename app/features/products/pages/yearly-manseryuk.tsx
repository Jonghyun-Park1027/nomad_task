import { data, isRouteErrorResponse } from "react-router";
import { DateTime } from "luxon";
import type { Route } from "./+types/yearly-manseryuk.tsx";
import { z } from "zod";
import { HeroHeader } from "~/common/components/hero";
import { ProductCard } from "../components/product-card.js";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button.js";
import ProductPagination from "~/common/components/product-pagination.js";

const paramsSchema = z.object({
  year: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
  });
  return [
    {
      title: `The Best manseryuk of ${date.toLocaleString({
        year: "numeric",
      })}| manseryuk`,
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
    year: parsedData.year,
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

  const today = DateTime.now().setZone("Asia/Seoul").startOf("year");
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

export default function YearlyManseryukPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
  });
  const previousYear = urlDate.minus({ years: 1 });
  const nextYear = urlDate.plus({ years: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("year"));
  return (
    <div className="space-y-5">
      <HeroHeader
        title={`Best Manseryuk of ${urlDate.toLocaleString({
          year: "numeric",
        })}`}
      />
      <div className="flex justify-center items-center gap-2">
        <Button variant="secondary" asChild>
          <Link to={`/products/manseryuk/yearly/${previousYear.year}`}>
            &larr;{" "}
            {previousYear.toLocaleString({
              year: "numeric",
            })}
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link to={`/products/manseryuk/yearly/${nextYear.year}`}>
              {nextYear.toLocaleString({
                year: "numeric",
              })}
              &rarr;
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
