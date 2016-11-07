import { OtestFrontendPage } from './app.po';

describe('otest-frontend App', function() {
  let page: OtestFrontendPage;

  beforeEach(() => {
    page = new OtestFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
