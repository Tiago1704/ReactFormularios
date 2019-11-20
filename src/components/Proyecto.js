import React from "react";

const Proyecto = ({ proyecto, eliminarProyecto }) => (
  <div className="media mt-3">



      <button className="btn btn-danger" onClick={() => eliminarProyecto(proyecto.id)}>
        Borrar &times;
      </button>
    </div>
);

export default Proyecto;
