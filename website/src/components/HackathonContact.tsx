import { useState } from 'react';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import "../styles/ContactPopUp.css";


const HackathonContact = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result] = useState(null);

  const accessKey = "08c5f503-7b04-4e3c-8521-0cd73e51c711";
  const name = watch("name");

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: name,
      subject: "New Contact Message from your Website",
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
    },
    onError: () => {
      setIsSuccess(false);
    },
  });

  return (
    <section className="contact-us-section">
      <div className="contact-form-div">
        <h3 className="contact-h3 color-darkpurple">
          ♡ Questions about the Hackathon? Please submit the form below.
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-popup-form">
          <input type="hidden" name="access_key" value={accessKey} />
          <input type="hidden" name="redirect" value="https://HarmonyHacksCSUSM.github.io/website/contact" />

          <div className="contact-form-fields-div">
            <div className="form-left-div">
              <p className="contact-p color-purple"> Name: </p>
              <input type="text" className="contact-inputs" {...register("name", { required: true })} />

              <p className="contact-p color-purple"> E-mail: </p>
              <input type="email" className="contact-inputs" {...register("email", { required: true })} />
            </div>

            <div className="form-right-div">
              <p className="contact-p color-purple"> Subject / Reason: </p>
              <select className="contact-inputs" {...register("subject", { required: true })}>
                <option value="Hackathon Inquiry"> Hackathon Inquiry </option>
                <option value="Registration Inquiry"> Registration Inquiry </option>
                <option value="Submit Hackathon Testimonial"> Submit Hackathon Testimonial </option>
                <option value="Submit Hackathon Feedback"> Submit Hackathon Feedback </option>
                <option value="Other"> Other </option>
              </select>

              <p className="contact-p color-purple"> Message: </p>
              <textarea className="contact-inputs msg-input" {...register("message", { required: true })}></textarea>
            </div>
          </div>

          <button className="contact-submit-button" type="submit">Submit</button>
        </form>

        <div className="result-message">
          {isSuccess ? <p className="page-p color-darkpurple"> Thank you for your message! We'll get back to you soon! ♡ </p> : <p className="error-msg">{result}</p>}
        </div>
      </div>
    </section>
  );
};

export default HackathonContact;