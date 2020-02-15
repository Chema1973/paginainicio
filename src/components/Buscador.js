import React from 'react';
import Draggable from 'react-draggable';
var data = require('../data/data');

class Buscador extends React.Component{

    constructor(props) {
        super(props);
        this.getRightDraggable = this.getRightDraggable.bind(this);
        this.getBottomDraggable = this.getBottomDraggable.bind(this);
        this.refComboBoxContainer = React.createRef();
        
       this.state = {
           rightDraggable:0,
           bottomDraggable:0,
            widthImg: 0,
            heightImg: 0
        };
    }

    getRightDraggable = () => {
        // console.log('Chema::Punto De Control::getRightDraggable');
        // console.log(document.getElementById('imgHome').getBoundingClientRect().right);
        // console.log(this.context);
        
        return(document.getElementById('imgHome').getBoundingClientRect().right);
    }

    getBottomDraggable = () => {
        return(document.getElementById('imgHome').getBoundingClientRect().bottom);
    }

    componentDidMount(){
            this.setState({
            rightDraggable:this.getRightDraggable(),
            bottomDraggable:this.getBottomDraggable()
        });
    
    }

    onChangeSearch = evt => {
        // Si se pone "value" y no se pone "onChange"
        // devuelve un error en la consola
    }

    onKeyUpSearch = evt => {
        // console.log('onKeyUpSearch');
        // console.log(evt.target.value);

        // ÑAPAQUI
        // Empezar la lógica del "Texto Predictivo"
        var sTexto = evt.target.value.toLowerCase();
        // console.log('Texto::' + sTexto);

        document.getElementById("divSearchResult").innerHTML = "";

        if (sTexto.length > 1) {
            // console.log('entr');
            // var arrText = sText.split(' ');
            // ÑAPAQUI
        }

    }
    
/*
function search_keyup(evt) {

    var sText = $('#txtSearch').val().toUpperCase();

    $('#divSearchResult').empty();

    if (sText.length > 1) {

        $('#divSearchResult').empty();

        var arrText = sText.split(' ');

        var sNameIco = "";
        var sIdIco = "";
        for (var a = 0; a < dataIco.length; a++) {
            sIcoName = dataIco[a].name.toUpperCase();
            sIdIco = dataIco[a].id;

            for (var b = 0; b < arrText.length; b++) {
                if (arrText[b] != '') {
                    if (sIcoName.indexOf(arrText[b]) != -1) {
                        // Is in the result

                        if ($('#divResult_' + sIdIco).length == 0) {
                            $('#divSearchResult').append('<div id="divResult_' + sIdIco + '" class="resultSearch">' + dataIco[a].name + '</div>');

                            $('#divResult_' + sIdIco).attr('onmouseover', "result_search_over('" + sIdIco + "');"); // bigger
                            $('#divResult_' + sIdIco).attr('onmouseout', "result_search_out('" + sIdIco + "');"); // regular
                        }
                    }

                }
            }
        }
    }

}
*/

    onClickSearch = evt => {
        // Esta función es la misma que
        // help_finder de ImgIcono
        // console.log('onClickSearch');
        // console.log(evt);
        var oDiv = document.getElementById('divSearchBoxContainer');

        if (oDiv.style.display === 'none') {
            oDiv.style.display = "block";
            document.getElementById('txtSearch').focus();
        }
        else {
            oDiv.style.display = "none";
        }
    }

    handleDrag = evt => {
        // console.log('handleDrag');
        document.getElementById('txtSearch').focus();
    }

    onClickSearch2 = evt => {
        setTimeout(() => {
            document.getElementById('txtSearch').focus();    
        }, 0);
        console.log('onClickSearch2');
        document.getElementById('txtSearch').focus();
    }

    onStop = evt => {
        console.log('onStop');
        document.getElementById('txtSearch').focus();
    }
    
    onStart = evt => {
        console.log('onStart');
        document.getElementById('txtSearch').focus();
    }

    

    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            
            <div>
	            <div id="divSearchBoxContainer" className="divBuscador" style={{display:'none'}}>
                <div id="divSearchContainer" className="divSearchContainer" style={{display: 'block'}}>
                <input type="text" id="txtSearch" className="inputTextSearch" onKeyUp={this.onKeyUpSearch} onClick={this.onClickSearch2} size="15" />
                <div style={{float:'right'}} className="divClassX" onClick={this.onClickSearch}></div>
                <div id="divSearchResult" className="resultSearchContainer">
                {/* <div id="divResult_1" className="resultSearch">Uno</div>
                <div id="divResult_2" className="resultSearch">Dos</div>
                <div id="divResult_3" className="resultSearch">Tres</div> */}

                </div>
                    
                </div>
            </div>
</div>

        )
     
        
    }
}

export default Buscador;


/*
Con el "Draggable" el foco no se queda en la caja de texto
por lo que de momento no va a poder ser "Draggable"
 <Draggable bounds={{top: 0, left: 0, right: this.state.rightDraggable, bottom: this.state.bottomDraggable}} {...dragHandlers}
            onDrag={this.handleDrag}>
	            <div id="divSearchBoxContainer" className="divBuscador" style={{display:'none'}}>
                <div id="divSearchContainer" className="divSearchContainer" style={{display: 'block'}}>
                    <input type="text" id="txtSearch" onKeyUp={this.onKeyUpSearch} onClick={this.onClickSearch2} size="15" />
					<div style={{float:'right'}} className="divClassX" onClick={this.onClickSearch}></div>
                    <div id="divSearchResult" className="resultSearch"></div>
                </div>
            </div>
</Draggable>
*/