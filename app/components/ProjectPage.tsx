import AccordionProjects from "./accordionProject";

export default function ProjectPage() {
  return (
    <div className="min-w-[100svw] min-h-[100svh]">
      <div className="text-center p-10">
        <h1 className="text-6xl">Projects</h1>
      </div>
      <div className="">
        <AccordionProjects />
      </div>
    </div>
  );
}
