# Test project:
Se pueden hacer peticiones a las siguientes direcciones:

- 34.16.180.82:3001/characters
- 34.16.180.82:3001/films
- 34.16.180.82:3001/planets



# Docker config

1. Agregar los puertos al .env
   Estos puertos deben ser los mismos q utiliza cada microservicio en su propio archivo .env

2. ejecutar ---> docker-compose build
3. ejecutar ---> docker-compose up

# Estructura

Basicamente tenemos los siguientes microservicios:

- **gateway**
- **database**
- **characters**
- **films**
- **planets**

## Gateway:

El gateway va a ser el unico punto de entrada q vamos a tener. Desde aca vamos a tener acceso, una vez levantados todos los microservicios en docker y conectados en la misma red, a _/characters_ - _/films_ - _/planets_. En gateway se crean los proxys para dirigirnos al microservicio correspondiente, dependiendo de la ruta.
Basicamente el gateway le hace llamados a otros microservicios (characters, films y planets) para obtener los datos.

## Database:

En database tenemos toda la configuracion de la base de datos y conexion directa a la base de datos en si. A este microservicio es al cual los microservicios characters, films y planets le van pegar para obtener datos mediante axios.

## Characters, planets y films:

Estos 3 son microservicios independientes que unicamente se encargan de obtener datos de la base de datos realizandole llamados al microservicio de la base de datos (database)
