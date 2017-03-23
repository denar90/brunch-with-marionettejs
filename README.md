# Brunch + Marionette.js + Babel/ES6 PWA

This is a modern Progressive Web App JS skeleton with [Marionette.js](http://marionettejs.com/) for [Brunch](http://brunch.io).


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

## Progressive Web Apps
   
Progressive Web Applications take advantage of new technologies to bring the best of mobile sites and native 
applications to users. They're reliable, fast, and engaging. [More](https://developers.google.com/web/progressive-web-apps/)
    

## Service Worker

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to 
features that don't need a web page or user interaction. [More](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)

### Service Worker Precache

[sw-precache](https://github.com/GoogleChrome/sw-precache) is a module for generating a service worker that precaches resources.
It's added as part of Brunch plugin [sw-pracache-brunch](https://github.com/denar90/sw-precache-brunch).


## Web App Manifest

The Manifest for Web applications is a simple JSON file that gives you, the developer, the ability to control how your 
app appears to the user in the areas that they would expect to see apps. [More](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en)

## How to try it?

It's hosted on gh-pages - https://denar90.github.io/brunch-with-marionettejs/
> Don't forget to go offline and see what happens

## 100% PWA !!!

[Lighthouse](https://github.com/GoogleChrome/lighthouse/) report 

![lighthouse report https denar90 github io brunch-with-marionettejs](https://cloud.githubusercontent.com/assets/6231516/24273098/2f55ec76-1029-11e7-9650-3e3add82d279.png)


P.S. Inspired by [@jeffposnick](https://github.com/jeffposnick) - https://github.com/jeffposnick/create-react-pwa/blob/master/README.md
