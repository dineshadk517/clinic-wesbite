 // Handle form submissions

// Book appointment
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Appointment booked successfully!");
});

// Pay bills
document.getElementById('billForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Bill paid successfully!");
});

// Check results
document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const patientId = document.getElementById('patientId').value;
    if(patientId) {
        document.getElementById('resultDisplay').style.display = 'block';
    } else {
        alert("Please enter a valid Patient ID.");
    }
});
