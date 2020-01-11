import React from 'react';
// var data = require('../data/data');

class ComboBox extends React.Component{

    
    // Pintar Combos
    // ¿Cómo pintar el combo de Help que funciona de forma distinta?
    // ÑAPAVISO
    // Estamos viendo como acceder al combo sin
    // usar document get element by Id
    constructor(props) {
        super(props);
        this.refCombo = React.createRef();
        // console.log(this.refCombo);
     }

    // ref={React.createRef()} 

    componentDidMount(){
        // console.log(this.props.ComboObjeto);
    }
    
    render(){
        // El valor de creación no aparece para los que tenemos
        // y aparece para el creado de Help

        // ref={this.refCombo}
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

/*
{data.dataIco.map(icono=>
                            <ImgIcono key={icono.id} IconoObjecto={icono} AnchoImagen={this.state.widthImg} AltoImagen={this.state.heightImg}  AnchoPantalla={this.state.widthScreen}  AltoPantalla={this.state.heightScreen} />
                        )}
*/
// var comboData = $("<select style='display:none;width:100%;text-overflow: ellipsis;'></select>").attr("id", "cmb" + dataCombos[a].comboid).attr("size", dataCombos[a].combosize).attr("ondblclick", "window.open(this.value)");

// comboData.append("<option value='" + el.value + "'>" + el.text + "</option>");