import { Routes, Route } from 'react-router-dom'
import { useEffect, useContext, Suspense, lazy } from 'react'
import axios from 'axios'
import { Context } from './Context'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
// import Toast from './components/Toast'
const Account = lazy(() => import('./pages/auth/Account'))
const Login = lazy(() => import('./pages/auth/Login'))
const Register = lazy(() => import('./pages/auth/Register'))
const Messages = lazy(() => import('./pages/messages/Messages'))
const Settings = lazy(() => import('./pages/Settings'))
const Help = lazy(() => import('./pages/Help'))
const Schedule = lazy(() => import('./pages/Schedule'))
const Reports = lazy(() => import('./pages/Reports'))
const NotFound = lazy(() => import('./pages/NotFound'))


axios.defaults.baseURL = 'http://192.168.1.10:8080' 
axios.defaults.withCredentials = true;

export default function App() { 
  const { state, setState } = useContext(Context);
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      axios.get('/users/me', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
      .then((response: any) =>{
        setState({
          ...state,
          user:response.data,
          toast: {text:`Hello, ${response.data.username}!`,success:true}})
      })
    }
  }, [])
  return (
      <div className='flex'>
          <Sidebar />
          {/* <Toast /> */}
          <Suspense fallback={
          <main className="fixed z-50 top-0 h-screen w-screen left-0 centerAll"> 
            <style>
              {`
              .loader {
                width: 50px;
                height: 50px;
                position: relative;
                z-index: 1;
                transform: translateX(-50%);
              }
              .loader::before,.loader::after {
                content: '';
                position: absolute;
                width: inherit;
                height: inherit;
                border-radius: 50%;
                animation: loader 1s infinite cubic-bezier(0.77,0,0.175,1);
              }
              .loader::before { background-color: var(--text) }
              .loader::after { background-color: var(--primary); animation-delay: 0.5s; }
              @keyframes loader {
                0%, 100% {  left: 35px; }
                25% { transform: scale(.3);  }
                50% {  left: 0%; }
                75% {  transform: scale(1);  }
              }
              `}
            </style>
            <div className="loader"></div>
          </main>}>

          <div className='h-full ml-auto transition-all duration-300' style={{width: state.menuOpen?'calc(95vw - 12rem)':'calc(100vw - var(--sidebar-offset))'}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/employees" element={<Dashboard />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/reports" element={<Reports />} />

              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          </Suspense>
      </div>
  )
}
