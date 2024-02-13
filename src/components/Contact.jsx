import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useSubmitContactFormMutation } from "../store/apis/contactForm";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitContactForm, result] = useSubmitContactFormMutation();

	function handleSubmit(e) {
		e.preventDefault();
		submitContactForm({ name, email, message });
	}

	const renderForm = () => {
		if (result.isUninitialized || result.isLoading) {
			return (
				<form
					name="contact"
					onSubmit={handleSubmit}
					className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
				>
					<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
						Me Recruter
					</h2>
					<p className="leading-relaxed mb-5">
						Prêt à collaborer? Je serais ravi d'en savoir plus sur vos besoins
						et vos opportunités. Contactez-moi en remplissant le formulaire
						ci-dessous, et commençons à façonner l'avenir ensemble.
					</p>
					<div className="relative mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-400">
							Nom
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-400">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-400"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
					>
						Envoyer <FaPaperPlane className="inline-block ml-2" />
					</button>
				</form>
			);
		}
		if (result.isSuccess) {
			return (
				<div className="text-green-500 flex items-center">
					Message envoyé avec succès. Je vous répondrais très bientôt.
				</div>
			);
		}
		return (
			<div className="text-red-500 flex items-center">
				Le message n'a pas pu être délivré. Envoyez-moi un email directement le
				temps que je corrige ce problème.
			</div>
		);
	};

	return (
		<section id="contact" className="relative">
			<div
				className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"
				{...{ "data-aos": "zoom-in" }}
			>
				<div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
					<iframe
						width="100%"
						height="100%"
						title="map"
						className="absolute inset-0"
						style={{ filter: "opacity(0.7)" }}
						src="https://www.google.com/maps/embed/v1/place?q=strasbourg&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
					/>
					<div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
						<div className="lg:w-1/2 px-6">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								ADRESSE
							</h2>
							<p className="mt-1">
								153 rue du cercle <br />
								67310 Balbronn
							</p>
						</div>
						<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								EMAIL
							</h2>
							<h2 className="text-indigo-400 leading-relaxed">
								roosolivier@gmail.com
							</h2>
							<h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
								PHONE
							</h2>
							<a href="tel:+33676540004" className="leading-relaxed">
								06 76 54 00 04
							</a>
						</div>
					</div>
				</div>
				{renderForm()}
			</div>
		</section>
	);
};

export default Contact;
