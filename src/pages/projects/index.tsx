import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useCheckMobile from "../../../hooks/useCheckMobile";

function Projects() {
  const [results, setResults] = useState([]);
  const isMobile = useCheckMobile();

  useEffect(() => {
    (async function run() {
      const queryParam = isMobile ? "mobile" : "desktop";
      const results = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({
          expression: `folder=Portfolio-lp/${queryParam}`,
        }),
      }).then((r) => r.json());
      const images = results.resources.map((resource: any) => {
        return {
          id: resource.asset_id,
          title: resource.public_id,
          image: resource.secure_url,
          width: resource.width,
          height: resource.height,
        };
      });
      console.log(images);
      setResults(images);
    })();
  }, [isMobile]);

  return (
    <div className="grid place-items-center">
      <div className="mt-[120px] max-w-6xl flex flex-wrap justify-between px-10">
        {results.map((project: any) => (
          <section
            className="mb-10 cursor-pointer sm:max-w-[300px]"
            key={project.id}
          >
            <Link href={`/projects/${project.id}`}>
              <Image
                src={`${project.image}`}
                alt="A London skyscraper"
                className="h-[400px] sm:w-[300px] w-auto"
                height={0}
                width={0}
                unoptimized
              />
            </Link>
            <h2 className="text-lg tracking-wider text-center uppercase mt-2">
              {project.title}
            </h2>
            <h2 className="p-3 sm:p-1 font-extralight text-center uppercase">
              Lorem ipsum dolor sit amet
            </h2>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Projects;
