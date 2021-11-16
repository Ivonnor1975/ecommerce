# E-commerce Back End Starter Code

## Description
AS A manager at an internet retail company, you will have a back end for my e-commerce website that uses the latest technologies, so your company can compete with other e-commerce companies.

![License](https://img.shields.io/badge/license-MIT-Blue.svg)

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#license)
  * [test](#test)

## Installation
  This application uses node.js, express, mysql2,sequelize, and dotenv modules
  
  To install necessary dependecies, run the following commands: 
  1. Clone repository to local computer
  2. Install Node.Js
  3. npm init
  4. npm install express sequelize mysql2
  5. npm install dotenv
  6. Make sure to create a file called .env with the following lines including your sql password for root. 
  7. From the root directory of your project, type "mysql -u root -p"
      type "source db/schema.sql"
      Exit mysql.
  8. Modify server.js to reflect true on line 18 "sequelize.sync({ force: true })". 
  8. npm start so the application runs and create Models/dabase tables
  9. Exit application using Ctrl+C
  10. Type node seeds/index.js so data can be inserted on tables
  11. Modify server.js to reflect false on line 18 "sequelize.sync({ force: false }), so tables are not recreated when running app.
  12. npm start
  13. Use Insomnia to interact with API's
  
## Usage
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

![image](https://user-images.githubusercontent.com/88918693/142017784-d674bd50-fe73-4d0d-ba02-300dae5a167a.png)

Look at the video 

## License
  
This project is licensed under the MIT
  
Link: https://opensource.org/licenses/MIT
            
   
## Test
There is not test in this project.

    
