class Person {
  constructor(public name: string, public age: number) {}
}

function calculateSquare(num: number): number {
  return num * num;
}

const numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  const square = calculateSquare(num);
  console.log(`Square of ${num} is ${square}`);
});

interface Product {
  name: string;
  price: number;
}

class ShoppingCart {
  private items: Product[] = [];

  constructor(public owner: string) {}

  addItem(product: Product): void {
    this.items.push(product);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    console.log(`Checkout for ${this.owner}`);
    console.log(`Total Price: ${this.getTotalPrice()}`);
  }
}

const cart1 = new ShoppingCart('Alice');
const cart2 = new ShoppingCart('Bob');

cart1.addItem({ name: 'Shirt', price: 20 });
cart1.addItem({ name: 'Shoes', price: 50 });

cart2.addItem({ name: 'Book', price: 10 });

cart1.checkout();
cart2.checkout();

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function move(direction: Direction): void {
  switch (direction) {
    case Direction.Up:
      console.log('Moving Up');
      break;
    case Direction.Down:
      console.log('Moving Down');
      break;
    case Direction.Left:
      console.log('Moving Left');
      break;
    case Direction.Right:
      console.log('Moving Right');
      break;
  }
}

move(Direction.Up);
move(Direction.Right);

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumbers: number[] = [];

for (let i = 0; i < 10; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}

console.log('Random Numbers:', randomNumbers);

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
}

console.log('Add:', Calculator.add(5, 3));
console.log('Subtract:', Calculator.subtract(5, 3));
console.log('Multiply:', Calculator.multiply(5, 3));
console.log('Divide:', Calculator.divide(5, 3));

interface Point {
  x: number;
  y: number;
}

function calculateDistance(point1: Point, point2: Point): number {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const pointA: Point = { x: 0, y: 0 };
const pointB: Point = { x: 3, y: 4 };

console.log('Distance between Point A and Point B:', calculateDistance(pointA, pointB));

class Timer {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  getElapsedTime(): number {
    return Date.now() - this.startTime;
  }
}

const timer = new Timer();
setTimeout(() => {
  console.log('Elapsed Time:', timer.getElapsedTime(), 'ms');
}, 2000);

function findMax(numbers: number[]): number {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log('Max number in the array:', findMax([10, 5, 20, 8, 15]));

class Car {
  constructor(public make: string, public model: string) {}
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log('Car 1:', car1.make, car1.model);
console.log('Car 2:', car2.make, car2.model);

function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

console.log('Reverse String:', reverseString('Hello, World!'));

interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Woof! Woof!');
  }
}

class Cat implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Meow!');
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.speak();
cat.speak();

const numbersArray: number[] = [1, 2, 3, 4, 5];
const doubledNumbers: number[] = numbersArray.map((num) => num * 2);

console.log('Doubled Numbers:', doubledNumbers);

class User {
  constructor(public username: string, public email: string) {}
}

class UserRepository {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  listUsers(): User[] {
    return this.users;
  }
}

const userRepository = new UserRepository();

userRepository.addUser(new User('alice123', 'alice@example.com'));
userRepository.addUser(new User('bob456', 'bob@example.com'));

console.log('Users:', userRepository.listUsers());
console.log('Find User:', userRepository.findUserByUsername('alice123'));

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

class TaskManager {
  private tasks: Task[] = [];
  private nextTaskId: number = 1;

  addTask(title: string): void {
    const task: Task = {
      id: this.nextTaskId++,
      title,
      completed: false,
    };
    this.tasks.push(task);
  }

  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  listTasks(): Task[] {
    return this.tasks;
  }
}

const taskManager = new TaskManager();

taskManager.addTask('Buy groceries');
taskManager.addTask('Finish project');

console.log('Tasks:', taskManager.listTasks());

taskManager.completeTask(1);

console.log('Completed Tasks:', taskManager.listTasks());

function generateRandomArray(length: number): number[] {
  const randomArray: number[] = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomNumber(
    randomArray.push(getRandomNumber(1, 100));
  }
  return randomArray;
}

const randomArray: number[] = generateRandomArray(10);

console.log('Random Array:', randomArray);

class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public studentId: string) {
    super(name, age);
  }
}

const student1 = new Student('Alice', 20, '12345');
const student2 = new Student('Bob', 22, '67890');

