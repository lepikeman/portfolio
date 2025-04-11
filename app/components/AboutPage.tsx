import Image from "next/image";
import githubLogo from "@/app/assets/github-logo.png";
import linkedinLogo from "@/app/assets/linkedin.png";

//Components
import Techno from "./Techno";

export default function AboutPage() {
  const selectedTechnologies = [
    "React",
    "Vue.js",
    "Next.js",
    "Tailwind",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MySQL",
    "Docker",
  ];
  return (
    <main className="hero min-h-[100dvh] items-center">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <div className="flex justify-center items-center gap-2 bg-base-100 rounded-3xl py-2 px-6 mx-auto w-fit mb-6">
            <p className="text-sm">Available for work</p>
            <div className="rounded-full w-3 h-3 bg-green-500 shadow-green-500/80 animate-pulse shadow-[0_0_8px_2px]"></div>
          </div>
          <h1 className="text-primary text-5xl md:text-7xl font-extrabold mb-6">
            Axel Xhaflaire
          </h1>
          <p className="text-lg md:text-xl text-base-content mb-6">
            Fullstack Developper | From France | 26yr old
          </p>
          <div>
            <h2 className="text-2xl">Technologies</h2>
            <Techno
              technologies={selectedTechnologies}
              className="justify-center my-4"
              iconSize="lg"
            />
          </div>
          <div className="flex justify-center gap-6 mb-10">
            <a
              href="https://github.com/lepikeman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110"
            >
              <Image src={githubLogo} alt="github-logo" width={35} />
            </a>
            <a
              href="https://linkedin.com/in/xhaflaireaxel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110"
            >
              <Image src={linkedinLogo} alt="linkedin-logo" width={35} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
