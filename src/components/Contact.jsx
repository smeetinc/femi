import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-fit pt-24 bg-slate-100 py-4">
      <div className="flex flex-col py-4 justify-center w-full px-2 lg:px-20 mx-auto h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline">Contact</h2>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/00543505-343a-42e2-bc1f-01f839f98739"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-gray-300"
              required="Enter your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-gray-300"
              required="Enter your email"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-gray-300"
              required="Please leave a message"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-gray-800 to-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
