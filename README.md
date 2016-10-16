# Brunch + Marionette.js + Babel/ES6 PWA

This is a modern Progressive Web App (https://developers.google.com/web/progressive-web-apps/) JS skeleton with [Marionette.js](http://marionettejs.com/) for [Brunch](http://brunch.io).

## Installation

Clone this repo manually 

`git clone https://github.com/denar90/brunch-with-marionettejs && cd brunch-with-marionettejs` 

or use 

`brunch new dir -s marionettejs`

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. 
This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
There are also added offline feature using [sw-precache](https://github.com/GoogleChrome/sw-precache), [sw-precache-brunch](https://github.com/denar90/sw-precache-brunch), which makes skeleton work offline.    
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
    * [Marionette.js site](http://marionettejs.com/)
    * [What is Service worker ?](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)
    * [What is Web App Manifest ?](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en)

    
    

