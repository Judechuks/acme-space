import React from "react";
import ServiceCard from "../components/serviceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-5">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};
export default Services;