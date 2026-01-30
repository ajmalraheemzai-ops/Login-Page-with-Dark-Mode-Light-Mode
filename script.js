document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('pull-trigger');
    const body = document.body;

    if (!trigger) return;

    // Toggle lighting on pull-chain click
    trigger.addEventListener('click', () => {
        body.classList.toggle('lit');

        // Console log for testing
        if (body.classList.contains('lit')) {
            console.log("Light on - Welcome Ajmal!");
        }
    });
});
