// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');
  const newTotal = Number(price) * Number(quantity);

  subTotal.innerText = newTotal;
  return newTotal;
}

function calculateAll() {
  const totalVal = document.querySelector('#total-value span');
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach(function (product) {
    total += updateSubtotal(product);
  });
  totalVal.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  target.closest('.product').remove();
  calculateAll();
  // console.log(target.parentNode);
}

// ITERATION 5

function createProduct() {
  const newName = document.querySelector('.new-name');
  const newNum = document.querySelector('.new-number');

  const newTableRow = document.createElement('tr');
  newTableRow.classList.add('product');

  newTableRow.innerHTML = `<td class="name">
            <span>${newName.value}</span>
          </td>
          <td class="price">$<span>${newNum.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;

  document.querySelector('tbody').appendChild(newTableRow);
  newName.value = '';
  newNum.value = '';

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns[removeBtns.length - 1].addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(function (btn) {
    btn.addEventListener('click', removeProduct);
  });

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
