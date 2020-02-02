import React from 'react';
import DataContext from './DataContext';
var data = require('../data/data');


class ImgIcono extends React.Component{
    static contextType = DataContext;
    constructor(props) {
        super(props);
        this.help_finder = this.help_finder.bind(this);
        this.show_combo_data = this.show_combo_data.bind(this);
        this.text_box_coordinates = this.text_box_coordinates.bind(this);
        this.funcMap = {
            'help_finder': this.help_finder,
            'show_combo_data' : this.show_combo_data,
            'text_box_coordinates': this.text_box_coordinates
        };
        this.state = {step: '1'};
        this.state = { 
            topImagen: 0,
            leftImagen: 0,
            anchoImagen: 0,
            altoImagen: 0,
            anchoIcono: this.props.IconoObjecto.width,
            altoIcono: this.props.IconoObjecto.height
        };
        this.setIconoPosition = this.setIconoPosition.bind(this);
        
      }

    componentDidMount(){
        this.setIconoPosition(1);
        window.addEventListener('resize', this.setIconoPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setIconoPosition);
    }

    // "coordinates": "1545, 315",
    // --> El primero es en "Horizontal" (LEFT)
    //     El segundo es en "Vertical" (TOP)

    setIconoPosition = (constBigger) => {

        const icoPosLeft = this.props.IconoObjecto.coordinates.split(',')[0];
        const icoPosTop = this.props.IconoObjecto.coordinates.split(',')[1];

        // const oImg = this.props.Referencia.current.getBoundingClientRect();

        const imgWidth = this.context.widthImg;
        const imgHeight = this.context.heightImg;
        let icoWidth = this.props.IconoObjecto.width;
        let icoHeight = this.props.IconoObjecto.height;
        if (constBigger && typeof(constBigger) === 'number') {
            // Cuando hay un "resize" de la ventana se dispara el evento
            // y "constBigger" es un objeto y no un número
            icoWidth = icoWidth * constBigger;
            icoHeight = icoHeight * constBigger;
        }

        const desvWidth = 1;
        const desvTop = 10;
        // ÑAPAVISO
        // --> Corrección que ajusta la posición con las coordenadas del ratón
        //     En su momento hay que averiguar el porque

        const iTempLeft = ((imgWidth - desvWidth) * icoPosLeft) / data.dataConf.constimgrelwidth;
        const iTempTop = ((imgHeight - desvTop) * icoPosTop) / data.dataConf.constimgrelheight;

        const oImageOffsetTop = data.dataConf.marginbody;
        const oImageOffsetLeft = data.dataConf.marginbody;

        let iLeft = iTempLeft + oImageOffsetLeft - (icoWidth / 2);
        let iTop = iTempTop + oImageOffsetTop - (icoHeight / 2);



        if (iLeft <= oImageOffsetLeft + (icoWidth / 2)){
            iLeft = oImageOffsetLeft;
        }
        if (iTop <= oImageOffsetTop + (icoHeight / 2)) {
            iTop = oImageOffsetTop;
        }

        // Aquí también se ha tenido que aplicar la "desviación"
        if (iTop + (icoHeight / 2) + desvTop >= imgHeight)
            iTop = imgHeight - icoHeight - oImageOffsetTop;
        
        if (iLeft + (icoWidth / 2) >= imgWidth)
            iLeft = imgWidth - icoWidth -oImageOffsetLeft;

        this.setState({
            topImagen:iTop,
            leftImagen:iLeft,
            anchoIcono: icoWidth,
            altoIcono: icoHeight
        })
    }

    help_finder = (oParam) => {

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

    coordinatesMouse = evt => {

// Esto parece que está
// Cuando se muestra y hay redimensión de la pantalla "no lo coge bien"

            const oImageOffsetTop = data.dataConf.marginbody;
            const oImageOffsetLeft = data.dataConf.marginbody;
            let iPosTop = 0; 
            let iPosLeft = 0;

            iPosTop = evt.pageY;
            iPosLeft = evt.pageX;
            const iWidthImgCentral = this.context.widthImg;
            const iHeightImgCentral = this.context.heightImg;

            if (iPosLeft <= 0)
                iPosLeft = 0;
            else
            {
                iPosLeft = ((data.dataConf.constimgrelwidth * (evt.pageX + (oImageOffsetLeft * 2))) / iWidthImgCentral);
                if (iPosLeft >= data.dataConf.constimgrelwidth) iPosLeft = data.dataConf.constimgrelwidth;
            }

            if (iPosTop <= 0)
                iPosTop = 0;
            else
            {   
                iPosTop = ((data.dataConf.constimgrelheight * (evt.pageY + (oImageOffsetTop * 2))) / iHeightImgCentral);
                if (iPosTop >= data.dataConf.constimgrelheight) iPosTop = data.dataConf.constimgrelheight;
            }

            document.getElementById('txtMouse').value = parseInt(iPosTop,10) + ' - ' + parseInt(iPosLeft,10);
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
            document.getElementById("spTitleComboBox").textContent = "cmb_" + oParam;
            // "comboid": "utiles", --> Coger de la colección de "dataCombos" pero "Help"
            // no está en la colección porque es "dinámico"
            document.getElementById('divComboBoxContainer').style.height="50px";
        } else {
                // Combo se muestra el mismo combo, se oculta todo
                oObjComboSelect.style.display = "none";
                oObjDivContainer.style.display = "none";
        }

   }

    setIconoAction = () => {

        const oIcono = this.props.IconoObjecto;
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
        }
    }

    resizeIcoOver = () => {
        this.resizeIco(data.dataConf.constbigger);
    }

    resizeIcoOut = () => {
        this.resizeIco(1);
    }

    resizeIco = (constBigger) => {

        this.setIconoPosition(constBigger);

    }

    render(){
            if (this.props.IconoObjecto) {
                return(
                    
                    <img 
                        style={{zIndex:100, position: 'absolute', display:'block', left:this.state.leftImagen + 'px', top:this.state.topImagen + 'px', cursor: 'pointer' }}
                        width={this.state.anchoIcono}
                        height={this.state.altoIcono}
                        src={require('../assets/images/links/' + this.props.IconoObjecto.icon)}
                        alt={this.props.IconoObjecto.titlealt}
                        onClick={this.setIconoAction}
                        onMouseOver={this.resizeIcoOver}
                        onMouseOut={this.resizeIcoOut} />
                        
                )
            } else {
                return (
                    <div>rehola</div>
                )
            }
        
    }
}


export default ImgIcono;