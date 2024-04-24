"use client";
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
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold mb-4">Welcome to your profile</h1>
          <p className="text-lg">Logged in as {session.user?.email}</p>
        </div>
      ) : (
        signIn()
      )}
    </div>
  );
};

export default Profile;
