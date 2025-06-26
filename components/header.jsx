import React from 'react'
const Header = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
<<<<<<< HEAD
//comment
=======

// Made by Devansh SIngh
>>>>>>> 1e79be50ce692d0c9cf481a346801a46cc3feb2c
