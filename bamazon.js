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

readItems();


function start(res) {
    inquirer.prompt([{
            type: "input",
            name: "id",
            message: "What is the id of the item?",
        },
        {
            type: "input",
            name: "quantity",
            message: "How many would you like?"
        }
    ]).then((answers) => {
        let itemID = answers.id;
        let quantity = answers.quantity;
        let itemIndex = parseInt(itemID) - 1;
        let correctID = res[itemIndex];
        let newQuantity = correctID.quantity - quantity;
        connection.query("UPDATE items SET ? WHERE ?", [{
                    quantity: newQuantity
                },
                {
                    item_id: correctID.item_id
                }
            ],
            function (err, res) {
                if (err) throw err;
                console.log(`you bought ${quantity} of ${correctID.product} which cost you $${correctID.price * quantity}`);
                readItems();
                // start();
                // Log all results of the SELECT statement

                //   connection.end();
            });

        // console.log(itemID);
        // console.log(quantity);
    })
}

function readItems() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM items", function (err, res) {
        if (err) throw err;
        console.table(res);
        // console.log(res);
        start(res);
        // Log all results of the SELECT statement

        //   connection.end();
    });
}