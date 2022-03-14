# Products List App
This project is developed as a takehome project. It is a basic quiz application. This project has two sides: 'server' and 'client'. 'server' is the back-end Api where the questions and their options are stored and a seeder is created to add five questions and their options to the api. 'client' displays the quiz application in the front-end. 

![screenshot](https://github.com/necmigunduz/mb-test-app-latest/blob/master/assets/server.png)


## 'server' is Built With

- Ruby on Rails.

## 'client' is Built With

- React,
- Bootstrap.

## Getting Started
### Clone the repository and prepare client and server for operation:
- `git clone https://github.com/necmigunduz/marble-test`,
- `cd mb-test-app-latest`,
- `cd server`
- `npm install`
- `cd ..`
- `cd client`
- `npm install`.

### To run MongoDB
- `docker run -d -p 27017:27017 mongo:latest`.

### To run server
- `cd server` (from the main folder),
- `docker build -t server .`,
- `docker run -d -p 8080:8080 server:latest`.

### To run client
- `cd client` (from the main folder),
- `docker build -t client .`,
- `docker run -d -p 3000:3000 client:latest`.

## Usage
- User needs to run MongoDB first and then build server and client, and then run client and server as mentioned above. To view the server (api), please type http://localhost:8080/api/products in your explorer. To view client, type http://localhost3000 in your explorer. After running server and client, user can see the products list and clicking on product details buttons would show the properties of a specific product. Adding and removing products will increase the total amounts on the main page and on product modals. Any total change will influence server api and amount info will be changed accordingly.

## Author

👤 **Necmi Gunduz**

- LinkedIn: [Necmi Gunduz](https://www.linkedin.com/in/necmigunduz/)
- Github: [@necmigunduz](https://github.com/necmigunduz/)
- Twitter: [@necm_gun](https://twitter.com/necm_gun)
- Mail: [necmigunduz@gmail.com](necmigunduz@gmail.com)

## Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!!

## 📝 [License](https://creativecommons.org/licenses/by-nc-nd/4.0/)