import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000' // можно сюда передавать через env, порты тестовых стендов, ci/cd
  },

  "component": {
    "supportFile": false,
    "devServer": {
      "framework": "react",
      "bundler": "webpack",
    }
  }
})