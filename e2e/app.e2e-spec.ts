import { PreludePage } from './app.po';

describe('prelude App', () => {
  let page: PreludePage;

  beforeEach(() => {
    page = new PreludePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
