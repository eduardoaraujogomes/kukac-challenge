import React, { useState } from 'react';
import './style.scss';
import Car from '../Car';
import Motocycle from '../Motocycle';

const Vehicles = () => {
  const [formChosed, setFormChosed] = useState('');

  const handleVehicleClick = (element) => {
    setFormChosed(element.currentTarget.innerText);
  };


  return (
    <>
      <div className="container background-container mt-5" >
        <h5 className='text-center mb-5'>Cadastro de veículos</h5>
        <div>
          <div className='container d-flex flex-column align-items-center gap-3'>
            <p>Informe qual tipo de veículo você deseja cadastrar para gerar o formulário corretamente.
            </p>
            <div className="container d-flex justify-content-center align-items-center gap-3">
              <button type="button" class="button-primary col-2 p-2" data-bs-toggle="modal" data-bs-target="#carModal" onClick={handleVehicleClick}>
                Carro
              </button>
              <button type="button" class="button-primary col-2 p-2" data-bs-toggle="modal" data-bs-target="#motocycleModal" onClick={handleVehicleClick}>
                Moto
              </button>
            </div>
            <div>
              <Motocycle />
              <Car />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicles;