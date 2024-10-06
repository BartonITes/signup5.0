document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `Name: ${name} | Phone: ${phone} | Location: ${location}`;

    // Append the new user to the list
    document.getElementById('userList').appendChild(li);

    // Clear the form fields
    document.getElementById('signupForm').reset();
});
