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
    ...prefix("/submit", [
      index("features/products/pages/submit-product-page.tsx"),
    ]),
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
  ...prefix("/auth", [
    layout("features/auth/layouts/auth-layout.tsx", [
      route("/login", "features/auth/pages/login-page.tsx"),
      route("/signup", "features/auth/pages/signup-page.tsx"),
      ...prefix("/otp", [
        route("/start", "features/auth/pages/otp-start-page.tsx"),
        route("/complete", "features/auth/pages/otp-complete-page.tsx"),
      ]),
      ...prefix("/social/:provider", [
        route("/start", "features/auth/pages/social-start-page.tsx"),
        route("/complete", "features/auth/pages/social-complete-page.tsx"),
      ]),
    ]),
  ]),
  ...prefix("/community", [
    index("features/community/pages/community-page.tsx"),
    route("/:postId", "features/community/pages/post-page.tsx"),
    route("/submit", "features/community/pages/submit-post-page.tsx"),
  ]),
  ...prefix("/teams", [
    index("features/teams/pages/teams-page.tsx"),
    route("/:teamId", "features/teams/pages/team-page.tsx"),
    route("/submit", "features/teams/pages/submit-team-page.tsx"),
  ]),
  ...prefix("/my", [
    ...prefix("/dashboard", [
      index("features/users/pages/dashboard-page.tsx"),
      route("/ideas", "features/users/pages/dashboard-ideas-page.tsx"),
      route(
        "/products/:productId",
        "features/users/pages/dashboard-product-page.tsx"
      ),
    ]),
    route("/profile", "features/users/pages/my-profile-page.tsx"),
    route("/settings", "features/users/pages/settings-page.tsx"),
    route("/notifications", "features/users/pages/notifications-page.tsx"),
    layout("features/users/layouts/messages-layout.tsx"),
    ...prefix("/messages", [
      index("features/users/pages/messages-page.tsx"),
      route("/:messageId", "features/users/pages/message-page.tsx"),
    ]),
  ]),
  layout("features/users/layouts/profile-layout.tsx", [
    ...prefix("/users/:username", [
      index("features/users/pages/profile-page.tsx"),
      route("/products", "features/users/pages/profile-products-page.tsx"),
      route("/posts", "features/users/pages/profile-posts-page.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
