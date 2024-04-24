"use client"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  if (session) {
    return (
      
       <div className="text-center mt-8">
          <h1 className="text-2xl font-bold mb-4">Welcome to the home page</h1><br />
          <pre>Signed in as {session.user?.email}</pre>
          <button  className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition duration-300" onClick={handleSignOut}>Sign out</button>

          </div>
        
      
    );
  }

  return (
    <>
      Not signed in <br></br>
      <button onClick={handleSignIn}>Sign in</button>
    </>
  );
}
