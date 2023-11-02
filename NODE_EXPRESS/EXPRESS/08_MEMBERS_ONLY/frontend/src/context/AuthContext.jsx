/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios';
const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const authURL = '/api/messages/auth/status';
    const logOutURL = '/api/messages/auth/logout';



    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) =>{
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () =>{
            resolve(fileReader.result)
          }
          fileReader.onerror = (error) =>{
            reject(error)
          }
        })
      }

    const checkAuthentication = () => {
        try {
            axios.get(authURL, { withCredentials: true })
                .then(response => {
                    setIsAuthenticated(response.data.isAuthenticated)
                    if (response.data.user) {
                        setUserData(response.data.user.username)
                        setUserInfo(response.data.user)
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log('failed to get credentials', error)
        }
    }



    const logOut = () => {
        try {
            axios.get(logOutURL, { withCredentials: true })
                .then(response => {
                    console.log(response.data);
                    setIsAuthenticated(false);

                })
                .catch(error => console.log(error));
        } catch (error) {
            console.log('could not log out', error);
        }
    }

    useEffect(() => {
        checkAuthentication();
    }, [isAuthenticated])


    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            checkAuthentication,
            logOut,
            userData,
            userInfo,
            setIsAuthenticated,
            convertToBase64
        }}>
            {children}
        </AuthContext.Provider>
    );
}