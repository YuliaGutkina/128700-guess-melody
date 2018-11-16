const mainSection = document.querySelector(`section.main`);

const changeScreen = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

export default changeScreen;
