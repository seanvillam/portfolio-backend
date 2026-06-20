import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    // The useNavigate hook is used to programmatically navigate to a different route after form submission
  const navigate = useNavigate();

  // The formData state is used to store the values of the form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // The handleChange function is called whenever a form field value changes and updates the formData state accordingly
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // The handleSubmit function is called when the form is submitted, it prevents the default form submission behavior, logs the form data to the console, shows an alert to the user, and then navigates back to the home page
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Information:", formData);

    alert("Thank you! Your message has been received.");

    // Redirect to Home Page
    navigate("/");
  };

  return (
    <div class="contact-container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <label class="contact-label">First Name</label>
        <input class="contact-input"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label class="contact-label">Last Name</label>
        <input class="contact-input"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label class="contact-label">Contact Number</label>
        <input class="contact-input"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label class="contact-label">Email Address</label>
        <input class="contact-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label class="contact-label">Message</label>
        <textarea class="contact-textarea"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" class="contact-button">Send Message</button>
      </form>
    </div>
);
}

