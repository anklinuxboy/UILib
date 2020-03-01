import Tooltip from './ui-components/tooltip';
import Dropdown from './ui-components/dropdown';
import Tabs from './ui-components/tabs';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
const dropdowns = document.querySelectorAll('.dropdown');
const tabsContainer = document.querySelector('.tabs');

tooltip.init();

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

const tabs = new Tabs(tabsContainer);
tabs.init();
