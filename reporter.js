const reporter = require("cucumber-html-reporter")
const options = {
  theme: "bootstrap",
  jsonFile: "cucumber_report.json",
  output: "reports/cucumber_report.html",
  reportSuitesAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'STAGING',
    
  }
}
reporter.generate(options)
