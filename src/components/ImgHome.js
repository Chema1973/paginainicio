import React from 'react';
import DataContext from './DataContext';
import Coordenadas from './Coordenadas';
import ImgIcono from './ImgIcono';
var data = require('../data/data');



const imgCentral = require('../assets/images/home/' + data.dataConf.centralimage);


class ImgHome extends React.Component{
    static contextType = DataContext;


    constructor(props) {
        super(props);
        this.refImgCentral = React.createRef();
        this.state = {
            widthScreen: window.innerWidth - data.dataConf.marginbody,
            heightScreen:window.innerHeight - data.dataConf.marginbody,
            widthImg: 0, // document.getElementById('imgHome').offsetWidth,
            heightImg: 0 // document.getElementById('imgHome').offsetHeight
        };
    }

   

    getImgWidth = () => {

        return (this.refImgCentral.current.offsetWidth);
    }

    getImgHeight = () => {
        return (this.refImgCentral.current.offsetHeight);
    }

    componentDidMount(){

        if (!this.refImgCentral) {
            this.refImgCentral = React.createRef();
        }
        window.addEventListener('resize', this.updateDimensions.bind(this));
        // window.addEventListener('mousemove', this.coordinatesMouse);
       setTimeout(() => {
        this.setState({
            widthImg: window.innerWidth,
            heightImg: window.innerHeight
        });
        this.context.widthImg = this.state.widthImg;
        this.context.heightImg = this.state.heightImg;
       }, 0);
    }

    handleLoad() {
    }

    getWindowWidth = () => {
        return (window.innerWidth - data.dataConf.marginbody);
        
    }

    getWindowHeight= () => {
        return (window.innerHeight - data.dataConf.marginbody);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
        // window.removeEventListener('mousemove', this.coordinatesMouse);
    }

    coordinatesMouse2(evt){
        console.log('coordinatesMouse2');
        console.log(evt);
    }

    coordinatesMouse = evt => {
            if(this.refImgCentral.current) {
            const oImageOffsetTop = document.getElementById('imgHome').offsetTop;
            const oImageOffsetLeft = document.getElementById('imgHome').offsetLeft;


            let iPosTop = 0; 

            let iPosLeft = 0;

            iPosTop = evt.pageY-oImageOffsetTop;
            iPosLeft = evt.pageX-oImageOffsetLeft;

            const iWidthImgCentral = this.getImgWidth();
            const iHeightImgCentral = this.getImgHeight();
            
            if (iPosLeft <= 0)
                iPosLeft = 0;
            else
            {
                iPosLeft = ((data.dataConf.constimgrelwidth * (evt.pageX - oImageOffsetLeft)) / iWidthImgCentral);
                if (iPosLeft >= data.dataConf.constimgrelwidth) iPosLeft = data.dataConf.constimgrelwidth;
            }

            if (iPosTop <= 0)
                iPosTop = 0;
            else
            {   
                iPosTop = ((data.dataConf.constimgrelheight * (evt.pageY - oImageOffsetTop)) / iHeightImgCentral);
                if (iPosTop >= data.dataConf.constimgrelheight) iPosTop = data.dataConf.constimgrelheight;
            }


            document.getElementById('txtMouse').value = parseInt(iPosTop,10) + ' - ' + parseInt(iPosLeft,10);
        }
        else {
            document.getElementById('txtMouse').value = 'Cargando...';
        }

    }

    updateDimensions = () => {
        this.setState({
            widthScreen: this.getWindowWidth(),
            heightScreen: this.getWindowHeight(),
            widthImg: this.getImgWidth(),
            heightImg: this.getImgHeight()
        });
        this.context.widthScreen = this.state.widthScreen;
        this.context.heightScreen = this.state.heightScreen;
        this.context.widthImg = this.state.widthImg;
        this.context.heightImg = this.state.heightImg;

      };

    render(){

        if (this.state.widthImg === 0 || this.state.heightImg === 0) {
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
                {/* <Coordenadas/> */}
                {/* this.context.displayTxtMouse ? <Coordenadas/> : null */}
            <img
                ref={this.refImgCentral}
                style={{display:"flex"}} 
                width={this.state.widthScreen} 
                height={this.state.heightScreen} 
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