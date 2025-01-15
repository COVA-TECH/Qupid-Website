const Events = () => {
	return (
		<section className="">
			<h2 className="text-center font-bold  text-3xl sm:text-5xl  mb-5 sm:mb-10">
				Events Near You—Discover Local Experiences
			</h2>
			<div className="flex flex-col sm:flex-row">
				<div className="w-full">
					<div className="flex flex-col justify-between">
						<h3 className="font-semibold text-xl">Live Music Performances</h3>
						<p>
							Experience electrifying live concerts and intimate acoustic
							sessions featuring your favorite artists and bands.
						</p>
					</div>
					<div className="flex flex-col justify-between">
						<h3 className="font-semibold text-xl">
							Exclusive Celebrity Hangouts
						</h3>
						<p>
							Rub shoulders with stars at exclusive celebrity-hosted events,
							offering unique opportunities to mingle and connect.
						</p>
					</div>
				</div>
				<div className="w-full"></div>
				<div className="w-full">
					<div className="flex flex-col justify-between">
						<h3 className="font-semibold text-xl">Themed Parties</h3>
						<p>
							Step into exciting, themed gatherings like Friday music parties,
							all-white nights, or retro-inspired evenings for fun and
							connection.
						</p>
					</div>
					<div className="flex flex-col justify-between">
						<h3 className="font-semibold text-xl">Ladies-Only Socials</h3>
						<p>
							Unwind with like-minded women at special gatherings designed just
							for you, like spa nights, fitness classes, or wine tastings.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Events;
