## Requerimientos para las rutas de Album

## Post
+ Para publicar un nuevo Album el metodo post debe recibir un DTO de artist
+ Un album debe tener siempre una relacion con una banda o con un artista existentes, a menos que se agreguen desde el post de band
+ Si se agrega desde el endpoint de bands (propiedad discography) tendra relacion con la banda y con los miembros de la misma
+ Si se agrega desde el endpoint de artist (propiedad discography) tendra relacion con el artista pero no con la banda si el artista tiene una relacion
+ Cada album debe tener al menos un traclist, el cual se guardara como relacion

### Ejemplo de DTO album
~~~ json
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
~~~