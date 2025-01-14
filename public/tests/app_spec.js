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

  it('invokes the router then loaded', () => {
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();
    expect(learnjs.showView).toHaveBeenCalledWith(globalThis.location.hash);
  });

  it('subscribes to the hash change event', () => {
    learnjs.appOnReady();
    spyOn(learnjs, 'showView');
    document.dispatchEvent(new HashChangeEvent('hashchange', { bubbles: true }));
    expect(learnjs.showView).toHaveBeenCalledWith(globalThis.location.hash);
  });

  describe('problem view', () => {
    it('has a title that includes the problem number', () => {
      const view = learnjs.problemView('1');
      expect(view.querySelector('.title').textContent).toEqual('Problem #1');
    });

    it('shows the description', () => {
      const view = learnjs.problemView('1');
      expect(view.querySelector('[data-name="description"').textContent).toEqual('What is truth?');
    });

    it('shows the problem code', () => {
      const view = learnjs.problemView('1');
      expect(view.querySelector('[data-name="code"').textContent).toEqual('function problem() { return __; }');
    });
  })
});
