import { Selector } from "testcafe";

class LandingPage {
  constructor() {
    this.pageId = "#landing-page";
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
    // test 12345
  }
}

export const landingPage = new LandingPage();
