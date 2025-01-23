// Fetch the data for the workout
async function loadWorkoutData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Get today's day of the week (e.g., "Monday", "Tuesday")
        const today = new Date().toLocaleString('en-US', { weekday: 'long' });

        // Check if workouts exist for today
        if (!data[today]) {
            console.error(`No workout found for ${today}`);
            return;
        }

        // Populate workout dynamically
        const workoutList = document.getElementById('workout-list');
        workoutList.innerHTML = `<h2>${today}'s Workout</h2>`; // Display the day



        data[today].forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.exercise} <span>${item.sets} Sets of ${item.reps}</span>`;
            workoutList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading workout data:', error);
    }
}

loadWorkoutData();
