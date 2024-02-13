import { projects } from "../data";
import { HiCode } from "react-icons/hi";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const Projects = () => {
	const [modalShow, setModalShow] = useState(null);

	const handleModalClose = () => {
		document.body.classList.remove("overflow-hidden");
		setModalShow("");
	};

	return (
		<section id="projects" className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div
					className="flex flex-col w-full mb-20"
					{...{ "data-aos": "fade-up", "data-aos-duration": "700" }}
				>
					<HiCode className="mx-auto inline-block mb-4 text-6xl" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Projets et Réalisations
					</h1>
					<p
						className="lg:w-2/3 mx-auto leading-relaxed text-base"
						data-aos="fade-up"
					>
						De l'idée initiale à la réalisation finale, chaque projet est un
						voyage. Embarquez pour découvrir le parcours.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{projects.map((project) => (
						<div
							key={project.title}
							className="sm:w-1/2 w-100 p-4 cursor-pointer"
							onClick={() => {
								setModalShow(project.title);
								document.body.classList.add("overflow-hidden");
							}}
						>
							<ProjectModal
								show={modalShow === project.title}
								project={project}
								onClose={handleModalClose}
							/>
							<div className="flex relative" {...{ "data-aos": "zoom-in-up" }}>
								<img
									alt="gallery"
									className="absolute inset-0 w-full h-full object-cover object-center"
									src={`projects/${project.image}`}
								/>
								<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
									<h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
										{project.subtitle}
									</h2>
									<h1 className="title-font text-lg font-medium text-white mb-3">
										{project.title}
									</h1>
									<p className="leading-relaxed">{project.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
