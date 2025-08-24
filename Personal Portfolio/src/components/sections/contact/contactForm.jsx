import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiMailLine } from "@remixicon/react";
import SlideUp from "../../../utlits/animations/slideUp";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form values:", {
      from_name: form.current.from_name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    });

    emailjs
      .sendForm(
        "service_bz2puac", // e.g. service_xxxxx
        "template_0zgftrz", // e.g. template_yyyyy
        form.current,
        "NUxpbcVUQyKJZXZDe" // e.g. 3LtNxG6C123abc456
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message, try again later.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area">
          <form ref={form} onSubmit={sendEmail} className="contactForm">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="from_name"
                    className="form-control"
                    placeholder="Steve Milner"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="hello@websitename.com"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write Your message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Me Message{" "}
                    <i>
                      <RiMailLine size={15} />
                    </i>
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </form>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactForm;
