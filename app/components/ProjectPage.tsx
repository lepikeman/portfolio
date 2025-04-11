import AccordionProjects from "./accordionProject";

export default function ProjectPage() {
  return (
    <div className="min-w-[100dvw] min-h-[100dvh]">
      <div className="text-center p-10">
        <h1 className="text-6xl">Projects</h1>
      </div>
      <div className="">
        <AccordionProjects />
      </div>
    </div>
  );
}
