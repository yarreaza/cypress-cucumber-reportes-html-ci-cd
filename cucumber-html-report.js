const report = require("multiple-cucumber-html-reporter")
report.generate({
    jsonDir: "cypress/cucumber-json", /*Lugar  que va a contener los .json de los resultados de las pruebas */
    reportPath: "./reports/cucumber", /* Definir dónde queremos generar el reportes HTML */ 

    metadata: {
        browser: {
          name: "chrome",
          version: "121.0.6167.140 (Build oficial) (64 bits)",
        },
        device: "Local test machine",
        platform: {
          name: "Windows",
          version: "10",
        },
      },

    customData: {
        title: "Run info",
        data: [
          { label: "Project", value: "Custom project" },
          { label: "Release", value: "1.0.0" },
          { label: "Cycle", value: "B11221.34321" },
          { label: "Execution Start Time", value: "Feb 06th 2024, 02:31 PM EST" },
          { label: "Execution End Time", value: "Feb 06th 2024, 02:56 PM EST" },
        ]
     },
     openReportInBrowser: true,
     pageFooter: "Informe del Resultado de Pruebas de la Página Orange HRM ",
     //displayDuration: true,
     //durationInMS: true


})