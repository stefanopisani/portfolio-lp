import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: any) {
  return (
    <section
      className="cursor-pointer w-auto sm:max-w-[300px] sm:col-span-1 mb-[50px] sm:mb-0"
      key={project.id}
    >
      <Link href={`/projects/${project.id}`}>
        <Image
          src={`${project.image}`}
          alt="A London skyscraper"
          className="sm:h-[300px] h-auto w-auto grayscale-[75%] hover:grayscale-0 rounded-sm"
          height={0}
          width={0}
          loading="eager"
          priority
          unoptimized
          onLoad={() => console.log("image loaded")}
        />
      </Link>
      <h2 className="text-sm tracking-widest text-center uppercase mt-2">
        {project.name}
      </h2>
      <h2 className="text-xs tracking-wider font-extralight text-center uppercase">
        {project.info}
      </h2>
    </section>
  );
}
