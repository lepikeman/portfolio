export default function Home() {
  return (
    <main
      className="flex-col
    bg-secondary 
    w-3xl 
    h-100 
    rounded-3xl 
    m-3 
    justify-items-center
    space-y-8 
    content-center"
    >
      <h3>Available To Work</h3>
      <h1 className="text-6xl">Axel Xhaflaire</h1>
      <h2 className="text-3xl">
        I&apos;m a{" "}
        <span className="text-important font-bold">Fullstack Developper</span>
      </h2>

      <div className="flex gap-6">
        <p>French & English</p> <p>France</p>
        <p>Freelance</p>
      </div>
      <div className="flex gap-8">
        <button className="bg-important w-3xs h-10 rounded-3xl text-black font-bold">
          Hire Me
        </button>
        <button className="bg-main w-3xs h-10 rounded-3xl font-bold">
          GitHub
        </button>
      </div>
    </main>
  );
}
