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
    '#problem': learnjs.problemView
  }
  const hashParts = hash.split('-')
  const viewFn = routes[hashParts[0]];
  if (viewFn) {
    const container = document.querySelector('.view-container');
    learnjs.removeAllChildren(container);
    container.append(viewFn(hashParts[1]));
  }
}
