import { gallery } from "@/data/data";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const About = () => {
	return (
		<section className=" pt-16">
			<div className=" h-[300vh] mt-10 ">
				<HeroParallax products={gallery} />
			</div>
		</section>
	);
};
