# Meet

Meet -  A serverless, progressive web application with React using test-driven development techniques.

## Feature 1: Filter events by city
As a user, I would like to be able to filter eventy by city, so that I can see a full list of the upcoming events in chosen city.

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
> Given user hasn’t searched for any city
> When the user opens the app
> Then the user should see a list of all upcoming events

### Scenario 2: User should see a list of suggestions when they search for a city
> Given the main page is open
> When user starts typing in the city textbox
> Then the user should see a list of cities (suggestions) that match what they’ve typed

### Scenario 3: User can select a city from the suggested list
> Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
> When the user selects a city (e.g., “Berlin, Germany”) from the list
> Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

## Feature 2: Able to show/hide details of an event
As a user, I would like to be able to show or hide the details of an event, so that I have a better overview of the upcoming event.

### Scenario 1: An event element is collapsed by default
> Given the event element hasn't been selected
> When the user views the event element list
> Then the user should see all events in collapsed form

### Scenario 2: User can expand an event to see its details
> Given the event element is listed on the screen
> When the user clicks on the event element
> Then the event element should expand and show the details

### Scenario 3: User can collapse an event to hide its details
> Given the event element has been expanded
> When the user clicks on the event element again
> Then the even element should collapse and hide the details

## Feature 3: Specify number of events
As a user, I would like to specify the number of events, so that I can define the number of events I want to see.

### Scenario 1: When user hasn’t specified a number, 32 is the default number
> Given the user hasn't specified a number of events
> When the user see all events
> Then the number of events should be 32

### Scenario 2: User can change the number of events they want to see
> Given the user wanted to change the number of events
> When the user changes the number of events
> Then the number of events shoudl be the same as specified

## Feature 4: Offline avaibility
As a user, I would like to have offline availability, so that I can use the app offline.

### Scenario 1: Show cached data when there’s no internet connection
> Given the internet connection has been cut off
> When the user opens the application
> Then the application should show the cached events

### Scenario 2: Show error when user changes the settings (city, time range)
> Given the internet connection has been cut off
> When the user changes settings
> Then the application should show an error message

## Feature 5: Add app shortcut to the home screen of the user
As a user, I would like to have an app shortcut on my home screen, so that I can access the application faster.

## Feature 6: Display chart of upcoming events by city
As a user, I would like to see a chart of upcoming eventy for each city, so I have an overview of the events in each city.

### Scenario 1: Show a chart with the number of upcoming events in each city
> Given the user is on the main page
> When the user clicks on the data visualization
> Then a chart with the number of events should be shown for each city
