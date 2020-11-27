import styles from './styles';

export default class Widget extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        this.createWidget();
    }

    createWidget() {
        const shr = this.shadowRoot;

        const style = document.createElement('style');
        style.textContent = styles;

        const outBox = document.createElement('div');
        outBox.id = 'outBox';

        const h3 = document.createElement('h3');
        h3.textContent = 'I am The Widget';

        const p = document.createElement('p');

        const button = document.createElement('button');
        button.id = 'btn';
        button.textContent = 'Show component attribute text';
        
        shr.appendChild(style);
        shr.appendChild(outBox);
        outBox.appendChild(h3);
        outBox.appendChild(p);
        outBox.appendChild(button);

        button.onclick = () => {
            if (!p.textContent) {
                p.textContent = this.getAttribute('showText');
                button.textContent = 'Hide text';
            } else {
                p.textContent = '';
                button.textContent = 'Show component attribute text';
            }
        }
    }
}