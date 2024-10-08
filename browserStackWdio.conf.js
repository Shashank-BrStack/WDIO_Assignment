exports.config = {
    // Define your test files
    specs: [
        './test/specs/**/*.js'
    ],

    // BrowserStack credentials
    user: process.env.BROWSERSTACK_USERNAME || 'your_browserstack_username',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'your_browserstack_access_key',

    // WebdriverIO runner and framework setup
    services: ['browserstack'],
    
    capabilities: [{
        'bstack:options': {
            os: 'OS X',
            osVersion: 'Ventura',  // Choose the version based on BrowserStack's OS list
            projectName: 'Flipkart Search Test',
            buildName: 'webdriverio-browserstack',
            sessionName: 'iPhone Search on Flipkart',
            local: false,  // If you're not using BrowserStack Local
            debug: true,   // Enable debugging
        },
        browserName: 'Chrome',
        browserVersion: 'latest',
    }],

    // Base URL for your tests
    baseUrl: 'https://www.flipkart.com',

    // Setup testing framework (Mocha example)
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // BrowserStack specific configurations
    // services: ['browserstack'],
    services: [
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                user: 'YOUR_USER_NAME' || process.env.BROWSERSTACK_USERNAME,
                key: 'YOUR_KEY' || process.env.BROWSERSTACK_ACCESS_KEY,
                projectName: 'WDIO Projexct',
                buildName: 'WDIO build',
                buildTag: 'Any build tag goes here. For e.g. ["Tag1","Tag2"]'
            },
        }]
    ],

    // Reporting options (if needed)
    reporters: ['spec'],
};
