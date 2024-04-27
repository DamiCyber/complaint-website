import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import "../assets/style/Home.css"
import file from "../assets/images/file.png"

const Home = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const sendComplaint = async () => {
    try {
      // Make a POST request to the backend endpoint
      await axios.post('https://complainbackend.onrender.com/api/sendComplaint', {
        email,
        title,
        description
      });

      // Clear input fields after successful submission
      setEmail('');
      setTitle('');
      setDescription('');

      // Show a success message to the user
      Swal.fire({
        title: "Complaint sent successfully!",
        icon: "success"
      });
    } catch (error) {
      console.error('Error sending complaint:', error);
      // Show an error message to the user
      Swal.fire({
        icon: "error",
        title: "Failed to send complaint. Please try again later",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <div className="back">
        <div className="format">
          <div className="text">
            <img src={file} alt="" />
            <h4>Public Complaint Registration</h4>
          </div>
          <input type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Complaint Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea cols="40" rows="16" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button className='btn' onClick={sendComplaint}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
