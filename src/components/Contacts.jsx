import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contacts = ({ contactRef }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m02im1m",
        "template_vzl48kq",
        form.current,
        "R5etsLAb_n2aWzB93"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("message sent");
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div ref={contactRef} className="container w-2/3 mx-auto pb-36">
      <h3 className="uppercase underline mb-8">hire me</h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-8"
      >
        <input
          className="w-full focus:border-custom3 transition-all duration-300 py-4 bg-transparent outline-none border-b border-b-gray-500"
          placeholder="Name"
          type="text"
          name="user_name"
          required
        />
        <input
          className="w-full focus:border-custom3 transition-all duration-300 py-4 bg-transparent outline-none border-b border-b-gray-500"
          placeholder="Email"
          type="email"
          name="user_email"
          required
        />
        <textarea
          className="w-full focus:border-custom3 transition-all duration-300 resize-none bg-transparent outline-none border-b border-b-gray-500"
          name="message"
          placeholder="Message"
          cols="30"
          rows="6"
          required
        ></textarea>
        <button
          type="submit"
          className="text-start text-sm bg-custom3 px-4 py-3 cursor-pointer mr-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
