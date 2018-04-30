const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

managerMode();

function managerMode() {
    console.log("Entering management mode ...\n");
    inquirer.prompt([{
        type: "list",
        name: "manage",
        message: "Hello, what would you like to do?",
        choices: ["View inventory", "Low Inventory Items", "Add to Inventory", "Add New Product"]
    }]).then((answers) => {
        let managerChoice = answers.manage;

        switch (managerChoice) {
            case "View inventory":
                return readItems();

            case "Low Inventory Items":
                return lowInv();

            case "Add to Inventory":
                return addInv();

            case "Add New Product":
                return addNew();
        }
    })
}

function readItems() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM items", function (err, res) {
        if (err) throw err;
        console.table(res);
        // console.log(res);
        // start(res);
        // Log all results of the SELECT statement

        //   connection.end();
    });
}

function lowInv(){
    console.log("Showing all low inventory products")
    connection.query("SELECT * FROM items WHERE quantity < 5", function (err, res){
        if (err) throw err;
        console.table(res)
    });
}

function addInv(){
    console.log("Showing all products...")
    readItems();
    inquirer.prompt([{
        type:"input",
        name:"addmore",
        message:"What products would you like to resupply?"
    },
    {
        type: "input",
        name: "quantity",
        message: "How many would you like to add?"
    }
])
    connection.query("SELECT * FROM items WHERE quantity < 5", function (err, res){
        if (err) throw err;
        console.table(res)
    });
}