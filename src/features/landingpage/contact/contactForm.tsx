import { useFormik } from "formik";
import "./contactForm.css";
import SizedBox from "../../../components/sizedbox/sizedBox";
import createContactRequest from "./../../../services/contact.ts";
import { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [resState, setResState] = useState("SUBSCRIBE");
  const [loading, setLoading] = useState(false);

  const contactForm = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate(values) {
      if (values.email) {
      }
    },
    enableReinitialize: true,
  });

  async function submitContactForm() {
    try {
      setLoading(true);
      const res = await createContactRequest(
        contactForm.values.name,
        contactForm.values.email,
        contactForm.values.mobile,
        contactForm.values.message
      );
      if (res) {
        setResState("Submitted Successfully");
        contactForm.resetForm();
      } else {
        setResState("Failed to Submit");
      }
    } catch (error) {
      setLoading(false);
      setResState("Failed to Submit");
    }
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
      setResState("SUBSCRIBE");
    }, 2500);
  }
  return (
    <div
      id="contact"
      className="w-full contactBg bg-white pagePadding componentSpacing flex justify-center items-start gap-x-20"
    >
      <div className="hidden lg:block w-4/12">
        <motion.img
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0, duration: 2, type: "spring" }}
          src="./contact.svg"
        />
        {contactForm.values.email}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
      >
        <form className=" flex flex-col justify-start items-start">
          <p className="my-5 text-4xl font-bold">
            Need more Information? <br />
            <span className=" text-secondary">Contact Us.</span>
          </p>
          <input
            id="name"
            placeholder="Name"
            className="inputField"
            value={contactForm.values.name}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <input
            maxLength={10}
            id="mobile"
            placeholder="Mobile Number"
            className="inputField"
            value={contactForm.values.mobile}
            onChange={(e) => contactForm.handleChange(e)}
          />
          <SizedBox />
          <input
            id="email"
            placeholder="Email"
            className="inputField"
            onChange={contactForm.handleChange}
            value={contactForm.values.email}
          />
          <SizedBox />
          <textarea
            id="message"
            placeholder="Description"
            className="textArea"
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <button
            type="submit"
            value="SUBMIT"
            className={` w-full ${
              resState == "Submitted Successfully"
                ? "bg-green-600"
                : "bg-primary"
            } rounded-md px-2 py-3 text-white`}
            onClick={(e) => {
              e.preventDefault();
              submitContactForm();
            }}
          >
            {loading ? (
              <img
                src="./loader.svg"
                height={20}
                width={20}
                className="mx-auto"
              />
            ) : (
              resState
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
