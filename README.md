# Gym Tracker
Gym Tracker to show the day's workout and provide a way of keeping track of which workouts you have completed in your routine.

<img src="https://github.com/MatthewSoars/Gym_Tracker/blob/main/resources/gym.gif" width="50%" style="margin-bottom: 20px;">

## Proposal
Keeping track of your daily gym workouts when following a routine typically involves the use of a paid app or notes software, which must be constantly updated.  
Therefore, the idea behind this tracker is to show the day's workout automatically and allow the user to tick them off as they go through their routine.

### Initial Design
<img src="https://github.com/MatthewSoars/Gym_Tracker/blob/main/resources/inital_design.png" style="margin-bottom: 20px;">

As seen above, the initial design is simple, which is intentional in order to make it easy to use, even when in a state of exercise-induced delirium post-workout. I have included both a desktop and a phone version, as it is important to consider that, although I am developing on a desktop device, I will be using this on my phone (iPhone 16 Pro). Within Figma, I have captured my exact device measurements. 

Design-wise, device size is important because, in the initial builds of my website, I will be using HTML/CSS, which by default is unresponsive to device size. Therefore, it is important to design for my target device, as it would be inconvenient to carry a laptop around the gym.

## Initial Project Planning
Throughout this project, I am going to use the Agile Sprint methodology combined with GitHub Projects. This means that at any point, someone will be able to click on the projects tab to see the current roadmap and previous issues that I have used as target trackers when upgrading the project.

At my company, we typically use Jira, so switching from that to GitHub Projects required a change in mentality. Instead of creating epics that cover broad topics and then using smaller connected issues to break them down into manageable chunks, GitHub Projects only has issues, which can have child issues. For clarity in this report, I will refer to the bigger issues as epics and the smaller tickets as issues. 

To cater to this and my chosen methodology of Agile Sprints, I have created two epics with issues: 
- [**"Create Base UI"**: Covers the frontend design and development.](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=93885621&issue=MatthewSoars%7CGym_Tracker%7C1)
- [**"Create Functionality"**: Covers the backend development and how the tracker will function.](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=94027260&issue=MatthewSoars%7CGym_Tracker%7C6)

(Both of these epics can be seen on the main roadmap as well as their connected issues on the projects tap)

# Development

For each point of development, I will match it with an Issue/Epic via links.

## [Create Base UI](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=93885621&issue=MatthewSoars%7CGym_Tracker%7C1)

The PR and branch can be viewed [here](https://github.com/MatthewSoars/Gym_Tracker/pull/10), as I will not delete the branch.

1. To start this epic, I first needed to create tests following Test-Driven Development guidelines as described in this [issue](https://github.com/MatthewSoars/Gym_Tracker/issues/11). These tests ensure that once the full epic is completed, I can run the test file, which should result in a pass. If the tests fail, it indicates that the current implementation does not meet the initial requirements. (I pushed the test file last to the branch to verify that everything worked correctly.)
2. Next, I set up my basic HTML file and configured GitHub Pages to link as per [#5 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/5). For now, I used the "Create Base UI" branch, but once finished, I switched it back to "Develop."
3. Then, I created a heading titled "Gym Tracker" and updated the page name to match, as described in [#4 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/4).
4. Following that, I added a list element where the gym activities, along with the required reps and sets, would be displayed, as per [#3 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/3).
5. Afterward, I worked on the CSS and styling as per [#2 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/2). This step took the most time due to my inexperience with frontend web development. In the future, I may consider using pre-made CSS frameworks to save time.
6. Finally, I ran my tests, which successfully passed. This allowed me to commit and push the tests and then merge the PR.

## [Create Functionality](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=94027260&issue=MatthewSoars%7CGym_Tracker%7C6)

