function Task({ task, onDelete, onToggleComplete }) {
  // Función que se ejecuta cuando hacemos click en el texto de la tarea
  const handleToggleComplete = () => {
    // Llamamos a la función que nos pasó App.jsx con el id de esta tarea
    onToggleComplete(task.id);
  };

  // Función que se ejecuta cuando hacemos click en el botón de borrar
  const handleDelete = () => {
    // Llamamos a la función que nos pasó App.jsx con el id de esta tarea
    onDelete(task.id);
  };

  return (
    <div style={{ 
      display: 'flex',           // Los elementos se alinean horizontalmente
      alignItems: 'center',      // Centrados verticalmente
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: task.completed ? '#f0f8f0' : 'white' // Verde claro si está completada
    }}>
      
      {/* Texto de la tarea - al hacer click se marca/desmarca como completada */}
      <span 
        onClick={handleToggleComplete}
        style={{
          flex: 1,                    // Ocupa todo el espacio disponible
          cursor: 'pointer',          // Cambia el cursor para indicar que es clickeable
          // TERNARIO: si está completada, la tachamos, si no, texto normal
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#888' : 'black'  // Gris si está completada
        }}
      >
        {task.text}
      </span>
      
      {/* Indicador visual de si está completada */}
      <span style={{ 
        marginRight: '10px', 
        color: task.completed ? 'green' : 'orange',
        fontWeight: 'bold'
      }}>
        {task.completed ? '✓' : '○'}
      </span>
      
      {/* Botón para borrar la tarea */}
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '5px 10px',
          cursor: 'pointer'
        }}
      >
        Borrar
      </button>
    </div>
  );
}

export default Task;