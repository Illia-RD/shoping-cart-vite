// createOrder.js
import { cart } from './shopingCart'; // Імпортуємо форму
import { addRowToTable } from './table';

export function submitForm(event) {
  const sampleData = {
    date: new Date().toLocaleDateString(),
    productName: cart.bookName,
    quantity: cart.bookNum,
    packagingType: cart.packaging
      ? 'Звичайне пакування'
      : 'Подарункове пакування',
    firstName: cart.userName,
    lastName: cart.userSurname,
    deliveryType:
      cart.delPost || cart.delHome ? 'доставка на пошту' : 'доставка до дому',
    userAdress: cart.userAdress,
    price: cart.total.toFixed(2),
  };

  addRowToTable(sampleData);

  // Очищення форми
  event.preventDefault();
}
