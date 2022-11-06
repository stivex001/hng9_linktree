import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";



const schema = yup.object().shape({
  firstName: yup.string().required("Please input your firstname"),
  lastName: yup.string().required("Please input your lastname"),
  email: yup.string().email().required("please input your email"),
  message: yup.string().required("Kindly enter your message"),
});


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate()
  
  const submitForm = (data) => {
    navigate('/thankyou', data)
  }

  
  

  return (
    <div className="contact-wrapper">
      <header className="pt-24 px-6 mb-12 max-w-2xxl md:mx-auto">
        <h1 className="text-4xl font-semibold mb-6">Contact Me</h1>
        <p className="text-lg">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </header>
      <section>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="px-6 mb-24 max-w-2xxl md:mx-auto"
        >
          <div className="md:flex md:justify-between">
            <div className="flex flex-col mb-9 md:w-full md:mr-6">
              <label htmlFor="firstname">First name</label>
              <input
                name="firstName"
                {...register("firstName", { required: true })}
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                className="outline-[#84CAFF]"
              />
              <p className="text-red-500 text-sm font-semibold">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="flex flex-col mb-9 md:w-full">
              <label htmlFor="lastName">Last name</label>
              <input
                name="lastName"
                {...register("lastName", { required: true })}
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                className="outline-[#84CAFF]"
              />
              <p className="text-red-500 text-sm font-semibold">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-9">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="yourname@gmail.com"
              className="outline-[#84CAFF]"
            />
            <p className="text-red-500 text-sm font-semibold">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex flex-col mb-9">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              {...register("message", { required: true })}
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className="outline-[#84CAFF]"
            ></textarea>
            <p className="text-red-500 text-sm font-semibold">
              {errors.message?.message}
            </p>
          </div>
          <div className="mb-9 flex items-start justify-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="mt-1 border"
            />
            <label htmlFor="checkbox_agree" className="text-sm ml-3">
              You agree to providing your data to Stephen Adeyemo who may
              contact you.
            </label>
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
