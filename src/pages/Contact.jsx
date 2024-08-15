/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MyAnimateContext } from "../Contexts/AnimateContact";
import titleSvg from "../assets/Svg/title-svg.svg";
import { Loader1 } from "../components/Loader";
import { BlurText } from "../animatedComponents/BlutText";
import "./Contact.css";

const Contact = ({ service, updateService }) => {
  const { heighLightCtrl, selectRef } = useContext(MyAnimateContext);
  const [loading, setLoading] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubMsg, setFormSubMsg] = useState("");

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      if (input.value.trim()) {
        input.classList.add("has-value");
      }

      input.addEventListener("input", () => {
        if (input.value.trim()) {
          input.classList.add("has-value");
        } else {
          input.classList.remove("has-value");
        }
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", () => {
          if (input.value.trim()) {
            input.classList.add("has-value");
          } else {
            input.classList.remove("has-value");
          }
        });
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setFormData({ ...formData, service });

    const formDataToSend = new FormData(e.target);
    formDataToSend.append("access_key", "4cc034fa-5f4c-4fbe-8a54-8163b74746a8");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const res = await response.json();

      if (res.success) {
        setFormSubMsg("Message sent successfully!, We will contact you soon!");
        setSendSuccess(true);
      } else {
        setFormSubMsg("Something went wrong, Please try again.");
        setSendSuccess(false);
      }
    } catch (error) {
      setFormSubMsg("An error occurred while sending your message.");
      setSendSuccess(false);
    }

    setLoading(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    updateService("");
    setTimeout(() => setFormSubMsg(""), 6000);
  };

  return (
    <motion.section id="contact" className="py-14 shadow-md relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative w-[90%] smm:w-[63%] sm:w-[45%] lg:w-[35%] xl:w-[38%] mx-auto text-center mb-8">
            <h1 className="text-5xl font-bold relative z-[1] font-heading">
              Contact Us.
            </h1>
            <img
              src={titleSvg}
              className="absolute h-[90px] w-[90px] top-[-30px] right-[20px]"
            />
          </div>
          <p className="md:text-lg font-para">
            We&apos;d love to hear from you! Please fill out the form below to
            get in touch with us.
          </p>
        </div>
        <form
          className="bg-secondary rounded-lg shadow-lg p-8 font-secondary"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="label-floating">
              Name
            </label>
          </div>
          <div className="mb-6 relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="label-floating">
              Email
            </label>
          </div>
          <div className="mb-6 relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
              placeholder=" "
              required
            />
            <label htmlFor="phone" className="label-floating">
              Phone
            </label>
          </div>
          <div className="mb-6 relative">
            <motion.select
              name="service"
              ref={selectRef}
              variants={{
                initial: { scale: 1 },
                animate: { scale: 1.12 },
              }}
              initial="initial"
              animate={heighLightCtrl}
              onAnimationComplete={() => heighLightCtrl.set("initial")}
              transition={{ duration: 0.5, delay: 0.8, ease: "linear" }}
              value={service}
              onChange={(e) => updateService(e.target.value)}
              className="w-full px-3 py-2 border font-subHeading bg-secondary border-[#666] font-light rounded-lg hover:border-blue-300 focus:outline-none font-secondary focus:border-blue-300"
              required
            >
              <option value="" disabled defaultValue>
                Select a Service
              </option>
              <option value="Android App Development">
                Android App Development
              </option>
              <option value="iOS App Development">iOS App Development</option>
              <option value="Cross-Platform App Development">
                Cross-Platform App Development
              </option>
              <option value="Front-End Development">
                Front-End Development
              </option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full-Stack Development">
                Full-Stack Development
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
            </motion.select>
          </div>
          <div className="mb-6 relative">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="input"
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="message" className="label-floating text-area-label">
              Message
            </label>
          </div>
          <div className="text-center h-10 flex justify-center items-center">
            {!loading && (
              <AnimatePresence>
                {formData.name.trim() &&
                  formData.email.trim() &&
                  formData.phone.trim() &&
                  service &&
                  formData.message.trim() && (
                    <motion.button
                      key="sub-btn"
                      layout
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ opacity: 0, scale: 0, rotate: 720 }}
                      transition={{
                        duration: 1.5,
                        type: "spring",
                        damping: 20,
                        stiffness: 700,
                      }}
                      whileHover={{ scale: 1.03 }}
                      type="submit"
                      className="font-medium bg-primaryGradient py-2 px-4 rounded-lg"
                    >
                      Send Message
                    </motion.button>
                  )}
              </AnimatePresence>
            )}
            {loading && <Loader1 key="anime" />}
            {!loading && formSubMsg && (
              <BlurText
                text={formSubMsg}
                className={`${sendSuccess ? "text-green-400" : "text-red-500"} font-medium font-para`}
                delay={50}
              />
            )}
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
