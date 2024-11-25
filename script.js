
// Elementos da interface
const loginPage = document.getElementById('login-page');
const dashboardPage = document.getElementById('dashboard-page');
const loginForm = document.getElementById('login-form');
const productTable = document.getElementById('product-table');
const addProductButton = document.getElementById('add-product');

// Simula produtos para popular a tabela
const products = Array(10).fill({
  code: '#_ABC123456',
  name: 'Consectetur adipiscing elitCarla Assis',
  quantity: '000',
  type: 'Lorem ipsum',
  brand: 'Lorem ipsum',
  purchasePrice: 'R$ 00,00',
  salePrice: 'R$ 00,00',
});

// Referência para o corpo da tabela
const productList = document.getElementById('product-list');

// Função para renderizar os produtos na tabela
function renderProducts() {
  productList.innerHTML = '';
  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.code}</td>
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>${product.type}</td>
      <td>${product.brand}</td>
      <td>${product.purchasePrice}</td>
      <td>${product.salePrice}</td>
      <td>
        <button class="btn btn-edit">✏️</button>
        <button class="btn btn-delete">🗑️</button>
      </td>
    `;
    productList.appendChild(row);
  });
}

// Inicializa os produtos na tabela ao carregar a página
renderProducts();


// Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
    loginPage.classList.add('hidden');
    dashboardPage.classList.remove('hidden');
    renderProducts();
  } else {
    alert('Usuário ou senha inválidos!');
  }
});


