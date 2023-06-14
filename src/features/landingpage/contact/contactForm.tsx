import { useFormik } from "formik";
import "./contactForm.css";
import SizedBox from "../../../components/sizedbox/sizedBox";

function ContactForm() {
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
  });
  return (
    <div className="w-full contactBg bg-white pagePadding componentSpacing flex justify-center items-start gap-x-20">
      <div className="hidden lg:block w-4/12">
        <img src="./contact.svg" />
      </div>
      <div>
        <form className=" flex flex-col justify-start items-start">
          <p className="my-5 text-4xl font-bold">
            Need more Information? <br />
            <span className=" text-secondary">Contact Us.</span>
          </p>
          <input
            placeholder="Name"
            className="inputField"
            value={contactForm.values.name}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <input
            placeholder="Mobile Number"
            className="inputField"
            value={contactForm.values.mobile}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <input
            placeholder="Email"
            className="inputField"
            value={contactForm.values.email}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <textarea
            placeholder="Description"
            className="textArea"
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <input
            type="submit"
            value="SUBMIT"
            className=" w-full bg-primary rounded-md px-2 py-3 text-white"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
