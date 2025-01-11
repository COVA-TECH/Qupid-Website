import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("terms", "routes/terms.tsx"),
] satisfies RouteConfig;
