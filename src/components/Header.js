import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Avatar:</h1>
                <h2>The Last Airbender</h2>
            </header>
        `;
    }
}

export default Header;