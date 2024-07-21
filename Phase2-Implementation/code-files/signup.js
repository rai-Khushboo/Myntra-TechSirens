function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = reader.result;
        imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.close');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        modal.style.display = 'block'; // Show the modal

        // Clear the form fields
        form.reset();
        document.getElementById('imagePreview').style.display = 'none';
    });

    closeModal.onclick = function() {
        modal.style.display = 'none'; // Hide the modal when close button is clicked
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal if clicked outside
        }
    };
});
