import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Peticion = () => {
    const [useData, setData] = useState(null);
    const fetchRandom = async () => {
        try{
            const respuesta = await fetch('https://random-data-api.com/api/v2/users');
            if(!respuesta.ok){
                throw new Error('No se pudo conectar a la API');
            }
            const data = await respuesta.json();
            setData(data);
        }catch (error){
            console.error('Error en Fetch', error.message);
        }
    }

    return (
    <div>
        <button onClick={fetchRandom} className="btn btn-primary">Obtener Usuario Aleatorio</button>
        {useData && (

          <div className='card border-success mb-3" style="max-width: 18rem;'>
            <div className='card-header bg-transparent border-success  text-success'>
            <p><b>Bienvenido a tu suscripcion {useData.first_name} {useData.last_name}</b></p>
            </div>

            <div className='card-body bg-transparent border-success'>
            <p><b>Suscripcion:</b> {useData.email}</p>
            <p><b>Plan:</b> {useData.subscription.plan}</p>
            <p><b>Estatus:</b> {useData.subscription.status}</p> 
            <p><b>Metodo de pago:</b> {useData.subscription.payment_method}</p>
            <p><b>Term:</b> {useData.subscription.term}</p>             
            </div>

            <div className="card-footer">
            <small><b>Email:</b> {useData.email}</small>
            <small><b> Telefono:</b>{useData.phone_number}</small>
            <br/><small><b>Username:</b> {useData.username}</small>
            <small><b> Ciudad:</b> {useData.address.city}</small>
            </div>

          </div>
        )}
      </div>
      
    )
}

export default Peticion