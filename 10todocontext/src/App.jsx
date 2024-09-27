import { useEffect, useState } from 'react'
import { TodoProvider } from './Context';
import { TodoFrom, TodoItem } from './Components';


function App() {
  const[todos , setTodos]=useState([]);
  
  const addTodo=(todo)=>{
    // setTodos(todo) //previouse all value delete we set this method
    setTodos((oldTodo)=>[...oldTodo , {id:Date.now(),...todo}])
    //this method store oldtodo and new also

  }
  const updatedTodo=(id , todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ?todo :prevTodo)))

  }
 const deleteTodo=(id)=>{
  //old array have all values but in new array id todo is not present
  setTodos((prev)=>prev.filter((todo)=>(todo.id !==id)))

 }

 const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo , complete: !prevTodo.complete }:prevTodo)))

}

useEffect(() => {
 const todos=JSON.parse(localStorage.getItem("todos"));

 if (todos && todos.length > 0){
  setTodos(todos);
  
 }
}, [])

useEffect(() => {
  localStorage.setItem("todos" ,JSON.stringify(todos))
  
}, [todos])


  return (
    <TodoProvider value={{todos , addTodo , updatedTodo , deleteTodo , toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoFrom /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
      
    </TodoProvider>
  )
}

export default App
