const tooltipManager = {
    container: null,

    initialize: function() {
        this.container = document.querySelector("#tooltipContainer");
    },

    createTooltip: function(message) {
        if (!this.container) {
            console.error('Nie można utworzyć tooltipa.');
            return;
        }

        const tooltip = this._createTooltipElement(message);
        this._displayTooltip(tooltip);
    },

    showTooltip: function(message) {
        if (!this.container) {
            console.error('Nie można pokazać tooltipa.');
            return;
        }

        const tooltip = this._createTooltipElement(message);
        this._displayTooltip(tooltip);
    },

    _createTooltipElement: function(message) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip__copy visible';

        const tooltipText = document.createElement('p');
        tooltipText.className = 'tooltip__copy--text';
        tooltipText.textContent = message;

        tooltip.appendChild(tooltipText);
        return tooltip;
    },

    _displayTooltip: function(tooltip) {
        if (!this.container) {
            console.error('Nie można wyświetlić tooltipa.');
            return;
        }

        this.container.appendChild(tooltip);
        setTimeout(() => {
            tooltip.classList.remove('visible');
            setTimeout(() => {
                if (this.container.contains(tooltip)) {
                    this.container.removeChild(tooltip);
                }
            }, 500);
        }, 2000);
    }
};

tooltipManager.initialize();

const copyButton = document.querySelector("#copyToClipboard");
if (copyButton) {
    copyButton.addEventListener('click', () => {
        const copyText = document.querySelector("#userTransferAccount");
        if (copyText) {
            const accountNumber = copyText.value;
            navigator.clipboard.writeText(accountNumber)
                .then(() => tooltipManager.createTooltip('Pomyślnie skopiowano numer do schowka.'));
        } else {
            console.error('Nie można pobrać wartości do skopiowania.');
        }
    });
}

const showTooltipButton = document.querySelector("#deleteButton");
if (showTooltipButton) {
    showTooltipButton.addEventListener('click', () => {
        tooltipManager.showTooltip('Pozycja pomyślnie usunięta.');
    });
}
