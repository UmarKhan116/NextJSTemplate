"use client"
import Navbar from "../components/navbar";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      {session ? (
        <div>This is a profile page</div>
      ) : (
       signIn()
      )}
    </div>
  );
};

export default Profile;
