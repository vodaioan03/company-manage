import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context'
import './Auth.css'
import Button from '../../components/Button'

export default function Account(){
    const { state, setState } = useContext(Context);
    const { user } = state;
    const [ isVisible , setIsVisible ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(!user.username){
            navigate('/login');
            // setState({...state, toast:{text:"Login to manage your account", success: false}})
        }
        else setIsVisible(true);
    }, [])

    function logOut(){
        axios.post('/users/logout')
        .then(() =>{
            setState({
                ...state, 
                toast:{text: `Logged out of ${user.username.split(' ')[0]}'s account`, success: true},
                user:{username:"", email:"", avatar:""} })
            localStorage.removeItem('token');
            navigate('/login');
        })
        .catch(err => {
            setState({...state, toast:{text:err.message, success: false}})
        })
    }

    if(isVisible) return (
    <main className="flex flex-col gap-2">
        <div className="flex flex-col">
            <div className="flex mt-[-0.5rem] text-[var(--gray)] gap-2">
                <p>TeamSync</p>
                <p>&#8226;</p>
                <p className='text-[var(--text)]'>Dashboard</p>
            </div>
            <h2>Dashboard</h2>
        </div>
        {/* Avatar */}
        <div className="flex items-center gap-3 h-24">
            <div className="w-[5rem] h-[5rem] min-w-[5rem] flex bg-[var(--primary)]
            centerAll rounded-full overflow-hidden">
                <h1 className='capitalize text-white'>{user.username.slice(0,1)}</h1>
            </div> 
            {user.username &&               
            <div className='flex flex-col text-left'>
                <h2>{user.username}</h2>
                <p>{user.email}</p>
            </div>}
        </div>
        
        {/* Log out */}
        <span onClick={() => logOut()} className='mt-auto mx-auto min-w-[12rem] max-w-[20rem] w-full'>
            <Button text="Log out"/>
        </span>
    </main>
    )
}