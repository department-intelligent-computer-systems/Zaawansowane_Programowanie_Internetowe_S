class Wezel<T> {
  constructor(public wartosc: T, public dzieci: Wezel<T>[] = []) {}

  dodajDziecko(dziecko: Wezel<T>) {
    this.dzieci.push(dziecko);
  }
}

const korzen = new Wezel(1);
const dziecko1 = new Wezel(2);
const dziecko2 = new Wezel(3);

korzen.dodajDziecko(dziecko1);
korzen.dodajDziecko(dziecko2);
