import Image from "next/image";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar/indext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Logo />
      <SearchBar />
    </main>
  );
}
