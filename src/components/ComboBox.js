import React from 'react';

class ComboBox extends React.Component{

    constructor(props) {
        super(props);
        this.refCombo = React.createRef();
     }


    componentDidMount(){
    }
    
    openWindow = (evt) => {
        console.log('openWindow');
        console.log(evt.target.value);
        window.open(evt.target.value);
    }

/*         prueba2 = (evt) => {
            console.log('prueba2');
                console.log(evt);
            } */

    render(){
        // El valor de creación no aparece para los que tenemos
        // y aparece para el creado de Help
// ÑAPAVISO
// Doble Click
// var comboData = $("<select style='display:none;width:100%;text-overflow: ellipsis;'></select>").attr("id", "cmb" + dataCombos[a].comboid).attr("size", dataCombos[a].combosize).attr("ondblclick", "window.open(this.value)");
// onClick={this.openWindow} 
        return (
            <select ref={this.refCombo} id={`cmb_` + this.props.ComboObjeto.comboid}  style={{width:'100%', display:'none'}} creacion={this.props.ComboObjeto.combocreation} onChange={this.openWindow}>
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