console.log('Student 1:', student1.name, student1.age, student1.studentId);
console.log('Student 2:', student2.name, student2.age, student2.studentId);

interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log('Circle Area:', circle.area());
console.log('Rectangle Area:', rectangle.area());

enum LogLevel {
  Debug,
  Info,
  Warning,
  Error,
}

function logMessage(level: LogLevel, message: string): void {
  const prefix = LogLevel[level];
  console.log(`[${prefix}]: ${message}`);
}

logMessage(LogLevel.Debug, 'Debugging...');
logMessage(LogLevel.Error, 'Error occurred.');

function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log('Factorial of 5:', factorial(5));

interface Fruit {
  name: string;
  color: string;
}

const fruits: Fruit[] = [
  { name: 'Apple', color: 'Red' },
  { name: 'Banana', color: 'Yellow' },
  { name: 'Grapes', color: 'Purple' },
];

fruits.forEach((fruit) => {
  console.log(`Fruit: ${fruit.name}, Color: ${fruit.color}`);
});

class Counter {
  private count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();

console.log('Counter Count:', counter.getCount());

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Alice'));

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log('Car started.');
  }

  stop(): void {
    console.log('Car stopped.');
  }
}

class Bike implements Vehicle {
  start(): void {
    console.log('Bike started.');
  }

  stop(): void {
    console.log('Bike stopped.');
  }
}

const car = new Car();
const bike = new Bike();

car.start();
car.stop();

bike.start();
bike.stop();

class Point {
  constructor(public x: number, public y: number) {}
}

class Line {
  constructor(public start: Point, public end: Point) {}
}

const point1 = new Point(0, 0);
const point2 = new Point(3, 4);
const line = new Line(point1, point2);

console.log('Line Start:', line.start.x, line.start.y);
console.log('Line End:', line.end.x, line.end.y);

class Logger {
  private logs: string[] = [];

  log(message: string): void {
    this.logs.push(message);
  }

  getLogs(): string[] {
    return this.logs;
  }
}

const logger = new Logger();
logger.log('Log 1');
logger.log('Log 2');

console.log('Logs:', logger.getLogs());

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log('Is 4 even?', isEven(4));
console.log('Is 7 even?', isEven(7));

class Product {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  private items: Product[] = [];

  addItem(product: Product): void {
    this.items.push(product);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem(new Product('Widget', 10));
cart.addItem(new Product('Gadget', 20));

console.log('Total Price:', cart.getTotalPrice());

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function getRandomDirection(): Direction {
  const randomValue = getRandomNumber(0, 3);
  return Direction[randomValue];
}

console.log('Random Direction:', getRandomDirection());

class Validator {
  static isEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  static isPhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }
}

console.log('Is "alice@example.com" a valid email?', Validator.isEmail('alice@example.com'));
console.log('Is "1234567890" a valid phone number?', Validator.isPhoneNumber('1234567890'));

class Todo {
  constructor(public id: number, public title: string, public completed: boolean) {}
}

const todos: Todo[] = [
  new Todo(1, 'Buy groceries', false),
  new Todo(2, 'Finish project', false),
  new Todo(3, 'Call mom', true),
];

const incompleteTodos = todos.filter((todo) => !todo.completed);

console.log('Incomplete Todos:', incompleteTodos);

interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Woof! Woof!');
  }
}

class Cat implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Meow!');
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.speak();
cat.speak();

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
}

