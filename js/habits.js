/* habits tracker: plus/minus + animated bar */

(function () {
    'use strict';

    var MAX_VALUE = 5;
    var habitRows = document.querySelectorAll('.habit-row');

    if (!habitRows.length) return;

    function paintBar(row) {
        var barFill = row.querySelector('.bar-fill');
        var value = parseFloat(row.dataset.value) || 0;

        if (value < 0) value = 0;
        if (value > MAX_VALUE) value = MAX_VALUE;

        var percent = (value / MAX_VALUE) * 100;
        barFill.style.width = percent + '%';
        row.dataset.value = value;
    }

    function bounce(el) {
        el.style.transform = 'scale(0.94)';
        setTimeout(function () {
            el.style.transform = '';
        }, 110);
    }

    habitRows.forEach(function (row) {
        var plusBtn = row.querySelector('[data-action="plus"]');
        var minusBtn = row.querySelector('[data-action="minus"]');

        plusBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var value = parseFloat(row.dataset.value) || 0;

            if (value < MAX_VALUE) {
                value += 1;
                row.dataset.value = value;
                paintBar(row);
            } else {
                bounce(row);
            }
        });

        minusBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var value = parseFloat(row.dataset.value) || 0;

            if (value > 0) {
                value -= 1;
                row.dataset.value = value;
                paintBar(row);
            } else {
                bounce(row);
            }
        });

        paintBar(row);
    });

    var resetBtn = document.getElementById('resetHabitsBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            var defaults = { water: 3, veggies: 2, move: 2 };

            habitRows.forEach(function (row) {
                var habit = row.dataset.habit;
                var resetVal = defaults[habit] !== undefined ? defaults[habit] : 2;
                row.dataset.value = resetVal;
                paintBar(row);
            });

            bounce(resetBtn);
        });
    }
})();