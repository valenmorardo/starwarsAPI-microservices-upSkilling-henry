# Docker comands:


1. situarse en la carpeta main --> /database

2. ejecutar ---> docker build -t database .
 
3. ejecutar ---> docker run --network=starwars --name=database -p 3005:3005 database