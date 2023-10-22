import { shuffleArray } from "./functions";

export class PresentBox {
  presents = [];

  shufflePresent() {
    this.presents = shuffleArray(this.presents);
  }

  registerPresent(present) {
    this.presents.push(present);
  }

  getPresentDescriptionTemplate() {
    return this.presents
      .map((description, index) => `선물${index + 1}번 : ${description}`)
      .join("<br />");
  }
}
