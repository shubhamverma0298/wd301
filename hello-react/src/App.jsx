import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskCard from './TaskCard'


function App() {
  const [count, setCount] = useState(0)
  return (
      <div>
       <h1 className='text-4xl font-bold  ml-10 mb-4 text-left flex-1'>Smarter Tasks</h1>
       <p className='text-left  ml-10 mb-4 font-semibold'>Project: Graduation Final Year Project (Revamp College Website)</p>
       <div className='flex justify-around  ml-10 mb-4 flex-1'>
       <div>
        <div className='border border-gray-300 p-6 rounded-2xl'><h2 className="text-3xl mb-4 font-bold">Pending</h2>
        <TaskCard title="Build react with pupilfirst and shubham verma" dueDate="10-10-24" assigneeName="Shubham verma"/>
        <TaskCard title="add ablog" dueDate="12-10*24" assigneeName="neha"/>
        <p className='text-gray-500 h-7 bg-gray-300 mt-4  cursor-pointer text-left '>+ New Task</p>
        </div>
        </div>
        
        <div>
        <div>
        <div className='flex justify-around ml-10 mb-4 flex-1'>
        <div className='border border-gray-300 p-6 rounded-2xl'><h2 className="text-3xl font-bold">Done</h2>
        <TaskCard title="design the mock"completedAtDate="20-09-24"assigneeName="rohan"/>
        <TaskCard title="submit to principal"completedAtDate="16-09-24"assigneeName="shyam"/>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default App
