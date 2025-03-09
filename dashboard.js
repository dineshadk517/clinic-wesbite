// Simulate logged-in user (this would typically come from the session or login logic)
const loggedInUser = { username: "doctor1", role: "doctor" }; // Change this to test for nurse

// Sample patient data (from earlier)
const patients = [
    { id: 1, name: "John Doe", age: 30, diagnosis: "Flu", treatment: "Antiviral medication", medicalHistory: "No significant history" },
    { id: 2, name: "Jane Smith", age: 25, diagnosis: "Migraine", treatment: "Pain relief medication", medicalHistory: "Occasional headaches" },
    { id: 3, name: "Emily Johnson", age: 40, diagnosis: "Hypertension", treatment: "Blood pressure medication", medicalHistory: "Family history of hypertension" }
];

// Function to display patient data based on the user's role
function displayPatientData() {
    const patientListDiv = document.getElementById("patient-list");

    if (loggedInUser.role === "doctor") {
        // Doctor has full access to patient info
        patients.forEach(patient => {
            const patientDiv = document.createElement("div");
            patientDiv.classList.add("patient");
            patientDiv.innerHTML = `
                <h3>${patient.name}</h3>
                <p><strong>Age:</strong> ${patient.age}</p>
                <p><strong>Diagnosis:</strong> ${patient.diagnosis}</p>
                <p><strong>Treatment:</strong> ${patient.treatment}</p>
                <p><strong>Medical History:</strong> ${patient.medicalHistory}</p>
            `;
            patientListDiv.appendChild(patientDiv);
        });
    } else if (loggedInUser.role === "nurse") {
        // Nurse has limited access to patient info (e.g., basic details)
        patients.forEach(patient => {
            const patientDiv = document.createElement("div");
            patientDiv.classList.add("patient");
            patientDiv.innerHTML = `
                <h3>${patient.name}</h3>
                <p><strong>Age:</strong> ${patient.age}</p>
                <p><strong>Diagnosis:</strong> ${patient.diagnosis}</p>
            `;
            patientListDiv.appendChild(patientDiv);
        });
    }
}

// Call the function to display the data
displayPatientData();
