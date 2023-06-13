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
    <div className="w-full pagePadding py-10 flex">
      <div>
        <img src="./contact.svg" />
      </div>
      <div>
        <form className=" flex flex-col justify-start items-start">
          <input
            className="inputField"
            value={contactForm.values.name}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <input
            className="inputField"
            value={contactForm.values.mobile}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <input
            className="inputField"
            value={contactForm.values.email}
            onChange={contactForm.handleChange}
          />
          <SizedBox />
          <textarea
            className="textArea"
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
          />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
