<<<<<<< HEAD
window.addEventListener('load', function() {
    const removeWebflowBadge = () => {
        const badges = document.querySelectorAll('.w-webflow-badge');
        badges.forEach(badge => badge.remove());
        // Also remove any inline scripts that might re-add the badge
        const scripts = document.getElementsByTagName('script');
        for(let script of scripts) {
            if(script.innerHTML.includes('webflow-badge')) {
                script.remove();
            }
        }
    };
    removeWebflowBadge();
    // Run multiple times to ensure it catches any delayed additions
    setTimeout(removeWebflowBadge, 100);
    setTimeout(removeWebflowBadge, 500);
    setTimeout(removeWebflowBadge, 1500);
    // Create a MutationObserver to watch for dynamically added badges
    const observer = new MutationObserver(removeWebflowBadge);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
=======
window.addEventListener('load', function() {
    const removeWebflowBadge = () => {
        const badges = document.querySelectorAll('.w-webflow-badge');
        badges.forEach(badge => badge.remove());
        // Also remove any inline scripts that might re-add the badge
        const scripts = document.getElementsByTagName('script');
        for(let script of scripts) {
            if(script.innerHTML.includes('webflow-badge')) {
                script.remove();
            }
        }
    };
    removeWebflowBadge();
    // Run multiple times to ensure it catches any delayed additions
    setTimeout(removeWebflowBadge, 100);
    setTimeout(removeWebflowBadge, 500);
    setTimeout(removeWebflowBadge, 1500);
    // Create a MutationObserver to watch for dynamically added badges
    const observer = new MutationObserver(removeWebflowBadge);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
>>>>>>> 3d872d5ec6747125a3674b7899283c360e4260fb
}); 