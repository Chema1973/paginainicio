import React from 'react';
var data = require('../data/data');

class ComboBox extends React.Component{

    constructor(props) {
        super(props);
        this.refCombo = React.createRef();
        this.funcMap = {
            'help_finder': this.help_finder,
            'show_combo_data' : this.show_combo_data,
            'text_box_coordinates': this.text_box_coordinates
        };
     }


    componentDidMount(){
    }
    
    openWindow = (evt) => {
        console.log('openWindow');
        // console.log(evt.target.value);
        // console.log(evt.target.id);
        // console.log(evt.target.creacion);
        if (evt.target.id === 'cmb_help') {
            const targetId = parseInt(evt.target.value,10);
            // console.log(data.dataIco);
            const oObj =data.dataIco.find(item => item.id === targetId); 
            // console.log(data.dataIco.find(item => item.id === targetId));
            switch (oObj.onclick) {
                case "url":
                    window.open(oObj.action);
                    break;
                case "fcn":
                    const method = this.funcMap[oObj.action];

                    if (typeof method === 'function') {
                        // console.log(oObj);
                        method(oObj.actionParams);
                        // --> Si no tiene parámetros, en el método ejecutado
                        //     da como "undefined" pero no da error
                    }
                    break;
                default:
                    alert('openWindow::No hay tipo para id: ' + oObj.id);
                    break;
            }
            /* console.log(data.dataIco.find(function(element){
                // console.log(typeof(element.id));
                // console.log(typeof(evt.target.value))
                return element.id === parseInt(evt.target.value,10);
            })); */
            /* const oIcono = this.props.IconoObjecto;
            switch (oIcono.onclick) {
                case "url":
                    window.open(oIcono.action);
                    break;
                case "fcn":
                    const method = this.funcMap[oIcono.action];

                    if (typeof method === 'function') {
                        method(oIcono.actionParams);
                        // --> Si no tiene parámetros, en el método ejecutado
                        //     da como "undefined" pero no da error
                    }
                    break;
                default:
                    alert('setIconoAction::No hay tipo para id: ' + oIcono.id);
                    break;
            } */
        } else {
            window.open(evt.target.value);
        }
        // 
    }

/*         prueba2 = (evt) => {
            console.log('prueba2');
                console.log(evt);
            } */

            help_finder = () => {
                // console.log('help_finder');
        
                var oDiv = document.getElementById('divSearchBoxContainer');
        
                if (oDiv.style.display === 'none') {
                    oDiv.style.display = "block";
                }
                else {
                    oDiv.style.display = "none";
                }
            }
        
            text_box_coordinates = () => {
                var objTxtMouse = document.getElementById("txtMouse");
                if(objTxtMouse.style.display === "none") {
                    objTxtMouse.style.display = "block";
                    window.addEventListener('mousemove', this.coordinatesMouse);
                } else {
                    objTxtMouse.style.display = "none";
                    window.removeEventListener('mousemove', this.coordinatesMouse);
                }
            }
        
            show_combo_data = (oParam) => {
        
        
                var oObjDivContainer = document.getElementById("divParentComboBoxContainer");
        
        
                var oObjComboSelect = document.getElementById("cmb_" + oParam);
        
        
                if(oObjComboSelect.style.display === "none") {
                    // Combo oculto, lo mostramos
        
                    // Hay que ocultar todos por si se estaba mostrando otro
                    var oObjComboBoxResult = document.getElementById("divComboBoxResult");
                    for(var a =0; a < oObjComboBoxResult.children.length; a++)
                    {
                        oObjComboBoxResult.children[a].style.display = "none";
                    }
                    oObjComboSelect.style.display = "block";
                    oObjDivContainer.style.display = "block";
                    oObjDivContainer.style.top = document.getElementById('imgHome').offsetTop;
                    oObjDivContainer.style.left = document.getElementById('imgHome').offsetLeft;
                    oObjDivContainer.style.height= "50px";
                    // $("#spTitleComboBox").text(dataCombos.find(x => x.comboid == sId).comboname);
                    let oTitle = data.dataCombos.find(x => x.comboid === oParam).comboname;
                    // document.getElementById("spTitleComboBox").textContent = "cmb_" + oParam;
                    document.getElementById("spTitleComboBox").textContent = oTitle;
                    // "comboid": "utiles", --> Coger de la colección de "dataCombos" pero "Help"
                    // no está en la colección porque es "dinámico"
                    document.getElementById('divComboBoxContainer').style.height="50px";
                } else {
                        // Combo se muestra el mismo combo, se oculta todo
                        oObjComboSelect.style.display = "none";
                        oObjDivContainer.style.display = "none";
                }
        
           }

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