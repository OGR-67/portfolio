import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import SoftSkills from "./components/SoftSkills";

const App = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		AOS.init();
		document.body.classList.add("loaded");
		initParticlesEngine(async (engine) => await loadSlim(engine)).then(() =>
			setInit(true),
		);
	}, []);
	return (
		<Provider store={store}>
			<main className="text-gray-400 bg-gray-900 z-10 overflow-x-hidden">
				{init && (
					<Particles
						id="tsparticles"
						className="fixed top-0 left-0 w-full z-0"
						options={{
							fpsLimit: 120,
							interactivity: {
								events: {
									onClick: {
										enable: false,
										mode: "push",
									},
									onHover: {
										enable: true,
										mode: "repulse",
									},
									resize: true,
								},
								modes: {
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
								},
							},
							particles: {
								color: {
									value: "#ffffff",
								},
								links: {
									color: "#ffffff",
									distance: 150,
									enable: true,
									opacity: 0.2,
									width: 1,
								},
								move: {
									direction: "none",
									enable: true,
									outModes: {
										default: "bounce",
									},
									random: false,
									speed: 6,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										area: 800,
									},
									value: 40,
								},
								opacity: {
									value: 0.2,
								},
								shape: {
									type: "circle",
								},
								size: {
									value: { min: 1, max: 5 },
								},
							},
							detectRetina: true,
						}}
					/>
				)}
				<Navbar />
				<About />
				<Projects />
				<Skills />
				<SoftSkills />
				<Testimonials />
				<Contact />
			</main>
		</Provider>
	);
};

export default App;
