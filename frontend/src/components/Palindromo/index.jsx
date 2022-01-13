import React from 'react';
import api from '../../services/api';
import { Field, Formik, Form } from 'formik';
import Swal from 'sweetalert2';

import './style.scss';

export const Palindromo = () => {

  const handleSubmit = async ({ initialValue, finalValue }) => {

    try {
      const response = await api.get(`/palindromo?initialValue=${+initialValue}&finalValue=${+finalValue}`);
      const palindromo = document.querySelector('[data-js="palindromo"]');
      if (!!palindromo.textContent) {
        palindromo.textContent = '';
      }
      response.data.map((number, idx) => {
        if (idx + 1 === response.data.length) {
          return palindromo.innerHTML += `
                  ${number}
              `;
        }
        return palindromo.innerHTML += `
                  ${number} -
              `;
      });
    } catch ({ response }) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${response.data.error}`,
        confirmButtonText: 'Ok'
      });

    }
  };
  const handleClear = () => {
    const palindromo = document.querySelector('[data-js="palindromo"]');
    palindromo.textContent = '';
  };


  return (
    <>
      <div className="col-12 container background-container mt-5" >
        <div className='d-flex justify-content-center aligm-items-center mb-5' ><h5>Palíndromo de números</h5></div>
        <div>
          <Formik onSubmit={handleSubmit} initialValues={{ initialValue: '', finalValue: '' }} >
            <Form className="container d-flex flex-column align-items-center gap-3">
              <p>Informe dois números e o sistema verificará todos os números palíndromos entre eles.</p>
              <div className="container d-flex flex-wrap align-items-center justify-content-center gap-3">
                <label className="" htmlFor="initialValue">Valor Inicial</label>
                <Field
                  className='palindromo-values p-3'
                  placeholder='Valor inicial'
                  name='initialValue'
                  required-type='number'
                  id='initialValue'
                  autoComplete='off'
                />
                <label className="" htmlFor=" finalValue">Valor Final</label>
                <Field
                  className='palindromo-values p-3'
                  placeholder='Valor final'
                  name='finalValue'
                  required-type='number'
                  id='finalValue'
                  autoComplete='off'
                />
              </div>
              <h5>Lista de números:</h5>
              <div className="palindromo-box-numbers p-3">
                <table data-js='palindromo' className="palindromo-numbers">

                </table>
              </div>
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <button className='button-primary' type="submit">Submit</button>
                <input className='button-primary-outline' type='reset' onClick={handleClear} value="Clear" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Palindromo;
