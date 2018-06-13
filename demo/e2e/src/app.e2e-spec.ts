import { AngularMaterialExtensionsCardDemoPage } from './app.po';

describe('@angular-material-extensions/cards-demo App', () => {
  let page: AngularMaterialExtensionsCardDemoPage;

  beforeEach(() => {
    page = new AngularMaterialExtensionsCardDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
