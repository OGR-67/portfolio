import { useRef } from "react";

const Navbar = () => {
	const ref = useRef(null);

	const handleClick = () => {
		ref.current.classList.toggle("hidden");
	};

	return (
		<header id="header" className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
			<nav className="border-gray-200">
				<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
					<span className="flex items-center space-x-3 rtl:space-x-reverse">
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Olivier R.
						</span>
					</span>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 z-20"
						aria-controls="navbar-default"
						aria-expanded="false"
						onClick={handleClick}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						ref={ref}
						className="hidden w-full md:block md:w-auto"
						id="navbar-default"
					>
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-800 border-gray-700">
							<li>
								<a
									href="#"
									className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
									aria-current="page"
								>
									Accueil
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									A propos
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									Réalisations
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									Skills
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
								>
									Soft Skills
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
