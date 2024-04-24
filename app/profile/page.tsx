"use client";
import Navbar from "../components/navbar";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession();
console.log(session)
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <Navbar />
    {session ? (
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to your profile</h1>
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
              src={session.user?.image as string}
              alt="Profile Image"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
        </div>
        <p className="text-lg mt-5">Logged in as {session.user?.email}</p>
      </div>
    ) : (
      signIn()
    )}
  </div>
  );
};

export default Profile;
