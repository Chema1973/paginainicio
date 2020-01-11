import React from 'react';
// import ReactDOM from 'react-dom'
var data = require('../data/data');


class ImgIcono extends React.Component{

    constructor(props) {
        super(props);
        this.help_finder = this.help_finder.bind(this);
        this.show_combo_data = this.show_combo_data.bind(this);
        // this.stepTwo = this.stepTwo.bind(this);
        this.funcMap = {
            'help_finder': this.help_finder,
            'show_combo_data' : this.show_combo_data
            // '2': this.stepTwo
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
        this.setIconoPosition();
        window.addEventListener('resize', this.setIconoPosition);
        // console.log('componentDidMount::Icono::');
        // console.log(this.props);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setIconoPosition);
    }

    // "coordinates": "1545, 315",
    // --> El primero es en "Horizontal" (LEFT)
    //     El segundo es en "Vertical" (TOP)

    setIconoPosition = (constBigger) => {

        // console.log('setIconoPosition::' + constBigger);
        // console.log('setIconoPosition::' + typeof(constBigger));
        const icoPosLeft = this.props.IconoObjecto.coordinates.split(',')[0];
        const icoPosTop = this.props.IconoObjecto.coordinates.split(',')[1];

        // const oImg = document.getElementById('imgHome').getBoundingClientRect();
        const oImg = this.props.Referencia.current.getBoundingClientRect();
        // console.log(this.props.Referencia.current.getBoundingClientRect());
        const imgWidth = oImg.width;
        const imgHeight = oImg.height;

        let icoWidth = this.props.IconoObjecto.width;
        let icoHeight = this.props.IconoObjecto.height;
        if (constBigger && typeof(constBigger) === 'number') {
            // Cuando hay un "resize" de la ventana se dispara el evento
            // y "constBigger" es un objeto y no un número
            icoWidth = icoWidth * constBigger;
            icoHeight = icoHeight * constBigger;
        } /* else {

        } */

        const iTempLeft = (imgWidth * icoPosLeft) / data.dataConf.constimgrelwidth;
        const iTempTop = (imgHeight * icoPosTop) / data.dataConf.constimgrelheight;

        const oImageOffsetTop = document.getElementById('imgHome').offsetTop;
        const oImageOffsetLeft = document.getElementById('imgHome').offsetLeft;

        let iLeft = iTempLeft + oImageOffsetLeft - (icoWidth / 2);
        let iTop = iTempTop + oImageOffsetTop - (icoHeight / 2);


        if (iLeft <= oImageOffsetLeft + (icoWidth / 2)){
            iLeft = oImageOffsetLeft;
        }
        if (iTop <= oImageOffsetTop + (icoHeight / 2)) {
            iTop = oImageOffsetTop;
        }

        // console.log('imgIcono::setIconoPosition');
        // console.log((iTop + icoHeight) + ' - ' + (imgHeight + oImageOffsetTop));
        // console.log(iTop + ' - ' + iLeft);
        // console.log((imgHeight + oImageOffsetTop) + ' - ' + (imgWidth + oImageOffsetLeft));
        

        if ((iLeft + icoWidth) >= (imgWidth + oImageOffsetLeft))
        {
            iLeft = (imgWidth + oImageOffsetLeft) - icoWidth;
            // console.log('Sale por la derecha::' + iLeft);
        }

        if ((iTop + icoHeight) >= (imgHeight + oImageOffsetTop))
        {
            iTop = (imgHeight + oImageOffsetTop) - icoHeight;
            // console.log('Sale por la abajo::' + iTop);
        }
/*
        if ((iLeft + (iIcoWidth/2)) >= imageSize.iWidth)
            iLeft = imageSize.iWidth - (iIcoWidth / 2) - (oImgHome.left/2);

        if ((iTop + (iIcoHeight/2)) >= imageSize.iHeight)
            iTop = imageSize.iHeight - (iIcoHeight / 2) - (oImgHome.top/2);
*/
        this.setState({
            topImagen:iTop,
            leftImagen:iLeft,
            anchoIcono: icoWidth,
            altoIcono: icoHeight
        })
    }

    help_finder = (oParam) => {
        console.log('help_finder::' + oParam);
    }

    show_combo_data = (oParam) => {
        console.log('show_combo_data::' + oParam);
        // console.log(this.props);

        var oObjDivContainer = document.getElementById("divParentComboBoxContainer");
        // console.log(oObjDivContainer);
        // console.log(document.getElementById("divComboBoxResult").children.length);

        var oObjComboSelect = document.getElementById("cmb_" + oParam);
        // console.log(oObjComboSelect);

        if(oObjComboSelect.style.display === "none") {
            // Combo oculto, lo mostramos

            // Hay que ocultar todos por si se estaba mostrando otro
            var oObjComboBoxResult = document.getElementById("divComboBoxResult");
            for(var a =0; a < oObjComboBoxResult.children.length; a++)
            {
                // console.log(oObjComboBoxResult.children[a].style.display);
                oObjComboBoxResult.children[a].style.display = "none";
            }
            oObjComboSelect.style.display = "block";
            oObjDivContainer.style.display = "block";
            oObjDivContainer.style.top = document.getElementById('imgHome').offsetTop;
            oObjDivContainer.style.left = document.getElementById('imgHome').offsetLeft;
            oObjDivContainer.style.height= "50px";
            document.getElementById('divComboBoxContainer').style.height="50px";
            // $(".divComboBoxContainer").css("height", "80px");
        } else {
                // Combo se muestra el mismo combo, se oculta todo
                oObjComboSelect.style.display = "none";
                oObjDivContainer.style.display = "none";
        }

        /* var oObjComboBoxResult = document.getElementById("divComboBoxResult");
        for(var a =0; a < oObjComboBoxResult.children.length; a++)
        {
            console.log(oObjComboBoxResult.children[a].style.display);
            oObjComboBoxResult.children[a].style.display = "none";
        } */
        // document.getElementById("divComboBoxResult").children("select").css("display", "none");
        // console.log(this.props.children);
        // document
        // Intentar encontrar el combo sin id
        // ÑAPATODO
        // import ReactDOM from 'react-dom'
        // let myExample = ReactDOM.findDOMNode(this.refs.utiles);
        // console.log(this.refs);
        // console.log(myExample);
        // console.log(ReactDOM.findDOMNode(this.refs));

        // De momento usaremos los "id"
        // document.getElementById('#cmb_' + oParam);
        /*
        var oDiv = $('#divParentComboBoxContainer');

    if (oDiv.css('display') == 'block') {
        oDiv.css('display', 'none');
    }
    else {
        oDiv.css('display', 'block');
    }
        */
        /*
         if ($("#divComboBoxResult").children("select").attr("id") == "cmb" + sId) {
            // Se llama desde el mismo ico
            combo_data();
        }
        else {
            // Es otro ico
            $("#spTitleComboBox").text(dataCombos.find(x => x.comboid == sId).comboname);
            // --> Por LINQ ponemos el texto del combo con el nombre del combo

            $("#divComboBoxResult").children("select").css("display", "none");
            // ---> El combo actual lo ocultamos
            $("#theBody").append($("#divComboBoxResult").children("select"));
            // --> Quitamos el <select> del <div> "divComboBoxResult" y lo volvemos a añadir al <body>
            $("#divComboBoxResult").append($("#cmb" + sId));
            // --> Al <div> "divComboBoxResult" le añadimos el combo seleccionado
            $("#cmb" + sId).css("display", "block");
            // ---> Mostramos el combo

            // Tenemos que modificar el tamaño del div para help y el resto
            // Usamos LINQ sobre la colección "dataCombos" y obtenemos el tamaño
            switch (dataCombos.find(x => x.comboid == sId).combosize) {
                case 1:
                    // Todos los combos menos el de Help
                    $(".divComboBox").css("height", "50px");
                    $(".divComboBoxContainer").css("height", "50px");
                    break
                case 3:
                    // Combo de Hep
                    $(".divComboBox").css("height", "80px");
                    $(".divComboBoxContainer").css("height", "80px");
                    break;
                default:
                    // Por si acaso
                    alert("show_combo_data::default::" + sId);
                    break;
            }

            if ($('#divParentComboBoxContainer').css("display") != "block") {
                $('#divParentComboBoxContainer').css("display", "block");
            }
        }
        */

/*
 try {

        if ($("#divComboBoxResult").children("select").attr("id") == "cmb" + sId) {
            // Se llama desde el mismo ico
            combo_data();
        }
        else {
            // Es otro ico
            $("#spTitleComboBox").text(dataCombos.find(x => x.comboid == sId).comboname);
            // --> Por LINQ ponemos el texto del combo con el nombre del combo

            $("#divComboBoxResult").children("select").css("display", "none");
            // ---> El combo actual lo ocultamos
            $("#theBody").append($("#divComboBoxResult").children("select"));
            // --> Quitamos el <select> del <div> "divComboBoxResult" y lo volvemos a añadir al <body>
            $("#divComboBoxResult").append($("#cmb" + sId));
            // --> Al <div> "divComboBoxResult" le añadimos el combo seleccionado
            $("#cmb" + sId).css("display", "block");
            // ---> Mostramos el combo

            // Tenemos que modificar el tamaño del div para help y el resto
            // Usamos LINQ sobre la colección "dataCombos" y obtenemos el tamaño
            switch (dataCombos.find(x => x.comboid == sId).combosize) {
                case 1:
                    // Todos los combos menos el de Help
                    $(".divComboBox").css("height", "50px");
                    $(".divComboBoxContainer").css("height", "50px");
                    break
                case 3:
                    // Combo de Hep
                    $(".divComboBox").css("height", "80px");
                    $(".divComboBoxContainer").css("height", "80px");
                    break;
                default:
                    // Por si acaso
                    alert("show_combo_data::default::" + sId);
                    break;
            }

            if ($('#divParentComboBoxContainer').css("display") != "block") {
                $('#divParentComboBoxContainer').css("display", "block");
            }
        }
    }
    catch (ex) {
        alert(ex.message);
    }

function combo_data() {
    var oDiv = $('#divParentComboBoxContainer');

    if (oDiv.css('display') == 'block') {
        oDiv.css('display', 'none');
    }
    else {
        oDiv.css('display', 'block');
    }
}

        */

        // Combos:

    }

    setIconoAction = () => {
        // console.log('setIconoAction');
        // console.log(this.props.IconoObjecto);
        const oIcono = this.props.IconoObjecto;
        switch (oIcono.onclick) {
            case "url":
                window.open(oIcono.action);
                break;
            case "fcn":
                // Ejecutar función
                // https://www.sitepoint.com/call-javascript-function-string-without-using-eval/
                console.log('setIconoAction::fcn::1::' + oIcono.action);
                // const method = this.funcMap[this.state.step];
                const method = this.funcMap[oIcono.action];

                if (typeof method === 'function') {
                    // content = method();
                    method(oIcono.actionParams);
                    // --> Si no tiene parámetros, en el método ejecutado
                    //     da como "undefined" pero no da error
                }
                // return content;
                // var ofun = "help_finder";
                // var oFunction = window[oIcono.action];
                // var oFunction = window[ofun];
                // oIcono.action.bind(this);
                /* console.log(oFunction);
                if (typeof oFunction === "function") {
                    console.log('setIconoAction::fcn::2');
                    oFunction();
                } */
                // console.log(oIcono.action);
                // oIcono.action();
                break;
            default:
                alert('setIconoAction::No hay tipo para id: ' + oIcono.id);
                break;
        }
    }

    resizeIcoOver = () => {
        // console.log('resizeIcoOver');
        // console.log(this.props.IconoObjecto);
        this.resizeIco(data.dataConf.constbigger);
    }

    resizeIcoOut = () => {
        this.resizeIco(1);
    }

    resizeIco = (constBigger) => {
        // console.log('resizeIco');
        // console.log(constBigger);
        // console.log(this.props.IconoObjecto);
        this.setIconoPosition(constBigger);
        /*
        var oIco = get_item_array(sId)[0];

        var iIcoWidth = parseInt(oIco.width, 10);
        var iIcoHeight = parseInt(oIco.height, 10);

        $('#img_' + oIco.id).css({ "width": (iIcoWidth * constBigger), "height": (iIcoHeight * constBigger) });
        // css en una línea
        $('#img_' + oIco.id).css('top', get_ico_position(oIco).iTop + 'px');
        $('#img_' + oIco.id).css('left', get_ico_position(oIco).iLeft + 'px');
        */
    }

    render(){
        // ÑAPAVISO:
        // Aquí tendría que pintar la "img" o el "map"
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