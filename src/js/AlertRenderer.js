export class AlertRenderer {
  static createAlert(type, text) {
    const notificationBox = document.querySelector('main');

    const component = document.createElement('div');
    component.className = 'alert';
    component.innerHTML = `
      <div class="alert__box">
        <p class='alert__text'>${text}</p>
      </div>`;

    notificationBox.appendChild(component);

    requestAnimationFrame(() => {
      component.classList.add('show');
    });

    setTimeout(() => {
      component.classList.add('hide');
    }, 2000);

    setTimeout(() => {
      component.remove();
    }, 2500);
  }
}
