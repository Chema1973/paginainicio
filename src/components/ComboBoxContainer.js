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

    }

    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
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
