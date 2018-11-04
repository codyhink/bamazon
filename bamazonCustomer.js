let mysql = require('mysql');
let inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,
    user: 'root',

    password: "Kansas@1328",
    database: 'bAmazon_db'
});

//connect to mysql server and database -- run start function to prompt
connection.connect(function(err) {
    if(err) throw err;
    start();
});

function start() {
    displayItems();
}



//start function to get things rolling
function displayItems() {
    connection.query('SELECT * FROM products', function (err, data) {
        if(err) throw err;
        
        let  items = '';
        for (var i=0; i < data.length; i++){
            items = '';
            items += 'Item ID: ' + data[i].item_id + ' || ';
            items += 'Product Name: ' + data[i].product_name + ' || ';
            items += 'Departement: ' + data[i].department_name + ' || '
            items += 'Price: $' +  data[i].price + '\n';

            console.log(items);
        }

        //prompt how many user wants to buy
        promptBuy();
    })
}

function promptBuy() {
    inquirer.prompt([
        {
            name:'id',
            type: 'input',
            message: 'Please enter the Item ID you wish to purchase.',
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to purchase?',
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ])

    .then(function (input) {

        let item = input.id;
        let quantity = input.quantity;

        connection.query('SELECT * FROM products WHERE ?', [{item_id: item}], function(err, data) {
           
            if (err) throw err;

            if(data.length === 0) {
                console.log('ERROR: Invalid Item ID. Please enter a valid Item ID.');
                console.log('------------------------------------------');
                displayItems();
            }
            else {
                let itemData = data[0];

                if (quantity <= itemData.stock_quantity){
                    console.log('Your order has ben placed!')
                    
                    connection.query('UPDATE products SET stock_quantity = ' + (itemData.stock_quantity - quantity) + ' WHERE item_id = ' + item, function(err, data) {
                        if (err) throw err;

                        console.log('Thank you for your purchase!');
                        connection.end();
                    })
                }
            
            else {
                console.log('Sorry! This is not enough product in stock for your order. Please choose a lower quantity.');
                console.log('\n------------------------------------------')
                displayItems();
            }
        }
        })
    })
}