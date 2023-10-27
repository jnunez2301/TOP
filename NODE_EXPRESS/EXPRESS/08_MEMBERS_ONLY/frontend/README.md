# Members Only Club

On this app you should be able to see messages But only those who are registered can see the username and date of adding it.

- Connect Node/Express/Mongoose with the FrontEnd*
- Display all messages
- Register and Login
- Create context for logged users
- If you click on profile it SHOULD   display the user info and all his messages.
- USERS MUST NOT HAVE SPACES!!!!!
- PASSWORDS MUST NOT HAVE SPACES!!!

### Create Context

```
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
```

### Wrap your App with the Provider

```
import React from 'react';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      {/* Your app components go here */}
    </AuthProvider>
  );
}

```
### Use useContext in Components

```
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function SomeComponent() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  // Use isLoggedIn, login, and logout as needed
}

```
