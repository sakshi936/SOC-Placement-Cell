import { HeroParallax } from "@/components/ui/hero-parallax";
import { gallery } from "@/data/data";
export default function page() {
	return (
		<section className=" flex flex-col h-[200px] ">
			<div className=" h-[300vh] mt-10">
				<HeroParallax products={gallery} />
			</div>
		</section>
	);
}
