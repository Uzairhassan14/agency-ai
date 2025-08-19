import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solution that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you execuute your plan and deliver result.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description: "We craft engaging content that connects and leaves impact.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description: "We build social strategies that engage and grow audiences.",
      icon: assets.social_icon,
    },
    
  ];
  return (
    <div
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      id="services"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title={"How Can we Help?"}
        desc={
          "From strategy to execution, we craft digital solution that move your bussiness forward."
        }
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
