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
    <div className="grid h-screen mt-[120px]">
      <div className="max-w-6xl sm:min-w-[400px]  min-w-[325px] mx-5">
        <h1 className="text-3xl sm:text-center mb-5">Contatti</h1>
        <h2 className="text-xl mb-5">
          Entra in contatto con lo studio, mandaci un messaggio e ti
          risponderemo il prima possibile
        </h2>
        <form onSubmit={sendEmail} className="max-w-lg">
          <div>
            <input
              className="form"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div>
            <input
              className="form"
              type="email"
              placeholder="Email"
              name="email_from"
            />
          </div>
          <div>
            <textarea
              className="form pb-[50px]"
              placeholder="Message"
              name="message"
            />
          </div>
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
