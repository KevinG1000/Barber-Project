// Select the form in the 'Book Your Appointment' section and add an event listener for the submit event
document.querySelector('#book form').addEventListener('submit', function (e) {
    // Prevent the default form submission behavior (i.e., no page reload)
    e.preventDefault();

    // Get the values from each form field
    const name = document.querySelector('#name').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    // Check if any of the fields are empty
    if (!name || !date || !time) {
        // If any field is empty, show an alert and stop the function here
        alert('Please fill out all fields before booking.');
        return;  // Stop the function from continuing
    }

    // If all fields are filled out, show a confirmation message with the appointment details
    alert(`Appointment booked successfully!\nName: ${name}\nDate: ${date}\nTime: ${time}`);

    // Clear the form fields after successful submission
    document.querySelector('#book form').reset();
});
