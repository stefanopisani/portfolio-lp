import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

function About({}: Props) {
  const { menuActive, setNavigation } = useContext(AppContext);
  const notify = (action: string) => {
    if (action === "success") {
      toast.success("Email inviata con successo", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }

    if (action === "error") {
      toast.error("Si è verificato un errore, ritenta", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
          notify("success");
        },
        (error) => {
          console.log(error.text);
          notify("error");
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex items-center pt-[85px] h-[calc(100vh-85px)] justify-center align-middle mb-[100px]">
      <div className="max-w-4xl sm:min-w-[400px] min-w-[325px] mx-5 grid sm:grid-cols-2">
        <div className="sm:mb-0 mb-[50px]">
          <h1 className="text-xl mb-5 font-thin">Contatti</h1>

          <h2 className="text-base font-light">081 5756035</h2>
          <h2 className="text-base font-light">info@lpstudio.com</h2>
          <h2 className="text-base font-light">Via A. Manzoni 1003</h2>
          <h2 className="text-base font-light">Napoli, 80123</h2>
        </div>

        <div className="max-w-sm">
          <h1 className="text-xl mb-5 font-thin">Form</h1>

          <h2 className="text-base mt-5 mb-5 font-thin leading-relaxed">
            Entra in contatto con lo studio, mandaci un messaggio e ti
            risponderemo il prima possibile
          </h2>
          <form onSubmit={sendEmail} className="max-w-sm">
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
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
