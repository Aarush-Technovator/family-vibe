/* quality time ideas: click for a new one */

(function () {
    'use strict';

    var oppList = document.getElementById('oppList');
    var newIdeaBtn = document.getElementById('newIdeaBtn');

    if (!oppList || !newIdeaBtn) return;

    var MAX_ITEMS = 4;

    var ideaPool = [
        { text: '<strong>coffee or tea talk:</strong> 15 min no phones, just chat' },
        { text: '<strong>photo walk:</strong> capture 5 things that make you happy' },
        { text: '<strong>family movie night:</strong> let each person pick a snack' },
        { text: '<strong>picnic in the park:</strong> simple sandwiches plus frisbee' },
        { text: '<strong>storytime:</strong> each person tells a funny memory' },
        { text: '<strong>card game tournament:</strong> winner picks next activity' },
        { text: '<strong>sunset watch:</strong> find a nice spot, just breathe together' },
        { text: '<strong>10-min family tidy-up:</strong> music on, speed clean, then treat' },
        { text: '<strong>cook something new:</strong> pick a recipe from another country' },
        { text: '<strong>playlist swap:</strong> everyone shares 2 songs and explains why' }
    ];

    newIdeaBtn.addEventListener('click', function () {
        var idea = ideaPool[Math.floor(Math.random() * ideaPool.length)];

        while (oppList.children.length >= MAX_ITEMS) {
            oppList.removeChild(oppList.firstElementChild);
        }

        var div = document.createElement('div');
        div.className = 'opp-item';
        div.innerHTML = '<div class="opp-text">' + idea.text + '</div>';

        oppList.appendChild(div);

        newIdeaBtn.style.transform = 'scale(0.96)';
        setTimeout(function () { newIdeaBtn.style.transform = ''; }, 120);
    });
})();