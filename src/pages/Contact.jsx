/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Contact.css";
import { MyAnimateContext } from "../Contexts/AnimateContact";
import titleSvg from "../assets/Svg/title-svg.svg";
import "./Contact.css";

const Contact = ({ service, updateService }) => {
  const { heighLightCtrl, selectRef } = useContext(MyAnimateContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, service });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    formData.append("access_key", "4cc034fa-5f4c-4fbe-8a54-8163b74746a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <motion.section id="contact" className="py-14 shadow-md">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%] xl:w-[41%] mx-auto text-center mb-8">
            <h1 className="text-5xl font-bold relative z-[1] font-heading">
              Contact Us.
            </h1>
            <img
              src={titleSvg}
              className="absolute h-[90px] w-[90px] top-[-25px] right-[30px]"
            />
          </div>
          <p className="md:text-lg font-para">
            We&apos;d love to hear from you! Please fill out the form below to
            get in touch with us.
          </p>
        </div>
        <form
          className="bg-secondary rounded-lg shadow-lg p-8 font-secondary"
          method="post"
          onSubmit={(e) => {
            handleSubmit(e);
            onSubmit(e);
          }}
        >
          <div className="mb-6 relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              placeholder=" "
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
              onChange={(e) => updateService(e)}
              className="w-full px-3 py-2 border font-subHeading bg-secondary border-[#666] font-light rounded-lg hover:border-blue-300 focus:outline-none font-secondary focus:border-blue-300"
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
            ></textarea>
            <label htmlFor="message" className="label-floating text-area-label">
              Message
            </label>
          </div>
          <div className="text-center h-10">
            <AnimatePresence>
              {formData.name.trim() &&
                formData.email.trim() &&
                formData.phone.trim() &&
                service &&
                formData.message.trim() && (
                  <motion.button
                    layout
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0.5, scale: 0 }}
                    transition={{
                      duration: 1,
                      type: "spring",
                      damping: 15,
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
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
