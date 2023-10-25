import React, { useContext, useEffect } from "react";
import { slidesMobile } from "..";
import { useRouter } from "next/router";
import AppContext from "@/context/AppContext";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

type Props = {};

function ProjectPage() {
  const { menuActive, setNavigation } = useContext(AppContext);
  const router = useRouter();
  const projectIndex = Number(router.query.id);
  const project = slidesMobile.find((slide) => slide.id === projectIndex);

  useEffect(() => {
    setNavigation(true);
  }, []);
  return (
    <>
      <h1>{project?.title}</h1>
      <img src={project?.url} alt="" />
    </>
  );
}

export default ProjectPage;

// export async function getServerSideProps() {
//fetch project and pass it as props:
// const userData = await fetch('https://api.example.com/userdata')
// const userJSON = await userData.json()

// return {
//   props: {
//     projects: userJSON
//   }
// }
//   }
