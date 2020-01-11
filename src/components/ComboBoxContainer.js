import React from 'react';
// import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import ComboBox from './ComboBox';
var data = require('../data/data');
// const {ReactDraggable: Draggable, ReactDOM} = window;



class ComboBoxContainer extends React.Component{


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
        return(document.getElementById('imgHome').getBoundingClientRect().right);
    }

    getBottomDraggable = () => {
        return(document.getElementById('imgHome').getBoundingClientRect().bottom);
    }

    // onStart = () => {
        // this.setState({activeDrags: ++this.state.activeDrags});
    //  };
    
    //  onStop = () => {
        // this.setState({activeDrags: --this.state.activeDrags});
    //  };

    // ÑAPAQUI
    // Límites draggable



    componentDidMount(){
        console.log('dinmouth-container');
        this.createHelpCombo();
        console.log(document.getElementById('imgHome').getBoundingClientRect());
        this.setState({
            rightDraggable:this.getRightDraggable(),
            bottomDraggable:this.getBottomDraggable()
        });
        /* setTimeout(() => {

            this.setState({
                widthImg: window.innerWidth,
                heightImg: window.innerHeight
            });
           }, 0); */
        // console.log('componentDidMount::ComboBoxContainer');
        // console.log(data.dataCombos);

        /* var oObjHelp = {
            comboid : 'help',
            comboname: 'Ayuda',
            combodescripcion: 'Listado de todas las opciones',
            comboactive: 'Y',
            combosize: 3,
            combocoleccion: []
        }

        var oDataSort = data.dataIco.sort((a, b) => a.name > b.name);
        for(var a = 0; a<oDataSort.length; a++)
        {
            var oOpcion = {
                value: oDataSort[a].id,
                text: oDataSort[a].name,
                orden: (a+1)
             }

             oObjHelp.combocoleccion.push(oOpcion);
        }
        data.dataCombos.push(oObjHelp);
 */
/*
"value": "3 url 1",
                "text": "3 link 1",
                "orden": 1
        */
        // var objHelpCombo = { "comboid": "help", "comboname": "Ayuda", "combodescripcion": "Listado de todas las opciones", "comboactive": "Y", "combosize": 3 };
/*
<select id={`cmb_` + this.props.ComboObjeto.comboid} style={{width:'100%'}}>
                {
                    this.props.ComboObjeto.combocoleccion.sort((a, b) => a.orden > b.orden).map(opcion =>
                    <option key={opcion.orden} value={opcion.value}>{opcion.text}</option>

                    )
                }
            </select>
        */
    }
    


    createHelpCombo  = () => {
        // this.resizeIco(1);
        // console.log('createHelpCombo');
        // console.log(data.dataCombos.find(element => element.comboid === 'help'));
        
        // Al hacer un setState, se vuelve a crear esta función porque se llama a "render"
        if (!data.dataCombos.find(element => element.comboid === 'help')) {

            var oObjHelp = {
                comboid : 'help',
                comboname: 'Ayuda',
                combodescripcion: 'Listado de todas las opciones',
                comboactive: 'Y',
                combosize: 3,
                combocreation: 'N',
                combocoleccion: []
            }

            var oDataSort = data.dataIco.sort((a, b) => a.name > b.name);
            for(var a = 0; a<oDataSort.length; a++)
            {
                var oOpcion = {
                    value: oDataSort[a].id,
                    text: oDataSort[a].name,
                    orden: (a+1)
                }

                oObjHelp.combocoleccion.push(oOpcion);
            }
            data.dataCombos.push(oObjHelp);
        }

    }

    onClickComboData = evt => {
        console.log('onClickComboData');
        console.log(evt);
    }

    render(){
        // this.createHelpCombo();
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        console.log('render-Container');
        
        // console.log(document.getElementById('imgHome').getBoundingClientRect());
        // const oImg = document.getElementById('imgHome').getBoundingClientRect();
     // console.log('render container');
     // ref={this.refComboBoxContainer} 
     //  bounds={{top: -100, left: -100, right: 100, bottom: 100}}
     // bounds="parent"
     // bounds={{top: 0, left: 0, right: this.state.widthImg, bottom: this.state.heightImg}}
        return (
            <Draggable bounds={{top: 0, left: 0, right: this.state.rightDraggable, bottom: this.state.bottomDraggable}} {...dragHandlers}>
            <div id="divParentComboBoxContainer" className="divComboBox" style={{border:'1px solid white'}}>
        <div id="divComboBoxContainer" className="divComboBoxContainer">
            <span className="spTitleComboBox" id="spTitleComboBox"></span>
            <div style={{float:'right'}} className="divClassX" onClick={this.onClickComboData}></div>
            <div id="divComboBoxResult" className="resultComboBox">
                {
                    data.dataCombos.map(combo =>
                        <ComboBox key={combo.comboid} ComboObjeto={combo}  />
                    )
                }
                </div>
        </div>
    </div>
    </Draggable>
        )
     
        
    }
}

export default ComboBoxContainer;

// Referencia={this.refComboBoxContainer}

/*
dataCombos
{data.dataIco.map(icono=>
                            <ImgIcono key={icono.id} IconoObjecto={icono} AnchoImagen={this.state.widthImg} AltoImagen={this.state.heightImg}  AnchoPantalla={this.state.widthScreen}  AltoPantalla={this.state.heightScreen} />
                        )}
*/
// var comboData = $("<select style='display:none;width:100%;text-overflow: ellipsis;'></select>").attr("id", "cmb" + dataCombos[a].comboid).attr("size", dataCombos[a].combosize).attr("ondblclick", "window.open(this.value)");

// comboData.append("<option value='" + el.value + "'>" + el.text + "</option>");

/*
<div id="divParentComboBoxContainer" class="divComboBox" style="border:1px solid white">
        <div id="divComboBoxContainer" class="divComboBoxContainer">
            <span class="spTitleComboBox" id="spTitleComboBox"></span>
            <div style="float:right;" class="divClassX" onclick="combo_data();"></div>
            <div id="divComboBoxResult" class="resultComboBox">
                
            </div>
        </div>
    </div>

*/