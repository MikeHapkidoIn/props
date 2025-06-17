import { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  // Estado para controlar lo que escribe el usuario en el input
  const [inputValue, setInputValue] = useState('');

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    // Evitamos que la página se recargue (comportamiento por defecto del form)
    e.preventDefault();
    
    // Si el input no está vacío (quitamos espacios con trim())
    if (inputValue.trim()) {
      // Llamamos a la función que nos pasó App.jsx para añadir la tarea
      onAddTask(inputValue.trim());
      
      // Limpiamos el input después de añadir la tarea
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      {/* Input donde el usuario escribe la nueva tarea */}
      <input
        type="text"
        value={inputValue}                    // El valor es lo que tenemos en el estado
        onChange={(e) => setInputValue(e.target.value)} // Cada vez que escriben, actualizamos el estado
        placeholder="Escribe una nueva tarea..."
        style={{ 
          padding: '8px', 
          marginRight: '10px', 
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      
      {/* Botón para enviar el formulario */}
      <button 
        type="submit"
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Añadir Tarea
      </button>
    </form>
  );
}

export default AddTaskForm;