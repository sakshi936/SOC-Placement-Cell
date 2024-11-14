import React from "react";
import { Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="flex justify-between items-center p-x py-4 bg-blue text-white fixed w-full z-[1000]">
			<div>
				<Target size={48} />
			</div>
			<div className="">
				<ul className="flex gap-10">
					<Link href="/">
						<li>Home</li>
					</Link>
					<Link href="/#about">
						<li>About</li>
					</Link>
					<Link href="/#records">
						<li>Recourds</li>
					</Link>
					<Link href="/#recruiters">
						<li>Recruiters</li>
					</Link>
					<Link href="/#alumni">
						<li>Allumani</li>
					</Link>
				</ul>
			</div>
			<div>
				<Link href="/login">
					<Button className="bg-white text-black">Login</Button>
				</Link>
			</div>
		</nav>
	);
};
