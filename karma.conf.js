// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/App'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false, // original true se cambia a false
    browsers: ['Chrome','ChromeHeandless', 'ChromeHeandlessCI'],
    customLaunchers:{  //original no lleva esta conf
      ChromeHeandlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox','--disabble-gpu','--disable-traslate','--disable-extensions','--remote-debugging-port=9223']
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
