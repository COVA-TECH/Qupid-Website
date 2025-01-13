import {
	type RouteConfig,
	index,
	route,
	layout,
} from "@react-router/dev/routes";

export default [
	layout("layouts/Base.tsx", [
		index("routes/home.tsx"),
		route("about", "routes/about.tsx"),
		route("terms-and-conditions", "routes/terms.tsx"),
		route("help-and-support", "routes/helpAndSupport.tsx"),
		route("cookie-policy", "routes/cookiePolicy.tsx"),
		route("safety-tips", "routes/safety.tsx"),
		route("privacy-policy", "routes/privacy.tsx"),
	]),
] satisfies RouteConfig;
