# Behavioral Observation of Students in Schools

## Application Overview

Behavioral Observation of Students in Schools (BOSS), is a tool used by school counselors to collect data on how a target student behaves in relation to other students in the class.  Using timed intervals, counselors can identify behavior as being either engaged or off-task.  Engaged behavior has two categories - actively engaged (aet) and passively engaged (pet).  Off-task behavior has three subcategories - off-task motor (oft-m), off-task verbal (oft-v) and off-task passive (oft-p).  This application allows counselors to make one of five selections during user set time intervals.  After an observation session is complete, users can have a report generated and can access reports using a user dashboard.

Link to the live application: [https://spw5235.github.io/behavioral-observation-of-students-in-schools](https://spw5235.github.io/behavioral-observation-of-students-in-schools).

Link to the API Source: [https://github.com/spw5235/behavioral-observation-of-students-in-schools-api](https://github.com/spw5235/behavioral-observation-of-students-in-schools-api).

Application Screenshot
Inline-style:
![alt text](https://cloud.githubusercontent.com/assets/13546265/24553244/8fa80edc-15f7-11e7-86a9-a9802a95f52c.png "Application Screenshot")

## Technologies Used

This SPA utilizes the following technologies

-   HTML
-   CSS
-   Pure JavaScript
-   jQuery
-   Ajax
-   Ruby on Rails
-   Ruby

## Application Approach & Design

When designing the application, user stories and wireframes were created to ensure that the app would best fit the needs of school counselors.

### User-Stories
The following is a sample of user stories that were considered in the production of the application.

1. As a user, I would like to be able to have my observation auto-submitted
2. As a user, I would like to spend as much time as possible observing the student (rather than the timer)
3. As a user, I would like to edit my previous submit in case an error was made
4. As a user, I would like to create a report
5. As a user, I would like to have a graph displayed of the results

### Wireframes
Based on the user-stories, mulitiple wireframes were created for this application.  They can be found at the followings links:

[Homepage ](https://drive.google.com/open?id=0B_Hv9u6cm8IVY1dIV2ZWMTlteWs)
[Post Sign-In ](https://drive.google.com/open?id=0B_Hv9u6cm8IVUU9rb0hoMnpudlk)
[Start New Session ](https://drive.google.com/open?id=0B_Hv9u6cm8IVeXA2NWtsek00UVk)
[Past Session Report ](https://drive.google.com/open?id=0B_Hv9u6cm8IVR2loY054dkJHV1U)

### Dependencies

Chart.js was utiltized in this project for bar graphs comparing target students to random peers.  Charts.js is open source and provides detailed documentation with installation instructions:

[http://www.chartjs.org/docs/](http://www.chartjs.org/docs/)


Installation was completed via a single npm method:
<!--  -->
```
npm install chart.js --save
```

After requiring the module in the index.js file, Chart.js could be used with their provided documentation.

### Application Limitations & Unresolved Problems

The primary limitation of this application is its scope.  Because four tables are required for this application (students, sessions observations, and reports), it can be challenging to includes values from different tables in one location.  Future attention should be paid to better structure the api.
