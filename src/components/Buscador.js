import React from 'react';

// https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

class Buscador extends React.Component{

    onChangeSearch = evt => {
        // Si se pone "value" y no se pone "onChange"
        // devuelve un error en la consola
        // console.log('onChangeSearch');
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


/*
            <div id="divSearchBoxContainer" class="divBuscador">
                <div id="divSearchContainer" class="divSearchContainer">
                    <input type="text" id="txtSearch" onkeypress="search_keypress(event);" onkeyup="search_keyup(event);" size="15" />
                    <div style="float:right;" class="divClassX" onclick="help_finder();"></div>
                    <div id="divSearchResult" class="resultSearch"></div>
                </div>
            </div>
*/