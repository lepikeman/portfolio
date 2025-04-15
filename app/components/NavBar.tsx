import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="relative flex justify-center h-10 space-x-2.5 z-10">
      <Link href={"/"}>Acceuil</Link>
      <Link href={"/tarif"}>Tarif</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  );
}
