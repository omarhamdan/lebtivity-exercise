# Lebtivity

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Ruby](https://rvm.io/)
* [Ruby on Rails](http://rubyonrails.org/)
* [Bundler](http://bundler.io/)
* [MySQL](https://mysql.com)

## Installation

* Clone the repo `git clone git@github.com:Gtlogic/lebtivity-exercise.git`
* Go into the ember directory `cd lebtivity-exercise/ember`
* Install dependencies `npm install && bower install`
* Go into the rails directory `cd ../rails`
* Install dependencies `bundle install`
* Create the database and run the migrations `bin/rake db:create db:migrate`
* Create data in the database `bin/rake db:populate` (re-use this command whenever you want to reset the data)

#### Running / Development

* Run rails server: from the rails directory run: `rails s`
* Run ember server: from the ember directory run: `ember s --proxy http://localhost:3000`
* Visit `http://localhost:4200`

## Further Reading / Useful Links

* [ruby on rails](http://rubyonrails.org/)
* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
