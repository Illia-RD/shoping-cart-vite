// table.js
export function addRowToTable(data) {
  const table = document
    .getElementById('orderTable')
    .getElementsByTagName('tbody')[0];
  const newRow = table.insertRow(table.rows.length);

  for (const value of Object.values(data)) {
    const cell = newRow.insertCell();
    cell.appendChild(document.createTextNode(value));
  }

  myForm.reset();
}
