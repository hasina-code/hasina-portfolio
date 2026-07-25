"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      py-20
      bg-gray-50
      dark:bg-slate-950
      text-gray-900
      dark:text-white
      transition-colors
      duration-300
      "
    >

      <div className="max-w-6xl mx-auto px-6">


        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold">

            Contact{" "}

            <span className="text-cyan-500">
              Me
            </span>

          </h2>


          <p className="
          mt-4
          text-gray-600
          dark:text-gray-400
          ">
            Have a project idea or want to work together?
            Feel free to contact me anytime.
          </p>


        </div>




        <div className="grid md:grid-cols-3 gap-6">


          {/* Email */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
            p-6
            rounded-2xl
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-800
            shadow-md
            "
          >

            <Mail className="text-cyan-500 mb-4" size={35}/>

            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <p className="
            mt-2
            text-gray-600
            dark:text-gray-400
            ">
              hasina.akter171407@gmail.com
            </p>

          </motion.div>




          {/* Phone */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
            p-6
            rounded-2xl
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-800
            shadow-md
            "
          >

            <Phone className="text-cyan-500 mb-4" size={35}/>


            <h3 className="text-xl font-semibold">
              Phone
            </h3>


            <p className="
            mt-2
            text-gray-600
            dark:text-gray-400
            ">
              +8801822903392
            </p>


          </motion.div>





          {/* Location */}
          <motion.div
            whileHover={{ y: -8 }}
            className="
            p-6
            rounded-2xl
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-800
            shadow-md
            "
          >

            <MapPin className="text-cyan-500 mb-4" size={35}/>


            <h3 className="text-xl font-semibold">
              Location
            </h3>


            <p className="
            mt-2
            text-gray-600
            dark:text-gray-400
            ">
              Noakhali, Bangladesh
            </p>


          </motion.div>


        </div>





        {/* Social */}
        <div className="flex justify-center gap-5 mt-12">


          <a
            href="https://github.com/hasina-code"
            target="_blank"
            className="
            p-4
            rounded-full
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-700
            hover:bg-cyan-500
            hover:text-white
            transition
            "
          >

            <FaGithub size={28}/>

          </a>




          <a
            href="https://www.linkedin.com/in/hasina-akter-dev/"
            target="_blank"
            className="
            p-4
            rounded-full
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-700
            hover:bg-cyan-500
            hover:text-white
            transition
            "
          >

            <FaLinkedin size={28}/>

          </a>


        </div>



      </div>

    </section>
  );
}