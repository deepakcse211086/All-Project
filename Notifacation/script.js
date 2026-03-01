function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast');

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.innerText = message;

    // Append toast to container
    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}