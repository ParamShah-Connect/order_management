import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "order_mngt",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection error:", err);
  } else {
    console.log("Connected");

    // Create 'admin' table if it does not exist
    const createAdminTable = `
      CREATE TABLE IF NOT EXISTS admin (
        name TEXT,
        email VARCHAR(255),
        password VARCHAR(255)
      )
    `;
    con.query(createAdminTable, (err, result) => {
      if (err) {
        console.log("Error creating admin table:", err);
      } else {
        console.log("Admin table created or already exists.");
      }
    });

    // Create 'customerpo' table if it does not exist
    const createCustomerPoTable = `
      CREATE TABLE IF NOT EXISTS customerpo (
        name TEXT,
        quantity INT,
        date VARCHAR(255),
        invoice VARCHAR(255),
        cost INT
      )
    `;
    con.query(createCustomerPoTable, (err, result) => {
      if (err) {
        console.log("Error creating customerpo table:", err);
      } else {
        console.log("CustomerPo table created or already exists.");
      }
    });

    // Create 'customers' table if it does not exist
    const createCustomersTable = `
      CREATE TABLE IF NOT EXISTS customers (
        name VARCHAR(255),
        email VARCHAR(255),
        phone INT,
        address VARCHAR(255),
        area VARCHAR(255),
        city VARCHAR(255),
        status VARCHAR(50),
        GSTN INT
      )
    `;
    con.query(createCustomersTable, (err, result) => {
      if (err) {
        console.log("Error creating customers table:", err);
      } else {
        console.log("Customers table created or already exists.");
      }
    });

    // Create 'item_master' table if it does not exist
    const createItemMasterTable = `
      CREATE TABLE IF NOT EXISTS item_master (
        name VARCHAR(255),
        supplier VARCHAR(255),
        category VARCHAR(255),
        brand VARCHAR(255),
        description VARCHAR(255),
        unit VARCHAR(50),
        status VARCHAR(50),
        price INT,
        quantity INT
      )
    `;
    con.query(createItemMasterTable, (err, result) => {
      if (err) {
        console.log("Error creating item_master table:", err);
      } else {
        console.log("Item_master table created or already exists.");
      }
    });

    // Create 'edit_item_stock' table if it does not exist
    const createEditItemStockTable = `
      CREATE TABLE IF NOT EXISTS edit_item_stock (
        name VARCHAR(255),
        qty INT,
        price INT,
        date VARCHAR(255)
      )
    `;
    con.query(createEditItemStockTable, (err, result) => {
      if (err) {
        console.log("Error creating edit_item_stock table:", err);
      } else {
        console.log("Edit_item_stock table created or already exists.");
      }
    });

    // Create 'purchase_orders' table if it does not exist
    const createPurchaseOrdersTable = `
      CREATE TABLE IF NOT EXISTS purchase_orders (
        id INT PRIMARY KEY AUTO_INCREMENT,
        customer VARCHAR(255),
        po VARCHAR(255),
        co VARCHAR(255),
        date VARCHAR(255),
        item JSON,
        status VARCHAR(50)
      )
    `;
    con.query(createPurchaseOrdersTable, (err, result) => {
      if (err) {
        console.log("Error creating purchase_orders table:", err);
      } else {
        console.log("Purchase_orders table created or already exists.");
      }
    });

    // Create 'suppliers' table if it does not exist
    const createSuppliersTable = `
      CREATE TABLE IF NOT EXISTS suppliers (
        name VARCHAR(255),
        email VARCHAR(255),
        status VARCHAR(50),
        address VARCHAR(255),
        phone INT,
        city VARCHAR(255),
        area VARCHAR(255),
        GSTN INT
      )
    `;
    con.query(createSuppliersTable, (err, result) => {
      if (err) {
        console.log("Error creating suppliers table:", err);
      } else {
        console.log("Suppliers table created or already exists.");
      }
    });
  }
});

export default con;
