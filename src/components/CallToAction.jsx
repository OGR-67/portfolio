import { HiCode, HiOutlineGlobeAlt } from "react-icons/hi";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const CallToAction = ({ link, type, label, os }) => {
	const classColors = {
		code: "bg-blue-500 text-white",
		"live-preview": "bg-green-500 text-white",
		download: "bg-gray-500 text-white",
	};

	const icons = {
		code: <HiCode />,
		"live-preview": <HiOutlineGlobeAlt />,
		windows: <FaWindows />,
		mac: <FaApple />,
		linux: <FaLinux />,
	};

	const icon = type === "download" ? icons[os] : icons[type];
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`flex gap-2 items-center font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${classColors[type]}`}
			type="button"
		>
			{icon}
			{label}
		</a>
	);
};

export default CallToAction;
