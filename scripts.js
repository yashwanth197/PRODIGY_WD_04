document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript you need here
});

document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-skill-level');
        skill.style.setProperty('--skill-level', level);
        skill.style.width = level;
        skill.style.animation = `loadSkill 2s ease-out`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;

            if (itemTop < window.innerHeight && itemBottom >= 0) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    document.addEventListener('scroll', checkTimeline);
    document.addEventListener('resize', checkTimeline);
    document.addEventListener('load', checkTimeline);
    document.addEventListener('DOMContentLoaded', checkTimeline);
});


