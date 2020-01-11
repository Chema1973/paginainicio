import React from 'react';

// https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

class Coordenadas extends React.Component{

    onChangeSearch = evt => {
        // Si se pone "value" y no se pone "onChange"
        // devuelve un error en la consola
        // console.log('onChangeSearch');
    }

    render(){
     
        return (
            <input type="text" id="txtMouse" name="txtMouse" value="hola" onChange={this.onChangeSearch} style={{position: 'absolute', top:'5px', left:'5px'}} />
        )
     
        
    }
}

export default Coordenadas;
//  zIndex:'11'; display:'none'; cursor:'default'; font-weight:'bold'; color:'red'; font-family:'Arial'; font-size:'10px'
// style={{zIndex:100, position: 'absolute', display:'block', left:this.state.leftImagen + 'px', top:this.state.topImagen + 'px'}}
// <input type="text" id="txtMouse" name="txtMouse" value="" style="position:absolute; top:11px; left:11px; z-index:11; display:none; cursor:default; font-weight:bold; color:red; font-family:Arial; font-size:10px;" size="15" disabled="disabled" />