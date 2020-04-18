# jasmine
Tests with Jasmine - Treinaweb course

Karma install
- npm install -g karma-cli
- which karma  //echo something like: /usr/local/bin/karma

- karma init karma.conf.js
    - jasmine
    - no
    - Chrome

    - spec/*spec.js

    - 
    - yes

- npm install karma karma-jasmine karma-chrome-launcher jasmine-core
- karma start karma.conf.js (with errors)
- npm install webpack -g
- npm install webpack karma-webpack
- In karma.conf.js, go to “preprocessors” and add the array [“webpack”] with key “spec/*spec.js”.
- karma start

