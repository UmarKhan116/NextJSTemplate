"use client";
import Navbar from "../components/navbar";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();


  return (
    <div>
      <Navbar />
      {
       session ? (<div>This is a profile page</div>): signIn()
      }
     {/* <div>This is a profile page</div> */}
      
    </div>
  );
};

export default Profile;
