import Component from './Component.js';
import AirbenderItem from './AirbenderItem.js';

class AirbenderList extends Component {

    render() {
        const list = this.renderDOM();

        this.props.airbender.forEach(airbender => {
            const airbenderItem = new AirbenderItem({ airbender });

            list.appendChild(airbenderItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="airbenders">
              
            </ul>
        `;
    }

}

export default AirbenderList;