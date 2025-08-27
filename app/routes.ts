import {
  type RouteConfig,
  index,
  route,
  prefix,
  layout,
} from "@react-router/dev/routes";

export default [
  /*FIXME: 각 페이지 라우트 추가 및 수정 후 cursor로 페이지 생성*/
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("manseryuk", [
      index("features/products/pages/manseryuk.tsx"),
      route("/yearly/:year", "features/products/pages/yearly-manseryuk.tsx"),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-manseryuk.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-manseryuk.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-manseryuk.tsx"
      ),
      route(
        "/:period",
        "features/products/pages/manseryuk-redirection-page.tsx"
      ),
    ]),
    ...prefix("my-manseryuk", [
      index("features/products/pages/my-manseryuk.tsx"),
      route("/yearly/:year", "features/products/pages/yearly-my-manseryuk.tsx"),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-my-manseryuk.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-my-manseryuk.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-my-manseryuk.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    ...prefix("/search", [index("features/products/pages/search.tsx")]),
    ...prefix("/submit", [index("features/products/pages/submit.tsx")]),
    ...prefix("/promote", [index("features/products/pages/promote.tsx")]),
    ...prefix("/:productId", [
      index("features/products/pages/product-redirect-page.tsx"),
      layout("features/products/layouts/product-overview-layout.tsx", [
        route("/overview", "features/products/pages/product-overview-page.tsx"),
        ...prefix("/reviews", [
          index("features/products/pages/product-reviews-page.tsx"),
        ]),
      ]),
    ]),
  ]),
  ...prefix("/ideas", [
    index("features/ideas/pages/ideas-page.tsx"),
    route("/:ideaId", "features/ideas/pages/idea-page.tsx"),
  ]),
  ...prefix("/jobs", [
    index("features/jobs/pages/jobs-page.tsx"),
    route("/:jobId", "features/jobs/pages/job-page.tsx"),
    route("/submit", "features/jobs/pages/submit-job-page.tsx"),
  ]),
] satisfies RouteConfig;
