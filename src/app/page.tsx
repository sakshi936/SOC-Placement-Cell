// import Image from "next/image";
// import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/landing/About";
import { Records } from "@/components/landing/Records";
import { Recruiters } from "@/components/landing/Recruiters";
import { Allumani } from "@/components/landing/Allumani";
import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";

export default function Home() {
	return (
		<main className=" flex flex-col gap-y-10">
			<SideBar />
			<div className="h-screen">
				<Navbar />
				<div id="about" className="grow">
					<About />
				</div>
			</div>
			<div id="records" className="mt-20">
				<Records />
			</div>
			<div id="recruiters" className=" ">
				<Recruiters />
			</div>
			<div id="alumni" className="px-4">
				<Allumani />
			</div>
			<div>
				<Footer />
			</div>
		</main>
	);
}
