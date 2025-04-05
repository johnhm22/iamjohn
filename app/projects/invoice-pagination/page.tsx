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
						Next.js v15 Pagination
					</h1>
					<div className="mb-7 ">
						<p className="text-4xl">Purpose</p>
						<p className="my-3">
							A project to demonstrate Next.js v15 features such as server-side
							components and server actions. This is done by means of a simple
							pagination app which allows the user to click back and forth
							through pages of invoice data presented in a table.
						</p>
						<p className="my-3">
							A PostgreSQL database was created on{" "}
							<Link href="https://neon.tech/">Neon</Link> which offers a
							serverless platform. After which 200 dummy invoice records were
							created on the{" "}
							<Link href="https://fakery.dev/">Fakery website</Link> and the
							resulting data used as a seed file to populate the database.
						</p>
					</div>
					<div className="mb-12">
						<p className="text-4xl">What does it do?</p>
						<p className="my-3">
							It displays the dummy invoice data in a table. There are two
							buttons at the bottom of the table to move back and forth through
							the invoices. Currently, it is hardcoded to display five invoices.
							Clicking on Next loads the next five, clicking on Previous will
							display the previous five invoices.
						</p>
						<p className="mb-3">
							Upon loading of the home page, which is a server component, a
							server-side function is called which, using Prisma, makes a call
							to the PostgreSQL database to get the first five invoices. The
							Next button is a Next.js Link. It calls a url which includes the
							page number plus one. When the url loads, as a result fo the Next
							button being clicked, the url is read and the page and limit
							values extracted and passed to the server-side function to
							retrieve data from the database. The Previous button works in a
							similar way, but the current page number is reduced by one.
						</p>
						<p className="mb-3">
							Using some simple JavaScript, the Previous button is greyed out
							when on the first page as is the Next button when on the last
							page.
						</p>
						<p className="mb-3">
							The file for the server-side action is in a data-access folder.
							All functions calling the database are placed here, although there
							is only one in this case. An authorisation check is placed in the
							files in this folder. The purpose is to ensure that the
							authorisation is not separated from where the database call is
							made and so avoid any risk of an unprotected call being made.
						</p>
						<p className="mb-3">
							Of course, for this demo, there is no authorisation check as the
							idea is for a user to experience the app without needing to log
							in.
						</p>

						<p className="mb-5 text-xl">Home page</p>
						<div className="flex mt-5 justify-center">
							<Image
								alt="pagination app home page"
								width={800}
								height={800}
								className=""
								src="/invoice-pagination.png"
							/>
						</div>
					</div>

					<div className="mb-7">
						<p className="text-4xl mb-3">Tech used</p>
						<div>
							<Pill text="HTML/css" />
							<Pill text="Tailwindcss" />
							<Pill text="JavaScript" />
							<Pill text="TypeScript" />
						</div>
						<div>
							<Pill text="React v19" />
							<Pill text="Next.js v15" />
						</div>
						<div>
							<Pill text="Prisma ORM" />
							<Pill text="PostgreSQL" />
						</div>
					</div>
					<p className="text-4xl my-3">Lessons learnt</p>
					<p className="mb-7"></p>
					<div className="flex justify-end gap-3 pb-3 pr-3 font-medium">
						<Link
							href="https://github.com/johnhm22/pagination-invoices"
							target="_blank"
						>
							<button className="rounded-md py-2 px-4 bg-green-500">
								Code
							</button>{" "}
						</Link>
						<Link
							href="https://pagination-invoices.vercel.app/"
							target="_blank"
						>
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
