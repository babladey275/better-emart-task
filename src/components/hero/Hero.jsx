import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20 bg-blue-50">
      {/* Text Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
          Your Health, Our Priority
        </h1>
        <p className="text-lg text-blue-700 mb-6">
          Empowering you with reliable medical solutions and expert care.
          Trusted by thousands for wellness and recovery.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-semibold">
          Get Started
        </button>
      </div>

      {/* Image */}
      <div className="mb-10 lg:mb-0">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
