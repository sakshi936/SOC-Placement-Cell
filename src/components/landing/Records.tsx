import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { placedStudentcards } from "@/data/data";

export const Records = () => {
	return (
		<section className="">
			<div className=" text-center">
				<h2 className="text-heading">Our Top Placed Students</h2>
				<FocusCards cards={placedStudentcards} />
			</div>
		</section>
	);
};
