import { useParams } from 'react-router-dom';

function CitaDetalle({ citas }) {
  const { id } = useParams();
  const cita = citas.find((c) => c.id === parseInt(id, 10));

  if (!cita) {
    return (
      <div>
        <h2>Cita no encontrada</h2>
        <p>No se encontró ninguna cita con el ID: {id}</p>
      </div>
    );
  }

  return (
    <div className='cita-detalle'>
      <h2>Detalles de la Cita #{id}</h2>
      <p><strong>Paciente:</strong> {cita.paciente}</p>
      <p><strong>Doctor:</strong> {cita.doctor}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Motivo:</strong> {cita.motivo}</p>
    </div>
  );
}

export default CitaDetalle;