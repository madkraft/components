import { CompCollectionPage } from './app.po';

describe('comp-collection App', function() {
  let page: CompCollectionPage;

  beforeEach(() => {
    page = new CompCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
