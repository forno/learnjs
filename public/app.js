'use strict';
const learnjs = {}
learnjs.removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

learnjs.problems = [
  {
    description: 'What is truth?',
    code: 'function problem() { return __; }'
  },
  {
    description: 'Simple Math',
    code: 'function problem() { return 42 ==== 6 * __; }'
  },
]

learnjs.applyObject = (obj, elem) => {
  for (const key in obj) {
    elem.querySelector(`[data-name="${key}"]`).textContent = obj[key]
  }
}

learnjs.problemView = (problemNumber) => {
  const problemView = document.querySelector('.templates .problem-view').cloneNode(true);
  problemView.querySelector('.title').textContent = `Problem #${problemNumber}`;
  learnjs.applyObject(learnjs.problems[problemNumber - 1], problemView)
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
