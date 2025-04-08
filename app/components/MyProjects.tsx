import React from "react";
import Card from "./Card";

const MyProjects = () => {
	return (
		<div>
			<div className=" mx-auto min-h-screen">
				<h2 className="heading-section">Projects</h2>
				<div className="h-full justify-items-center grid grid-cols-1 lg:grid-cols-2">
					<Card
						src="/finance-app.png"
						title="Finance App"
						description="Next.js 13 had come out recently and I was keen to use this, make lots of mistakes, get confused and so learn. Also, I had not used Tailwind to any great degree so this was a great opportunity to do so."
						link="finance-app"
					/>
					<Card
						src="/prismic-home.png"
						title="Prismic CMS with Next.js"
						description="The application of the Prismic Content Management System along with Next.js to produce an app that can be customised by non-dev colleagues."
						link="prismic"
					/>
					<Card
						src="/ai4.png"
						title="OpenAI Multi-Language Chatbot"
						description="An entertaining AI chatbot where you control the language of the reply. It uses the Vercel AI SDK and, in particular, the useChat hook. The AI model along with system prompt, maxTokens and temperature are coded into an api call"
						link="language-chatbot"
					/>
					<Card
						src="/ai-object-detection-cars.png"
						title="AI Object Detection"
						description="Demonstrating AI in the important area of object detection. Using a xenova transformer model, an image is provided which the model then analyses and returns with key features identified. Quite an eye-opener to the power of AI."
						link="object-detection"
					/>
					<Card
						src="/black-and-white.png"
						title="AI Image-to-Image Transformation"
						description="Using the power of AI to take an image as input and transform it based on instructions provided."
						link="image-transformation"
					/>
					<Card
						src="/georgina-home.png"
						title="Georgina Homes - proof of concept"
						description="Applying Prismic CMS to a property rental. Using a variety of frameworks and libraries - Next.js, Prismic, Prisma, PostgreSQL, but also design/coding tools."
						link="georgina-homes"
					/>
					<Card
						src="/tailwind-cats.png"
						title="Tailwindcss - a pawtrons testimonial"
						description="A tailwind challenge! A demo showing the application of the tailwindcss library to a testimonial page."
						link="tailwindcss"
					/>
					<Card
						src="/invoice-homepage.png"
						title="Next.js v15 invoice pagination app"
						description="An app to demo and practice the Next.js server-side components and server actions to draw data from a PostgreSQL database for presentation in a tailwindcss coded frontend."
						link="invoice-pagination"
					/>
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
