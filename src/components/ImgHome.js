import React from 'react';
import DataContext from './DataContext';
// import Coordenadas from './Coordenadas';
import ImgIcono from './ImgIcono';
var data = require('../data/data');



const imgCentral = require('../assets/images/home/' + data.dataConf.centralimage);


class ImgHome extends React.Component{
    static contextType = DataContext;


    constructor(props) {
        super(props);
        this.refImgCentral = React.createRef();
        this.state = {
            widthScreen: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            heightScreen:window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight,
            widthImg: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - data.dataConf.marginbody, // document.getElementById('imgHome').offsetWidth,
            heightImg: (window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight) - data.dataConf.marginbody //  document.getElementById('imgHome').offsetHeight
        };
    }

 
    componentDidMount(){

        if (!this.refImgCentral) {
            this.refImgCentral = React.createRef();
        }


        window.addEventListener('resize', this.updateDimensions.bind(this));

        this.setState({
            widthScreen: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            heightScreen:document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight,
            widthImg: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - data.dataConf.marginbody, // oImgSize.width,  //  window.innerWidth - data.dataConf.marginbody, // document.getElementById('imgHome').offsetWidth,
            heightImg: (window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight) - data.dataConf.marginbody //  oImgSize.height // window.innerHeight - data.dataConf.marginbody //  document.getElementById('imgHome').offsetHeight
        });
        this.context.widthImg = this.state.widthImg;
        this.context.heightImg = this.state.heightImg;
        this.context.widthScreen = this.state.widthScreen;
        this.context.heightScreen = this.state.heightScreen;
    }


    getWindowWidth = () => {
        return (document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth);
    }

    getWindowHeight= () => {
        return (document.documentElement.clientHeight|| document.body.clientHeight || window.innerHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    updateDimensions = () => {

        this.setState({
            widthScreen: this.getWindowWidth(),
            heightScreen: this.getWindowHeight(),
            widthImg: this.getWindowWidth() - data.dataConf.marginbody,
            heightImg: this.getWindowHeight() - data.dataConf.marginbody
        });
        this.context.widthScreen = this.state.widthScreen;
        this.context.heightScreen = this.state.heightScreen;
        this.context.widthImg = this.state.widthImg;
        this.context.heightImg = this.state.heightImg;
        this.forceUpdate();
        // El problema que se estaba dando es que al Maximizar o Minimizar la ventana
        // entraba aquí, lanzaba el render y luego actulizaba las dimensiones.
        // Esto provocaba un error en el tamaño de la imagen, que mantenía las previas


      };

    render(){
        if (this.context.widthImg === 0 || this.context.heightImg === 0) {
            return (
                <img
                style={{display:"flex"}} 
                width={this.state.widthScreen} 
                height={this.state.heightScreen} 
                border="0" 
                id="imgHome" 
                src={imgCentral} 
                alt="Imagen Central. Cargando..." 
            />
            )
        } else {
        return (
            
            <div style={{backGroundColor:'black'}}>
            <img
                ref={this.refImgCentral}
                style={{display:"flex"}} 
                width={this.context.widthImg} 
                height={this.context.heightImg} 
                border="0" 
                id="imgHome" 
                src={imgCentral} 
                alt="Imagen Central" 
                useMap="#MapHomePage"
            />
            <map name="MapHomePage" id="mpHomePage"></map>
            {data.dataIco.map(icono=>
                            <ImgIcono key={icono.id} Referencia={this.refImgCentral} IconoObjecto={icono} AnchoImagen={this.state.widthImg} AltoImagen={this.state.heightImg}  AnchoPantalla={this.state.widthScreen}  AltoPantalla={this.state.heightScreen} />
                        )}
            </div>
        );
        }
    }
}

export default ImgHome;