import React from "react";
import Image from "next/image";
import Pill from "@/app/components/Pill";
import Link from "next/link";

const page = () => {
	return (
		<>
			<section className="flex justify-center">
				<div className="w-11/12 pl-3 mt-14">
					<h1 className="pt-7 text-5xl mb-9 font-normal">
						Tailwindcss Challenge
					</h1>
					<div className="mb-7 ">
						<p className="text-4xl">Purpose</p>
						<p className="my-3">
							An excerise to show the flexibility of the tailwindcss library.
						</p>
						<p className="my-3"></p>
					</div>
					<div className="mb-12">
						<p className="text-4xl">What does it do?</p>
						<p className="my-3">
							It demonstrates the use of tailwindcss to code the appearance of a
							mobile responsive testimonials page. As the size of the screen
							changes, the presentation adapts accordingly providing a smooth,
							impressive customer experience.
						</p>
						<p className="mb-3">
							It was a coding challenge as part of a course from
							https://scrimba.com/home.
						</p>
						<p>A wide range of tailwind properties are used, as follows:</p>
						<ul
							role="list"
							className="list-disc marker:text-blue-500 pl-7 mb-11"
						>
							<li>Typography</li>
							<li>Display and Position</li>
							<li>Flexbox</li>
							<li>Borders</li>
							<li>Layout</li>
							<li>Box shadow, opacity, fill, cursor, screen readers</li>
							<li>Modifiers: hover, focus etc.</li>
						</ul>
						<p className="mb-5 text-xl">Desktop</p>
						<div className="flex mt-5  justify-center">
							<Image
								alt="tailwindcss demo page"
								width={800}
								height={800}
								className=""
								src="/tailwind-cats.png"
							/>
						</div>
						<p className="my-5 text-xl">Mobile</p>
						<div className="flex mt-5  justify-center">
							<Image
								alt="tailwindcss demo page"
								width={400}
								height={400}
								className=""
								src="/tailwind-cats-mobile.png"
							/>
						</div>
					</div>

					<div className="mb-7">
						<p className="text-4xl mb-3">Tech used</p>
						<div>
							<Pill text="HTML/css" />
							<Pill text="Tailwindcss" />
						</div>
					</div>
					<div className="flex justify-end gap-3 pb-3 pr-3 font-medium">
						<Link
							href="https://github.com/johnhm22/tailwind-cats"
							target="_blank"
						>
							<button className="rounded-md py-2 px-4 bg-green-500">
								Code
							</button>{" "}
						</Link>
						<Link href="https://tailwind-cats.vercel.app/" target="_blank">
							<button className="rounded-md py-2 px-4 bg-blue-500">
								Website
							</button>{" "}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
