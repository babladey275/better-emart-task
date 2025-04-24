import React from "react";
import {
  FaHeartbeat,
  FaClipboardList,
  FaUserMd,
  FaMicroscope,
} from "react-icons/fa";

const services = [
  {
    title: "MEDICAL",
    highlight: "EDUCATION",
    description:
      "Learn how to live a healthier life with access to reliable medical resources and community programs.",
    icon: <FaHeartbeat className="text-5xl text-red-500 mb-4" />,
  },
  {
    title: "QUALITY",
    highlight: "HEALTHCARE",
    description:
      "Access top-tier healthcare services backed by advanced facilities and expert care.",
    icon: <FaClipboardList className="text-5xl text-blue-500 mb-4" />,
  },
  {
    title: "QUALIFIED",
    highlight: "SPECIALISTS",
    description:
      "Our certified professionals are dedicated to delivering exceptional treatment and support.",
    icon: <FaUserMd className="text-5xl text-green-500 mb-4" />,
  },
  {
    title: "ADVANCED",
    highlight: "TECHNOLOGY",
    description:
      "We utilize the latest medical technology for accurate diagnostics and effective treatments.",
    icon: <FaMicroscope className="text-5xl text-purple-500 mb-4" />,
  },
];

export default function OurServices() {
  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        OUR FEATURED SERVICE
      </h2>
      <div className="w-20 h-1 bg-sky-400 mx-auto mb-6 rounded"></div>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Discover our core healthcare offerings designed to meet your unique
        medical needs with expertise and care.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            {service.icon}
            <h3 className="text-sky-500 font-semibold">{service.title}</h3>
            <h4 className="text-xl font-bold mb-2">{service.highlight}</h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
