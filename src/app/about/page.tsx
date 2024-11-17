"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { galleryImags, aboutContent } from "@/data/data";

function page() {
	return (
		<div>
			<ImagesSlider className="h-[40rem] mt-20" images={galleryImags}>
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
					<div className="bg-black/40 p-16 rounded-3xl flex flex-col justify-center ">
						<motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
							{aboutContent.heading}
						</motion.p>
						<motion.p className="text-white  text-center bg-clip-text text-transparent py-4 ">
							<span className="text-xl ">{aboutContent.h2}</span>
							<p className="mt-5 text-sm ">{aboutContent.p1}</p>
							{/* <p className="text-sm ">{aboutContent.p2}</p> */}
						</motion.p>
						<button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
							<span>Know more →</span>
							<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
						</button>
					</div>
				</motion.div>
			</ImagesSlider>
		</div>
	);
}

export default page;
