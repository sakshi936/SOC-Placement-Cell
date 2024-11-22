"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from "../ui/button";
import Link from "next/link";
import { allumniesDetails } from "@/data/data";

export function Allumani() {
	return (
		<div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden ">
			<h2 className="text-heading ">Allumani</h2>
			<div className="py-10 bg-slate-50">
				<InfiniteMovingCards items={allumniesDetails} direction="left" speed="slow" />
			</div>
			{/* <Link href="/allmni" className="flex justify-center">
				<Button className="rounded-full p-5 bg-blue-900">See More...</Button>
			</Link> */}
		</div>
	);
}
