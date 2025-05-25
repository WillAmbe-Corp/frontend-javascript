interface Student{
    firstName: string
    lastName: string
    age: number
    location: string
}
let Student1 = {
    firstName: "Peter",
    lastName: "Doe",
    age: 16,
    location: "Texas"
}
let Student2 ={
    firstName: "Jane",
    lastName: "Doe",
    age: 15,
    location: "New York"
}
const studentsList = [Student1, Student2];

// Create table element
const table = document.createElement('table');

// Create header row
const headerRow = document.createElement('tr');
['First Name', 'Location'].forEach(text => {
  const th = document.createElement('th');
  th.textContent = text;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Loop through studentsList and create rows
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append table to container
const container = document.getElementById('student-table-container');
if (container) {
  container.appendChild(table);
}