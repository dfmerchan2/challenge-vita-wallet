export function getNumberRandom(value) {
  return Math.floor(Math.random() * value);
}

export class DataGenerator {
  static randomNumber(min = 0, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomString(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  static randomEmail() {
    const name = this.randomString(7).toLowerCase();
    const domain = this.randomString(5).toLowerCase();
    return `${name}@${domain}.com`;
  }

  static randomUrl() {
    const domain = this.randomString(5).toLowerCase();
    return `https://www.${domain}.com`;
  }

  static randomFirstName() {
    const firstNames = ['Juan', 'Ana', 'Carlos', 'María', 'Luis', 'Laura', 'Diego', 'Camila'];
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  }

  static randomLastName() {
    const lastNames = ['García', 'Pérez', 'Rodríguez', 'López', 'Martínez', 'Gómez'];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  }

  static randomFullName() {
    return `${this.randomFirstName()} ${this.randomLastName()}`;
  }

  static randomBoolean() {
    return Math.random() < 0.5;
  }

  static randomArray(length = 5, generatorFn = this.randomString) {
    return Array.from({ length }, () => generatorFn.call(this));
  }

  static randomId(length = 6) {
    const digits = '0123456789';
    const idStr = Array.from(
      { length },
      () => digits[Math.floor(Math.random() * digits.length)]
    ).join('');
    return parseInt(idStr, 10);
  }

  static randomDigits(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomIdIdAlphaNumeric() {
    return 'Test' + this.randomNumberInRange(10000, 20000);
  }

  static randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
