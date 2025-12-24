const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);  
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push(
            "--disable-blink-features=AutomationControlled",
            "--disable-features=IsolateOrigins,site-per-process"
          );
        }
        return launchOptions;
      });
    },
  },
  chromeWebSecurity: false,
  pageLoadTimeout: 120000,
  requestTimeout: 120000,
  responseTimeout: 120000,
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
  video: true, // enable video recording
  reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Cypress HTML Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      html: true,      // generate HTML report
      json: false,      // do not generate JSON report
      overwrite: true,  // overwrite existing report files
    }

});
