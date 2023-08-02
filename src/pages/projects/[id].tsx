import React from "react";
import { slides } from "@/components/Hero";
import { useRouter } from "next/router";

type Props = {};

function ProjectPage() {
  const router = useRouter();
  const projectIndex = Number(router.query.id);
  const project = slides[projectIndex];

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.url} alt="" />
    </div>
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
