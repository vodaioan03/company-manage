// import { useContext, useEffect, useState } from 'react';
// import { Context } from '../Context';
import './Pages.css'

export default function Dashboard(){
  // const { state, setState } = useContext(Context);
  return (
    <main>
      <div className="flex mt-[-0.5rem] text-[var(--gray)] gap-2">
        <p>TeamSync</p>
        <p>&#8226;</p>
        <p>CompanyName</p>
        <p>&#8226;</p>
        <p className='text-[var(--text)]'>Dashboard</p>
      </div>
      <h2>Dashboard</h2>

    </main>
  )
}