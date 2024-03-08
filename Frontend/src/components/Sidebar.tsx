import { useContext } from 'react'
import { Context } from '../Context';
import { NavLink } from 'react-router-dom'
// import logo from '/public/logo.png'
import './Components.css'
import Logo from './Logo'

export default function Sidebar(){
    const {state, setState} = useContext(Context)
    const { menuOpen } = state;

    function toggleTheme(){
        const newTheme = (state.theme =='dark'?'light':'dark');
        document.documentElement.setAttribute('data-theme', newTheme );
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bg'));
        setState({...state, theme: newTheme});
    }

    function getActiveItem({isActive}: {isActive: boolean}){ return isActive ? 'sidebar-item active' : 'sidebar-item' }
    return ( 
        <aside style={{transform: menuOpen? 'translateX(0)':'translateX(calc(var(--sidebar-offset) - 100%))', height: '100dvh', borderRadius: '0 var(--radius) var(--radius) 0'}}
            className='fixed p-[var(--padding)] gap-2 w-[calc(12rem+5vw)] top-0 left-0 flex flex-col transition-all duration-300 bg-[var(--bg-darker)] z-[99]' 
            onClick={() => { if(!menuOpen) setState({...state, menuOpen: !menuOpen})}}
        >
        
            {/* toggle menu */}
            <button onClick={() => setState({...state, menuOpen: !menuOpen})}
                className="absolute right-[-1.25rem] top-[1.3rem] bg-[var(--bg)] h-10 w-10 centerAll rounded-full"
            >
                <svg style={{transform: menuOpen?"rotate(0deg)":'rotate(-180deg)', transition: 'all 0.4s 0.3s var(--timing)'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--gray)" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </button>

            {/* LOGO */}
            <div className="w-full h-8 mt-3 ml-2 flex gap-2">
                {/* Vrei se te mint ii urat rau LOGO-ul ala */}
                {/* <img src={logo} alt="logo" className="w-8 h-8" /> */}

                <Logo /> {/* placeholder pentru cand o sa fie ok LOGO */}
                <h3 className='mt-[-3px] font-medium    ' style={{textShadow: '-1.5px 0px 0 var(--primary)'}}>TeamSync</h3>
            </div>

            <p className='text-[var(--gray)] mt-4 ml-2'>Main</p>

            {/* Dashboard */}
            <NavLink to='/' className={getActiveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
                <p>Dashboard</p>
            </NavLink>

            {/* Messages */}
            <NavLink to='/messages' className={getActiveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>
                <p>Messages</p>

                <div className="ping ml-auto h-2 w-2 bg-[var(--primary)] rounded-full"></div>
            </NavLink> 

            {/* Employees */}
            <NavLink to='/employees' className={getActiveItem}>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                    <svg style={{position: 'absolute', top:2, right:-3, zIndex: -1}} xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                </div>
                <p>Employees</p>
            </NavLink>

            {/* Schedule */}
            <NavLink to='/schedule' className={getActiveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mb-[1px]"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>
                <p>Schedule</p>
            </NavLink>

            {/* Reports */}
            <NavLink to='/reports' className={getActiveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg>
                <p>Reports</p>
            </NavLink>

            <p className='text-[var(--gray)] ml-2'>User</p>

            {/* Account */}
            <NavLink to='/account' className={getActiveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                <p>Account</p>
            </NavLink>

            {/* Settings */}
            <NavLink to='/settings' className={getActiveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                <p>Settings</p>
            </NavLink>

            {/* Help */}
            <NavLink to='/help' className={getActiveItem}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--bg-darker)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
                <p>Help</p>
            </NavLink>



            {/* toggle theme */}
            <div className='relative h-12 mt-auto'>
                <button className="flex w-full h-12 mt-auto p-1 bg-[var(--bg)] absolute rounded-[calc(var(--radius)+4px)] overflow-hidden"
                    onClick={toggleTheme}
                >
                    <div className="absolute w-[50%] bg-[var(--gray-thin)] h-10 mx-1 rounded-[var(--radius)]"
                        style={{left: state.theme=='dark'?'calc(50% - 0.5rem)':'0', transition: 'all 0.3s 0.2s var(--timing)'}}
                    ></div>

                    <div className="centerAll w-full h-full" style={{fontWeight: state.theme=="light"?600:400}}>Light</div>
                    <div className="centerAll w-full h-full" style={{fontWeight: state.theme=="dark"?600:400}}>Dark</div>
                </button>
            </div>
        </aside>
    )
}