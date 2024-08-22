import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true); // Set the form submission state to true
  };

  const closeModal = () => {
    document.getElementById('my_modal_3').close();
  };

  useEffect(() => {
    document.getElementById('my_modal_3').showModal();
  }, []);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="font-bold text-lg px-4">Thank You!</h3>
              <p className=" text-lg p-4">Your message has been sent successfully.</p>
              <Link to="/" className="mt-4 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Close
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Modal close button */}
              <Link to="/"
                
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact Us</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <label htmlFor="name">Your Name</label>
                <br />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your Name"
                  className={`w-80 px-3 py-1 border rounded-md outline-none ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  {...register('name', { required: true })}
                />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  className={`w-80 px-3 py-1 border rounded-md outline-none ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  {...register('email', { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Message Field */}
              <div className="mt-4 space-y-2">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  id="message"
                  placeholder="Enter your Message"
                  className={`w-80 px-3 py-1 border rounded-md outline-none ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  {...register('message', { required: true })}
                />
                {errors.message && <span className="text-red-500">This field is required</span>}
              </div>

              {/* Submit Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
}

export default Contact;
