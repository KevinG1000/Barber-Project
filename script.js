// Select the form and add an event listener for the submit event
document.querySelector('#book form').addEventListener('submit', function (e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Get form values
    const name = document.querySelector('#name').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    // Validate inputs
    if (!name || !date || !time) {
        alert('Please fill out all fields before booking.');
        return;
    }

    // Show confirmation message
    alert(`Appointment booked successfully!\nName: ${name}\nDate: ${date}\nTime: ${time}`);

    // Clear the form
    document.querySelector('#book form').reset();
});
