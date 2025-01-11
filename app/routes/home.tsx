import type { Route } from "./+types/home";
import HomePage from "~/components/Sections/Home/Home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Qupid app" },
		{ name: "description", content: "Qupid app description" },
	];
}

export default function Home() {
	return (
		<>
			<HomePage />
		</>
	);
}
