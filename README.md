# Docker config

1. crear red con el nombre 'starwars' ---> docker network create starwars



# Estructura

Basicamente tenemos los siguientes microservicios:

- **gateway**
- **database**
- **characters**
- **films**
- **planets**


Todos tienen que estar montados y corriendo en un contenedor de docker porque de eso se trata este mini proyecto, de poder trabajar con microservicios y utilizar docker.




## Gateway:

El gateway va a ser el unico punto de entrada q vamos a tener. Desde aca vamos a tener acceso, una vez levantados todos los microservicios en docker y conectados en la misma red, a */characters* - */films* - */planets*. En gateway se crean los proxys para dirigirnos al microservicio correspondiente, dependiendo de la ruta.
Basicamente el gateway le hace llamados a otros microservicios (characters, films y planets) para obtener los datos.



## Database:
En database tenemos toda la configuracion de la base de datos y conexion directa a la base de datos en si. A este microservicio es al cual los microservicios characters, films y planets le van pegar para obtener datos mediante axios.



## Characters, planets y films:
Estos 3 son microservicios independientes que unicamente se encargan de obtener datos de la base de datos realizandole llamados al microservicio de la base de datos (database)
