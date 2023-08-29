const commom = `
--require setup/assertions.js
--require setup/hooks.js
--require step-definitions/**/*.step.js
`
module.exports = { 
    default: `${commom} features/**/*.feature` ,
}
