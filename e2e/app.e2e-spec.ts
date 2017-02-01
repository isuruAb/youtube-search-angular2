import { NgUniPage } from './app.po';

describe('ng-uni App', function() {
  let page: NgUniPage;

  beforeEach(() => {
    page = new NgUniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
