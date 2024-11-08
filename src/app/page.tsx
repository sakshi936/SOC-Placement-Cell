// import Image from "next/image";
// import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/landing/About";
import { Records } from "@/components/landing/Records";
import { Recruiters } from "@/components/landing/Recruiters";
import { Allumani } from "@/components/landing/Allumani";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<main>
			<Navbar />
			<About />
			<Records />
			<Recruiters />
			<Allumani />
			<Footer />
		</main>
	);
}
