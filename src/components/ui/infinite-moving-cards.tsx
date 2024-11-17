"use client";

import { cn } from "@/lib/utils";
// import { Link } from "lucide-react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "right",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		name: string;
		course: string;
		session: string;
		designation: string;
		company: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "right") {
				containerRef.current.style.setProperty("--animation-direction", "forwards");
			} else {
				containerRef.current.style.setProperty("--animation-direction", "reverse");
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div ref={containerRef} className={cn("scroller relative z-20  max-w-7xl overflow-hidden", className)}>
			<ul ref={scrollerRef} className={cn("flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap", start && "animate-scroll ", pauseOnHover && "hover:[animation-play-state:paused]")}>
				{items.map((item, idx) => (
					<li
						className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6"
						style={{
							// background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
							// background: "linear-gradient(90deg, rgba(6,32,100,1) 0%, rgba(2,29,101,1) 50%, rgba(1,23,79,1) 100%)",
							background: "linear-gradient(90deg, rgba(0,18,71,1) 14%, rgba(20,38,87,1) 51%, rgba(1,18,61,1) 100%)",
						}}
						key={idx}
					>
						<blockquote>
							<div aria-hidden="true" className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
							<span className=" relative z-20  leading-[1.6] text-gray-100">
								<p className="text-xl font-medium">{item.name}</p>
								<div className=" text-gray-400 flex flex-col gap-y-1 mt-3 text-sm">
									<p>
										Working at: <span className="text-gray-300">{item.company}</span>{" "}
									</p>
									<p>
										Designation: <span className="text-gray-300"> {item.designation}</span>
									</p>
									<p className="">School of Compuers, IPS Academy Indore</p>
									<div className="flex gap-x-10 text-sm">
										<p>Course: {item.course}</p>
										<p>Batch: {item.session}</p>
									</div>
								</div>
							</span>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
