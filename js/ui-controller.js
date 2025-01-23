// Add export to make this a proper module
export function initThemeToggle() {
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.setAttribute('data-theme', 
            document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
}

function initDescriptionToggle() {
    const hideButton = document.getElementById('hideDescription');
    const description = document.getElementById('project-description');
    
    if (hideButton && description) {
        description.classList.remove('hidden');
        hideButton.addEventListener('click', () => {
            description.classList.add('hidden');
        });
    }
}

// Add to initUI function
export function initUI() {
    initThemeToggle();
    initDescriptionToggle();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initUI);

// Add dynamic message animations
function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.style.animationDelay = '0.1s';
    messageElement.innerHTML = message;
    document.querySelector('.chat-messages').appendChild(messageElement);
} 