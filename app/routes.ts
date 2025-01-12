import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("terms-and-conditions", "routes/terms.tsx"),
	route("help-and-support", "routes/helpAndSupport.tsx"),
] satisfies RouteConfig;
