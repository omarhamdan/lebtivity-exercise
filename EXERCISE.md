# Lebtivity Exercise

This application is a simple version of [Lebtivity](http://www.lebtivity.com) using Ember.js and Ruby on Rails.

## Intro

[Ruby on Rails](http://rubyonrails.org/) (referred to as Rails) is a framework created on top of the [Ruby programmming language](https://www.ruby-lang.org/en/) that developers use to build web applications. You can build complete websites using Rails - but in this exercise we are only be using it to build a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) that only returns [Json](http://json.org/). Ember.js will be responsible for the rest.

[Ember.js](http://emberjs.com/) is a framework created on top of the [Javascript programming language](https://developer.mozilla.org/en-US/docs/Web/JavaScript) that helps you build [Single Page applications](https://en.wikipedia.org/wiki/Single-page_application). Ember.js cannot be used on its own as it is the part that runs in the browser and we need a "backend" framework to feed it data (in this case we are using Ruby on Rails). You can follow the [getting started guide](http://guides.emberjs.com/v1.10.0/getting-started/) on the Ember homepage to get a better introduction.

As you can see in this project structure, it is split into two main directories: rails and ember. They are mostly separate apps that complete each other to create the final result that is our Lebtivity app.

We are using [git](https://git-scm.com/) for version control. Each change should be commited with a message describing what was changed.

We are using [ember-cli](http://www.ember-cli.com/) as the build tool for the Ember app. Build tools allow us to differentiate between the code we write and the code we deploy. For example, it converts ES6 javascript to ES5, concatenates files, converts SASS to plain old CSS, minifies javascript and CSS, etc. Ember-cli also provides us with a development server with live reload (the page reloads when we make changes to the code). Ember-cli also dictates our file structure and what to name our files. Read the ember-cli homepage for more info on what it does and how it works.

Since we are using ES6 syntax in our app, you will want to familiarize yourself with it. You can check out [this guide](https://babeljs.io/docs/learn-es2015/) on ES6 features.

## Exercise

You will be adding some features to that existing project.

1. Projects often contain a [README](https://en.wikipedia.org/wiki/README) file that contains instructions on how to install/develop that project. Follow the README instructions to setup this project and start development.

2. The current design is not flexible and does not account for various device dimenions. We need to fix the CSS on the homepage to become [responsive](https://en.wikipedia.org/wiki/Responsive_web_design). Since CSS is part of the front end, we will be working in the "ember" directory. Stylesheets are located at `ember/app/styles`. Notice that stylesheets have the `scss` extension (as opposed to css). That is because we are using [SASS](http://sass-lang.com/). No need to dive into that now, we will only be working in CSS for now.
  - We're going to add [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) to support different screen sizes. Add a breakpoint between 0 and 420px to only have one event card per row. A breakpoint between 420px and 860px to have 2 cards per row. A breakpoint between 860px to 1300px to have 4 cards per row, and 6 cards for screens wider than 1300px. Hint: read up on [nth-child](https://css-tricks.com/how-nth-child-works/). Make sure "Add an event" button is visible on all breakpoints.
  - Commit your changes using git with the message "Make the app responsive".

3. The events are missing a field called "contact" which contains info on how to contact the event organizer. Adding this field will require changes to the database, Rails, and Ember.
  - You will need to add "contact" (a string column) to the events table in the database. To do that, use the rails [Migration command](http://edgeguides.rubyonrails.org/active_record_migrations.html). The reason we don't create it in the database manually is to keep track of what changed so others can also apply that same change.
  - You will need to update the Ember event form to save the field.
    * Add the "contact" property to the [model hook](http://guides.emberjs.com/v1.10.0/routing/specifying-a-routes-model/) in the `new` route.
    * Add a "contact" [input](http://guides.emberjs.com/v1.10.0/templates/input-helpers/) to the `new` template
  - Configure the rails events controller to permit "contact" as a parameter by adding it to the whilelisted [strong parameters](http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters).
  - Add the "contact" value to the `event` Ember template.
  - Commit your changes using git with the message "Add contact field to events"

4. The current dates shown in the event page are not user friendly. We're going to make them prettier.
  - Create an [Ember helper](http://guides.emberjs.com/v1.10.0/templates/writing-helpers/) named `pretty-date` that takes a date and renders it in the following format: "Tuesday, January 4, 2015". You will need to use [moment.js](http://momentjs.com/). Follow the same approach used in the `short-date` helper that is used in the home page.
  - Commit your changes with the message "Make event dates pretty".

5. Event descriptions look unformatted. With plain text you can't add paragraphs, change fonts, underline, add titles, etc. Writing pure HTML however is not practical and requires users to have programming knowledge. We're going to use a middleground. We're going to allow users to write their description in [Markdown](http://daringfireball.net/projects/markdown/) instead. The user writes markdown in the description textarea, and we will create an Ember helper that converts that markdown to HTML. Of course, we won't write the markdown to HTML converter ourselves, we will be using an external library. Since this is purely a client side thing, we'll be working inside the "ember" directory.
  - Ember-cli allows us to import external libraries. We use the [Bower](http://bower.io/) package manager. To install the [markdown.js](https://github.com/evilstreak/markdown-js) library, in the terminal (inside the "ember" directory), you need to run `bower install markdown --save`.
  - Tell ember-cli to import that library. Inside [Broccoli's](https://github.com/broccolijs/broccoli) `Brocfile.js`, add a statement to import the file `bower_components/markdown/lib/markdown.js` (like we imported `moment.js`). And restart the ember-cli server.
  - Create an Ember helper called `markdown-to-html` that uses the `markdown` libray to convert markdown text to HTML. Since the result is HTML, and since Ember automatically escapes HTML (which we don't want in this case), you will need to wrap the return result with `new Ember.Handlebars.SafeString(result)`.
  - Now apply that helper inside the `event` template on the `description` field.
  - Commit your changes with the message "Add markdown support to event descriptions".

6. We want to make sure users don't submit events with empty names. To do that we add [validations to rails models](http://guides.rubyonrails.org/active_record_validations.html).
  - Add a "presence" validation to the `name` field in the rails Event model in `rails/app/models/event.rb`.
  - In the Ember app (specifically the `events/new` route), handle the case where the ajax request fails by showing an `alert` stating the the name is required.
  - Commit your changes with the message "Add event model validations".

7. The current delete button doesn't do anything. We should fix that.
  - Add an [Ember action](http://guides.emberjs.com/v1.10.0/templates/actions/) called "remove" that is handled inside the `event` route. According to REST APIs, deleting a record means performing a DELETE ajax to that resource ('/events/:id' in this case).
  - In Rails, add the [DELETE route](http://guides.rubyonrails.org/routing.html) that points to a `destroy` action in the events controller. The controller's `destroy` action fetches the record (just like the `show` action) and then calls `event.destroy`. Just render an empty hash `render json: {}` when the destroy succeeds.
  - In Ember, redirect the user to the home page when the delete succeeds.
  - Commit your changes with the message "Add delete events feature".

8. The total number of Events in the home page is hard coded.
  - Fix the Ember application template to render the correct total.
  - Commit your changes with the message "Fix events total in homepage".

9. The events are not sorted.
  - Create an [Ember computed property](http://guides.emberjs.com/v1.10.0/object-model/computed-properties/) that sorts the model array by date and start time (in ascending order).
  - Render that computed property in the `events/index` template instead of the default model.
  - Commit your changes with the message "Sort events by date and time".

10. There is a bug in the events shown. We should not be seeing past events.
  - Update the rails events controller (the `index` action) to only send events that have not passed. Check how to add conditions to Rails model queries [here](http://guides.rubyonrails.org/active_record_querying.html).
  - Commit your changes with the message "Exclude past events".
