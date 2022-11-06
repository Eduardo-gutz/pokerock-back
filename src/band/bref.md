# Reglas para el funcionamiento de Band.controller

## Post
+ El metodo post del controller aceotara un DTO conpuesto de todos los DTOs con los que se tenga relacion, (album, artist, genre),

+ Todas las bandas deben tener al menos 2 miembros (artist), de lo contrario se consideran a los artistas como solitas, y el nombre de la banda como el nombre artistico o AKA del artista

+ Todas las bandas deben tener al menos un album en su discografia

+ Todas las bandas deben tener al menos un genero (genre)

+ Todas las bandas deben tener el año en el que inicio su carrera, y el año de fin si aplica si se omite el año de fin se tomara como presente como default, el año de inicio debe ser igual o menor al año actual

+ devolvera la banda que se termina de guardar

### Ejemplo de DTO de Banda
~~~ json
{
    "name": "Slipknot",
    "summary": "Slipknot is an American heavy metal band formed in Des Moines, Iowa, in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray.",
    "origin": "Des Moines, Iowa, U.S.",
    "startTemp": 1995,
    "endTemp": 0,
    "toPresent": true,
    "genres": [
        {
            "name": "Nu metal",
            "bref": "Nu metal is a subgenre of alternative metal that combines elements of heavy metal music with elements of other music genres such as hip hop, alternative rock, funk, industrial, and grunge."
        },
        {
            "name": "Alternative metal",
            "bref": "Alternative metal is a genre of heavy metal music that combines heavy metal with influences from alternative rock and other genres not normally associated with metal."
        },
        {
            "name": "Groove metal",
            "bref": "Groove metal is a subgenre of heavy metal music that began in the early 1990s. The genre achieved success in the 1990s and continued having success in the 2000s."
        },
        {
            "name": "Heavy metal",
            "bref": "Heavy metal is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and United States. With roots in blues rock, psychedelic rock and acid rock,"
        }
    ],
    "members": [
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
                    "bref": "Slipknot is the debut studio album by American heavy metal band Slipknot."
                }
            ]
        }
    ],
    "pastMembers": [],
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
            "bref": "Slipknot is the debut studio album by American heavy metal band Slipknot. It was released on June 29, 1999 by Roadrunner Records, following a demo containing a few of the songs which had previously been released in 1998."
        }
    ]
}
~~~

***

## Get

+ El metodo get devolvera un objeto de band con todas sus relaciones en forma de link de endpoint

+ Get all devolvera una lista con la informacion basica de todas las bandas, solo el nombre, id, portada, y endpoint donde se puede encontrar la banda con sus detalles

### Ejemplo de objeto devuleto en get
~~~ json
{
			"_id": "63633a9996da40f56b6da631",
			"name": "Slipknot",
			"summary": "Slipknot is an American heavy metal band formed in Des Moines, Iowa, in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray.",
			"origin": "Des Moines, Iowa, U.S.",
			"startTemp": 1995,
			"endTemp": 0,
			"toPresent": true,
			"discography": [
				{
					"id": "63633a9996da40f56b6da629",
					"name": "Slipknot",
					"endpoint": "/album/63633a9996da40f56b6da629",
					"_id": "63633a9996da40f56b6da632"
				}
			],
			"genres": [
				{
					"id": "63633a9896da40f56b6da611",
					"name": "Nu metal",
					"endpoint": "/genre/63633a9896da40f56b6da611",
					"_id": "63633a9996da40f56b6da633"
				},
				{
					"id": "63633a9896da40f56b6da613",
					"name": "Alternative metal",
					"endpoint": "/genre/63633a9896da40f56b6da613",
					"_id": "63633a9996da40f56b6da634"
				},
				{
					"id": "63633a9896da40f56b6da615",
					"name": "Groove metal",
					"endpoint": "/genre/63633a9896da40f56b6da615",
					"_id": "63633a9996da40f56b6da635"
				},
				{
					"id": "63633a9896da40f56b6da617",
					"name": "Heavy metal",
					"endpoint": "/genre/63633a9896da40f56b6da617",
					"_id": "63633a9996da40f56b6da636"
				}
			],
			"members": [
				{
					"id": "63633a9996da40f56b6da62e",
					"name": "Michael Shawn Crahan",
					"endpoint": "/artist/63633a9996da40f56b6da62e",
					"_id": "63633a9996da40f56b6da637"
				}
			],
			"pastMembers": [],
			"__v": 0
		}
~~~

***

## Update

+ Recibira un DTO parcial de band que debe incluir el id de la banda a editar, si se envia mas discugrafia, mienbros o generos, estos se agregaran a laa listas existentes con relacion a la banda que se esta editando, si se quiere editar un album, artsta o genero, se debe hacer desde su propio endpoint

***

## Delete
+ Al eliminar una banda se eliminara solo el registro de la banda, sin afectar al listado de artistas o generos, solo se elinara el listado de albums, si no tienen relacion con ningun otro artista o banda

+ para eliminar artistas, albumes o generos se debe hacer desde su propio endpoint