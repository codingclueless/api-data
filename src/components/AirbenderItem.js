import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        const airbender = this.props.airbender;
        const src = airbender.photoUrl || 'assets/airbender-placeholder.jpg';
        return /*html*/`
        <li class="airbender-item">
            <img src="${src}">,
            <h3>${airbender.name}</h3>
        </li>
    `;
    }
}

export default AirbenderItem;