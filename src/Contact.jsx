import React, { useState, useEffect } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const [animateForm, setAnimateForm] = useState(false); // Initialize the state and setter function

  const handleInputChange = (e) => {
    // Your input change logic
  };

  const handleSubmit = (e) => {
    // Your form submission logic
  };

  const isValidEmail = (email) => {
    // Your email validation logic
  };

  useEffect(() => {
    // Add animation trigger logic when component mounts
    const handleScroll = () => {
      // Determine the position of the "JATE" container
      const jateContainer = document.getElementById('jate');
      const jateContainerPosition = jateContainer.getBoundingClientRect();

      if (jateContainerPosition.bottom <= window.innerHeight) {
        setAnimateForm(true); // Trigger the animation when the "JATE" container is out of view
      } else {
        setAnimateForm(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 id="contact">Contact Me</h1>
      <div className={`contact-form-container ${animateForm ? 'slide-in-from-bottom-contact animated' : ''}`}>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
              />
            </div>
            <div className="error">{errors.name}</div>
          </div>

          <div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
              />
            </div>
            <div className="error">{errors.email}</div>
          </div>

          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;