console.log('Add:', Calculator.add(5, 3));
console.log('Subtract:', Calculator.subtract(5, 3));
console.log('Multiply
console.log('Multiply:', Calculator.multiply(5, 3));
console.log('Divide:', Calculator.divide(5, 3));

interface Point {
  x: number;
  y: number;
}

function calculateDistance(point1: Point, point2: Point): number {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const pointA: Point = { x: 0, y: 0 };
const pointB: Point = { x: 3, y: 4 };

console.log('Distance between Point A and Point B:', calculateDistance(pointA, pointB));

class Timer {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  getElapsedTime(): number {
    return Date.now() - this.startTime;
  }
}

const timer = new Timer();
setTimeout(() => {
  console.log('Elapsed Time:', timer.getElapsedTime(), 'ms');
}, 2000);

function findMax(numbers: number[]): number {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log('Max number in the array:', findMax([10, 5, 20, 8, 15]));

class Car {
  constructor(public make: string, public model: string) {}
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log('Car 1:', car1.make, car1.model);
console.log('Car 2:', car2.make, car2.model);

function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

console.log('Reverse String:', reverseString('Hello, World!'));

interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Woof! Woof!');
  }
}

class Cat implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Meow!');
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.speak();
cat.speak();

const numbersArray: number[] = [1, 2, 3, 4, 5];
const doubledNumbers: number[] = numbersArray.map((num) => num * 2);

console.log('Doubled Numbers:', doubledNumbers);

class User {
  constructor(public username: string, public email: string) {}
}

class UserRepository {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  listUsers(): User[] {
    return this.users;
  }
}

const userRepository = new UserRepository();

userRepository.addUser(new User('alice123', 'alice@example.com'));
userRepository.addUser(new User('bob456', 'bob@example.com'));

console.log('Users:', userRepository.listUsers());
console.log('Find User:', userRepository.findUserByUsername('alice123'));

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

class TaskManager {
  private tasks: Task[] = [];
  private nextTaskId: number = 1;

  addTask(title: string): void {
    const task: Task = {
      id: this.nextTaskId++,
      title,
      completed: false,
    };
    this.tasks.push(task);
  }

  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  listTasks(): Task[] {
    return this.tasks;
  }
}

const taskManager = new TaskManager();

taskManager.addTask('Buy groceries');
taskManager.addTask('Finish project');

console.log('Tasks:', taskManager.listTasks());

taskManager.completeTask(1);

console.log('Completed Tasks:', taskManager.listTasks());

function generateRandomArray(length: number): number[] {
  const randomArray: number[] = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomNumber(1, 100));
  }
  return randomArray;
}

const randomArray: number[] = generateRandomArray(10);

console.log('Random Array:', randomArray);

class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public studentId: string) {
    super(name, age);
  }
}

const student1 = new Student('Alice', 20, '12345');
const student2 = new Student('Bob', 22, '67890');

console.log('Student 1:', student1.name, student1.age, student1.studentId);
console.log('Student 2:', student2.name, student2.age, student2.studentId);

interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log('Circle Area:', circle.area());
console.log('Rectangle Area:', rectangle.area());

enum LogLevel {
  Debug,
  Info,
  Warning,
  Error,
}

function logMessage(level: LogLevel, message: string): void {
  const prefix = LogLevel[level];
  console.log(`[${prefix}]: ${message}`);
}

logMessage(LogLevel.Debug, 'Debugging...');
logMessage(LogLevel.Error, 'Error occurred.');

function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log('Factorial of 5:', factorial(5));

interface Fruit {
  name: string;
  color: string;
}

const fruits: Fruit[] = [
  { name: 'Apple', color: 'Red' },
  { name: 'Banana', color: 'Yellow' },
  { name: 'Grapes', color: 'Purple' },
];

fruits.forEach((fruit) => {
  console.log(`Fruit: ${fruit.name}, Color: ${fruit.color}`);
});

class Counter {
  private count: number = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();

console.log('Counter Count:', counter.getCount());

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Alice'));

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log
    console.log('Car started.');
  }

  stop(): void {
    console.log('Car stopped.');
  }
}

class Bike implements Vehicle {
  start(): void {
    console.log('Bike started.');
  }

  stop(): void {
    console.log('Bike stopped.');
  }
}

const car = new Car();
const bike = new Bike();

car.start();
car.stop();

bike.start();
bike.stop();

class Point {
  constructor(public x: number, public y: number) {}
}

class Line {
  constructor(public start: Point, public end: Point) {}
}

const point1 = new Point(0, 0);
const point2 = new Point(3, 4);
const line = new Line(point1, point2);

console.log('Line Start:', line.start.x, line.start.y);
console.log('Line End:', line.end.x, line.end.y);

class Logger {
  private logs: string[] = [];

  log(message: string): void {
    this.logs.push(message);
  }

  getLogs(): string[] {
    return this.logs;
  }
}

const logger = new Logger();
logger.log('Log 1');
logger.log('Log 2');

console.log('Logs:', logger.getLogs());

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log('Is 4 even?', isEven(4));
console.log('Is 7 even?', isEven(7));

class Product {
  constructor(public name: string, public price: number) {}
}

class ShoppingCart {
  private items: Product[] = [];

