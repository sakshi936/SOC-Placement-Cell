"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { galleryImags, aboutContent } from "@/data/data";

export function About() {
	return (
		<div className="">
			<ImagesSlider className="h-screen" images={galleryImags}>
				<motion.div
					initial={{
						opacity: 0,
						y: -80,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.6,
					}}
					className="z-50 flex flex-col justify-center items-center px-20"
				>
					<div className="bg-black/40 p-16 rounded-3xl flex flex-col justify-center gap-y-10">
						<motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
							{aboutContent.heading}
						</motion.p>
						<motion.p className="text-white  text-center bg-clip-text text-transparent ">
							<span className="text-xl ">{`${aboutContent.h2}`}</span>
							<p className=" text-sm mt-4 ">{aboutContent.p1}</p>
						</motion.p>
						<button className="px-4 py-2 backdrop-blur-sm border bg-blue-700/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative ">
							<span>Know more →</span>
							<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-600 to-transparent" />
						</button>
					</div>
				</motion.div>
			</ImagesSlider>
		</div>
	);
}

// export About;

// import { gallery } from "@/data/data";
// import { HeroParallax } from "@/components/ui/hero-parallax";

// export const About = () => {
// 	return (
// 		<section className=" pt-16">
// 			<div className=" h-[300vh] mt-10 ">
// 				<HeroParallax products={gallery} />
// 			</div>
// 		</section>
// 	);
// };
