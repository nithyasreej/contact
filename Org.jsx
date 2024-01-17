// OrganizationInfo.js
import React from 'react';

const OrganizationInfo = () => {
  return (
    <div className="container">
      <form className="form">
        {/* Your form elements go here */}
      </form>
      
      <div className="additional-container">
        <h1>Organization Details</h1>
        <p>Organization Name</p>
        <p>Address Line 1</p>
        <p>Address Line 2</p>
        <p>Phone: +123 456 789</p>
        <p>Email: info@example.com</p>
        <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden', marginTop: '16px' }}>
          {/* You can embed a Google Map here using an iframe or a library like react-google-maps */}
          <iframe
            title="Google Map"
            style={{ width: '100%', height: '100%' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678910111213!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzEwLjEiTiAwwrA1NCc0My4wIlc!5e0!3m2!1sen!2sus!4v1583089534974!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInfo;
