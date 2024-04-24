"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();


  return (
    <div>
      <Navbar />
      {/* {
        session ? (<div>This is a profile page</div>): signIn()
      } */}
      <div>
        <h1>This is a profile page</h1>
      </div>
      
    </div>
  );
};

export default Profile;
