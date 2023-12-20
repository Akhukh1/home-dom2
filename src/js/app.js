import RenderingField from './renderingField';
import RgeneratNuberField from './generatNuberField';
import characterField from './characterField';

document.addEventListener('DOMContentLoaded', () => {
  const gameFields = new RenderingField();
  const character = document.createElement('img');
  setInterval(() => {
    const randomUndex = RgeneratNuberField(gameFields.fields.length - 1);
    characterField(gameFields.fields[randomUndex], character);
  }, 1000);
});