  addItem(product: Product): void {
    this.items.push(product);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem(new Product('Widget', 10));
cart.addItem(new Product('Gadget', 20));

console.log('Total Price:', cart.getTotalPrice());

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function getRandomDirection(): Direction {
  const randomValue = getRandomNumber(0, 3);
  return Direction[randomValue];
}

console.log('Random Direction:', getRandomDirection());

class Validator {
  static isEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  static isPhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }
}

console.log('Is "alice@example.com" a valid email?', Validator.isEmail('alice@example.com'));
console.log('Is "1234567890" a valid phone number?', Validator.isPhoneNumber('1234567890'));

class Todo {
  constructor(public id: number, public title: string, public completed: boolean) {}
}

const todos: Todo[] = [
  new Todo(1, 'Buy groceries', false),
  new Todo(2, 'Finish project', false),
  new Todo(3, 'Call mom', true),
];

const incompleteTodos = todos.filter((todo) => !todo.completed);

console.log('Incomplete Todos:', incompleteTodos);

interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Woof! Woof!');
  }
}

class Cat implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Meow!');
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.speak();
cat.speak();

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
}

console.log('Add:', Calculator.add(5, 3));
console.log('Subtract:', Calculator.subtract(5, 3));
console.log('Multiply:', Calculator.multiply(5, 3));
console.log('Divide:', Calculator.divide(5, 3));

interface Point {
  x: number;
  y: number;
}

function calculateDistance(point1: Point, point2: Point): number {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const pointA: Point = { x: 0, y: 0 };
const pointB: Point = { x: 3, y: 4 };

console.log('Distance between Point A and Point B:', calculateDistance(pointA, pointB));

class Timer {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  getElapsedTime(): number {
    return Date.now() - this.startTime;
  }
}

const timer = new Timer();
setTimeout(() => {
  console.log('Elapsed Time:', timer.getElapsedTime(), 'ms');
}, 2000);

function findMax(numbers: number[]): number {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log('Max number in the array:', findMax([10, 5, 20, 8, 15]));

class Car {
  constructor(public make: string, public model: string) {}
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log('Car 1:', car1.make, car1.model);
console.log('Car 2:', car2.make, car2.model);

function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

console.log('Reverse String:', reverseString('Hello, World!'));

interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Woof! Woof!');
  }
}

class Cat implements Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log('Meow!');
  }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.speak();
cat.speak();

const numbersArray: number[] = [1, 2, 3, 4, 5];
const doubledNumbers: number[] = numbersArray.map((num) => num * 2);

console.log('Doubled Numbers:', doubledNumbers);

class User {
  constructor(public username: string, public email: string) {}
}

