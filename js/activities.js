/* plan activities: add random + strike through on check */

(function () {
    'use strict';

    var activityList = document.getElementById('activityList');
    var addBtn = document.getElementById('addActivityBtn');

    if (!activityList || !addBtn) return;

    var activityPool = [
        { text: 'beach walk / clean-up',              time: '40 min' },
        { text: 'family art / drawing challenge',     time: '30 min' },
        { text: 'try a new healthy recipe',           time: '50 min' },
        { text: 'bike ride around the neighborhood',  time: '45 min' },
        { text: 'puzzle or brain game',               time: '25 min' },
        { text: 'dance party / karaoke',              time: '20 min' },
        { text: 'plant something together',           time: '30 min' },
        { text: 'gratitude journaling (3 things)',    time: '15 min' },
        { text: 'splash / swim session',              time: '40 min' },
        { text: 'make a family mini-vlog',            time: '25 min' }
    ];

    var counter = 100;

    addBtn.addEventListener('click', function () {
        var pick = activityPool[Math.floor(Math.random() * activityPool.length)];
        var newId = 'dyn-act-' + (counter++);

        var item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML =
            '<input type="checkbox" id="' + newId + '" />' +
            '<label for="' + newId + '">' + pick.text + '</label>' +
            '<span class="time-badge">' + pick.time + '</span>';

        activityList.appendChild(item);

        addBtn.style.transform = 'scale(0.96)';
        setTimeout(function () { addBtn.style.transform = ''; }, 120);
    });

    activityList.addEventListener('change', function (e) {
        if (e.target.matches('input[type="checkbox"]')) {
            var label = e.target.nextElementSibling;
            if (!label) return;
            if (e.target.checked) {
                label.style.textDecoration = 'line-through';
                label.style.opacity = '0.5';
            } else {
                label.style.textDecoration = '';
                label.style.opacity = '1';
            }
        }
    });
})();