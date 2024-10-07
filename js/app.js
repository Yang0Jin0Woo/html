document.getElementById('carpoolForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
    const time = document.getElementById('time').value;
    const seat = document.getElementById('seat').value;

    // Create a list item to display the carpool info
    const li = document.createElement('li');
    li.textContent = `Driver: ${name}, Destination: ${destination}, Time: ${time}, Seats: ${seat}`;

    // Append the new carpool to the list
    document.getElementById('carpoolList').appendChild(li);

    // Clear the form
    document.getElementById('carpoolForm').reset();
});