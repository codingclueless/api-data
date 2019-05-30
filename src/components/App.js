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

        function loadCharacters() {
            const params = window.location.hash.slice(1);
            
            const searchParams = new URLSearchParams(params);
            console.log(searchParams.toString());

            let type = '';
            if(searchParams.get('allies')) {
                type = 'allies';
            } else if(searchParams.get('enemies')) {
                type = 'enemies';
            }
            
            const search = searchParams.get(type);

            airbenderApi.getAirbender(search, type)
                .then(airbender => {
                    airbenderList.update({ airbender });
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
            
        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();  
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