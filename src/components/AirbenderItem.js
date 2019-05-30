import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        const airbender = this.props.airbender;

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', airbender.name);

        const allyLink = new URLSearchParams();
        allyLink.set('allies', airbender.name);

        const src = airbender.photoUrl || 'assets/airbender-placeholder.jpg';
        return /*html*/`
        <li class="airbender-item">
            <img src="${src}">,
            <h3>${airbender.name}</h3>
            <a href="#${enemyLink.toString()}">Enemies</a>
            <a href="#${allyLink.toString()}">Allies</a>
        </li>
    `;
    }
}

export default AirbenderItem;