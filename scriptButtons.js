
const addLinkButton = (classe, link) => {
  const buttons = document.getElementsByClassName(classe);
  // buttons.map((button) => button.href = link)
  for (let button of buttons) {
    button.href = link;
  }
}

const instagram = 'https://www.instagram.com/felipeseabra_'
const linkedin = 'https://www.linkedin.com/in/felipe-seabra'
const github = 'https://github.com/felipe-seabra'

addLinkButton('link-instagram', instagram);
addLinkButton('link-linkedin', linkedin);
addLinkButton('link-github', github);
