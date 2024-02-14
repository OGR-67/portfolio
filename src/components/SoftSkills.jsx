import { HiUserGroup, HiShieldCheck } from "react-icons/hi";
import { softSkills } from "../data";

const SoftSkills = () => {
  return (
    <section id="soft-skills">
      <div
        className="container px-5 py-10 mx-auto"
        {...{ "data-aos": "fade-up" }}
      >
        <div className="text-center mb-20">
          <HiUserGroup className="text-6xl inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Soft Skills Et Savoir-Être
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Découvrez comment mes compétences comportementales, telles que la
            communication, la collaboration et l'adaptabilité, sont au cœur de
            mon succès professionnel et de mes réalisations.
          </p>
        </div>
        <div
          className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
          {...{ "data-aos": "fade-right" }}
        >
          {softSkills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <HiShieldCheck className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
