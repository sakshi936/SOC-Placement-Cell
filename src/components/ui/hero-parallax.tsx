"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data/data";

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
	const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
	const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
	const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
	const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
	const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-600, 400]), springConfig);
	return (
		<div ref={ref} className="mt-3  h-[300vh] py-20 px-0 mx-0 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				{/* <h1 className="text-6xl font-bold text-black">SOC Placement-Cell</h1> */}
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-5 ">
					{firstRow.map((product) => (
						<ProductCard product={product} translate={translateX} key={product.title} />
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-5 space-x-5 ">
					{secondRow.map((product) => (
						<ProductCard product={product} translate={translateXReverse} key={product.title} />
					))}
				</motion.div>
				{/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
					{thirdRow.map((product) => (
						<ProductCard product={product} translate={translateX} key={product.title} />
					))}
				</motion.div> */}
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl relative mx-auto py-4 px-10 w-full  left-0 top-0  flex flex-col justify-center items-center bg-white/5">
			<h1 className="text-6xl font-bold text-black">{aboutContent.heading}</h1>
			<p className="  mt-8 text-center font-medium ">{aboutContent.content}</p>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-96 w-[30rem] relative flex-shrink-0"
		>
			<Link href={product.link} className="block group-hover/product:shadow-2xl ">
				<Image src={product.thumbnail} height="600" width="600" className="object-cover object-left-top absolute h-full w-full inset-0" alt={product.title} />
			</Link>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
		</motion.div>
	);
};
