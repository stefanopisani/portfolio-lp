import Footer from "@/components/Footer";
import AppContext from "@/context/AppContext";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

type Props = {};

function About({}: Props) {
  const { setNavigation } = useContext(AppContext);
  useEffect(() => {
    setNavigation(true);
  }, []);

  return (
    <>
      <div className="grid place-items-center tracking-wide sm:tracking-wider text-base sm:text-lg font-thin text-justify leading-relaxed">
        <div className="mt-[150px] max-w-4xl px-3">
          <div className="grid place-items-center">
            <Image
              className="cursor-pointer"
              src="/LP_NERO.png"
              alt="logo"
              width={100}
              height={100}
              priority
            />
            <p className="uppercase mt-[60px] tracking-widest">
              <span className="font-normal">LP</span> Studio di architettura
            </p>
            <p className="mt-[60px]">
              LP è uno studio di Progettazione Architettonica con sede a Napoli,
              Italia. <br /> Fondato nel 2022 da Luca Pisani, si occupa di
              progettazione architettonica e urbana, interior design e product
              design. E’ formato da un gruppo multidisciplinare di
              professionisti che realizza progetti residenziali, commerciali,
              direzionali, aziendali e pubblici.
            </p>
          </div>
          <div className="grid place-items-center sm:hidden mt-[50px]">
            <span className="w-[30px] h-[0.2px] bg-black"></span>
          </div>

          <div className="mt-[50px] grid sm:grid-cols-3 sm:gap-[40px]">
            <Image
              className="sm:col-span-2 w-auto grayscale hover:grayscale-0 rounded-sm"
              src="/about/a1.jpg"
              alt="logo"
              height={0}
              width={0}
              unoptimized
            />
            <p className="sm:col-span-1 mt-5 sm:mt-0">
              LP sviluppa progetti accurati e rigorosi, rivolgendo particolare
              attenzione alla composizione architettonica e alla qualità
              estetica. <br />
              <p className="pt-[25px]">
                La sua architettura è fortemente caratterizzata dalla cura del
                dettaglio e dall’innovazione nei materiali e nelle forme
                architettoniche.
              </p>
            </p>
          </div>
          <div className="grid place-items-center sm:hidden mt-[50px]">
            <span className="w-[30px] h-[0.2px] bg-black"></span>
          </div>

          <div className="mt-[50px] grid sm:grid-cols-3 sm:gap-[40px]">
            <p className="sm:col-span-2">
              Un settore di progettazione importante per lo studio è legato
              all’ambito residenziale. In questi interventi il tema centrale è
              la rigenerazione urbana attraverso la ricostruzione o il retrofi
              tting del patrimonio immobiliare esistente.
              <br />
              <p className="pt-[25px]">
                L’ obiettivo che si pone è progettare edifi ci che riescano a
                dare un contributo positivo sia al processo di trasformazione
                urbana e sociale che al tema della sostenibilità ambientale
              </p>
            </p>
            <Image
              className="hidden sm:block sm:col-span-1 w-full mt-5 sm:mt-0 grayscale hover:grayscale-0 rounded-sm"
              src="/about/a2.jpg"
              alt="logo"
              height={100}
              width={0}
              unoptimized
            />
          </div>
          <div className="grid place-items-center sm:hidden mt-[50px]">
            <span className="w-[30px] h-[0.2px] bg-black"></span>
          </div>

          <p className="mt-[50px]">
            Lo studio è appassionato dalle soluzioni tipologiche miste
            commerciale-direzionale. L’attenzione progettuale si concentra
            sull’importanza della qualità degli ambienti di lavoro, della luce e
            dell’atmosfera, dei materiali e delle fi niture, con la
            consapevolezza che in un luogo che ci fa sentire a nostro agio
            riusciamo a lavorare meglio.
          </p>
          <div className="grid place-items-center sm:hidden mt-[50px]">
            <span className="w-[30px] h-[0.2px] bg-black"></span>
          </div>

          <div className="mt-[50px] grid sm:grid-cols-3 sm:gap-[40px]">
            <Image
              className="sm:col-span-2 w-full grayscale hover:grayscale-0 rounded-sm"
              src="/about/a4.jpg"
              alt="logo"
              height={0}
              width={0}
              unoptimized
            />
            <p className="sm:col-span-1 mt-5 sm:mt-0">
              L’aspirazione della ricerca progettuale riferita a tali amibiti è
              creare valore aggiunto attraverso la concezione degli spazi
              comuni, intesi come piccole piazze urbane coperte, luoghi di sosta
              e di incontro dove condividere, interagire, e far convergere
              competenze, dialogo e idee.
            </p>
          </div>
          <div className="grid place-items-center sm:hidden mt-[50px]">
            <span className="w-[30px] h-[0.2px] bg-black"></span>
          </div>

          <div>
            <div className="mt-[50px] grid sm:grid-cols-3 sm:gap-[40px]">
              <Image
                className="hidden sm:col-span-1 w-full grayscale hover:grayscale-0 rounded-sm"
                src="/about/a2.jpg"
                alt="logo"
                height={100}
                width={0}
                unoptimized
              />

              <p className="sm:col-span-2">
                Gli headquarters sono progettati per essere il manifesto
                aziendale. Lo sviluppo progettuale fa propri i valori identitari
                societari e culmina nel concetto di casa aziendale.
                <br />
                <p className="pt-[25px]">
                  I suoi progetti nascono da una profonda comprensione di ciò
                  che ogni singolo cliente desidera. Il dialogo è sempre
                  presente, poiché l’opera architettonica diventa parte
                  dell’identità di chi ne usufruisce. Questo processo di dialogo
                  e confronto mira alla soddisfazione di tutti i soggetti
                  attivamente coinvolti nel progetto: committenti e
                  utilizzatori, ma anche collaboratori, costruttori e
                  progettisti.
                </p>
              </p>
              <Image
                className="sm:col-span-1 hidden sm:block w-full grayscale hover:grayscale-0 rounded-sm"
                src="/about/a2.jpg"
                alt="logo"
                height={100}
                width={0}
                unoptimized
              />
            </div>
          </div>
          <div className="grid place-items-center sm:hidden mt-[50px]">
            <span className="w-[30px] h-[0.2px] bg-black"></span>
          </div>
          <div className="mt-[50px] grid sm:grid-cols-3 sm:gap-[40px]">
            <Image
              className="sm:col-span-1 w-full sm:mt-[50px] grayscale hover:grayscale-0 rounded-sm"
              src="/about/a3.PNG"
              alt="logo"
              height={0}
              width={0}
              unoptimized
            />
            <p className="sm:col-span-2 mt-5 sm:mt-0">
              <span className="font-light">Luca Pisani</span>
              <br />
              Laureato alla Federico II di Napoli, inizia a collaborare in studi
              di architettura già dai primi anni universitari, ritenendo la
              pratica e l’esperienza elementi fondamentali per la professione
              dell’architetto. Appassionato di architettura e design indirizza
              la sua ricerca professionale sulla progettazione architettonica in
              tutte le sue scale di grandezza. Fa esperienza nel campo della
              progettazione esecutiva di opere pubbliche collaborando con lo
              studio Smithbarracco per la stazione della metropolitana di
              Capodichino di Napoli. Affascinato dal mondo delle costruzioni,
              istaura un’assidua collaborazione con il costruttore Giuseppe Iesu
              che gli affi da il ruolo di Lead Architect per la sua società
              immobiliare: Iesu S.p.a. In questi anni segue una serie di opere
              private per imprenditori immobiliari: fabbricati residenziali,
              commerciali e industriali, supportando l’investimento immobiliare
              dallo studio di fattibilità fi no alla fase di progettazione
              esecutiva. Parallelamente ha avuto il piacere di progettare ville
              private, ristrutturazione di appartamenti residenziali ed esercizi
              commerciali.
            </p>
          </div>
          <div className="grid place-items-center sm:hidden mt-[50px]">
            <span className="w-[30px] h-[0.2px] bg-black"></span>
          </div>
          <div className="mt-[50px] tracking-wide">
            <p className="pb-5">
              <span className="font-extralight">Collaborazioni:</span>
              <br />
              Antonello De Leo, Lucia Ricci, Stefano Lacala, Alessandro Ruopolo,
              Mauro Maiellaro, Marco Imperatrice, Gianluca Micera, Stefano
              Pisani, Alfredo Foglia, Lorenzo Patitucci, Donatella De Falco.
            </p>
            <p>
              <span className="font-extralight">Principali Clienti:</span>
              <br />
              Magri Costruzioni s.r.l. &nbsp; Energy Drive S.r.l. &nbsp;Iesu
              S.p.A. &nbsp;Promec Immobiliare s.r.l. &nbsp;SM Property Solution
              s.rl. &nbsp;GRA restauri s.r.l. &nbsp;Music Innovation Hub S.p.A
              &nbsp;SAG Architettura s.r.l. &nbsp;B&B Immobiliare .s.r.l.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
