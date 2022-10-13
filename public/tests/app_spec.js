describe('LearnJS', () => {
  it('can showa problem view', () => {
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  })

  it('shows the landing page view when there is no hash', () => {
    learnjs.showView('');
    expect(document.querySelectorAll('.view-container .landing-view').length).toEqual(1);
  })
})
