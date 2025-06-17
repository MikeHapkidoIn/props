import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

function App() {
  // Estado inicial con las tareas que nos dan en el ejercicio
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  // Función para añadir una nueva tarea
  const addTask = (taskText) => {
    // Creamos una nueva tarea con:
    const newTask = {
      id: tasks.length + 1,        // id = número de tareas + 1
      text: taskText,              // el texto que viene del formulario
      completed: false             // por defecto no completada
    };
    
    // Añadimos la nueva tarea manteniendo las anteriores
    // ...tasks copia todas las tareas existentes
    // newTask añade la nueva al final
    setTasks([...tasks, newTask]);
  };

  // Función para eliminar una tarea por su id
  const deleteTask = (taskId) => {
    // Filtramos las tareas: nos quedamos con todas EXCEPTO la que tiene ese id
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Función para cambiar el estado de completada/no completada
  const toggleComplete = (taskId) => {
    // Mapeamos todas las tareas:
    setTasks(tasks.map(task => {
      // Si es la tarea que queremos cambiar
      if (task.id === taskId) {
        // Devolvemos la tarea con 'completed' invertido (true→false, false→true)
        return { ...task, completed: !task.completed };
      }
      // Si no es la tarea que buscamos, la devolvemos sin cambios
      return task;
    }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Mi Lista de Tareas</h1>
      
      {/* Formulario para añadir tareas - le pasamos la función addTask */}
      <AddTaskForm onAddTask={addTask} />
      
      <div style={{ marginTop: '20px' }}>
        {/* Mapeamos cada tarea para crear un componente Task */}
        {tasks.map(task => (
          <Task 
            key={task.id}                    // key único para React
            task={task}                      // toda la información de la tarea
            onDelete={deleteTask}            // función para borrar
            onToggleComplete={toggleComplete} // función para completar/no completar
          />
        ))}
      </div>
    </div>
  );
}

export default App;