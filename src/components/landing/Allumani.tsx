"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from "../ui/button";
import Link from "next/link";
import { allumniesDetails } from "@/data/data";

export function Allumani() {
	return (
		<div className=" rounded-md flex flex-col gap-y-10 antialiased  items-center justify-center relative overflow-hidden">
			<h2 className="text-heading ">Allumani</h2>
			<div className="bg-slate-100 py-10 ">
				<InfiniteMovingCards items={allumniesDetails} direction="right" speed="slow" />
			</div>
			<Link href="/allumni" className="flex justify-center items-center">
				<Button>See More...</Button>
			</Link>
		</div>
	);
}
