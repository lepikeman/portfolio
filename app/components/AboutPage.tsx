import Image from "next/image";
import githubLogo from "@/app/assets/github-logo.png";
import linkedinLogo from "@/app/assets/linkedin.png";

//Components
import Techno from "./Techno";

export default function AboutPage() {
  return (
    <main className="hero min-h-screen px-4">
      
      <div className="hero-content text-center">
        <div className="max-w-3xl ">
          <h1 className="text-primary text-7xl font-extrabold mb-6">
            Axel Xhaflaire
          </h1>
          <p className="text-lg md:text-xl text-base-content mb-6">
            Fullstack Developper | From France | 26yr old
          </p>
          <Techno />
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
              href="https://linkedin.com/"
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
