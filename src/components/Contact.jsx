import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { EarthCanvas2 } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

const InputField = ({ label, value, name }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <p
      name={name}
      // value={value}
      className="bg-tertiary bg-cyan-900/30 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    >{value}</p>
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-cyan-900/30 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <InputField
          label="Email:"
          name="email"
          value="shleung.dev@gmail.com"
        />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        {/* <EarthCanvas2 /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
