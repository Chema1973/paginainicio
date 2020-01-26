export var dataConf = {
    "centralimage": "death_star_2.jpg",
    "marginbody":"10",
    "iconpath": "HomePage_files/img/",
    "thumbnailspath": "HomePage_files/img/thumbnails/",
    "constbigger": 1.4, // Mínimo 1.0
    "constimgrelwidth": 2000,   // Ancho relativo de la imagen. Mida lo que mida le asignamos 2000
    "constimgrelheight": 1000   // Altura relativa de la imagen. Mida lo que mida le asignamos 1000
};

// "coordinates": "[Horizontal(X)],[Vertical(Y)]",

// World-icon.png
// 355,380
// cTest.PNG

export var dataIco = [
		{
		    "id": 1,
		    "name": "Help",
		    "description": "Buscador de nombres",
		    "type": "img",
		    "coordinates": "587,697",
		    "onclick": "fcn",
            "action": "help_finder", // "indicador" de función
            "actionParams": "",
            // "actionParams": ['prueba','cosas'], // parámetros si la función lo necesita
		    "icon": "cTest.PNG",
		    "titlealt": "Help",
		    "css": "",
		    "style": "",
		    "height": 32,
            "width":32,
		    "thumbnails": "",
		    "extra": "",
		    "active": "Y"
		},
		{
		    "id": 2,
		    "name": "Google",
		    "description": "",
		    "type": "img",
		    "coordinates": "650,400",
		    "onclick": "url",
		    "action": "http://www.google.es",
		    "icon": "google.png",
		    "titlealt": "Google",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 64,
            "thumbnails": "google.png",
		    "extra": "",
		    "active": "Y"
		},
		{
		    "id": 3,
		    "name": "GMail",
		    "description": "",
		    "type": "img",
		    "coordinates": "587,821",
		    "onclick": "fcn",
            "action": "show_combo_data",
            "actionParams": "help",
		    "icon": "Mail-Gmail-icon.png",
		    "titlealt": "GMail",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
		    "thumbnails": "",
		    "extra": "",
		    "active": "Y"
		},
		{
		    "id": 4,
		    "name": "Yahoo",
		    "description": "",
		    "type": "img",
		    "coordinates": "200,200",
		    "onclick": "url",
		    "action": "http://edit.europe.yahoo.com/config/mail?.intl=es",
		    "icon": "email-yahoo-icon.png",
		    "titlealt": "Yahoo",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
		    "thumbnails": "",
		    "extra": "",
		    "active": "Y"
		},
		{
		    "id": 5,
		    "name": "Google Maps",
		    "description": "",
		    "type": "img",
		    "coordinates": "1500,700",
		    "onclick": "url",
		    "action": "http://maps.google.es/?ie=UTF8&ll=40.337941,-3.854485&spn=0.019235,0.054932&t=h&z=15",
		    "icon": "earth-icon.png",
		    "titlealt": "Google Maps",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
		    "thumbnails": "",
		    "extra": "",
		    "active": "Y"
		},
        {
            "id": 6,
            "name": "Prueba Map Area 1",
            "description": "Prueba de map area con url y miniatura",
            "type": "map",
            "coordinates": "1950,0,2000,100",
            "onclick": "url",
            "action": "http://www.elmundo.es/",
            "icon": "rect",
            "titlealt": "Google Maps",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "google.png",
            "extra": "",
            "active": "N"
        },
        {
            "id": 7,
            "name": "Google Maps 2",
            "description": "Prueba icono desactivado",
            "type": "img",
            "coordinates": "1000,500",
            "onclick": "url",
            "action": "http://maps.google.es/?ie=UTF8&ll=40.337941,-3.854485&spn=0.019235,0.054932&t=h&z=15",
            "icon": "earth-icon.png",
            "titlealt": "Google Maps",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 8,
            "name": "Coordendas",
            "description": "Muestra las coordenadas del ratón",
            "type": "img",
            "coordinates": "355,380",
            "onclick": "fcn",
            "action": "text_box_coordinates",
            "icon": "World-icon.png",
            "titlealt": "Coordenadas",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 9,
            "name": "Prueba Derecha",
            "description": "Prueba de Icono a la derecha",
            "type": "img",
            "coordinates": "1950,500",
            "onclick": "url",
            "action": "http://www.google.es",
            "icon": "google.png",
            "titlealt": "Google",
            "css": "",
            "style": "",
            "height": 32,
            "width": 64,
            "thumbnails": "google.png",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 10,
            "name": "Prueba Abajo",
            "description": "Prueba de Icono abajo",
            "type": "img",
            "coordinates": "1000,950",
            "onclick": "url",
            "action": "http://www.google.es",
            "icon": "google.png",
            "titlealt": "Google",
            "css": "",
            "style": "",
            "height": 32,
            "width": 64,
            "thumbnails": "google.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 11,
            "name": "Prueba Esquina",
            "description": "Prueba icono en la esquina inferior derecha",
            "type": "img",
            "coordinates": "1950,950",
            "onclick": "url",
            "action": "http://www.google.es",
            "icon": "google.png",
            "titlealt": "Google",
            "css": "",
            "style": "",
            "height": 32,
            "width": 64,
            "thumbnails": "google.png",
            "extra": "",
            "active": "Y"
        }

    ,
        {
            "id": 12,
            "name": "Prueba Combo Útiles",
            "description": "Prueba del combo de útiles de la colección de dataCombos",
            "type": "img",
            "coordinates": "500,150",
            "onclick": "fcn",
            "action": "show_combo_data",
            "actionParams": "utiles",
            "icon": "cTest.PNG",
            "titlealt": "Google Prueba Combo Útiles",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 13,
            "name": "Prueba Combo Programación",
            "description": "Prueba del combo de programación de la colección de dataCombos",
            "type": "img",
            "coordinates": "550,200",
            "onclick": "fcn",
            "action": "show_combo_data",
            "actionParams": "programacion",
            "icon": "cTest.PNG",
            "titlealt": "Google Prueba Combo Programación",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 14,
            "name": "Prueba Combo Prueba",
            "description": "Prueba del combo de prueba de la colección de dataCombos",
            "type": "img",
            "coordinates": "600,250",
            "onclick": "fcn",
            "action": "show_combo_data",
            "actionParams": "prueba",
            "icon": "cTest.PNG",
            "titlealt": "Google Prueba Combo Prueba",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
        },
        {
            "id": 15,
            "name": "Prueba Precision",
            "description": "Prueba para coger un punto con el ratón y situarlo aquí",
            "type": "img",
            "coordinates": "1750,409",
            "onclick": "url",
            "action": "http://www.google.es",
            "icon": "cTest.PNG",
            "titlealt": "Prueba Precisión",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
        },
        {
            "id": 16,
            "name": "Combo Help",
            "description": "Combo de Ayuda (Listado de todo lo pintado)",
            "type": "img",
            "coordinates": "875,315",
            "onclick": "fcn",
            "action": "show_combo_data('help');",
            "icon": "cTest.PNG",
            "titlealt": "Combo Help",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "N"
        },
        {
            "id": 17,
            "name": "Prueba2 Map area",
            "description": "Prueba de area con función",
            "type": "map",
            "coordinates": "1950,150,2000,250",
            "onclick": "fcn",
            "action": "show_combo_data('help');",
            "icon": "rect",
            "titlealt": "Google Maps",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
        }

];

