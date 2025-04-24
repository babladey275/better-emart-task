import React from "react";
import Image from "next/image";
import { FaNotesMedical, FaVial, FaUserMd } from "react-icons/fa";

export default function AcuteSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-20 bg-gray-100">
      {/* Image */}
      <div className="mb-10 lg:mb-0 lg:w-1/2 flex justify-center">
        <Image
          src="/images/Acutee.jpg"
          alt="Doctor"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="lg:w-1/2 lg:pl-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ACUTE MEDICAL CARE
        </h2>
        <p className="text-gray-600 mb-8">
          Comprehensive care for immediate health needs — from diagnosis to
          treatment — ensuring timely medical attention when you need it most.
        </p>

        <div className="space-y-6">
          <div className="flex space-x-4">
            <FaNotesMedical className="text-3xl text-blue-500 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">
                Laboratory and Diagnostic Services
              </h4>
              <p className="text-gray-600 text-sm">
                We provide on-site testing including blood work, imaging, and
                X-rays to ensure rapid diagnosis and timely treatment.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <FaVial className="text-3xl text-blue-500 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">
                Quick and Reliable Lab Results
              </h4>
              <p className="text-gray-600 text-sm">
                Our lab team ensures fast turnaround with accurate, secure, and
                accessible medical results.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <FaUserMd className="text-3xl text-blue-500 mt-1" />
            <div>
              <h4 className="text-lg font-semibold">
                Family and Internal Medicine
              </h4>
              <p className="text-gray-600 text-sm">
                From pediatric to geriatric care, our physicians provide
                long-term, holistic treatment for all age groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
