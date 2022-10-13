describe('LearnJS', () => {
  it('can showa problem view', () => {
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  })
})
