'use strict';
const learnjs = {}
learnjs.removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

learnjs.problemView = (problemNumber) => {
  const problemView = document.createElement('div');
  problemView.textContent = `Problem #${problemNumber} Coming soon!`;
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

learnjs.appOnReady = () => {
  learnjs.showView(globalThis.location.hash);
}
