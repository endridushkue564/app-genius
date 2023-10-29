// File Name: ComplexApp.js
// Description: This code is a complex web application that simulates an online shopping platform with various functionalities.
// It includes user authentication, product listings, shopping cart management, and transaction processing.

// Utility functions

// Function to display a message in the console
function showMessage(message) {
  console.log("[INFO] " + message);
}

// Function to generate a random ID for a product
function generateRandomID() {
  return Math.floor(Math.random() * 1000) + 1;
}

// User Authentication

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    showMessage("User " + this.username + " logged in.");
  }

  logout() {
    showMessage("User " + this.username + " logged out.");
  }
}

// Product Management

class Product {
  constructor(name, price, description) {
    this.id = generateRandomID();
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    showMessage("New product added: " + product.name);
  }

  removeProduct(productId) {
    const index = this.products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1)[0];
      showMessage("Product removed: " + removedProduct.name);
    }
  }

  getProduct(productId) {
    return this.products.find((product) => product.id === productId);
  }

  displayProductList() {
    showMessage("Product List:");
    this.products.forEach((product) => {
      showMessage("ID: " + product.id + ", Name: " + product.name + ", Price: $" + product.price);
    });
  }
}

// Shopping Cart Management

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    showMessage(quantity + " " + product.name + "(s) added to the cart.");
  }

  removeItem(productId) {
    const index = this.items.findIndex((item) => item.product.id === productId);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0];
      showMessage("Item removed from the cart: " + removedItem.product.name);
    }
  }

  updateQuantity(productId, newQuantity) {
    const item = this.items.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = newQuantity;
      showMessage("Quantity updated for " + item.product.name + ": " + newQuantity);
    }
  }

  displayCart() {
    showMessage("Shopping Cart:");
    this.items.forEach((item) => {
      showMessage(
        item.quantity +
        " " +
        item.product.name +
        "(s) - Price: $" +
        item.product.price +
        ", Total: $" +
        item.product.price * item.quantity
      );
    });
  }
}

// Transaction Processing

class TransactionManager {
  constructor() {
    this.transactions = [];
  }

  createTransaction(user, cart) {
    const transaction = {
      user,
      cart,
      date: new Date(),
      status: "Pending"
    };
    this.transactions.push(transaction);
    showMessage("Transaction created for user: " + user.username);
    return transaction;
  }

  processTransaction(transaction) {
    showMessage("Processing Transaction...");
    showMessage("Transaction details: ");
    showMessage("User: " + transaction.user.username);
    showMessage("Transaction Date: " + transaction.date);
    showMessage("Total Items: " + transaction.cart.items.length);

    // Simulate payment processing
    showMessage("Processing payment...");
    showMessage("Payment successful! Transaction completed.");

    transaction.status = "Completed";
  }

  displayTransactions() {
    showMessage("Transaction History:");
    this.transactions.forEach((transaction) => {
      showMessage(
        "User: " +
        transaction.user.username +
        ", Date: " +
        transaction.date +
        ", Status: " +
        transaction.status
      );
      showMessage("Items:");
      transaction.cart.items.forEach((item) => {
        showMessage(
          item.quantity +
          " " +
          item.product.name +
          "(s) - Price: $" +
          item.product.price +
          ", Total: $" +
          item.product.price * item.quantity
        );
      });
    });
  }
}

// Usage

const user = new User("JohnDoe", "password123");
user.login();

const product1 = new Product("iPhone 12", 999, "The latest iPhone model.");
const product2 = new Product("Samsung Galaxy S21", 899, "Powerful Android smartphone.");

const productManager = new ProductManager();
productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.displayProductList();

const cart = new ShoppingCart();
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.displayCart();

const transactionManager = new TransactionManager();
const transaction = transactionManager.createTransaction(user, cart);
transactionManager.processTransaction(transaction);
transactionManager.displayTransactions();

user.logout();