# Mad's Meet App

# Introduction
This is a serverless React APP that uses Google APi to fetch events data.

# built using:
REACT
AWS Lambda
Serverless
JavaScript
CSS
TDD(Test driven development)

# Features
See a default of 32 events unless changed by user.
Display a number between 1-32 events.
Search for a specific city to view events in that city.
See data displayed with charts.

# How to install
Install Node. https://nodejs.org/en/download/

Run Command to clone github repository:

```
$ git clone https://hithub.com/Madison-Cox/meet-app.git

```
Install all dependencies

```
$ npm install
```
In project root folder(Main Folder)
```
$ npm start
```
App should be opened automatically opened locally on your computer.









# Show/hide an events details
**Scenario 1:** Element is collapsed by default.
As a user, I should see a list of events to see what is around me.
*Given* a user selected a city
*When* list of events shown
*Then* events details are hidden

**Scenario 2:** User can expand event to show details.
As a user, I should expand event to show details to see more information about event.
*Given* list of events are shown
*When* User clicks on event to expand details
*Then* Event details show

*Scenario 3:** User can collapse event to hide details.
As a user, I should be able to collapse event to hide details.
*Given* Event details shown
*When* Clicks to hide details
*Then* Details are hidden

# Specify number of events
**Scenario 1:** User hasn't specifed a number, 32 is set as default.
As a user, I should see list of events with 32 being default.
*Given* list of events shown without being specified how many.
*When* User searches events in selected city.
*Then* 32 events should be shown.
**Scenario 2:** User can change number of events shown.
As a user, I can change how many events are shown.
*Given* list of events are shown
*When* Change number of events shown
*Then* Events match the number chosen

# Use app when offline
**Scenario 1:** Show cached data when there is no internet connection.
As a user, I should be able to use app offline.
*Given* App is being used.
*When*  Internet connection is lost.
*Then* shows events from using data in offline cache.

**Scenario 2:** Show error when user tries to change settings(city, time, range)
As a user, I should recieve an error when trying to change settings when internet connection is lost.
*Given* App is being used offline
*When* changing settings(City, Time, Range)
*Then* Error message shown

# Data Visualization
**Scenario 1:** Show a chart with upcoming events in each city.
As a user, I should be shown a chart with upcoming events in selected city.
*Given* City has been selected
*When* User selects upcoming events 
*Then* Chart of upcoming events should be shown