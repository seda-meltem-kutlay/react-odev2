import {useState} from 'react'
import Input from "./input";
import AddList from "./addList";

import FooterEnd from "./footerend";


function Index() {
    const [todos, setTodos] = useState([]);
    
  return ( 
  <div>
    <section class="todoapp">
    <Input setTodos = {setTodos} todos = {todos} />
    <section class="main">
    <input class="toggle-all" type="checkbox" />
    <label for="toggle-all">
        Mark all as complete
    </label>
    <AddList  todos = {todos}  setTodos = {setTodos} />
    </section>
  

    
    </section>
    <FooterEnd/>
   </div>

  )
}

export default Index