'use strict';
const learnjs = {}
learnjs.showView = (hash) => {
  const problemView = document.createElement('div');
  problemView.textContent = 'Coming soon!';
  problemView.classList.add('problem-view');

  document.getElementsByClassName('view-container')[0]?.append(problemView);
}
