import React from 'react';

export default function HomePage() {
<<<<<<< HEAD
  const handleLogout = async () => {
    const response = await fetch('/logout');
    window.location.href = `${response.logoutUrl}&returnTo=${window.location.origin}`;
  };

=======
>>>>>>> 29b1f2b1 (added search/filter for product page)
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our trading card website</p>
<<<<<<< HEAD
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

=======
    </div>
  );
}
>>>>>>> 29b1f2b1 (added search/filter for product page)
