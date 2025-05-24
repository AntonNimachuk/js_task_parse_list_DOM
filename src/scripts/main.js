'use strict';

function getSalary(li) {
  const salaryStr = li.dataset.salary;
  const cleanStr = salaryStr.replace('$', '').replace(/,/g, '');

  return Number(cleanStr);
}

function sortList(getListElements) {
  const ul = listElements[0].parentNode;

  const sortedElements = [...listElements].sort(
    (a, b) => getSalary(b) - getSalary(a),
  );

  ul.innerHTML = '';
  sortedElements.forEach((li) => ul.appendChild(li));
}

function getEmployees(getEmployeesistElements) {
  const getedEmployees = [];

  for (const li of listElements) {
    getedEmployees.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  }

  return employees;
}

// Отримуємо всі <li>
const listElements = document.querySelectorAll('li[data-salary]');

// Викликаємо функції
sortList(listElements);

const employees = getEmployees(listElements);
