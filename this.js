/* class Colour {
    constructor(colour) {
        colour = this.colour;
    }
}

//
document.querySelector('#generate').addEventListener('submit', (e) => {
    e.preventDefault();

    const genColour = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

    new Colour(genColour);
    console.log(Colour);
})



//store
class Store {
    static getColours() {
        let colours;
        if(localStorage.getItem('colours') == null) {
            colours = [];
        }
        else {
            colours= JSON.parse(localStorage.getItem('colours'));
        }

        return colours;
    }

    static addColour(colour) {
        const colours = Store.getColours();
        colours.push(colour);
        localStorage.setItem('colours', JSON.stringify(colours));
    }


} */



// isntantiate/ create wtv
document.querySelector('#userinput').addEventListener('submit', (e) => {
    e.preventDefault();

    var newInput = document.getElementById('#userinput');

    var p = document.createElement('p');
    p.appendChild(dcument.createTextNode(newInput));

    document.querySelector('#output');

    
});