import React,{useState} from 'react';
import uuid from "uuid";

import Error from './Error';

function Formulario (props) {

    const [error,guardarError] = useState (false);
    const [tarea,guardarTarea] = useState ('');
    const [tipo,guardarTipo] = useState ('');
    const [proyecto,guardarProyecto] = useState ('');
    const [fecha,guardarFecha] = useState('');
    const [hora,guardarHora] = useState('');
    const [nombre,guardarNombre] = useState('');
    const [apellido,guardarApellido] = useState('');
    const [tipoD,guardarTipoDesarrollador] = useState('');

    // Validar que el usuario llene ambos campos
    const ingresarDatos = e => {
        e.preventDefault();

        if (tarea === '' || tipo === '' || proyecto === '' || fecha === '' || hora === '' || nombre === '' || apellido === '' || tipoD === ''){
            guardarError (true);
            return;
        }

        guardarError (false)
    }
    try {
    const formulario = {
        tarea,
        tipo,
        proyecto,
        fecha,
        hora,
        nombre,
        apellido,
        tipoD
    };
    formulario.id = uuid();
    console.log(formulario);
    console.log("FORMULARIO CREADO");

    props.crearFormulario(formulario);

} catch (error) {
    console.log(error);
}

    // Mostrar el error en caso de que exista
    const datos = (error) ?  <Error mensaje="Todos los campos son obligatorios" /> : null;

    return (
      <form>
      <div className=" input-group">
      <div className="col-lg">
      <textarea className="input--style-2 col-lg" id="validationTextarea" placeholder="AgregarTarea" required=""
      onChange = {e => guardarTarea (e.target.value)}
          ></textarea>
      </div>
      </div>

            <div className=" input-group">
            <div className="col-lg">
            <textarea className="input--style-2 col-lg" id="validationTextipo" placeholder="AgregarTipo" required=""
            onChange = {e => guardarTipo (e.target.value)}
                ></textarea>
            </div>
            </div>
            <div className=" input-group">
            <div className="col-lg">
            <textarea className="input--style-2 col-lg" id="validationTexproyecto" placeholder="AgregarProyecto" required=""
            onChange = {e => guardarTipo (e.target.value)}
                ></textarea>
            </div>
            </div>
            <div className=" input-group">
            <div className="col-lg">
            <textarea className="input--style-2 col-lg" id="validationTextfecha" placeholder="AgregarFecha" required=""
            onChange = {e => guardarFecha (e.target.value)}
                ></textarea>
            </div>
            </div>
            <div className=" input-group">
            <div className="col-lg">
            <textarea className="input--style-2 col-lg" id="validationTextHora" placeholder="AgregarHora" required=""
            onChange = {e => guardarHora (e.target.value)}
                ></textarea>
            </div>
            </div>
            <div className=" input-group">
            <div className="col-lg">
            <textarea className="input--style-2 col-lg" id="validationTextDesarrollador" placeholder="AgregarDesarrollador" required=""
            onChange = {e => guardarTipoDesarrollador (e.target.value)}
                ></textarea>
            </div>
            </div>
            <div className=" input-group">
            <div className="col-lg">
            <textarea className="input--style-2 col-lg" id="validationTextnombre" placeholder="AgregarNombre" required=""
            onChange = {e => guardarNombre (e.target.value)}
                ></textarea>
            </div>
            </div>
            <div className=" input-group">
            <div className="col-lg">
            <textarea className="input--style-2 col-lg" id="validationTextapellido" placeholder="AgregarApellido" required=""
            onChange = {e => guardarApellido (e.target.value)}
                ></textarea>
            </div>
            </div>
            <div className="p-t-30">
              <button className="btn btn--radius btn--green" type="submit">Enviar</button>
          </div>
        <div className="p-t-30">
          <button className="btn btn--radius btn--green" type="submit">Pausar</button>
      </div>
        </form>

    )
}
export default Formulario;
