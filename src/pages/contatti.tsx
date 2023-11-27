import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

type Props = {};

function About({}) {
  const { setNavigation } = useContext(AppContext);
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
    <div className="grid place-items-center pt-[125px] min-h-[calc(100vh-85px)] justify-center align-middle mb-[100px]">
      <div className="grid place-items-center">
        <Image
          src="/LP_NERO.png"
          alt="logo"
          width={100}
          height={100}
          priority
        />
        <p className="uppercase mt-[60px] tracking-widest font-thin">
          <span className="font-normal">LP</span> Studio di architettura
        </p>
      </div>

      <div className="sm:flex sm:items-center sm:justify-between sm:min-w-[600px]">
        <div className="sm:mb-0 mb-[50px] grid grid-cols-2 mt-[50px]">
          <Image
            className=""
            src="/QR_CODE.png"
            alt="logo"
            width={100}
            height={100}
            priority
          />
          <div>
            <h2 className="text-sm font-thin mb-2">Via Belsito 17</h2>
            <h2 className="text-sm font-thin mb-2">80123 Napoli - Italia</h2>
            <h2 className="text-sm font-thin mb-2">3397468046</h2>
            <h2 className="text-sm font-thin mb-2">info@lpstudio.com</h2>
          </div>
        </div>

        <div className="max-w-sm min-w-[300px] mt-[50px]">
          <h2 className="text-base mt-5 mb-5 font-thin">
            Entra in contatto con lo studio
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
