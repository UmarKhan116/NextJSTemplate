"use client";
import Navbar from "../components/navbar";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

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
          <Image src={session.user?.image as string} 
                        className="h-8 w-8 rounded-full"
                        alt="img" 
                        width={100}
                        height={100}
                        />
          <p className="text-lg">Logged in as {session.user?.email}</p>
        </div>
      ) : (
        signIn()
      )}
    </div>
  );
};

export default Profile;
