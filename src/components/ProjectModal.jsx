import { useCallback, useEffect, useRef } from "react";
import CallToAction from "./CallToAction";

const ProjectModal = ({ show, project, onClose }) => {
	const ref = useRef(null);

	const handleClose = useCallback(
		(e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		if (show) {
			document.body.addEventListener("click", handleClose, true);
		} else {
			document.body.removeEventListener("click", handleClose, true);
		}

		return () => {
			document.body.removeEventListener("click", handleClose, true);
		};
	}, [show, handleClose]);

	return (
		<>
			{show && (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none cursor-default">
						<div ref={ref} className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">{project?.title}</h3>
									<button
										type="button"
										className="p-1 ml-auto text-gray-400 bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={(e) => {
											e.stopPropagation();
											onClose();
										}}
									>
										<span className="text-gray-400">×</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex items-center gap-8 text-left">
									<ul>
										{project?.details.stack.map((tech) => (
											<li key={tech} className="text-nowrap">
												{tech}
											</li>
										))}
									</ul>
									<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
										{project?.description}
									</p>
								</div>
								{/*footer*/}
								<div className="flex flex-wrap items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									{project?.details.callToActions.map((cta) => (
										<CallToAction
											key={cta.link}
											type={cta.type}
											label={cta.label}
											link={cta.link}
											os={cta.os}
										/>
									))}
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											onClose();
										}}
									>
										Fermer
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-60 fixed inset-0 z-40 bg-black" />
				</>
			)}
		</>
	);
};

export default ProjectModal;
