import React from 'react';
import DataContext from './DataContext';
import Draggable from 'react-draggable';
import ComboBox from './ComboBox';
var data = require('../data/data');



class ComboBoxContainer extends React.Component{
    static contextType = DataContext;

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
        this.createHelpCombo();
            this.setState({
            rightDraggable:this.getRightDraggable(),
            bottomDraggable:this.getBottomDraggable()
        });
    
    }
    


    createHelpCombo  = () => {

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
                if (oDataSort[a].actionParams && oDataSort[a].actionParams === 'help') {

                } else {
                var oOpcion = {
                    value: oDataSort[a].id,
                    text: oDataSort[a].name,
                    orden: (a+1)
                }

                oObjHelp.combocoleccion.push(oOpcion);
                }
            }
            data.dataCombos.push(oObjHelp);
        }

    }

    onClickComboData = evt => {
        // console.log('onClickComboData:')
        // console.log(evt);
        // oObjComboSelect.style.display = "none";
        var oObjDivContainer = document.getElementById("divParentComboBoxContainer");

        // console.log('Chema::Punto De Control::onClickComboData');
        // console.log(oObjDivContainer.childNodes[0].childNodes);
        // console.log(oObjDivContainer.getElementsByTagName("select"));
        if (oObjDivContainer.getElementsByTagName("select").length > 0) {
            for(let a = 0; a < oObjDivContainer.getElementsByTagName("select").length; a ++){
                if (oObjDivContainer.getElementsByTagName("select")[a].style.display === "block") {
                    oObjDivContainer.getElementsByTagName("select")[a].style.display = "none";
                    break;
                }
            }
        }
        
        
/*         if (oObjDivContainer.style.display === "none") {
            oObjDivContainer.style.display = "block"
        } else {
            oObjDivContainer.style.display = "none"
        } */
        oObjDivContainer.style.display = "none"
    }

    onStop = evt => {
        // console.log('onStop');
        // document.getElementById('txtSearch').focus();
    }
    
    onStart = evt => {
        // console.log('onStart');
        // document.getElementById('txtSearch').focus();
    }

    handleDrag = evt => {
       // console.log('handleDrag');
       // document.getElementById('txtSearch').focus();
    }

    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop, onDrag: this.handleDrag};
        return (
            <Draggable bounds={{top: 0, left: 0, right: this.state.rightDraggable, bottom: this.state.bottomDraggable}} {...dragHandlers}>
                <div id="divParentComboBoxContainer" className="divComboBox" style={{border:'1px solid white'}}>
                    <div id="divComboBoxContainer" className="divComboBoxContainer" style={{display: 'block'}}>
                        <div className="spTitleComboBox">
                            <span id="spTitleComboBox">Texto</span><div style={{float:'right'}} className="divClassX" onClick={this.onClickComboData}></div>
                        </div>
                        {/* <div style={{float:'right'}} className="divClassX" onClick={this.onClickComboData}></div> */}
                        
                        {/* <div className="wrapper">
  <a href="#" className="close-button">
    <div className="in">
      <div className="close-button-block"></div>
      <div className="close-button-block"></div>
    </div>
    <div className="out">
      <div className="close-button-block"></div>
      <div className="close-button-block"></div>
    </div>
  </a>
</div> */}
                        {/* <div>
                            <a href="#" onClick={this.onClickComboData}>
                                <span class="left">
                                    <span class="circle-left"></span>
                                    <span class="circle-right"></span>
                                </span>
                                <span class="right">
                                    <span class="circle-left"></span>
                                    <span class="circle-right"></span>
                                </span>
                            </a>
                        </div> */}
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
