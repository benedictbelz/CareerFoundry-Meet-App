Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user hasn't specified a number of events
When the user see all events
Then the number of events should be 32

Scenario: User can change the number of events they want to see
Given the user wanted to change the number of events
When the user changes the number of events
Then the number of events shoudl be the same as specified