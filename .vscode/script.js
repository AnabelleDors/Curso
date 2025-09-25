function toggleMode() {
  const html = document.documentElement

  // alterna a classe .light no <html>
  html.classList.toggle("light")

  // --- OPCIONAL: trocar a imagem de perfil ---
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se estiver no modo claro, muda a foto
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se estiver no modo escuro, volta a foto original
    img.setAttribute("src", "./assets/avatar.png")
  }
}