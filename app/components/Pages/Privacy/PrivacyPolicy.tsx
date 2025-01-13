import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const PrivacyPolicy = () => {
	return (
		<main className="min-h-screen pt-20 lg:pt-28 px-2 lg:px-28">
			<div>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />

						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary">
								Privacy Policy
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<section className="mt-2">
				<section>
					<h2>Effective Date: November 16, 2024</h2>
				</section>
				<section>
					<div>
						<p>
							At Qupid, operated by COVA Technology, we take your privacy
							seriously. This Privacy Policy outlines how we collect, use,
							disclose, and safeguard your personal information when you use our
							app, website, and services (collectively referred to as the
							"Services"). By using our Services, you agree to the collection
							and use of information in accordance with this policy.
						</p>
					</div>
					<div>
						<ul className="list-decimal ml-5 sm:ml-10"></ul>
					</div>
				</section>
			</section>
		</main>
	);
};
export default PrivacyPolicy;
