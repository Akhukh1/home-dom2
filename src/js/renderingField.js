export default class RenderingField {
  constructor() {
    let fields = [];
    const gameField = document.querySelector('.game-field');
    for (let i = 0; i < 16; i++) {
      let field = document.createElement('div');
      fields[i] = gameField.appendChild(field);
      fields[i].classList.add('field');
    }
    this.fields = fields;
  }
}