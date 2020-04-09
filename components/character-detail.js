class characterDetail extends HTMLElement {

    get character() {
        return this._character;
    }

    set character(value) {
        this._character = value;
        this._render();
    }

    constructor () {
        super();

        this.attachShadow({ mode: 'open' });
    }

    _render() {
        this.shadowRoot.innerHTML = `
            <h2>${this.character.name}</h2>
            <ul>
                <li>status: ${this.character.status}</li>
                <li>species: ${this.character.species}</li>
                <li>gender: ${this.character.gender}</li>
            </ul>
        `;
    }
}

customElements.define('character-detail', characterDetail);