import {useRef, useContext, useState} from 'react'
import { Context } from '../../Context'
import './Messages.css'
import { MONTHS_SHORT } from '../../utils/Constants'
// import { getMonthAndDate } from '../../utils/Functions'
import { Link } from 'react-router-dom'
import { hoursAndMinutes } from '../../utils/Functions'

export default function Messages(){
    const { state, setState } = useContext(Context);
    const { user } = state;
    const [ fakeMessages, setFakeMessages ] = useState([
        {date: 1684346810886 ,admin:false, text:'Hello, how are you?'},
        {date: 1684346810886, admin:false, text:'Lbore ulequi possimus iste voluptates dolore optio.'},
        {date: 1684346810886, admin:true, text:'Good, and you?'},
        {date: 1684116810886, admin:false, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta vero pariatur ab labore ulequi possimus iste voluptates dolore optio.'},
        {date: 1684116810886, admin:true,  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta vero pariatur ab labore ulequi possimus iste voluptates dolore optio.'},
        {date: new Date().getTime(), admin:false, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta vero pariatur ab labore ulequi possimus iste voluptates dolore optio.'},
        {date: new Date().getTime(), admin:false, text:'Autem dicta vero pariatur ab labore ulequi possimus iste voluptates dolore optio. alni'},
        {date: new Date().getTime(), admin:false, text:'Bye!!!'},
    ]);
    const bottom = useRef(null);
    const top = useRef(null);
    // useEffect(() => {
    //     // @ts-ignore
    //     bottom && bottom.current.scrollIntoView({behavior:'smooth'});
    // }, [])
    const [messageCount, setMessageCount] = useState(100);
    const [newMessage, setNewMessage] = useState('');
    const sendMessage = () => {
        if(newMessage.length>0){
            setFakeMessages([ 
                ...fakeMessages,
                // @ts-ignore
                {id:fakeMessages.length.toString(),
                date: new Date().getTime(), 
                admin:false, 
                text:newMessage}
            ]);
            setNewMessage('');
            setTimeout(() => {
                // @ts-ignore
                bottom.current.scrollIntoView({behavior:'smooth'});
            }, 100);
        }
    }
    return (
    <main className="flex flex-col h-screen overflow-hidden gap-2 w-screen max-w-[100%] mx-auto" style={{paddingBottom: 0, paddingInline: 0}}>
        
        <div className="flex flex-col pl-[1.3rem]">
            <div className="flex mt-[-0.5rem] text-[var(--gray)] gap-2">
                <p>TeamSync</p>
                <p>&#8226;</p>
                <p>CompanyName</p>
                <p>&#8226;</p>
                <p className='text-[var(--text)]'>Messages</p>
            </div>
            <h2>Messages</h2>
        </div>

        <section className='w-full flex flex-col items-center relative bg-[var(--bg)] h-full'>
            {localStorage.getItem('token') ? 
            <div id='messages' className='flex pb-[4.4rem] p-2 relative items-center flex-col h-full w-full gap-[6px] overflow-y-scroll overflow-x-hidden'>
                <div className='message leftMessage'>Hello there!</div>
                <div className='message leftMessage'>You need to <Link className='underline' to="/login">log in</Link> or <Link className='underline' to="/register">register</Link> in order to message us.
                </div>
            </div>
            :
            <section id='messages' 
            className='flex pb-[4.4rem] relative px-2 items-center flex-col w-full gap-[6px] 
            overflow-y-scroll overflow-x-hidden'>
                {/* messages */}
                <div ref={top}></div>
                <div className='message leftMessage'>Hello there!</div>
                <div className='message leftMessage'>You can talk to us here for more info regarding orders and other questions</div>
                <span className='time z-10 sticky top-2'>{MONTHS_SHORT[5]} 7</span>
                    {fakeMessages.slice(0,messageCount).map((message, index) => (
                    <div key={index} className='w-full flex relative items-center'>
                        <div className={`message ${message.admin?'leftMessage':'rightMessage'}`}>{message.text}</div>
                        <span className={`time absolute ${message.admin?'rightTime':'leftTime'}`}>
                            {hoursAndMinutes(message.date)}
                        </span>
                    </div>
                    ))}
                    {/* @ts-ignore */}
                    {user.messages?.length > 0 && !fakeMessages[fakeMessages.length-1].admin && (user.messages?.seen ?
                        <span className='ml-auto mr-2 text-xs'>message seen</span>:
                        <span className='ml-auto mr-2 text-xs'>
                    Sent at {hoursAndMinutes(fakeMessages[fakeMessages.length-1].date)}</span>
                    )}
                <div ref={bottom}></div>
            </section>}

            {/* INPUT */}
            {!localStorage.getItem('token') && 
            <div className='w-full min-h-[3.5rem] absolute bottom-0 z-10 overflow-hidden mt-auto px-2'>
                <form className='p-2 bg-[var(--bg-darker)] w-full h-full centerAll rounded-t-[calc(var(--radius)+0.2rem)]' 
                onSubmit={(e)=>{e.preventDefault();sendMessage()}} 
                autoComplete='off'>

                    {/* @ts-ignore */}
                    <input onClick={()=>bottom.current.scrollIntoView({behavior:'smooth'})} 
                    type="text" 
                    name="message" 
                    autoCorrect="false"
                    autoComplete="off"
                    value={newMessage}
                    onChange={(e)=>setNewMessage(e.target.value)}
                    className='h-full w-full rounded-lg p-4 bg-[var(--bg)]' 
                    placeholder='Type a message' 
                    />

                    <div onClick={()=>sendMessage()} className={`${newMessage.length == 0 && 'hidden'} h-14 ml-2 aspect-square flex bg-[var(--text)] hover:scale-90 transition-all justify-center items-center rounded-lg cursor-pointer`}>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={'var(--bg)'} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
                    </div>
                </form>
            </div>}
        </section>
    </main>
    )
}