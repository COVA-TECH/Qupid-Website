export namespace Route {
	export interface LinksFunction {
		(): Array<{ rel: string; href: string; crossOrigin?: string }>;
	}
}
