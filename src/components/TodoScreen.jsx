import React, { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoScreen = () => {


    let initial = true;
    const [idx, setIdx] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [Tasks, setTasks] = useState([]);

    const inputFunc = (e) => {
        setInputValue(e.target.value)
    }

    const deleteTask = (idx) => {

        toast.error("Task Deleted Successfully!", {
            position: "top-right",
            autoClose: 2000,
        })

        setTasks(current =>
            current.filter(employee => {
                return employee.id !== idx;
            }),
        );

    }
    const addtask = (e) => {
        toast.success('Task Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
        })
        initial = true;
        renderH1()
        Tasks.push({
            id: idx,
            name: inputValue,
            complete: false
        });
        setIdx(idx + 1);
        setInputValue('');
    }

    useEffect(() => {

    }, [Tasks])

    const renderH1 = () => {
        if (initial) {
            return <h1 className="text-blue-600 uppercase font-semibold text-2xl">
                Task List
            </h1>
        } else {
            return <div></div>
        }
    }


    return (
        <div className='bg-gray-300 h-screen flex justify-center items-center flex-col gap-8'>
            <ToastContainer />
            <div className='h-1/5 flex flex-col justify-center items-center'> 
                <h1 className='underline text-2xl font-medium mb-10'>TODO APP</h1>

                <div className='mt-2 flex'>
                    <input onChange={inputFunc} value={inputValue} className='p-2 rounded-lg shadow-lg' type="text" placeholder='Enter your task!' />
                    <button onClick={addtask} className='ml-2 bg-blue-500 p-4 text-white rounded-xl shadow-xl hover:bg-blue-700'>Add Task</button>
                </div>
            </div>

            <div className="h-4/5 w-full text-center flex items-center flex-col gap-5">
                {
                    renderH1()
                }

                <div className="lg:w-1/2 sm:w-full bg-gray-300 backdrop-blur-lg px-3 py-5 rounded-md">
                    {
                        Tasks.map(task => (
                            <div key={task.id} className='flex justify-between items-center mb-2 bg-gray-100 p-3'>
                                ◾ {task.name}
                                <div className='flex gap-3'>

                                    <button onClick={() => {
                                        deleteTask(task.id);
                                        console.log(task.id);
                                    }} className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md">Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
