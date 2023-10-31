/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios';
const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const authURL = 'http://localhost:3000/api/messages/auth/status';
    const logOutURL = 'http://localhost:3000/api/messages/auth/logout';

  

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [ userData, setUserData ] = useState([]);

    const checkAuthentication = async () => {
        try{
            const response = await axios.get(authURL, {withCredentials: true});
            console.log(response.data);
            setIsAuthenticated(response.data.isAuthenticated)
            if (response.data.user) {
                setUserData(response.data.user.username);
            }
        }catch(error){
            console.error('Error checking auth status', error);
        }
    };

    const logOut = () => {
        try{
            axios.get(logOutURL, { withCredentials: true })
            .then(response => { 
                console.log(response.data);
                window.location.reload();
             })
            .catch(error => console.log(error));
        }catch(error){
            console.log('could not log out', error);
        }
    }

    useEffect(() => {
        checkAuthentication();
      
      }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, checkAuthentication, logOut, userData }}>
          {children}
        </AuthContext.Provider>
      );
}