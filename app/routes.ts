import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    route("color-test", "common/pages/color-test.tsx"),
] satisfies RouteConfig;
