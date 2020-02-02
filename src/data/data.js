export var dataConf = {
    "centralimage": "death_star_2.jpg",
    "marginbody":1,
    "iconpath": "HomePage_files/img/",
    "thumbnailspath": "HomePage_files/img/thumbnails/",
    "constbigger": 1.4, // Mínimo 1.0
    "constimgrelwidth": 2000,   // Ancho relativo de la imagen. Mida lo que mida le asignamos 2000
    "constimgrelheight": 1000   // Altura relativa de la imagen. Mida lo que mida le asignamos 1000
};

export var dataIco = [
        {
            "id": 1,
            "name": "Lista Links",
            "description": "Listado de todos los links",
            "type": "img",
            "coordinates": "942,685",
            "onclick": "fcn",
            // "action": "show_combo_data('help');",
			"action": "show_combo_data",
			"actionParams": "help",
            "icon": "Information-icon.png",
            "titlealt": "Lista Links",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
    },
		{
		    "id": 2,
		    "name": "Buscador",
		    "description": "Buscador de nombres",
		    "type": "img",
		    "coordinates": "970,816",
		    "onclick": "fcn",
		    "action": "help_finder",
			"actionParams": "",
            "icon": "Search-icon.png",
		    "titlealt": "Help",
		    "css": "",
		    "style": "",
		    "height": 32,
            "width":32,
		    "thumbnails": "",
		    "extra": "",
		    "active": "Y"
    }
    ,

        {
            "id": 3,
            "name": "Coordenadas",
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
        }
    ,
		{
		    "id": 4,
		    "name": "Google",
		    "description": "Buscador de internet",
		    "type": "img",
		    "coordinates": "660,400",
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
		    "id": 5,
		    "name": "GMail",
		    "description": "Correo GMail",
		    "type": "img",
		    "coordinates": "587,697",
		    "onclick": "url",
		    "action": "http://mail.google.com/",
		    "icon": "Mail-Gmail-icon.png",
		    "titlealt": "GMail",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
            "thumbnails": "gmail.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
		{
		    "id": 6,
		    "name": "Yahoo Mail",
		    "description": "Correo Yahoo",
		    "type": "img",
		    "coordinates": "587,757",
		    "onclick": "url",
		    "action": "https://login.yahoo.com/",
		    "icon": "email-yahoo-icon.png",
		    "titlealt": "Yahoo",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
            "thumbnails": "yahoomail.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
		{
		    "id": 7,
		    "name": "Google Maps",
		    "description": "",
		    "type": "img",
		    "coordinates": "395,695",
		    "onclick": "url",
		    "action": "http://maps.google.es/?ie=UTF8&ll=40.337941,-3.854485&spn=0.019235,0.054932&t=h&z=15",
            "icon": "earth-icon.png",
		    "titlealt": "Google Maps",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
            "thumbnails": "GoogleMapsFC.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
        {
            "id": 8,
            "name": "Traductor Idiomas",
            "description": "Google Translator",
            "type": "img",
            "coordinates": "620, 480",
            "onclick": "url",
            "action": "http://translate.google.es",
            "icon": "traductor_64.gif",
            "titlealt": "Google Translator",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "traductorgoogle.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 9,
            "name": "R.A.E.",
            "description": "Real Academia Española",
            "type": "img",
            "coordinates": "700,480",
            "onclick": "url",
            "action": "http://www.rae.es/",
            "icon": "Dictionary-Mac-Book-icon.png",
            "titlealt": "Diccionario",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "rae.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 10,
            "name": "Wikipedia",
            "description": "Wikipedia",
            "type": "img",
            "coordinates": "528,486",
            "onclick": "url",
            "action": "https://es.wikipedia.org/wiki/Wikipedia:Portada",
            "icon": "wikipedia_64.png",
            "titlealt": "Wikipedia",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "wikipedia.png",
            "extra": "",
            "active": "Y"
          }
    ,
        {
            "id": 11,
            "name": "Distancias",
            "description": "Medir Distancias",
            "type": "img",
            "coordinates": "706,180",
            "onclick": "url",
            "action": "http://sigpac.mapa.es/fega/visor/",
            "icon": "MedirDistancias.png",
            "titlealt": "Distancias",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "MedirDistancias.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 12,
            "name": "Icon Archive",
            "description": "Icon Archive",
            "type": "img",
            "coordinates": "250,540",
            "onclick": "url",
            "action": "http://www.iconarchive.com/",
            "icon": "Misc-Misc-Box-icon.png",
            "titlealt": "Icon Archive",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "iconarchive.png",
            "extra": "",
            "active": "Y"
        }

    ,
        {
            "id": 13,
            "name": "Combo Url Programación",
            "description": "Combo con Urls de Programación",
            "type": "img",
            "coordinates": "176,460",
            "onclick": "fcn",
            "action": "show_combo_data",
			"actionParams": "programacion",
            "icon": "Apps-Ide-Web-icon.png",
            "titlealt": "Combo Url Programación",
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
            "name": "Combo Recursos OnLine",
            "description": "Combo con recursos online",
            "type": "img",
            "coordinates": "147,534",
            "onclick": "fcn",
            "action": "show_combo_data",
			"actionParams": "recursos",
            "icon": "Windows-Run-icon.png",
            "titlealt": "Combo Recursos On Line",
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
            "id": 15,
            "name": "Aemet",
            "description": "El tiempo en Aemet",
            "type": "img",
            "coordinates": "884,429",
            "onclick": "url",
            "action": "http://www.aemet.es/es/eltiempo/prediccion/municipios/alcorcon-id28007",
            "icon": "sun-icon.png",
            "titlealt": "Aemet",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "aemet.png",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 16,
            "name": "AccuWeather",
            "description": "El tiempo en AccuWeather",
            "type": "img",
            "coordinates": "930,429",
            "onclick": "url",
            "action": "https://www.accuweather.com/es/es/alcorcon/305882/weather-forecast/305882",
            "icon": "cloudiness-icon.png",
            "titlealt": "AccuWeather",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "eltiempo.png",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 17,
            "name": "Weather",
            "description": "El tiempo en Weather",
            "type": "img",
            "coordinates": "884,488",
            "onclick": "url",
            "action": "https://weather.com/es-ES/tiempo/5dias/l/33fee4ebe9724cd67d2eee16e969f782fe616bdad9ce287575c622f4ef254df7",
            "icon": "thunderstorm-icon.png",
            "titlealt": "Weather",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
        ,
        {
            "id": 18,
            "name": "YouTube",
            "description": "YouTube",
            "type": "img",
            "coordinates": "118, 726",
            "onclick": "url",
            "action": "https://www.youtube.com/?hl=es&gl=ES",
            "icon": "Youtube-icon.png",
            "titlealt": "YouTube",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "youtube.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 19,
            "name": "Portadas Prensa",
            "description": "Portadas Prensa",
            "type": "img",
            "coordinates": "350, 785",
            "onclick": "url",
            "action": "http://kiosko.net/es/",
            "icon": "Newspapers-1-icon.png",
            "titlealt": "Portadas Prensa",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "portadasprensa.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 20,
            "name": "Periódicos OnLine",
            "description": "Combo Periódicos OnLine",
            "type": "img",
            "coordinates": "400, 785",
            "onclick": "fcn",
            "action": "show_combo_data('periodicos');",
            "icon": "Newspapers-2-icon.png",
            "titlealt": "Periódicos OnLine",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 21,
            "name": "El Mundo",
            "description": "Periódico El Mundo",
            "type": "img",
            "coordinates": "350, 850",
            "onclick": "url",
            "action": "http://www.elmundo.es/",
            "icon": "elmundo.jpg",
            "titlealt": "El Mundo",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "elmundo.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 22,
            "name": "Guía TV",
            "description": "Guía TV",
            "type": "img",
            "coordinates": "132, 820",
            "onclick": "url",
            "action": "http://www.elmundo.es/elmundo/television/guiatv/",
            "icon": "GuiaTV.png",
            "titlealt": "Guía TV",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "guiaTV.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 23,
            "name": "Miniaturizador",
            "description": "Miniaturas del Urls",
            "type": "img",
            "coordinates": "145, 876",
            "onclick": "url",
            "action": "https://www.thumbalizr.com/",
            "icon": "thumbalizr.png",
            "titlealt": "Miniaturizador",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "thumbalizr.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 24,
            "name": "Test de Velocidad",
            "description": "Guía TV",
            "type": "img",
            "coordinates": "145, 635",
            "onclick": "url",
            "action": "http://www.testdevelocidad.es/",
            "icon": "Downloads-1-icon.png",
            "titlealt": "Guía TV",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 25,
            "name": "Google Drive",
            "description": "Google Drive",
            "type": "img",
            "coordinates": "292, 836",
            "onclick": "url",
            "action": "https://drive.google.com/drive/my-drive",
            "icon": "Google-Drive-icon.png",
            "titlealt": "Google Drive",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 26,
            "name": "Google+",
            "description": "Google+",
            "type": "img",
            "coordinates": "530, 910",
            "onclick": "url",
            "action": "https://plus.google.com/u/0/",
            "icon": "google-plus-icon.png",
            "titlealt": "Google+",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 27,
            "name": "Skype",
            "description": "Skype",
            "type": "img",
            "coordinates": "618, 910",
            "onclick": "url",
            "action": "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1524411241&rver=7.0.6730.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D578134%26redirect_uri%3Dhttps%253A%252F%252Fweb.skype.com%252F%253FopenPstnPage%253Dtrue%26state%3D1292992f-95a9-4762-2d71-3480cd6d120f%26site_name%3Dlw.skype.com&lc=1033&id=293290&mkt=es-ES&psi=skype&lw=1&cobrandid=90010&client_flight=hsu%2CReservedFlight33%2CReservedFlight67",
            "icon": "skype-icon.png",
            "titlealt": "Skype",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 28,
            "name": "Linkedin",
            "description": "Linkedin",
            "type": "img",
            "coordinates": "708, 910",
            "onclick": "url",
            "action": "https://es.linkedin.com/",
            "icon": "linkedin-icon.png",
            "titlealt": "Linkedin",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 29,
            "name": "Twitter",
            "description": "Twitter",
            "type": "img",
            "coordinates": "794, 910",
            "onclick": "url",
            "action": "https://twitter.com/?lang=es",
            "icon": "twitter-icon.png",
            "titlealt": "Twitter",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 30,
            "name": "Facebook",
            "description": "Facebook",
            "type": "img",
            "coordinates": "884, 910",
            "onclick": "url",
            "action": "https://es-la.facebook.com/",
            "icon": "facebook-icon.png",
            "titlealt": "Facebook",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
    ,
        {
            "id": 31,
            "name": "Rockola",
            "description": "Rockola, radio on line",
            "type": "img",
            "coordinates": "745, 742",
            "onclick": "url",
            "action": "http://www.rockola.fm/",
            "icon": "radio-icon.png",
            "titlealt": "Rockola",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 32,
            "name": "Amazon",
            "description": "Amazon",
            "type": "img",
            "coordinates": "286, 895",
            "onclick": "url",
            "action": "https://www.amazon.es/",
            "icon": "amazon-icon2.png",
            "titlealt": "Amazon",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 33,
            "name": "Saldo Abono Transporte",
            "description": "Consulta de Saldo Abono Transporte",
            "type": "img",
            "coordinates": "220, 895",
            "onclick": "url",
            "action": "https://www.tarjetatransportepublico.es/CRTM-ABONOS/consultaSaldo.aspx",
            "icon": "public-transport-icon.png",
            "titlealt": "Saldo Abono Transporte",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 34,
            "name": "Alkor",
            "description": "Colegio Alkor",
            "type": "img",
            "coordinates": "540, 300",
            "onclick": "url",
            "action": "http://www.colegioalkor.com/",
            "icon": "Alkor.png",
            "titlealt": "Alkor",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "colealkor.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 35,
            "name": "Loterías del Estado",
            "description": "Loterías del Estado",
            "type": "img",
            "coordinates": "100, 940",
            "onclick": "url",
            "action": "https://www.loteriasyapuestas.es/es#",
            "icon": "lottery-folder-icon.png",
            "titlealt": "Loterías del Estado",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 36,
            "name": "Radios en idiomas",
            "description": "Radios en idiomas",
            "type": "img",
            "coordinates": "825, 742",
            "onclick": "fcn",
            "action": "show_combo_data",
			"actionParams": "radiosidiomas",
            "icon": "Radio-icon2.png",
            "titlealt": "Radios en idiomas",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
	,
        {
            "id": 37,
            "name": "Mail Ineco",
            "description": "Mail Ineco",
            "type": "img",
            "coordinates": "588, 816",
            "onclick": "url",
            "action": "https://outlook.office365.com/owa/?realm=ineco.es&path=/mail/inbox",
            "icon": "Mail-icon.png",
            "titlealt": "Mail Ineco",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
	,
        {
            "id": 38,
            "name": "Ereges",
            "description": "Ereges",
            "type": "img",
            "coordinates": "1545, 315",
            "onclick": "url",
            "action": "https://ereges-pre.ineco.com/",
            "icon": "justice-balance-icon.png",
            "titlealt": "Ereges",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 39,
            "name": "Mail Procesia",
            "description": "Mail Procesia",
            "type": "img",
            "coordinates": "648, 818",
            "onclick": "url",
            "action": "http://webmail.procesia.com",
            "icon": "mail-procesia-icon.png",
            "titlealt": "Mail Procesia",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 40,
            "name": "Dropbox",
            "description": "Dropbox",
            "type": "img",
            "coordinates": "1543, 226",
            "onclick": "url",
            "action": "https://www.dropbox.com/l/scl/AAC0IhTBbWYoTJUiBxazD8bcMQAEYCj1Wfw",
            "icon": "dropbox-icon.png",
            "titlealt": "Dropbox",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 41,
            "name": "Aira",
            "description": "Aira",
            "type": "img",
            "coordinates": "1617, 274",
            "onclick": "url",
            "action": "https://personalae-pre.ineco.com/",
            "icon": "ai-icon.png",
            "titlealt": "Aira",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 42,
            "name": "eReges",
            "description": "eReges",
            "type": "img",
            "coordinates": "1617, 185",
            "onclick": "url",
            "action": "https://ereges-pre.ineco.com/nuevoereges",
            "icon": "Gavel-Law-icon.png",
            "titlealt": "eReges",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
		,
        {
            "id": 43,
            "name": "eReges-API",
            "description": "eReges-API",
            "type": "img",
            "coordinates": "1698, 155",
            "onclick": "url",
            "action": "https://ereges-pre.ineco.com/eRegesAPI/index.html",
            "icon": "Apps-partitionmanager-icon.png",
            "titlealt": "eReges-API",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 44,
            "name": "Asana",
            "description": "Asana",
            "type": "img",
            "coordinates": "1542, 70",
            "onclick": "url",
            "action": "https://app.asana.com/0/home/900479283983793",
            "icon": "asana.png",
            "titlealt": "Asana",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 45,
            "name": "Project Center",
            "description": "Project Center - Ineco",
            "type": "img",
            "coordinates": "1746, 255",
            "onclick": "url",
            "action": "https://projectcenter.ineco.es//projectcenter/Account.aspx/RedirectLogOn?returnurl=/projectcenter/Home.aspx?d=true",
            "icon": "Project-icon.png",
            "titlealt": "Project Center",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 46,
            "name": "Jira",
            "description": "Jira - Ineco",
            "type": "img",
            "coordinates": "1604, 100",
            "onclick": "url",
            "action": "https://devti.ineco.es/jira",
            "icon": "Giraffe-icon.png",
            "titlealt": "Jira",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 47,
            "name": "Confluence",
            "description": "Confluence - Ineco",
            "type": "img",
            "coordinates": "1543, 154",
            "onclick": "url",
            //"action": "https://devti.ineco.es/confluence",
			"action": "https://devti.ineco.es/confluence/login.action?os_destination=%2F",
            "icon": "Confluence.png",
            "titlealt": "Confluence",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 48,
            "name": "Moovit",
            "description": "Moovit - Plan de Transporte",
            "type": "img",
            "coordinates": "2000, 2000",
            "onclick": "url",
			"action": "http://www.google.es",
            "icon": "space-ship-3-icon.png",
            "titlealt": "Moovit",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 49,
            "name": "TEST",
            "description": "TEST",
            "type": "img",
            "coordinates": "790, 210",
            "onclick": "url",
			"action": "https://moovitapp.com/",
            "icon": "cTest.PNG",
            "titlealt": "TEST",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
];

// ÑAPAVISO - FIN Colección Datos principales

//  

// Filter the icons data with "active=Yes"
dataIco = dataIco.filter(function (data) {
    return data.active == "Y";
});

// Colección de combos
// Tiene que estar declarada como mínimo
//var dataCombos = [];


export var dataCombos = [
    {
        "comboid": "programacion",
        "comboname": "Url Programación",
        "combodescripcion": "Url de sitios de programación",
        "comboactive": "Y",
        "combosize" : 3,
        "combocoleccion": [
            {
                "text": "Stackoverflow",
                "value": "http://stackoverflow.com",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "Dotnetperls",
                "value": "http://www.dotnetperls.com",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "C-sharpcorner",
                "value": "http://www.c-sharpcorner.com",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-examples",
                "value": "http://www.csharp-examples.net",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "Bytes",
                "value": "http://bytes.com",
                "orden": 5,
                "active": "Y"
            },
            {
                "text": "Eggheadcafe",
                "value": "http://www.eggheadcafe.com",
                "orden": 6,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp.net-tutorials",
                "value": "http://csharp.net-tutorials.com",
                "orden": 7,
                "active": "Y"
            }
            ,
            {
                "text": "Codeguru",
                "value": "http://www.codeguru.com",
                "orden": 8,
                "active": "Y"
            }
            ,
            {
                "text": "Support.microsoft",
                "value": "http://support.microsoft.com",
                "orden": 9,
                "active": "Y"
            }
            ,
            {
                "text": "Microsoft",
                "value": "http://msdn.microsoft.com",
                "orden": 10,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-station",
                "value": "http://www.csharp-station.com",
                "orden": 11,
                "active": "Y"
            }
            ,
            {
                "text": "W3schools",
                "value": "http://www.w3schools.com",
                "orden": 12,
                "active": "Y"
            }
            ,
            {
                "text": "W3",
                "value": "http://www.w3.org",
                "orden": 13,
                "active": "Y"
            }
            ,
            {
                "text": "Forosdelweb",
                "value": "http://www.forosdelweb.com",
                "orden": 14,
                "active": "Y"
            }
            ,
            {
                "text": "Java2s",
                "value": "http://www.java2s.com",
                "orden": 15,
                "active": "Y"
            }
            ,
            {
                "text": "Javascripter",
                "value": "http://www.javascripter.net/",
                "orden": 16,
                "active": "Y"
            }
            ,
            {
                "text": "Acens",
                "value": "http://www.acens.com/",
                "orden": 17,
                "active": "Y"
            }
			//http://www.tutorialsteacher.com/webapi/create-web-api-project
        ]
    }
    ,
    {
        "comboid": "recursos",
        "comboname": "Recursos On Line",
        "combodescripcion": "Urls de recursos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Monitorización Internet",
                "value": "http://www.akamai.com/html/technology/dataviz1.html",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "MD5 Encriptación",
                "value": "http://www.cuwhois.com/herramienta-seo-md5.php",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "MD5 Desencriptación",
                "value": "http://md5.rednoize.com/",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "Calculadora NIF",
                "value": "http://www.calcularletradni.com/",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "Calculadora NIE",
                "value": "http://www.gabilos.com/textocalculadoranie.htm",
                "orden": 5,
                "active": "Y"
            }
            ,
            {
                "text": "Cod Postal",
                "value": "http://www.correos.es/comun/CodigosPostales/1010_s-CodPostal.asp",
                "orden": 6,
                "active": "Y"
            }
            ,
            {
                "text": "Generador NIF-NIE-CIF",
                "value": "http://niednicifgenerador.appspot.com/",
                "orden": 7,
                "active": "Y"
            }
            ,
            {
                "text": "Generador-Validador NIF-NIE-CIF",
                "value": "http://generadordni.es/",
                "orden": 8,
                "active": "Y"
            }
            ,
            {
                "text": "Tarjetas de Crédito - Pruebas",
                "value": "http://modulosdepago.es/Tarjetas-de-cr%C3%A9dito-pruebas",
                "orden": 9,
                "active": "Y"
            }
            ,
            {
                "text": "Validador Cuenta Corriente",
                "value": "http://www.aplicacionesinformaticas.com/programas/gratis/ctabanco.php",
                "orden": 10,
                "active": "Y"
            }
            ,
            {
                "text": "Calcula IBAN-BIC-SWIFT",
                "value": "http://www.calculatuiban.com/",
                "orden": 11,
                "active": "Y"
            }
            ,
            {
                "text": "Convertir Epoch - Tiempo Unix",
                "value": "http://espanol.epochconverter.com/",
                "orden": 12,
                "active": "Y"
            }
            ,
            {
                "text": "Conv Json To C#",
                "value": "http://json2csharp.com/",
                "orden": 13,
                "active": "Y"
            }
            ,
            {
                "text": "Conv Json To C# - Avanzado",
                "value": "https://app.quicktype.io/",
                "orden": 14,
                "active": "Y"
            }
        ]
    }
    ,
    { 
        "comboid": "periodicos",
        "comboname": "Periódicos online",
        "combodescripcion": "Combo de periódicos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "El Mundo",
                "value": "http://www.elmundo.es/",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "El País",
                "value": "http://www.elpais.com/",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "20 Minutos",
                "value": "http://www.20minutos.es/",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "Heraldo Aragon",
                "value": "http://www.heraldo.es/",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "ABC",
                "value": "http://www.abc.es",
                "orden": 5,
                "active": "Y"
            }
        ]
    }
    ,
    {
        "comboid": "radiosidiomas",
        "comboname": "Radios en Idiomas",
        "combodescripcion": "Combo de radios online en inglés",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Tunein",
                "value": "https://tunein.com/radio/Learning-English-p51794/?topicId=114633337",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "BBC 4",
                "value": "https://www.bbc.co.uk/radio/player/bbc_radio_fourfm",
                "orden": 2,
                "active": "Y"
            },
            {
                "text": "La Classe Francaiçe",
                "value": "https://laclassefrançaise.es/cultura-francesa/radios-francesas/",
                "orden": 4,
                "active": "Y"
            },
			{
				"text": "BBC",
				"value": "https://www.bbc.co.uk/radio/player/bbc_world_service",
				"orden": 3,
				"active": "Y"
			}
			
        ]

    }
];


// Filter the combos data with "comboactive=Yes"
dataCombos = dataCombos.filter(function (data) {
    return data.comboactive == "Y";
});


// http://prcs-lpt-016/ReportServer_SSRS/
// http://prcs-lpt-016:81/ReportServer_SSRS/Pages/ReportViewer.aspx?%2F
// http://prcs-lpt-016:81/Reports/browse/
// https://regex101.com/r/gG3cX2/1

// Tu usuario en Project Center es jose.pairet@e.ineco.com y tu contraseña I119QHE7
// https://projectcenter.ineco.es//projectcenter/Account.aspx/RedirectLogOn?returnurl=/projectcenter/Home.aspx?d=true


//https://app.asana.com/0/home/900479283983793
// jose.pairet@e.ineco.com
// 7Enanitos

// https://devti.ineco.es/jira
// jose.pairet
// Ineco2018


// https://devti.ineco.es/confluence
// Confluence.png
// jose.pairet
// Ineco2018
