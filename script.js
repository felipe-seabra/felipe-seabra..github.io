
const addLinkBotton = (classe, link) => {
  const Bottons = document.getElementsByClassName(classe);
  for (let botton of Bottons) {
    botton.href = link;
  }
}

addLinkBotton('link-instagram', 'https://www.instagram.com/felipeseabradev/');
addLinkBotton('link-linkedin', 'https://www.linkedin.com/in/felipe-seabra/');
addLinkBotton('link-github', 'https://github.com/felipe-seabra');