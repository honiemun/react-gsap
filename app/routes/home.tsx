import type { Route } from "./+types/home";

// Features
import Header from "~/features/project/header/header";
import Sections from "~/features/project/sections/sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // Descriptions use ""
  return (
    <>
      <Header />
      <Sections />
    </>
  );
}
