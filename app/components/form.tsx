"use client";
import { FormEventHandler, useState } from "react";
interface ITaskItem {
    id: number
    name: string
    createAtAdd: string
}

export default function FristComponent() {

    const [taskName, setTaskName] = useState('')
    const [taskList, setTaskList] = useState<ITaskItem[]>([])

    function handleAddTask(e: any) {
        e.preventDefault();

        if(taskName == ''){
            return;
        } 

        setTaskList((prev) => {
            return [...prev, { id: new Date().getTime(), name: taskName, "createAtAdd": "123" }]
        })


    }

    function handleDeleteTask(id: number) {
        setTaskList(prev => prev.filter((item) => item.id !== id))
    }

    function firstFunction() {
        setTaskList(prev => {
            const x = JSON.parse(JSON.stringify(prev))
            return x.sort((a, b) => a.id - b.id)
        })
    }

    function secondFunction() {
        setTaskList(prev => {
            const x = JSON.parse(JSON.stringify(prev))
            return x.sort((a, b) => b.id - a.id)
        })
    }

    return (<div>

        <div>
            <input className="border-2 rounded-none" placeholder=" Поиск" type="text" />
            <button onClick={firstFunction} className="border-2 rounded-none ml-3 p-1 text-sm">От большего</button>
            <button onClick={secondFunction} className="border-2 rounded-none ml-3 p-1 text-sm">От меньшего</button>
        </div>

        {/* Добавление задачи */}
        <form className="p-3" >
            <div className="flex justify-between">

                <input onChange={(e) => setTaskName(e.target.value)} value={taskName} id="taskNameInput" type="text" className="border-2 rounded-none flex-1 w-full" placeholder=" Название задачи" />
                <button onClick={handleAddTask} className="border-2 rounded-none ml-3 p-1 text-sm">Добавить</button>

            </div>
        </form>

        {/* Список задач */}
        <div className="p-3">
            <h2 className="text-2xl text-center">Список задач</h2>
            <ul className="">

                {taskList.map((item) => (
                    <li key={item.id}>
                        <div className="flex justify-between border-2 rounded-none p-1 mb-3">
                            {item.id}
                            <h3 className="">{item.name}</h3>
                            <button onClick={() => handleDeleteTask(item.id)} className="border-2 rounded-none p-1 text-xs">Удалить</button>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    </div>)
}