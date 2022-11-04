// import { useRef } from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <header className="pt-24 px-6 mb-12 max-w-2xxl md:mx-auto">
        <h1 className="text-4xl font-semibold mb-6">Contact Me</h1>
        <p className="text-lg">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </header>
      <section>
        <form className="px-6 mb-24 max-w-2xxl md:mx-auto">
          <div className="md:flex md:justify-between">
            <div className="flex flex-col mb-9 md:w-full md:mr-6">
              <label>First name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className="outline-none"
              />
            </div>
            <div className="flex flex-col mb-9 md:w-full">
              <label>Last name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                className="outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col mb-9">
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="yourname@gmail.com"
              className="outline-none"
            />
          </div>
          <div className="flex flex-col mb-9">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className="outline-none"
            ></textarea>
          </div>
          <div className="mb-9 flex items-start justify-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="mt-1 border"
            />
            <p className="text-sm ml-3">
              You agree to providing your data to Stephen Adeyemo who may
              contact you.
            </p>
          </div>
          <div>
            <button
              className="bg-blue-750 border border-blue-750 font-semibold text-base h-12 w-full text-white rounded-xl hover:scale-105 duration-200 hover:bg-[#B2DDFF]"
              id="btn__submit"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
