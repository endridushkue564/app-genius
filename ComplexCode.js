/*
    File Name: ComplexCode.js
    Description: This code demonstrates a complex implementation of a web-based chat application.
*/

// Constants
const MAX_USERS = 1000;
const MAX_MESSAGES = 100000;

// Classes

// User class
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

// Message class
class Message {
  constructor(id, sender, receiver, content) {
    this.id = id;
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
    this.timestamp = new Date();
  }

  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  // Other methods
  display() {
    console.log(`${this.sender.name} --> ${this.receiver.name}: ${this.content}`);
  }
}

// ChatRoom class
class ChatRoom {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.messages = [];
  }

  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  // Other methods
  addUser(user) {
    if (this.users.length < MAX_USERS) {
      this.users.push(user);
      console.log(`User ${user.name} added to ${this.name}`);
    } else {
      console.log(`Maximum number of users reached in ${this.name}`);
    }
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`User ${user.name} removed from ${this.name}`);
    } else {
      console.log(`User ${user.name} not found in ${this.name}`);
    }
  }

  sendMessage(sender, receiver, content) {
    if (this.users.includes(sender) && this.users.includes(receiver)) {
      const message = new Message(this.messages.length + 1, sender, receiver, content);
      this.messages.push(message);
      message.display();
    } else {
      console.log("Invalid sender or receiver");
    }
  }

  displayUsers() {
    console.log(`Users in ${this.name}:`);
    for (const user of this.users) {
      console.log(user.name);
    }
  }

  displayMessages() {
    console.log(`Messages in ${this.name}:`);
    for (const message of this.messages) {
      message.display();
    }
  }
}

// Usage
const chatRoom = new ChatRoom("General Chat Room");

const user1 = new User(1, "John");
const user2 = new User(2, "Jane");

chatRoom.addUser(user1);
chatRoom.addUser(user2);

chatRoom.displayUsers();

chatRoom.sendMessage(user1, user2, "Hello, how are you?");
chatRoom.sendMessage(user2, user1, "I'm good, thanks!");

chatRoom.displayMessages();

chatRoom.removeUser(user1);

chatRoom.displayUsers();
chatRoom.displayMessages();
