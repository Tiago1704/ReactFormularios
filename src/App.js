import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import ReactDOM from "react-dom";
import Proyecto from './components/Proyecto';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    proyecto : []
  };
  }

  componentDidMount(){
    const ProyJS = localStorage.getItem("Proyecto");
    if (ProyJS) {
      this.setState({ proyecto : JSON.parse(ProyJS)});
    }
  }
  componentDidUpdate(){
    localStorage.setItem("proyecto", JSON.stringify(this.state.proyecto));
  }
  eliminarProyecto = id => {
    // console.log(id);
    //! tomar una copia del state
    const proyectosActuales = [...this.state.armas];
    const proyectos = proyectosActuales.filter(proyecto => proyecto.id !== id);

    this.setState({ proyectos });
  };

  render(){
  return (
    <div className="App">
        <p>
          Parcial 2, React
        </p>
        <Formulario/>
        <Proyecto
      proyecto={this.state.proyecto}
      eliminarProyecto={this.eliminarProyecto}
    />
    </div>

  );
}
}

export default App;
