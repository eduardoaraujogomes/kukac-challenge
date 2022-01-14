import React, { useState, useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import api from '../../services/api';
import './style.scss';
import Swal from 'sweetalert2';

const Motocyle = () => {
  const [motocyclesList, setMotocyclesList] = useState([]);




  const cleanTable = () => {
    const motocycle = document.querySelector('[data-js="motocycle"]');
    if (!!motocycle.innerHTML) {
      motocycle.innerHTML = `
            <tr>
               <th>Modelo</th>
               <th>Ano de Fabricação</th>
               <th>Marca</th>
               <th>Nº de Passageiros</th>
               <th>Qtd de Rodas</th>
            </tr>
            `;
    }
  };



  const firstRender = async () => {
    try {
      const response = await api.get(`/vehicles/motocycle/all`);
      setMotocyclesList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async ({ modelInfo, yearInfo, brandInfo, passengersInfo }) => {
    if (+passengersInfo !== 1 && +passengersInfo !== 2) {
      Swal.fire({
        title: "Erro de cadastro!",
        icon: 'error',
        html: `Só é permitido informar 1 ou 2 passageiros!`,
        showCloseButton: true,
        showConfirmButton: false
      });
      return;
    }
    try {
      const response = await api.post(`/vehicles/motocycle`, {
        model: modelInfo,
        year: yearInfo,
        brand: brandInfo,
        passengers: passengersInfo
      });
      setMotocyclesList(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    cleanTable();
    firstRender();
  }, []);

  return (
    <>
      <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="motocycleModal" aria-hidden="true" style={{ height: '100vh' }}>
        <div class="modal-dialog modal-xl background-container">
          <div class="modal-content background-container">
            <div class="modal-header">
              <h5 class="modal-title" id="motocycleModal">Moto</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Formik onSubmit={handleSubmit} initialValues={{ modelInfo: '', yearInfo: '', brandInfo: '', passengersInfo: '' }} >
                <Form className="container d-flex flex-column align-items-center gap-3">
                  <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <label className='col-4' htmlFor="modelInfo">Modelo</label>
                    <Field
                      className='motocycles-values col-4 p-3'
                      name='modelInfo'
                      required-type='text'
                      id='modelInfo'
                    />
                    <label htmlFor="yearInfo" className='col-4'>Ano de fabricação</label>
                    <Field
                      className='motocycles-values col-4 p-3'
                      name='yearInfo'
                      required-type='text'
                      id='yearInfo'
                    />

                    <Field
                      className='motocycles-values p-3'
                      placeholder='Marca'
                      name='brandInfo'
                      required-type='text'
                      id='brandInfo'
                    />

                    <Field
                      className='motocycles-values p-3'
                      placeholder='Nº de Passageiros'
                      name='passengersInfo'
                      required-type='text'
                      id='passengersInfo'
                    />
                  </div>
                  <h5>Motocicletas cadastradas:</h5>
                  <div className="motocycles-box-numbers container d-flex flex-column justify-content-center align-items-center p-3">
                    <table data-js='motocycle' className="motocycles-numbers align-items-center justify-content-center">
                      <tr >
                        <th>Modelo</th>
                        <th>Ano de Fabricação</th>
                        <th>Marca</th>
                        <th>Nº de Passageiros</th>
                        <th>Qntd de Rodas</th>
                      </tr>
                      {!!motocyclesList && motocyclesList.map((moto, idx) => {
                        return (
                          <>
                            <tr key={idx}>
                              <th>{moto.model}</th>
                              <th>{moto.year}</th>
                              <th>{moto.brand}</th>
                              <th>{moto.passengers}</th>
                              <th>{moto.wheels}</th>
                            </tr>

                          </>
                        );
                      })}

                    </table>
                  </div>
                  <div className="container d-flex justify-content-center align-items-center gap-3">
                    <button className='' type="submit">Cadastrar</button>
                  </div>
                </Form>
              </Formik>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Motocyle;
