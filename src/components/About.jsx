import TypingAnimator from "react-typing-animator";
import "./About.css";

const About = () => {
	return (
		<section
			id="about"
			{...{ "data-aos": "fade-left", "data-aos-duration": "700" }}
		>
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center md:mt-40 md:mb-52 mt-20 mb-4">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0 z-10 w-80">
					<h1 className="title-font text-4xl mb-4 font-medium text-white flex flex-col gap-2">
						<span className="text-nowrap">Je suis</span>
						<TypingAnimator
							textArray={[" Olivier.", "Développeur.", "Passionné!"]}
							cursorColor="#4F46E5"
							loop
							typingSpeed={75}
							delaySpeed={1000}
							backspace
							textColor="#4F46E5"
							height="3rem"
							fontSize="3rem"
							className="font-mono font-extrabold md:text-5xl text-3xl"
						/>
					</h1>
					<p className="mb-8 leading-relaxed">
						Engagé et méticuleux, je suis prêt à relever les défis de vos
						projets les plus ambitieux et à apporter une nouvelle dynamique à
						votre équipe.
					</p>
					<div className="flex justify-center">
						<a
							href="#contact"
							className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
						>
							Faisons équipe
						</a>
						<a
							href="#projects"
							className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
						>
							Voir mes réalisations
						</a>
					</div>
				</div>
				<div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="./coding.svg"
					/>
					<img
						src="./cafee.gif"
						alt="hero"
						className="absolute lg:h-20 lg:bottom-6 lg:left-10 lg:w-auto w-1/6 top-3/4 right-3/4"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
