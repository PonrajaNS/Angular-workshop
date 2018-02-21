import { AngularWorkshopLab3Page } from './app.po';

describe('angular-workshop-lab3 App', function() {
  let page: AngularWorkshopLab3Page;

  beforeEach(() => {
    page = new AngularWorkshopLab3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
