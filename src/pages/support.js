import React, { useState } from "react";
import { useRouter } from "next/router";
import backIcon from "../assets/icons/back.png";
import Image from "next/image";
import apiConfig from '@/config/apiConfig';

const ContactForm = () => {
  const { endpoint } = apiConfig();
  const router = useRouter();
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch(`${endpoint}/support`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    router.pathname('/')
  };

  return (
    <div className="ContactForm">
      <Image className="back-button" src={backIcon} alt="back" width={36} height={36} onClick={() => router.back()} />
      <form onSubmit={handleSubmit}>
        <div className="form-heading">
          <h2>Contact & Support</h2>
        </div>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea id="message" required />
        </div>
        <div className="submit">
          <button className="submit-button" type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;