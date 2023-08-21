import React, { useState } from "react";
import { useRouter } from "next/router";

const ContactForm = () => {
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
    let response = await fetch("http://localhost:3001/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <div>
          <input type="text" id="name" required />
        </div>

        <label htmlFor="email">Email:</label>
        <div>
          <input type="email" id="email" required />
        </div>

        <label htmlFor="message">Message:</label>
        <div>
          <textarea id="message" required />
        </div>
        
        <button type="submit">{status}</button>
      </form>
      <button onClick={() => router.back()}>Back</button>
    </div>

  );
};

export default ContactForm;