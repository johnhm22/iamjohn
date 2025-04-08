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
						<p className="my-3">
							Other features include adding a new invoice and deleting an
							existing invoice. These actions will update the Neon PostgreSQL
							database.
						</p>
					</div>
					<div className="mb-12">
						<p className="text-4xl">What does it do?</p>
						<p className="my-3">
							It displays the dummy invoice data in a table. There are two
							buttons at the bottom of the table to move back and forth through
							the invoices. Currently, it is hardcoded to display five invoices.
							Clicking on &#x0022;Next&#x0022; loads the next five, clicking on
							&#x0022;Previous&#x0022; will display the previous five invoices.
						</p>
						<p className="mb-3">
							Upon loading of the home page, which is a server component, a
							server-side function is called which, using Prisma, makes a call
							to the PostgreSQL database to get the first five invoices. The
							&#x0022;Next&#x0022; button is a Next.js Link. It calls a url
							which includes the page number plus one. When the url loads, as a
							result of the &#x0022;Next&#x0022; button being clicked, the url
							is read and the page and limit values extracted and passed to the
							server-side function to retrieve data from the database. The
							&#x0022;Previous&#x0022; button works in a similar way, but the
							current page number is reduced by one.
						</p>
						<p className="mb-3">
							Using some simple JavaScript, the &#x0022;Previous&#x0022; button
							is greyed out when on the first page as is the Next button when on
							the last page.
						</p>
						<p className="mb-3">
							The file for the server-side action is in a data-access folder.
							For security, all functions calling the database are placed here.
							An authorisation check is normally placed in the functions in this
							file. The purpose is to ensure that the authorisation is not
							separated from where the database call is made and so avoid any
							risk of an unprotected call being made.
						</p>
						<p className="mb-3">
							Of course, for this demo, there is no authorisation check as the
							idea is for a user to experience the app without needing to log
							in.
						</p>

						<p className="mt-5 mb-5 text-xl">Home page</p>
						<div className="flex mt-5 justify-center">
							<Image
								alt="pagination app home page"
								width={800}
								height={800}
								className=""
								src="/invoice-homepage.png"
							/>
						</div>
						<p className="mt-5 mb-5 text-xl">Add Invoice</p>
						<p className="mb-3">
							This is a specific page and found on the url /add-invoice. It is
							composed of a Next.js Form component. Upon clicking Add, a
							function which is defined in the Form as an action prop is called.
							This server-side function is found in the data-access folder. It
							receives the values from the Form fields and sends them to the
							PostgreSQL database using a Prisma method.
						</p>
						<div className="flex mt-5 justify-center">
							<Image
								alt="pagination app invoice add"
								width={800}
								height={800}
								className=""
								src="/invoice-add.png"
							/>
						</div>
						<p className="mt-5 mb-5 text-xl">Delete Invoice</p>
						<p className="mb-3">
							The image below shows a pop-up window which is a dialog element.
							It appears when the red trash can icon is clicked. If the user
							decides to proceed with the deletion, as with the add invoice
							feature, a server-side function is called in the data-layer folder
							which makes the deletion call to the database using a Prisma
							method.
						</p>
						<div className="flex mt-5 justify-center">
							<Image
								alt="pagination app invoice add"
								width={800}
								height={800}
								className=""
								src="/invoice-delete.png"
							/>
						</div>
					</div>

					<div className="mb-7">
						<p className="text-4xl mb-3">Tech used</p>
						<div>
							<Pill text="HTML/css" />
							<Link href="https://tailwindcss.com/" target="_blank">
								<Pill text="Tailwindcss" />
							</Link>
							<Pill text="JavaScript" />
							<Pill text="TypeScript" />
						</div>
						<div>
							<Link href="https://react.dev/" target="_blank">
								<Pill text="React v19" />
							</Link>
							<Link href="https://nextjs.org/" target="_blank">
								<Pill text="Next.js v15" />
							</Link>
						</div>
						<div>
							<Link href="</Link>" target="_blank">
								<Pill text="Prisma ORM" />
							</Link>
							<Link href="https://neon.tech/" target="_blank">
								<Pill text="PostgreSQL from Neon" />
							</Link>
						</div>
					</div>
					{/* <p className="text-4xl my-3">Lessons learnt</p>
					<p className="mb-7"></p> */}
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
