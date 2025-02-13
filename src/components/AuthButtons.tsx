
import React from 'react';
import { Button } from "@/components/ui/button";
import { useSessionContext, SessionContextType } from 'supertokens-auth-react/recipe/session';

const AuthButtons = () => {
  // Add proper typing to the session context
  const session = useSessionContext() as SessionContextType & {
    doesSessionExist: boolean;
  };

  const handleLogin = () => {
    // Add login logic here
    console.log("Login clicked");
  };

  const handleSignup = () => {
    // Add signup logic here
    console.log("Signup clicked");
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
  };

  if (session.loading) {
    return null;
  }

  return session.doesSessionExist ? (
    <Button 
      variant="outline"
      onClick={handleLogout}
      className="text-sm font-medium"
    >
      Sign Out
    </Button>
  ) : (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        onClick={handleLogin}
        className="text-sm font-medium"
      >
        Sign In
      </Button>
      <Button
        onClick={handleSignup}
        className="text-sm font-medium"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default AuthButtons;
