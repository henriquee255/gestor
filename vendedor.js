// Definir usuários com perfil (admin ou vendedor)
const users = {
  "henrique@example.com": {
    email: "henrique@example.com",
    role: "vendedor",
    name: "Henrique",
    salesData: [20, 30, 40, 50, 60], // Dados de vendas para o gráfico
    salesDayData: [5, 10, 15, 20, 25], // Dados de vendas do dia
    salesWeekData: [100, 200, 150, 300, 250, 400, 350], // Dados de vendas da semana
    salesMonthData: [
      500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
    ], // Dados de vendas do mês
  },
  "sara@example.com": {
    email: "sara@example.com",
    role: "vendedor",
    name: "Sara",
    salesData: [10, 20, 30, 40, 50],
    salesDayData: [3, 6, 9, 12, 15],
    salesWeekData: [50, 100, 75, 150, 125, 200, 175],
    salesMonthData: [
      250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800,
    ],
  },
  "sabrina@example.com": {
    email: "sabrina@example.com",
    role: "vendedor",
    name: "Sabrina",
    salesData: [5, 10, 15, 25, 35],
    salesDayData: [2, 4, 6, 8, 10],
    salesWeekData: [25, 50, 37, 75, 62, 100, 87],
    salesMonthData: [
      125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400,
    ],
  },
  "thayna@example.com": {
    email: "thayna@example.com",
    role: "vendedor",
    name: "Thayna",
    salesData: [15, 25, 35, 45, 55],
    salesDayData: [4, 8, 12, 16, 20],
    salesWeekData: [75, 125, 100, 150, 125, 175, 150],
    salesMonthData: [
      375, 450, 525, 600, 675, 750, 825, 900, 975, 1050, 1125, 1200,
    ],
  },
};

// Função para carregar o perfil do usuário logado
function loadUserProfile() {
  // Recupera o email do usuário logado do sessionStorage
  const userEmail = sessionStorage.getItem("userEmail");

  if (!userEmail || !users[userEmail]) {
    window.location.href = "index.html"; // Redireciona para o login caso não haja usuário logado
    return;
  }

  const user = users[userEmail];
  // Exibir o nome do usuário no lugar de "vendedor"
  document.getElementById("userName").textContent = `Olá, ${user.name}!`;

  // Adicionar navegação para vendedores
  if (user.role === "vendedor") {
    document.getElementById("navList").innerHTML = `
              <li><a href="#" onclick="showPage('generalSales')">Vendas Gerais</a></li>
              <li><a href="#" onclick="showPage('userSales')">Minhas Vendas</a></li>
              <li><a href="#" onclick="showPage('profileSettings')">Configurações do Perfil</a></li>
              <li><a href="#" onclick="showPage('clientManagement')">Gerenciar Clientes</a></li>
          `;
  }

  // Carregar os gráficos de vendas
  loadSalesChart(user.salesData);
  loadSalesDayChart(user.salesDayData);
  loadSalesWeekChart(user.salesWeekData);
  loadSalesMonthChart(user.salesMonthData);
}

// Função para carregar o gráfico de vendas gerais
function loadSalesChart(salesData) {
  const ctx = document.getElementById("generalSalesChart").getContext("2d");
  const salesChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Vendas Gerais",
          data: salesData, // Dados do gráfico
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
}

// Função para carregar o gráfico de vendas do dia
function loadSalesDayChart(salesDayData) {
  const ctx = document.getElementById("userSalesDayChart").getContext("2d");
  const salesDayChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
      datasets: [
        {
          label: "Vendas do Dia",
          data: salesDayData, // Dados do gráfico
          borderColor: "rgba(153, 102, 255, 1)",
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

// Função para carregar o gráfico de vendas da semana
function loadSalesWeekChart(salesWeekData) {
  const ctx = document.getElementById("userSalesWeekChart").getContext("2d");
  const salesWeekChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Últimos 7 Dias",
          data: salesWeekData, // Dados do gráfico
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

// Função para carregar o gráfico de vendas do mês
function loadSalesMonthChart(salesMonthData) {
  const ctx = document.getElementById("userSalesMonthChart").getContext("2d");
  const salesMonthChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Últimos 30 Dias",
          data: salesMonthData, // Dados do gráfico
          borderColor: "rgba(54, 162, 235, 1)",
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

// Função para exibir as páginas
function showPage(page) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => (section.style.display = "none"));
  document.getElementById(page).style.display = "block";
}

// Função de logout
function logout() {
  sessionStorage.clear(); // Limpa os dados do sessionStorage
  window.location.href = "index.html"; // Redireciona para a página de login
}

// Inicialização da página
document.addEventListener("DOMContentLoaded", loadUserProfile);
