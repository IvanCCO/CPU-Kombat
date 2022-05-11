
// Funçao para fechar a pagina
function close_tab() {
    if (confirm("Deseja desistir Aluno SPTECH?")) {
      window.close();
    }
    var customWindow = window.open('', '_blank', '');
    customWindow.close();
  }