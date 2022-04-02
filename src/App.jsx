import './App.css';
import Todo from './components/Todo.jsx/Todo';
import {Routes,Route} from 'react-router-dom';
import TodoDetails from './components/Todo.jsx/TodoDetails';




function App() {

  // console.log(store.getState())
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='/TodoList/:id' element={<TodoDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
