import AirbenderItem from '../src/components/AirbenderItem.js';

const test = QUnit.test;

test('render template from html', function(assert) {
    //Arrange
    const airbender = {
        'id': '5cdf0769b6e02a467e3e766b',
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        'name': '46th Earth King'
    };
    // Set up your parameters and expectations

    //Act 
    const airbenderItem = new AirbenderItem({ airbender });
    const rendered = airbenderItem.renderTemplate();
    // Call the function you're testing and set the result to a const

    //Assert
    assert.htmlEqual(rendered, /*html*/`
    <li>
        <h3>"5cdf0769b6e02a467e3e766b"</h3>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="airbender-image">,
        <h3>"46th Earth King"</h3>
    </li>`);
});