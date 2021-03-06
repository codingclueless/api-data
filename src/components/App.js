import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import airbenderApi from '../airbender-api.js';
import Loading from './Loading.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const airbenderList = new AirbenderList({ airbender: [] });
        main.appendChild(airbenderList.render());
        
        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        airbenderApi.getAirbender()
            .then(airbender => {
                airbenderList.update({ airbender });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                loading.update({ loading: false });
            });

            
        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `; 
    }
    

}

export default App;