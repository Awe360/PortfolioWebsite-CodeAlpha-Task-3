import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import Swal from 'sweetalert2';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "2224e41c-e3e6-425f-8825-9c1a78f86ecf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Your form was submitted successfully.",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      Swal.fire({
        title: "Error!",
        text: "There was an issue with your submission. Please try again.",
        icon: "error"
      });
    }
  };
  return (
    <div className="bg-blue-800 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">

          <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>If you want to contact me at any time</h3>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    awokegebrie5@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+251919594908</span>
            </div>
            
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded text-black  border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Name' required/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Email</label>
                    <input type="email" 
                    className='w-full text-black p-2 rounded  border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email' required/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 text-black rounded  border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send Message</button>
            {result && <p className="text-center text-green-400 mt-4">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact