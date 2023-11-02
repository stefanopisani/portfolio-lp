import React, { useEffect, useState } from "react";

type Props = {};

const isBrowser = () => typeof window !== "undefined";
const larg = isBrowser() && window.innerWidth;

const useCheckMobile = () => {
  const [width, setWidth] = useState(larg);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (typeof width !== "boolean") {
    return width <= 768;
  }
};

export default useCheckMobile;
