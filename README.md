steps to run this project

first clone the prject and intall few dependencies by below command
npm i express nodemon dotenv body-parser mongoose moment

create .env file in project and add given mongodb connection url
# MONGODB_URL = mongodb+srv://Vivek1:Vivek@cluster0.3i3cswf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

then make the backend server up by below command
nodemon index.js

if you get message at console like  "Server is up :)"
then it means server is up and running successfully

you can go to http://localhost:3000/vehicals 
to find all the available database values 

