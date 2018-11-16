const getElementFromTemplate = (templateString) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = templateString.trim();
  return wrapper.children[0];
};

export default getElementFromTemplate;
