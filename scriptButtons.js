
const addLinkButton = (classe, link) => {
  const buttons = document.getElementsByClassName(classe);
  for (let button of buttons) {
    button.href = link;
  }
}

addLinkButton('link-instagram', 'https://www.instagram.com/felipeseabra_');
addLinkButton('link-linkedin', 'https://www.linkedin.com/in/felipe-seabra');
addLinkButton('link-github', 'https://github.com/felipe-seabra');
