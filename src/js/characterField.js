export default function characterField(charField, character) {
  let appCharacter = charField.appendChild(character);
  appCharacter.src = '../pic/goblin.png';
  appCharacter.classList.add('character');
}
