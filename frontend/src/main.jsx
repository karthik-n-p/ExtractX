import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/UserPages/Login';
import SignUpPage from './pages/UserPages/SignUp';
import AuthContext from './pages/UserPages/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from './pages/UserPages/firebase-auth';

import QuestionPage from './pages/UserPages/Convert';
import { ChakraProvider } from '@chakra-ui/react';

import Landing from './pages/UserPages/Landing';

import Header from './components/landing-page/header';



import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    normal: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    semibold: 'Poppins-SemiBold',
  },
  colors: {
    bg: '#fff',
    btng: '#2EC866',
    grey2: '#718096',
    white: '#FFFFFF',
    txtw: '#FFFFFF',
    txtg: '#C7C9D3',
    grey1: '#A0AEC0',
    txtb: '#000000',
  },
});

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState('');
  const [isadmin, setIsadmin] = useState(false);

  useEffect(() => {
    const storedAuthData = localStorage.getItem('authData');
   
    if (storedAuthData) {
      const authData = JSON.parse(storedAuthData);
      console.log("authData",authData)
      setIsRegistered(true);
      setUsername(authData.username);
      setIsadmin(authData.isadmin);
    }
  }, []);

  const handleSignupSuccess = async (userdata, isAdmin) => {
    setIsadmin(isAdmin);

    try {
      const user = auth.currentUser;
      const isadmin = isAdmin;
      if (user) {
        const userDoc = await getDoc(doc(firestore, 'username', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUsername(userData.username);
          setIsRegistered(true);
       
          localStorage.setItem('authData', JSON.stringify({ username: user.displayName,uid:user.uid, isadmin: isAdmin }));
        }
      }
    } catch (error) {
      setIsRegistered(false);
      console.log(error);
    }

  };

  const afterlogout = () => {
    setIsRegistered(false);
    setUsername('');
    setIsadmin(false);

    localStorage.removeItem('authData');
  };

  return (
    <React.StrictMode>
      <AuthContext.Provider
        value={{
          isadmin: isadmin,
          isRegistered: isRegistered,
          setIsRegistered: setIsRegistered,
          username: username,
          handleSignupSuccess: handleSignupSuccess,
          afterlogout: afterlogout
        }}
      >
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <div>
              <Header/>
            </div>
        
            <Routes>
              <Route path='/convert' element={<QuestionPage />} />
              <Route path="/" element={<Landing />} />
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/signup' element={<SignUpPage/>}/>
             
            </Routes>
          </ChakraProvider>
        </BrowserRouter>
      </AuthContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
