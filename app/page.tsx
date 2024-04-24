import Login from "./components/login";
import Navbar from "./components/navbar";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  
  return (
    <main>
      <Navbar/>
      <Login/>
    </main>
  );
}
