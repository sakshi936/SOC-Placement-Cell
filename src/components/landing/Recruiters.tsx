import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { recruiters } from "@/data/data";

export const Recruiters = () => {
	return (
		<section className="flex justify-center items-center h-screen bg-bgc py-12">
			<div className="w-full flex flex-col gap-y-32">
				<h2 className="text-heading text-white text-center">Our Top Recruiters</h2>

				<div className=" w-full ">
					<div className=" grid grid-cols-5 gap-6">
						{recruiters.map((element) => (
							<>
								<div className=" flex justify-center  items-center">
									<Image src={element} alt="" height={200} width={200} className="" />
								</div>
							</>
						))}
					</div>
				</div>

				{/* <Link href="/recruiters" className="flex justify-center">
					<Button className="rounded-full p-5 bg-blue-900">See More...</Button>
				</Link> */}
			</div>
		</section>
	);
};
