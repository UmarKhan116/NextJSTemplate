"use client "
import Navbar from "../components/navbar";
import { useSession } from "next-auth/react";

const Profile = () => {

  // const session = useSession()
  
  //  console.log(session)
  return (
    <div>
        <Navbar/>
      <div>This is a profile page</div>
      
    </div>
  );
};

export default Profile;



