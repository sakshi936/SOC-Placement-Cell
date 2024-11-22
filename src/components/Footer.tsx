import React from "react";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="bg-bgc text-white p-x p-y">
			<div className="flex justify-between items-start p-y">
				<Image src="/SOC-Logo.png" alt="SOC" height={100} width={100} className="w-[25rem] object-contain" />

				<div>
					<h3 className="font-semibold">Academics</h3>
					<ul>
						<li>Syllabus</li>
						<li>Schema</li>
						<li>Courses</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold">Contact us:</h3>

					<ul>
						<li>Phone:xxxxxxxx</li>
						<li>Email:abc@gmail.com</li>
					</ul>
				</div>

				{/* <div>
					<h3 className="text-xl font-semibold">Find us at: </h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.9540470933644!2d75.82394597534677!3d22.655501879432794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd2850d7a9c7%3A0x193ddde583795554!2sSchool%20Of%20Computers%2C%20Ips%20Academy!5e0!3m2!1sen!2sin!4v1730981533013!5m2!1sen!2sin"
						width="600"
						height="450"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div> */}
			</div>
		</footer>
	);
};
