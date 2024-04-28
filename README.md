steps to run this project

first clone the project and intall few dependencies by below command
npm i express nodemon dotenv body-parser mongoose moment

create .env file in project and add given mongodb connection url
# MONGODB_URL = mongodb+srv://Vivek1:Vivek@cluster0.3i3cswf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

then make the backend server up by below command
nodemon index.js

if you get message at console like  "Server is up :)"
then it means server is up and running successfully

you can go to http://localhost:3000/vehicals 
to find all the available database values 


add all given data set using http://localhost:4000/vehicals/addNewVehicalInfo

where _id and __v field is auto generated so no need to worry about that
Data set is as given below:-

{
    "status": "SUCCESS",
    "data": [
        {
            "_id": "662c9a0a084535a688090982",
            "firstName": "Jam",
            "lastName": "Thakur",
            "numberOfWheels": "4",
            "typeOfVehical": "hatchback",
            "model": "ToyotaCorolla",
            "bookStartDate": "2024-04-21T00:00:00.000Z",
            "bookEndDate": "2024-04-25T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9a38084535a688090984",
            "firstName": "Adam",
            "lastName": "Singh",
            "numberOfWheels": "2",
            "typeOfVehical": "sports",
            "model": "Ducati Panigale V4 sports",
            "bookStartDate": "2024-03-21T00:00:00.000Z",
            "bookEndDate": "2024-03-22T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9a48084535a688090986",
            "firstName": "Samule",
            "lastName": "Kumar",
            "numberOfWheels": "4",
            "typeOfVehical": "hatchback",
            "model": "Honda Civic Hatchback",
            "bookStartDate": "2024-04-12T00:00:00.000Z",
            "bookEndDate": "2024-04-15T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9a55084535a688090988",
            "firstName": "Saw",
            "lastName": "Singh",
            "numberOfWheels": "4",
            "typeOfVehical": "hatchback",
            "model": "Mazda Mazda3 Hatchback",
            "bookStartDate": "2024-04-15T00:00:00.000Z",
            "bookEndDate": "2024-04-17T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9a68084535a68809098a",
            "firstName": "Naveen",
            "lastName": "Patnayak",
            "numberOfWheels": "4",
            "typeOfVehical": "suv",
            "model": "Toyota RAV4 suv",
            "bookStartDate": "2024-03-08T18:30:00.000Z",
            "bookEndDate": "2024-04-17T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9a75084535a68809098c",
            "firstName": "Gomti",
            "lastName": "Lucknow",
            "numberOfWheels": "4",
            "typeOfVehical": "suv",
            "model": "Honda CR-V",
            "bookStartDate": "2024-03-02T00:00:00.000Z",
            "bookEndDate": "2024-03-04T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9a88084535a68809098e",
            "firstName": "Subash",
            "lastName": "Kumar",
            "numberOfWheels": "4",
            "typeOfVehical": "suv",
            "model": "Jeep Grand Cherokee suv",
            "bookStartDate": "2024-03-19T00:00:00.000Z",
            "bookEndDate": "2024-03-20T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9a96084535a688090990",
            "firstName": "Dow",
            "lastName": "Dear",
            "numberOfWheels": "4",
            "typeOfVehical": "suv",
            "model": "Kia Sportage suv",
            "bookStartDate": "2024-03-12T00:00:00.000Z",
            "bookEndDate": "2024-03-20T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9aa4084535a688090992",
            "firstName": "Danel",
            "lastName": "Disuza",
            "numberOfWheels": "4",
            "typeOfVehical": "sedan",
            "model": "Toyota Camry sedan",
            "bookStartDate": "2024-03-13T00:00:00.000Z",
            "bookEndDate": "2024-03-20T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9ab1084535a688090994",
            "firstName": "Shyam",
            "lastName": "Ji",
            "numberOfWheels": "4",
            "typeOfVehical": "sedan",
            "model": "Nissan Altima sedan",
            "bookStartDate": "2024-03-20T00:00:00.000Z",
            "bookEndDate": "2024-03-26T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9ace084535a688090997",
            "firstName": "Kunal",
            "lastName": "Karma",
            "numberOfWheels": "2",
            "typeOfVehical": "sports",
            "model": "Yamaha YZF-R1 sports",
            "bookStartDate": "2024-03-22T00:00:00.000Z",
            "bookEndDate": "2024-03-26T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9adc084535a688090999",
            "firstName": "Karan",
            "lastName": "Preet",
            "numberOfWheels": "2",
            "typeOfVehical": "sports",
            "model": "Honda CBR1000RR Fireblade sports",
            "bookStartDate": "2024-03-25T00:00:00.000Z",
            "bookEndDate": "2024-03-26T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9ae7084535a68809099b",
            "firstName": "Naman",
            "lastName": "Tripathi",
            "numberOfWheels": "4",
            "typeOfVehical": "sedan",
            "model": "Ford Fusion sedan",
            "bookStartDate": "2024-03-25T00:00:00.000Z",
            "bookEndDate": "2024-03-29T00:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "662c9af3084535a68809099d",
            "firstName": "Lovely",
            "lastName": "Singh",
            "numberOfWheels": "4",
            "typeOfVehical": "sedan",
            "model": "Honda Accord sedan",
            "bookStartDate": "2024-03-27T00:00:00.000Z",
            "bookEndDate": "2024-03-29T00:00:00.000Z",
            "__v": 0
        }
    ]
}


After adding all the data you can go to this url http://localhost:4000/vehicals/booking/:id
and do booking by giving firstName, lastName, bookStartDate, bookEndDate 
rest leave all other fields as it is. 
If vehical is available at that particular date then booking will be successful else it will fail with message booking not possible.

if you have any doubt reach out to me at vivekumar@gmail.com