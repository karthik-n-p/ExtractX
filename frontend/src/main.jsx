import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/UserPages/Login';
import SignUpPage from './pages/UserPages/SignUp';
import AuthContext from './pages/UserPages/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from './pages/UserPages/firebase-auth';
import PracQuest from './pages/UserPages/Practice';
import QuestionPage from './pages/UserPages/Question';
import { ChakraProvider } from '@chakra-ui/react';

import Landing from './pages/UserPages/Landing';
import Sidebar from './components/landing-page/Navbar';
import Header from './components/landing-page/header';
import PracQues from './pages/UserPages/Practice';
import ResourcePage from './pages/UserPages/Resources';
import CompFun from './pages/UserPages/CompetitionPageUser';
import CompQuesPage from './pages/UserPages/CompQues';
import Admincomp from './pages/AdminPages/AdminCompetition';
import CreateCompetitionForm from './pages/AdminPages/AdminCreateComp';
import CreateQuestionForm from './pages/AdminPages/QuestionCreation';
import Adminquestion from './pages/AdminPages/AdminQuestion';
import AdminDashboard from './pages/AdminPages/AdminDashboard';
import EditContest from './pages/AdminPages/EditContest';
import CompDesc from './pages/UserPages/CompetitionDesc';
import Unauthorized from './pages/AdminPages/Unauthorized';
import EditQuestionForm from './pages/AdminPages/EditQuestion';
import { extendTheme } from '@chakra-ui/react';
import Profile from './pages/UserPages/ProfilePage';
import Chatbot from './pages/UserPages/Forum';

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    normal: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    semibold: 'Poppins-SemiBold',
  },
  colors: {
    bg: '#1F1D2B',
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
              <Sidebar />
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<QuestionPage />} />
              {/* <Route path="/login" element={<LoginPage handleSignupSuccess={handleSignupSuccess} />} />
              <Route path= "/signup" element={<SignUpPage handleSignupSuccess={handleSignupSuccess} />} />
              <Route path= '/profile' element={<Profile/>}/>
              <Route path=  "/chat" element={<Chatbot/>}/>
              <Route path=  "/chat" element={<Chatbot/>}/>
              <Route path="/practice" element={<PracQues />}/>
              <Route path= "/question" element={<QuestionPage />} />
              <Route path="/resource" element={<ResourcePage />} />
              <Route path= "/competition" element={<CompFun />} />
              <Route path= "/compdesc/:competitionId" element={<CompDesc />} />
              <Route path= "/compques/:competitionId" element={<CompQuesPage />} />
              <Route path="/question/:competitionId/:questionId" element={<QuestionPage/>} />


              <Route path="/admin" element={isadmin ? <AdminDashboard /> : <Unauthorized />} />
              <Route path="/admincompetition" element={isadmin ? <Admincomp /> : <Unauthorized />} />
              <Route path="/createcomp" element={isadmin ? <CreateCompetitionForm /> : <Unauthorized />} />
              <Route path="/adminquestion/:competitionId" element={isadmin ? <Adminquestion /> : <Unauthorized />} />
              <Route path="/createques/:competitionId" element={isadmin ? <CreateQuestionForm /> : <Unauthorized />} />
              <Route path="/editques/:competitionId/:questionId" element={isadmin ? <EditQuestionForm /> : <Unauthorized />} />
              <Route path="/editcomp/:competitionId" element={isadmin ? <EditContest /> : <Unauthorized />} /> */}
            </Routes>
          </ChakraProvider>
        </BrowserRouter>
      </AuthContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
