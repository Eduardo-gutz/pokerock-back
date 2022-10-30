# Poke Rockstars

### Interface de Banda
```
|- id
|- Nombre de la banda
|- Integrantes de la banda
|    |- Arttista { Interrface de Artista }[]
|- Resumen de su historia (fundacion)
|- Discografia
|   |- Discografia { Interface de Dicografia }[]
|- Origen
|- Generos
|   |- Gender { Interface de Genero }[]
|- Temporada
|- Integrantes Pasados
|   |- Artista { Interface de Artista }[]
|- Cronologia (Hechos historicos de la banda)
| |- Crono { Intercae de hecho historico }
|- Imagenes relevantes
```

### Interface de Artista 
```
|- id
|- Nombre Artistico
|- Nombre natural
|- Fecha de nacimiento
|- Fecha de Fallecimiento
|- Causa de Falleciento
|- Temporada
|- Instrumentos
|- Roles en la banda
|- Banda Principal { Interface de Banda }
|- Otras bandas
|   |- Banda { Interface de Banda }
|- Colaboraciones
|- Otras Obras
|- Cronologia (Hechos historicos de la vida del artista)
|   |- Crono { Intreface de Hecho Historico }[]
|- Discografia
|   |- Discografia { Interface de Dicografia }[]
|- imagenes
```

### Interface de Discografia
```
|- id
|- Nombre del Disco
|- Año de Lanzamiento
|- Año de grabacion
|- Estudio
|- Genero
|- Longitud (tiempo)
|- Productor
|- Compañia
|- Songs
|- Bref
|- Portada
```

### Interface de Hecho Historico
```
|- id
|- Temporada
|- Title
|- Bref
|- Long
```

### Interface de Genero
```
|- id
|- Nombre del genero
|- bref
```

## Example
```json
{
    "name": "Red Hot Chilli Peppers",
    "members": [
        {  
            "id": 9,
            "name": "Anthony Kiedis",
            "endpoint": "/artists/009"
        },
        {  
            "id": 10,
            "name": "Flea",
            "endpoint": "/artists/010"
        },
        {  
            "id": 11,
            "name": "Chad Smith",
            "endpoint": "/artists/011"
        },
        {  
            "id": 12,
            "name": "John Frusciante",
            "endpoint": "/artists/012"
        }
    ],
    "history": "Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983, comprising vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith and guitarist John Frusciante. Their music incorporates elements of alternative rock, funk, punk rock, hard rock, hip hop, and psychedelic rock. Their eclectic range has influenced genres such as funk metal,[1] rap metal,[2] rap rock,[3] and nu metal.[4][2] With over 120 million records sold worldwide, Red Hot Chili Peppers are one of the best-selling bands of all time.[5] They are the most successful band in the history of alternative rock, with the records for most number-one singles (14), most cumulative weeks at number one (85) and most top-ten songs (25) on the Billboard Alternative Songs chart.[6] They have won six Grammy Awards, were inducted into the Rock and Roll Hall of Fame in 2012, and in 2022 received a star on the Hollywood Walk of Fame.",
    "discography": [
        {
            "id": 1,
            "year": 1984,
            "name": "The Red Hot Chilli Peppers",
            "endpoint": "/dicography/001"
        },
        {
            "id": 2,
            "year": 1985,
            "name": "Freaky Styley",
            "endpoint": "/dicography/002"
        },
        {
            "id": 3,
            "year": 1986,
            "name": "Mother's Milk",
            "endpoint": "/dicography/003"
        }
    ],
    "origin": "Los Angeles, California, U.S.",
    "genders": [
        {
            "id": 1,
            "name": "Funk Rock",
            "endpoint": "/gender/1"
        },
        {
            "id": 2,
            "name": "Alternative Rock",
            "endpoint": "/gender/2"
        },
        {
            "id": 3,
            "name": "Funk Metal",
            "endpoint": "/gender/3"
        },
        {
            "id": 4,
            "name": "Rap Rock",
            "endpoint": "/gender/4"
        }
    ],
    "yearsActive": {
        "start": "1983",
        "end": "present"
    },
    "pastMembers": [
        {  
            "id": 10,
            "name": "Hillel Slovak",
            "endpoint": "/artists/10"
        },
        {  
            "id": 11,
            "name": "Jack Irons",
            "endpoint": "/artists/11"
        },
        {  
            "id": 12,
            "name": "Cliff Martinez",
            "endpoint": "/artists/12"
        },
        {  
            "id": 13,
            "name": "Jack Sherman",
            "endpoint": "/artists/13"
        },
        {  
            "id": 14,
            "name": "DeWayne McKnight",
            "endpoint": "/artists/14"
        },
        {  
            "id": 15,
            "name": "D. H. Peligro",
            "endpoint": "/artists/15"
        }
    ],
    "timeline": [
        {
            "id": 1,
            "start": "1983",
            "end": "1984",
            "title": "Early history",
            "bref": "resumen",
            "long": "with details",
            "image": ""
        }
    ],
    "images": [
        "URL de Imagen"
    ]
}
```
