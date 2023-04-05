import React from 'react';

export default function HomePage() {
  const handleLogout = async () => {
    const response = await fetch('/logout');
    window.location.href = `${response.logoutUrl}&returnTo=${window.location.origin}`;
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our trading card website</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

