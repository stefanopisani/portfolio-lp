import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

function About({}: Props) {
  const { menuActive, setNavigation } = useContext(AppContext);

  useEffect(() => {
    setNavigation(true);
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="grid place-items-center mt-[120px] max-w-6xl">
      <div className=" flex flex-wrap place-content-center">
        <h1>contatti</h1>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="your name" name="name" />
          <input type="email" placeholder="your email" name="email_from" />
          <textarea placeholder="your message" name="message" />
          <button type="submit"> send </button>
        </form>
      </div>
    </div>
  );
}

export default About;
