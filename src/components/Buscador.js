import React from 'react';

class Buscador extends React.Component{

    onChangeSearch = evt => {
        // Si se pone "value" y no se pone "onChange"
        // devuelve un error en la consola
    }

    onKeyUpSearch = evt => {
        console.log('onKeyUpSearch');
        console.log(evt);
    }
    
    onClickSearch = evt => {
        console.log('onClickSearch');
        console.log(evt);
    }
    render(){
     
        return (
            <div id="divSearchBoxContainer" className="divBuscador" style={{display:'none'}}>
                <div id="divSearchContainer" className="divSearchContainer">
                    <input type="text" id="txtSearch" onKeyUp={this.onKeyUpSearch} size="15" />
                    <div style={{float:'right'}} className="divClassX" onClick={this.onClickSearch}></div>
                    <div id="divSearchResult" className="resultSearch"></div>
                </div>
            </div>
        )
     
        
    }
}

export default Buscador;
