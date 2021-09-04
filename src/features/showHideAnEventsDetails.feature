Feature: Show/Hide an events details

Scenario: An event element is collapsed by default
Given the event element hasn't been selected
When the user views the event element list
Then the user should see all events in collapsed form

Scenario: User can expand an event to see its details
Given the event element is listed on the screen
When the user clicks on the event element
Then the event element should expand and show the details

Scenario: User can collapse an event to hide its details
Given the event element has been expanded
When the user clicks on the event element again
Then the even element should collapse and hide the details