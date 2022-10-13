'use strict';
const learnjs = {}
learnjs.removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

learnjs.problemView = () => {
  const problemView = document.createElement('div');
  problemView.textContent = 'Coming soon!';
  problemView.classList.add('problem-view');
  return problemView;
}

learnjs.showView = (hash) => {
  const routes = {
    '#problem-1': learnjs.problemView
  }
  const viewFn = routes[hash];
  if (viewFn) {
    const container = document.querySelector('.view-container');
    learnjs.removeAllChildren(container);
    container.append(viewFn());
  }
}
