import { Clock10, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactMap() {
  return (
    <section className="lg:px-32 md:px-20 px-4 pt-20 mb-10">
      <h1 className="font-title text-4xl text-amber-700 text-center my-20">
        Locate Us
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-center items-center">
        <div className="bg-white w-full lg:w-[500px] border rounded-lg p-4 flex flex-col gap-y-4 lg:mr-10">
          <div className="flex gap-x-4 text-amber-700">
            <MapPin />
            <p>Thai Phuket, North First Street, Fresno, CA, USA</p>
          </div>
          <div className="flex gap-x-4 text-amber-700">
            <Clock10 />
            <p>Open daily 10am - 10pm</p>
          </div>
          <div className="flex gap-x-4 text-amber-700">
            <Phone />
            <p>+15594128873</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.150657793273!2d-119.77433538458496!3d36.766953077269996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de43a542efb%3A0x516eacc2a97406f8!2sThai%20Phuket!5e0!3m2!1sen!2ssg!4v1670220519282!5m2!1sen!2ssg"
          className="mt-10 lg:w-[600px] h-[450px] w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Thaiphucket map"
        ></iframe>
      </div>
    </section>
  );
}
