# Gym Tracker

Gym Tracker to show the day's workout and provide a way of keeping track of which workouts you have completed in your routine.

<img src="https://github.com/MatthewSoars/Gym_Tracker/blob/main/resources/gym.gif" width="50%" style="margin-bottom: 20px;">

## Proposal

Keeping track of your daily gym workouts when following a routine typically involves the use of a paid app or notes software, which must be constantly updated.  
Therefore, the idea behind this tracker is to show the day's workout automatically and allow the user to tick them off as they go through their routine.

The main requirements for the project, therefore, are as follows - 
- Needs to show workout for that day
- Needs to be free
- Needs to viewable on a phone screen

### Initial Design

<img src="https://github.com/MatthewSoars/Gym_Tracker/blob/main/resources/inital_design.png" style="margin-bottom: 20px;">

As seen above, the initial design is simple, which is intentional to make it easy to use, even when in a state of exercise-induced delirium post-workout. I have included both a desktop and a phone version, as it is important to consider that, although I am developing on a desktop device, I will be using this on my phone (iPhone 16 Pro). Within Figma, I have captured my exact device measurements.

Design-wise, device size is important because, in the initial builds of my website, I will be using HTML/CSS, which by default is unresponsive to device size. Therefore, it is important to design for my target device, as it would be inconvenient to carry a laptop around the gym.

## Initial Project Planning

Throughout this project, I am going to use the Agile Sprint methodology combined with GitHub Projects. This means that at any point, someone will be able to click on the projects tab to see the current roadmap and previous issues that I have used as target trackers when upgrading the project.

At my company, we typically use Jira, so switching from that to GitHub Projects required a change in mentality. Instead of creating epics that cover broad topics and then using smaller connected issues to break them down into manageable chunks, GitHub Projects only has issues, which can have child issues. For clarity in this report, I will refer to the bigger issues as epics and the smaller tickets as issues.

To cater to this and my chosen methodology of Agile Sprints, I have created two epics with issues:  
- [**"Create Base UI"**: Covers the frontend design and development.](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=93885621&issue=MatthewSoars%7CGym_Tracker%7C1)  
- [**"Create Functionality"**: Covers the backend development and how the tracker will function.](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=94027260&issue=MatthewSoars%7CGym_Tracker%7C6)

(Both of these epics can be seen on the main roadmap as well as their connected issues on the projects tab.)

## Development

For each point of development, I will match it with an Issue/Epic via links.

For each stage of development, test-driven development is important in two ways:  
- **Unit Tests** - These will be achieved through unit testing, which will need to pass before merging is allowed into the main branch.  
- **Visual / Manual Acceptance Testing** - This will be achieved through individual criteria set by each ticket/issue, which will be manually checked by reviewers.  

## [Create Base UI](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=93885621&issue=MatthewSoars%7CGym_Tracker%7C1)

The PR and branch can be viewed [here](https://github.com/MatthewSoars/Gym_Tracker/pull/10), as I will not delete the branch.

1. To start this epic, I first needed to create tests following Test-Driven Development guidelines as described in this [#11 issue](https://github.com/MatthewSoars/Gym_Tracker/issues/11). These tests ensure that once the full epic is completed, I can run the test file, which should result in a pass. If the tests fail, it indicates that the current implementation does not meet the initial requirements. (I pushed the test file last to the branch to verify that everything worked correctly.)
2. Next, I set up my basic HTML file and configured GitHub Pages to link as per [#5 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/5). For now, I used the "Create Base UI" branch, but once finished, I switched it back to "Develop."
3. Then, I created a heading titled "Gym Tracker" and updated the page name to match, as described in [#4 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/4).
4. Following that, I added a list element where the gym activities, along with the required reps and sets, would be displayed, as per [#3 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/3).
5. Afterward, I worked on the CSS and styling as per [#2 Issue](https://github.com/MatthewSoars/Gym_Tracker/issues/2). This step took the most time due to my inexperience with frontend web development. In the future, I may consider using pre-made CSS frameworks to save time.
6. Finally, I ran my tests, which successfully passed. This allowed me to commit and push the tests and then merge the PR.

## [Create Functionality](https://github.com/users/MatthewSoars/projects/2/views/1?pane=issue&itemId=94027260&issue=MatthewSoars%7CGym_Tracker%7C6)

The PR and branch can be viewed [here](https://github.com/MatthewSoars/Gym_Tracker/pull/14), as I will not delete the branch.

1. To begin this epic, I first needed to create unit tests following my Test-Driven Development methodology, which is detailed in this [#13 issue](https://github.com/MatthewSoars/Gym_Tracker/issues/13). To ensure these tests were completed, I committed and pushed this to my new branch once they ran successfully on the finished pull request.
2. Next, I needed to make it so that instead of the workouts being hardcoded, they load from a file, as described in [#7 issue](https://github.com/MatthewSoars/Gym_Tracker/issues/7).
3. Then, as described in [#8 issue](https://github.com/MatthewSoars/Gym_Tracker/issues/8), I made it so that, dynamically, based on the day of the week, the correct workout loads from a JSON file created in the last step. For now, I populated this with the same workout for each day, as I planned to fill in my specific workouts in the next step.
4. Penultimately, I filled in my routine to match my day-by-day workouts as per [#9 issue](https://github.com/MatthewSoars/Gym_Tracker/issues/9).
5. Finally, I ran my tests, which at first didn’t pass. After investigating, I discovered an error in the test file (not in the code). Once fixed, the tests passed successfully, allowing me to commit and push the changes, and merge the PR.

## Evaluation

Within the next section, I will evaluate the current state of the MVP.

### Final MVP

As can be seen below, both the mobile and desktop versions of the MVP closely match the initial design spec I created in Figma, except for the tick boxes, which I will explain in the limitations section. It is important to note that the page changes depending on the day. For example, the picture below was taken on a Friday.  

<img src="https://github.com/MatthewSoars/Gym_Tracker/blob/main/resources/mvp.png" style="margin-bottom: 20px;">  
<img src="https://github.com/MatthewSoars/Gym_Tracker/blob/main/resources/mvp_mobile.png" style="margin-bottom: 20px;">

### Limitations

- One limitation I found during planning/development was an inbuilt issue with hosting my site through GitHub: currently, only static sites are supported. This means that ticking off items wouldn’t be viable, as refreshing the page (likely in a gym setting) would reset all progress.

### Future Additions

- Make it so that through the use of GitHub Actions the unit tests are run in the PR and will block the merge if not ran successfully.
- Change hosting to allow items marked as complete to remain complete. To match the initial requirements, this needs to remain a free solution.  
- Add the ability to log and track how many days I’ve completed. I’d also like to integrate this with email summaries showing my monthly dedication to the gym.  
- Adapt the website into an app for even easier use on the go.

## Final Conclusion

Overall, I am happy with my MVP and will definitely use it to track my daily workouts. I’ve already covered some of the future additions I want to make, and I plan to implement them since I have no better solution to this problem due to the fact that I refuse to spend money on existing solutions. This website fulfills my basic requirements for both appearance and functionality, especially in dynamically displaying my day’s workout at a glance. I am happy to move forward based on this MVP.
