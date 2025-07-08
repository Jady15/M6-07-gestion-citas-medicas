import { Link } from 'react-router-dom';

function Citas({ citas }) {
  return (
    <div className='citas'>
      <h1>Lista de Citas Médicas</h1>
      {citas.length === 0 ? (
        <p>No hay citas disponibles.</p>
      ) : (
        <ul>
          {citas.map((cita) => (
            <li key={cita.id}>
              <Link to={`/cita/${cita.id}`}>
                Cita #{cita.id} - {cita.paciente} ({cita.fecha}, {cita.hora})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Citas;