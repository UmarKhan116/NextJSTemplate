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
          <button onClick={handleSignOut}>Sign out</button>

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
