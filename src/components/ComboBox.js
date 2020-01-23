import React from 'react';

class ComboBox extends React.Component{

    constructor(props) {
        super(props);
        this.refCombo = React.createRef();
     }


    componentDidMount(){
    }
    
    render(){
        // El valor de creación no aparece para los que tenemos
        // y aparece para el creado de Help
        return (
            <select ref={this.refCombo} id={`cmb_` + this.props.ComboObjeto.comboid} style={{width:'100%', display:'none'}} creacion={this.props.ComboObjeto.combocreation}>
                {
                    this.props.ComboObjeto.combocoleccion.sort((a, b) => a.orden > b.orden).map(opcion =>
                    <option key={opcion.orden} value={opcion.value}>{opcion.text}</option>

                    )
                }
            </select>
        )
     
        
    }
}

export default ComboBox;