import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";
const OurWork = () => {
  const workData = [
    {
      title: "Mobile App Development",
      description:
        "Crafted a sleek mobile app that delivers seamless user experience and boosts customer engagement.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "Built an interactive dashboard enabling businesses to monitor insights and make data-driven decisions.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Design",
      description:
        "Developed a modern fitness app helping users track workouts, achieve goals, and stay motivated daily.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={"Our latest Work"}
        desc="From Strategy to excecution, we craft digital solution that move yhour bussiness forward."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-medium">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
