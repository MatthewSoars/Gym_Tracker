// Fetch the data for the workout
async function loadWorkoutData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Populate workout dynamically
        const workoutList = document.getElementById('workout-list');
        workoutList.innerHTML = ''; // Clear any existing content

        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.exercise} <span>${item.sets} Sets of ${item.reps}</span>`;
            workoutList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading workout data:', error);
    }
}

loadWorkoutData();
