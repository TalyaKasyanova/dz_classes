// Реалізуй клас, що описує коло.У класі повинні бути такі компоненти:

//   поле, що зберігає радіус кола;
// get - властивість, яке повертає радіус кола;
// set - властивість, що встановлює радіус кола;
// get - властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.



class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error('Радіус кола має бути більше 0');
    }
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }

  get length() {
    return 2 * Math.PI * this._radius;
  }
}

const radius = +(prompt('Введіть радіус кола:'));
const circle = new Circle(radius);

console.log(`Радіус кола: ${circle.radius}`);
console.log(`Діаметр кола: ${circle.diameter}`);
console.log(`Площа кола: ${circle.area}`);
console.log(`Довжина кола: ${circle.length}`);


// 2) Реалізуй клас, що описує канцелярський маркер.У класі повинні бути такі компоненти:
//   поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері(у відсотках);
// метод для вводу(приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ— це 0, 5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти.Успадкуй цей клас від простого маркера й додай метод для заправки.
// Продемонструй роботу написаних методів.


class Marker {
  constructor(color, inkPercent) {
    this.color = color;
    this.inkPercent = inkPercent;
  }

  print(text) {
    let printedText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        if (this.inkPercent > 0) {
          printedText += text[i];
          this.inkPercent -= 0.5;
        } else {
          console.log("Маркер закінчився");
          break;
        }
      } else {
        printedText += " ";
      }
    }
    console.log("%c" + printedText, `color: ${this.color}`);
  }
}

class RefilledMarker extends Marker {
  refill() {
    this.inkPercent = 100;
    console.log("Маркер перезаправлений");
  }
}

// Приклад використання
const marker = new Marker("red", 20);
marker.print("Hello world!");
marker.print(" ");
marker.print("Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.");

const refilledMarker = new RefilledMarker("blue", 20);
refilledMarker.refill();
refilledMarker.print("Hello world!");


// 3) Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML - коду таблиці зі списком працівників банку.Масив працівників необхідно передавати через конструктор, а отримувати HTML - код за допомогою методу getHtml().
// Створи об’ єкт класу EmpTable і виведи на екран результат роботи методу getHtml().


class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Посада</th>
          <th>Зарплата</th>
        </tr>
      </thead>
    `;
    const tbody = document.createElement('tbody');
    this.employees.forEach(employee => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.salary}</td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table.outerHTML;
  }
}

// Приклад використання
const employees = [
  new Employee('Іван', 'Дизайнер', 15000),
  new Employee('Петро', 'HR', 12000),
  new Employee('Марія', 'PM', 20000),
  new Employee('Олег', 'Викладач', 10000),
  new Employee('Орест', 'Письменик', 16000),
];

const empTable = new EmpTable(employees);
document.body.innerHTML = empTable.getHtml();