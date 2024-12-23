// Definição dos dados de login
const users = {
  "eu.henriquee2501@gmail.com": {
    role: "admin",
    password: "eu.henriquee2501@gmail.com",
    name: "Administrador",
  },
  "shirley@example.com": {
    role: "admin",
    password: "shirley123",
    name: "Shirley",
  },
  "fabio@example.com": {
    role: "admin",
    password: "fabio123",
    name: "Fabio",
  },
  "vendedor@example.com": {
    role: "vendedor",
    password: "vendedor123",
    name: "Vendedor",
  },
};

// Função de login
function login(event) {
  event.preventDefault(); // Impede o envio do formulário e recarregamento da página

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verifica as credenciais e perfil do usuário
  if (users[email] && users[email].password === password) {
    const user = users[email];

    alert(`Login bem-sucedido! Bem-vindo, ${user.name}`);

    // Armazena os dados do usuário no sessionStorage
    sessionStorage.setItem("auth", true);
    sessionStorage.setItem("role", user.role); // Armazena o papel do usuário
    sessionStorage.setItem("name", user.name); // Armazena o nome do usuário

    // Redireciona para o painel adequado com base no perfil
    if (user.role === "admin") {
      window.location.href = "admin_dashboard_indx.html"; // Redireciona para o dashboard do admin
    } else if (user.role === "vendedor") {
      window.location.href = "vendedor_dashboard_index.html"; // Redireciona para o dashboard do vendedor
    }
  } else {
    alert("Email ou senha incorretos!");
  }
}
