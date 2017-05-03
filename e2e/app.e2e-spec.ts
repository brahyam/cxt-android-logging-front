import {CxtAndroidLoggingClientPage} from './app.po';

describe('cxt-android-logging-client App', () => {
  let page:CxtAndroidLoggingClientPage;

  beforeEach(() => {
    page = new CxtAndroidLoggingClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
