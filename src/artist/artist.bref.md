# Requerimientos para las rutas de artista

## Post
+ El guardadod de un artista se puede hacers desde el propio endpoint de artistas o desde el endpoint de bands
+ El metodo post recibira un DTO de artista para hacer el guardado
+ Un artista puede tener relacion con una banda principal, y con n bandas secundarias, al guardar un artista desde el DTO de Band, esa banda sera la principal a menos que el artista ya tenga una principal, en dado caso la banda actual se agreagara a la lista de bandas secundariias del artista
+ Un artista puede tener o no discografia
+ Si el artista se agrega desde band, la discografia de la banda tambien se relacionara al artista, tambien si se agrega desde artist y se realciona con una banda ya sea principal o secundaria

### Ejemplo de DTO de Artista
~~~ json
{
    "name": "Michael Shawn Crahan",
    "artistName": "Shawn Crahan",
    "birthDate": -166306919,
    "deathDate": 0,
    "causeDeath": "",
    "startTemp": 1992,
    "endTemp": 0,
    "instruments": [
        "Percussion"
    ],
    "roles": [
        "Musician"
    ],
    "mainBand": null,
    "othersBands": [],
    "timeline": [],
    "discography": [
        {
            "name": "Slipknot",
            "relase": "June 29, 1999",
            "recorder": "September 29 - November 11, 1998February 1999",
            "studio": "Indigo Ranch Studios",
            "producer": "Ross Robinson",
            "label": "Roadrunner",
            "length": 3626000,
            "genres": [
                {
                    "name": "Nu metal",
                    "bref": "Nu metal is a subgenre of alternative metal that combines elements of heavy metal music with elements of other music genres such as hip hop, alternative rock, funk, industrial, and grunge."
                }
            ],
            "track_list": [
                {
                    "version": "Original release",
                    "songs": [
                        {
                            "number": 1,
                            "name":	"742617000027",
                            "writers": [],
                            "length": 36000
                        },
                        {
                            "number": 2,
                            "name": "(sic)",
                            "writers": [],
                            "length": 199000
                        },
                        {
                            "number": 3,
                            "name": "Eyeless",
                            "writers": [],
                            "length": 236000
                        }
                    ]
                }
            ],
            "bref": "Slipknot is the debut studio album by American heavy metal band Slipknot. "
        }
    ]
}
~~~
***
 
## GET
+ 