class UserRepository {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find((
        user) => user.username === username);
    }
  
    listUsers(): User[] {
      return this.users;
    }
  }
  
  const userRepository = new UserRepository();
  
  userRepository.addUser(new User('alice123', 'alice@example.com'));
  userRepository.addUser(new User('bob456', 'bob@example.com'));
  
  console.log('Users:', userRepository.listUsers());
  console.log('Find User:', userRepository.findUserByUsername('alice123'));
  
  interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  class TaskManager {
    private tasks: Task[] = [];
    private nextTaskId: number = 1;
  
    addTask(title: string): void {
      const task: Task = {
        id: this.nextTaskId++,
        title,
        completed: false,
      };
      this.tasks.push(task);
    }
  
    completeTask(id: number): void {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.completed = true;
      }
    }
  
    listTasks(): Task[] {
      return this.tasks;
    }
  }
  
  const taskManager = new TaskManager();
  
  taskManager.addTask('Buy groceries');
  taskManager.addTask('Finish project');
  
  console.log('Tasks:', taskManager.listTasks());
  
  taskManager.completeTask(1);
  
  console.log('Completed Tasks:', taskManager.listTasks());
  
  function generateRandomArray(length: number): number[] {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(getRandomNumber(1, 100));
    }
    return randomArray;
  }
  
  const randomArray: number[] = generateRandomArray(10);
  
  console.log('Random Array:', randomArray);
  
  class Person {
    constructor(public name: string, public age: number) {}
  }
  
  class Student extends Person {
    constructor(name: string, age: number, public studentId: string) {
      super(name, age);
    }
  }
  
  const student1 = new Student('Alice', 20, '12345');
  const student2 = new Student('Bob', 22, '67890');
  
  console.log('Student 1:', student1.name, student1.age, student1.studentId);
  console.log('Student 2:', student2.name, student2.age, student2.studentId);
  
  interface Shape {
    area(): number;
  }
  
  class Circle implements Shape {
    constructor(public radius: number) {}
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    area(): number {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  console.log('Circle Area:', circle.area());
  console.log('Rectangle Area:', rectangle.area());
  
  enum LogLevel {
    Debug,
    Info,
    Warning,
    Error,
  }
  
  function logMessage(level: LogLevel, message: string): void {
    const prefix = LogLevel[level];
    console.log(`[${prefix}]: ${message}`);
  }
  
  logMessage(LogLevel.Debug, 'Debugging...');
  logMessage(LogLevel.Error, 'Error occurred.');
  
  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log('Factorial of 5:', factorial(5));
  
  interface Fruit {
    name: string;
    color: string;
  }
  
  const fruits: Fruit[] = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Grapes', color: 'Purple' },
  ];
  
  fruits.forEach((fruit) => {
    console.log(`Fruit: ${fruit.name}, Color: ${fruit.color}`);
  });
  
  class Counter {
    private count: number = 0;
  
    increment(): void {
      this.count++;
    }
  
    decrement(): void {
      this.count--;
    }
  
    getCount(): number {
      return this.count;
    }
  }
  
  const counter = new Counter();
  counter.increment();
  counter.increment();
  counter.decrement();
  
  console.log('Counter Count:', counter.getCount());
  
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greet('Alice'));
  
  interface Vehicle {
    start(): void;
    stop(): void;
  }
  
  class Car implements Vehicle {
    start(): void {
      console.log('Car started.');
    }
  
    stop(): void {
      console.log('Car stopped.');
    }
  }
  
  class Bike implements Vehicle {
    start(): void {
      console.log('Bike started.');
    }
  
    stop(): void {
      console.log('Bike stopped.');
    }
  }
  
  const car = new Car();
  const bike = new Bike();
  
  car.start();
  car.stop();
  
  bike.start();
  bike.stop();
  
  class Point {
    constructor(public x: number, public y: number) {}
  }
  
  class Line {
    constructor(public start: Point, public end: Point) {}
  }
  
  const point1 = new Point(0, 0);
  const point2 = new Point(3, 4);
  const line = new Line(point1, point2);
  
  console.log('Line Start:', line.start.x, line.start.y);
  console.log('Line End:', line.end.x, line.end.y);
  
  class Logger {
    private logs: string[] = [];
  
    log(message: string): void {
      this.logs.push(message);
    }
  
    getLogs(): string[] {
      return this.logs;
    }
  }
  
  const logger = new Logger();
  logger.log('Log 1');
  logger.log('Log 2');
  
  console.log('Logs:', logger.getLogs());
  
  function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
  console.log('Is 4 even?', isEven(4));
  console.log('Is 7 even?', isEven(7));
  
  class Product {
    constructor(public name: string, public price: number) {}
  }
  
  class ShoppingCart {
    private items: Product[] = [];
  
    addItem(product: Product): void {
      this.items.push(product);
    }
  
    getTotalPrice(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  }
  
  const cart = new ShoppingCart();
  cart.addItem(new Product('Widget', 10));
  cart.addItem(new Product('Gadget', 20));
  
  console.log('Total Price:', cart.getTotalPrice());
  
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  
  function getRandomDirection(): Direction {
    const randomValue = getRandomNumber(0, 3);
    return Direction[randomValue];
  }
  
  console.log('Random Direction:', getRandomDirection());
  
  class Validator {
    static isEmail(email: string): boolean {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  
    static isPhoneNumber(phoneNumber: string): boolean {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phoneNumber);
    }
  }
  
  console.log('Is "alice@example.com" a valid email?', Validator.isEmail('alice@example.com'));
  console.log('Is "1234567890" a valid phone number?', Validator.isPhoneNumber('1234567890'));
  
  class Todo {
    constructor(public id: number, public title: string, public completed: boolean) {}
  }
  
  const todos: Todo[] = [
    new Todo(1, 'Buy groceries', false),
    new Todo(2, 'Finish project', false),
    new Todo(3, 'Call mom', true),
  ];
  
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  
  console.log('Incomplete Todos:', incompleteTodos);
  
  interface Animal {
    name: string;
    speak(): void;
  }
  
  class Dog implements Animal {
    constructor(public name: string) {}
    speak(): void {
      console.log('Woof! Woof!');
    }
  }
  
  class Cat implements Animal {
    constructor(public name: string) {}
    speak(): void {
      console.log('Meow!');
    }
  }
  
  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  
  dog.speak();
  cat.speak();
  
  class Calculator {
    static add(a: number, b: number): number {
      return a + b;
    }
  
    static subtract(a: number, b: number): number {
      return a - b;
    }
  
    static multiply(a: number, b: number): number {
      return a * b;
    }
  
    static divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return a / b;
    }
  }
  
  console.log('Add:', Calculator.add(5, 3));
  console.log('Subtract:', Calculator.subtract(5, 3));
  console.log('Multiply:', Calculator.multiply(5, 3));
  console.log('Divide:', Calculator.divide(5, 3));
  
  interface Point {
    x: number;
    y: number;
  }
  
  function calculateDistance(point1: Point, point2: Point): number {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  const pointA: Point = { x: 0, y: 0 };
  const pointB: Point = { x: 3, y: 4 };
  
  console.log('Distance between Point A and Point B:', calculateDistance(pointA, pointB));
  
  class Timer {
    private startTime: number;
  
    constructor() {
      this.startTime = Date.now();
    }
  
    getElapsedTime(): number {
      return Date.now() - this.startTime;
    }
  }
  
  const timer = new Timer();
  setTimeout(() => {
    console.log('Elapsed Time:', timer.getElapsedTime(), 'ms');
  }, 2000);
  
  function findMax(numbers: number[]): number {
    let max = numbers[0];
    for (const num of numbers) {
      if (num > max) {
        max = num;
      }
    }
    return max;
  }
  
  console.log('Max number in the array:', findMax([10, 5, 20, 8, 15]));
  
  class Car {
    constructor(public make: string, public model: string) {}
  }
  
  const car1 = new Car('Toyota', 'Camry');
  const car2 = new Car('Honda', 'Civic');
  
  console.log('Car 1:', car1.make, car1.model);
  console.log('Car 2:', car2.make, car2.model);
  
  function reverseString(input: string): string {
    return input.split('').reverse().join('');
  }
  
  console.log('Reverse String:', reverseString('Hello, World!'));
  
  interface Animal {
    name: string;
    speak(): void;
  }
  
  class Dog implements Animal {
    constructor(public name: string) {}
    speak(): void {
      console.log('Woof! Woof!');
    }
  }
  
  class Cat implements Animal {
    constructor(public name: string) {}
    speak(): void {
      console.log('Meow!');
    }
  }
  
  const dog = new Dog('Buddy');
  const cat = new Cat('Whiskers');
  
  dog.speak();
  cat.speak();
  
  const numbersArray: number[] = [1, 2, 3, 4, 5];
  const doubledNumbers: number[] = numbersArray.map((num) => num * 2);
  
  console.log('Doubled Numbers:', doubledNumbers);
  
  class User {
    constructor(public username: string, public email: string) {}
  }
  
  class UserRepository {
    private users: User[] = [];
  
    addUser(user: User): void {
      this.users.push(user);
    }
  
    findUserByUsername(username: string): User | undefined {
      return this.users.find((user) => user.username === username);
    }
  
    listUsers(): User[] {
      return this.users;
    }
  }
  
  const userRepository = new UserRepository();
  
  userRepository.addUser(new User('alice123', 'alice@example.com'));
  userRepository.addUser(new User('bob456', 'bob@example.com'));
  
  console.log('Users:', userRepository.listUsers());
  console.log('Find User:', userRepository.findUserByUsername('alice123'));
  
  interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  class TaskManager {
    private tasks: Task[] = [];
    private nextTaskId: number = 1;
  
    addTask(title: string): void {
      const task: Task = {
        id: this.nextTaskId++,
        title,
        completed: false,
      };
      this.tasks.push(task);
    }
  
    completeTask(id: number): void {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.completed = true;
      }
    }
  
    listTasks(): Task[] {
      return this.tasks;
    }
  }
  
  const taskManager = new TaskManager();
  
  taskManager.addTask('Buy groceries');
  taskManager.addTask('Finish project');
  
  console.log('Tasks:', taskManager.listTasks());
  
  taskManager.completeTask(1);
  
  console.log('Completed Tasks:', taskManager.listTasks());
  
  function generateRandomArray(length: number): number[] {
    const randomArray: number[] = [];
    for (let i = 0
  