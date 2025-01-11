import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const TermsConditions = () => {
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
								Terms and Conditions
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
							Welcome to Qupid! By accessing or using our services, you agree to
							be bound by these Terms and Conditions. Please read them
							carefully. If you do not agree, you may not use Qupid.
						</p>
					</div>
					<div>
						<ul>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">1. Acceptance of Terms</h3>
								<p>
									1.1 These Terms and Conditions (the "Terms") govern your use
									of Qupid, a dating app operated by COVA Technology, located in
									Nigeria.
								</p>
								<p>
									1.2 By creating an account or using our services, you confirm
									that you are at least 18 years old and capable of entering
									into a legally binding agreement.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">2. User Obligations</h3>
								<p>
									2.1 You are responsible for maintaining the confidentiality of
									your account credentials and for all activities that occur
									under your account.
								</p>
								<p>
									2.2 You agree to provide accurate and truthful information
									when creating your profile.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">3. Your Content and Licensing</h3>
								<p>
									3.1 You own all of the content ("Your Content") you provide to
									Qupid.
								</p>
								<p>
									3.2 By creating an account, you grant Qupid a worldwide,
									perpetual, transferable, sub-licensable, royalty-free right
									and license to:
									<ul className="list-disc ml-4">
										<li>
											Host, store, use, copy, display, reproduce, adapt, edit,
											publish, translate, modify, reformat, incorporate into
											other works, advertise, distribute, and otherwise make
											available to the general public Your Content, including
											any information you authorize us to access from Facebook
											or other third-party sources (if applicable).
										</li>
										<li>
											Use Your Content in whole or in part, and in any format or
											medium currently known or developed in the future.
										</li>
									</ul>
								</p>
								<p>
									3.3 Qupid’s license to Your Content is non-exclusive, except
									that our license shall be exclusive with respect to derivative
									works created through use of our Services. For example, Qupid
									would have an exclusive license to screenshots of our Services
									that include Your Content.
								</p>
								<p>
									3.4 To prevent unauthorized use of Your Content outside of our
									Services, you authorize Qupid to act on your behalf concerning
									infringing uses of Your Content by other users or third
									parties.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">4. External Service Purchases</h3>

								<p>
									4.1 When making a purchase on the Service, you may have the
									option to pay through an External Service, such as with your
									Apple ID or Google Play account ("your External Service
									Account"). Your External Service Account will be charged for
									the purchase in accordance with
									<ul className="list-disc ml-4">
										<li>The terms disclosed to you at the time of purchase.</li>
										<li>
											The general terms applicable to your External Service
											Account.
										</li>
									</ul>
								</p>
								<p>
									4.2 Subscriptions automatically renew until you cancel. If
									your subscription was made through an External Service, you
									must manage the cancellation through your External Service
									Account.
								</p>
								<p>
									4.3 Some External Services may charge sales tax, depending on
									where you live. Tax rates and regulations may change over
									time.
								</p>
							</li>
						</ul>
					</div>
				</section>
			</section>
		</main>
	);
};
export default TermsConditions;
