describe('LearnJS', () => {
  it('can showa problem view', () => {
    learnjs.showView('#problem-1');
    expect(document.querySelectorAll('.view-container .problem-view').length).toEqual(1);
  });

  it('shows the landing page view when there is no hash', () => {
    learnjs.showView('');
    expect(document.querySelectorAll('.view-container .landing-view').length).toEqual(1);
  });

  it('passes the hash view parameter to the view function', () => {
    spyOn(learnjs, 'problemView');
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  });
});
