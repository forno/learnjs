'use strict';
const learnjs = {}
learnjs.removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

learnjs.problemView = (problemNumber) => {
  const problemView = document.querySelector('.templates .problem-view').cloneNode(true);
  problemView.querySelector('.title').textContent = `Problem #${problemNumber} Coming soon!`;
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
  globalThis.addEventListener('hashchange', () => learnjs.showView(globalThis.location.hash));
  learnjs.showView(globalThis.location.hash);
}
