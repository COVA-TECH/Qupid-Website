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
						<ul className="list-decimal ml-5 sm:ml-10">
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Information We Collect</h3>
								<h4>1.1 Personal Information</h4>
								<p>
									When you create an account or interact with our Services, we
									collect the following personal information:
								</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li>
										Account Information: Name, email address, password, date of
										birth (to ensure you are 18+), and profile details (e.g.,
										bio, photos).
									</li>
									<li>
										Communication: Messages, interactions, and any support
										inquiries you send us.
									</li>
									<li>
										Payment Information: Credit card details or other payment
										methods if you subscribe to paid features or make purchases
										on our platform.
									</li>
								</ul>

								<h4>1.2 Usage Data</h4>
								<p>
									We may automatically collect information about your usage of
									the Services, including:
								</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li>
										Device information (type, operating system, device
										identifiers)
									</li>
									<li>
										Log data (IP address, browser type, browser version, pages
										visited, time spent on pages)
									</li>
									<li>
										Location data (if location-based features are enabled)
									</li>
								</ul>
								<h4>1.3 Third-Party Information</h4>
								<p>
									If you link your Qupid account to third-party services (e.g.,
									Facebook, Google), we may collect information such as your
									name, profile picture, email, and other information authorized
									by you and the third-party service.
								</p>
							</li>
						</ul>
					</div>
				</section>
			</section>
		</main>
	);
};
export default PrivacyPolicy;
