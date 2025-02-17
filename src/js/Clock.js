import { getNodeValue } from './utils';

export class Clock {
  constructor() {
    this.clock = document.querySelector('.clock');

    this.daysLeft = this.clock.querySelector('#days');
    this.hoursLeft = this.clock.querySelector('#hours');
    this.minutesLeft = this.clock.querySelector('#minutes');
    this.secondsLeft = this.clock.querySelector('#seconds');

    this.startPromotion = getNodeValue('js-date-start');
    this.endPromotion = getNodeValue('js-date-end');

    this.init();
  }

  init() {
    setInterval(this.updateCountdown.bind(this), 1000);
    this.updateCountdown();
  }

  getPromoEndDate() {
    const [day, month, year] = this.endPromotion.split('.');
    return new Date(`20${year}-${month}-${day}T23:59:59`).getTime();
  }

  updateCountdown() {
    const now = new Date().getTime();
    let promoEndDate = this.getPromoEndDate();

    if (now >= promoEndDate) {
      promoEndDate = this.updatePromoEndDate();
    }

    const timeLeft = promoEndDate - now;
    this.daysLeft.innerText = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    this.hoursLeft.innerText = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesLeft.innerText = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.secondsLeft.innerText = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

  updatePromoEndDate() {
    const newEndDate = new Date(this.getPromoEndDate() + 14 * 24 * 60 * 60 * 1000);
    return newEndDate.getTime();
  }
}
