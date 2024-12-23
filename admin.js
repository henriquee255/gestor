// Definição dos dados dos usuários
const users = {
  henrique: {
    email: "eu.henriquee2501@gmail.com",
    password: "eu.henriquee2501@gmail.com",
    role: "admin",
    name: "Henrique",
  },
  shirley: {
    email: "shirley@example.com",
    password: "shirley123",
    role: "admin",
    name: "Shirley",
  },
  fabio: {
    email: "fabio@example.com",
    password: "fabio123",
    role: "admin",
    name: "Fabio",
  },
};

// Função para mostrar a página correspondente
function showPage(page) {
  const pages = document.querySelectorAll(".section");
  pages.forEach((p) => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// Função para logout
function logout() {
  sessionStorage.removeItem("auth");
  window.location.href = "index.html"; // Redireciona para a página de login
}

// Modificar a parte de logout no evento DOMContentLoaded, onde o "Sair" será acionado pela hotbar.
document.addEventListener("DOMContentLoaded", () => {
  loadUserList();
  showPage("dashboard");
  showSalesCharts(); // Chama a função para mostrar os gráficos

  const logoutButton = document.querySelector(".user-info button");
  logoutButton.addEventListener("click", logout); // Vincula o evento de logout ao botão da hotbar
});

// Função para adicionar um novo usuário
function addUser() {
  const email = prompt("Digite o e-mail do novo usuário:");
  const password = prompt("Digite a senha do novo usuário:");
  if (email && password) {
    users[email] = { email, password, role: "admin", name: email };
    alert("Usuário adicionado com sucesso!");
    loadUserList();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função para carregar a lista de usuários
function loadUserList() {
  const userList = document.getElementById("userList");
  userList.innerHTML = ""; // Limpa a lista antes de carregar novamente
  for (const user in users) {
    const li = document.createElement("li");
    li.textContent = `${users[user].name} - ${users[user].email}`;
    userList.appendChild(li);
  }
}

// Função para gerenciar categorias (mock)
function manageCategories() {
  alert("Função de gerenciamento de categorias (em desenvolvimento).");
}

// Função para exibir os gráficos de vendas totais e por vendedor
function showSalesCharts() {
  const totalSalesCanvas = document.getElementById("totalSalesChart");
  const vendedorSalesCanvas = document.getElementById("vendedorSalesChart");

  if (totalSalesCanvas && vendedorSalesCanvas) {
    const ctxTotalSales = totalSalesCanvas.getContext("2d");
    const totalSalesChart = new Chart(ctxTotalSales, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Vendas Totais",
            data: [500, 600, 700, 800, 900], // Dados de exemplo
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Gráfico de vendas por vendedor
    const ctxVendedorSales = vendedorSalesCanvas.getContext("2d");
    const vendedorSalesChart = new Chart(ctxVendedorSales, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Sara",
            data: [50, 60, 70, 80, 90],
            borderColor: "rgba(255, 99, 132, 1)",
            fill: false,
          },
          {
            label: "Sabrina",
            data: [40, 50, 60, 70, 80],
            borderColor: "rgba(54, 162, 235, 1)",
            fill: false,
          },
          {
            label: "Thayna",
            data: [30, 40, 50, 60, 70],
            borderColor: "rgba(153, 102, 255, 1)",
            fill: false,
          },
          {
            label: "Henrique",
            data: [20, 30, 40, 50, 60],
            borderColor: "rgba(255, 159, 64, 1)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

// Função para abrir e fechar a barra de pesquisa
function openSearch() {
  document.querySelector(".search-container").style.display = "flex";
}

function closeSearch() {
  document.querySelector(".search-container").style.display = "none";
}

// Inicializar a página com a visualização do painel de métricas
document.addEventListener("DOMContentLoaded", () => {
  loadUserList();
  showPage("dashboard");
  showSalesCharts(); // Chama a função para mostrar os gráficos

  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    // Toggle da sidebar ao clicar no menu hamburguer
    hamburgerMenu.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      mainContent.classList.toggle("active");
    });
  });

  // Abrir e fechar a barra de pesquisa
  document.querySelector(".header h1").addEventListener("click", openSearch);
});