// arrUrl[39] = new UrlData("039", "Secreto", "map", "il", "secreto", "rect", "1616,698,1646,724", "http://www.elmundo.es/", "Secreto", "", "", "", "", "");//Ejemplo de Link Secreto

// Filter the icons data with "active=Yes"
dataIco = dataIco.filter(function (data) {
    return data.active === "Y";
});

// Colección de combos
// Tiene que estar declarada como mínimo
//var dataCombos = [];

export var dataCombos = [
    {
        "comboid": "utiles",
        "comboname": "Útiles",
        "combodescripcion": "Útiles On Line para cualquier uso",
        "comboactive": "Y",
        "combosize" : 1,
        "combocoleccion": [
            {
                "value": "url 1",
                "text": "link 1",
                "orden": 2
            },
            {
                "value": "url 2",
                "text": "link 2 con un texto muy largo de explicación de la url",
                "orden": 1
            }
            ,
            {
                "value": "url 3",
                "text": "link 3",
                "orden": 3
            }
        ]
    },
    {
        "comboid": "programacion",
        "comboname": "Url Programación",
        "combodescripcion": "Urls prácticas para la programación",
        "comboactive": "Y",
        "combosize": 1,
        "combocoleccion": [
            {
                "value": "2 url 1",
                "text": "2 link 1",
                "orden": 3
            },
            {
                "value": "2 url 2",
                "text": "2 link 2",
                "orden": 2
            }
            ,
            {
                "value": "2 url 3",
                "text": "2 link 3",
                "orden": 1
            }
        ]
    }
    ,
    {
        "comboid": "prueba",
        "comboname": "Url Pruébas",
        "combodescripcion": "Urls de pruebas en combo",
        "comboactive": "Y",
        "combosize": 1,
        "combocoleccion": [
            {
                "value": "3 url 1",
                "text": "3 link 1",
                "orden": 1
            },
            {
                "value": "3 url 2",
                "text": "3 link 2",
                "orden": 2
            }
            ,
            {
                "value": "3 url 3",
                "text": "3 link 3",
                "orden": 3
            }
        ]
    }

];


dataCombos = dataCombos.filter(function (data) {
    return data.comboactive === "Y";
});

/*
var dataComboUtil = {
    "comboid": "utiles",
    "comboname": "Útiles",
    "combodescripcion":"Útiles On Line para cualquier uso",
    "combocoleccion":[
        {
            "value": "url 1",
            "text": "link 1"
        },
        {
            "value": "url 2",
            "text": "link 2"
        }
        ,
        {
            "value": "url 3",
            "text": "link 3"
        }
    ]};
*/