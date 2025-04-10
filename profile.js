document.addEventListener('DOMContentLoaded', function () {
    // Sample default user data
    const defaultUserProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        gender: "Male",
        donations: [
            { food: "Rice", quantity: "10 kg", dateTime: "2024-04-10 14:00", status: "Delivered" },
            { food: "Bread", quantity: "5 packs", dateTime: "2024-04-09 10:30", status: "Pending" },
            { food: "Milk", quantity: "2 litres", dateTime: "2024-04-08 16:00", status: "Delivered" }
        ]
    };

    // Retrieve user data from localStorage or use default
    let userProfile = JSON.parse(localStorage.getItem('userProfile')) || defaultUserProfile;

    // Populate profile info
    function populateProfile() {
        document.getElementById('userName').textContent = userProfile.name;
        document.getElementById('userEmail').textContent = userProfile.email;
        document.getElementById('userGender').textContent = userProfile.gender;
    }

    // Populate donation history
    function populateDonations() {
        const tableBody = document.getElementById('donationTableBody');
        tableBody.innerHTML = ''; // Clear existing rows
        userProfile.donations.forEach(donation => {
            const row = `<tr>
                <td>${donation.food}</td>
                <td>${donation.quantity}</td>
                <td>${donation.dateTime}</td>
                <td>${donation.status}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    // Save data to localStorage
    function saveProfile() {
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }

    // Handle edit profile
    function editProfile() {
        // Simple prompt-based edit (for now)
        const newName = prompt("Enter your name:", userProfile.name);
        const newEmail = prompt("Enter your email:", userProfile.email);
        const newGender = prompt("Enter your gender:", userProfile.gender);

        if (newName && newEmail && newGender) {
            userProfile.name = newName;
            userProfile.email = newEmail;
            userProfile.gender = newGender;

            populateProfile();
            saveProfile();
            alert('Profile updated successfully!');
        } else {
            alert('Profile update cancelled or incomplete.');
        }
    }

    // Initial population
    populateProfile();
    populateDonations();

    // Edit button event
    document.getElementById('editProfileBtn').addEventListener('click', function (e) {
        e.preventDefault();
        editProfile();
    });
});

// profile.js

document.addEventListener("DOMContentLoaded", () => {
    const donationForm = document.getElementById("donationForm");
    const donationTableBody = document.getElementById("donationTableBody");
  
    // Load donations from local storage
    function loadDonations() {
      const donations = JSON.parse(localStorage.getItem("donations")) || [];
      donationTableBody.innerHTML = ""; // Clear table
      donations.forEach(donation => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${donation.food}</td>
          <td>${donation.quantity}</td>
          <td>${donation.datetime}</td>
          <td>${donation.status}</td>
        `;
        donationTableBody.appendChild(row);
      });
    }
  
    // Save new donation
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const food = document.getElementById("food").value;
      const quantity = document.getElementById("quantity").value;
      const now = new Date().toLocaleString();
  
      const newDonation = {
        food,
        quantity,
        datetime: now,
        status: "Pending"
      };
  
      const donations = JSON.parse(localStorage.getItem("donations")) || [];
      donations.push(newDonation);
      localStorage.setItem("donations", JSON.stringify(donations));
  
      donationForm.reset();
      loadDonations();
    });
  
    loadDonations();
  });

  // Clear donation history on button click
document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all donation history?")) {
      document.getElementById("donationTableBody").innerHTML = "";
    }
  });
  
