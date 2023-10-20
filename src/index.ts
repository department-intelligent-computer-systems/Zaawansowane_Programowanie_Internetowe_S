import Author from "./Author";
class CounterApp {
  private counterInput: HTMLInputElement;
  private incrementButton: HTMLButtonElement;
  private decrementButton: HTMLButtonElement;
  private count: number = 0;

  constructor() {
    this.counterInput = document.getElementById(
      "counterInput"
    ) as HTMLInputElement;
    this.incrementButton = document.getElementById(
      "incrementButton"
    ) as HTMLButtonElement;
    this.decrementButton = document.getElementById(
      "decrementButton"
    ) as HTMLButtonElement;

    this.addEventListeners();
    this.updateCounterDisplay();
  }

  private addEventListeners() {
    this.incrementButton.addEventListener("click", () =>
      this.incrementCounter()
    );
    this.decrementButton.addEventListener("click", () =>
      this.decrementCounter()
    );
  }

  private incrementCounter() {
    this.count++;
    this.updateCounterDisplay();
  }

  private decrementCounter() {
    if (this.count > 0) {
      this.count--;
      this.updateCounterDisplay();
    }
  }

  private updateCounterDisplay() {
    this.counterInput.value = this.count.toString();
  }
}

const app = new CounterApp();
class Aplikacja {
  public async pobierzDane(): Promise<Author[]> {
    try {
      const response = await fetch("data.json");
      const dane = await response.json();
      console.log(dane);

      if (Array.isArray(dane)) {
        const autorzy: Author[] = dane.map(
          (d: any) => new Author(d.id, d.firstname, d.lastname, d.email)
        );
        return autorzy;
      } else {
        throw new Error("Nieprawidłowy format danych JSON");
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
      return [];
    }
  }

  public async uruchom(): Promise<void> {
    const autorzy = await this.pobierzDane();
    if (autorzy.length > 0) {
      const authorList = document.getElementById("authorList");
      if (authorList != null) {
        if (autorzy.length === 0) {
          authorList.innerHTML = "Brak dostępnych danych autorów.";
        } else {
          const authorHTML = autorzy.map((autor) => {
            return `<div>
                          <p>ID: ${autor.getid()}</p>
                          <p>Imię: ${autor.getfirstName()}</p>
                          <p>Nazwisko: ${autor.getlastName()}</p>
                          <p>Email: ${autor.getemail()}</p>
                        </div>`;
          });

          authorList.innerHTML = authorHTML.join("");
          const authorList2 = document.getElementById("authorList2");
          if (authorList2 != null) {
            const authorHTML = Author.retrieveData(autorzy, "list");
            authorList2.innerHTML = authorHTML;
          }

          const displayFormatSelect = document.getElementById(
            "displayFormat"
          ) as HTMLSelectElement;
          const authorList3 = document.getElementById("authorList3");

          if (displayFormatSelect && authorList3) {
            displayFormatSelect.addEventListener("change", updateDisplayFormat);

            function updateDisplayFormat() {
              const selectedFormat = displayFormatSelect.value;
              const authorHTML = Author.retrieveData(autorzy, selectedFormat);
              if (authorList3) {
                switch (selectedFormat) {
                  case "list":
                    authorList3.innerHTML = `<ul>${authorHTML}</ul>`;
                    break;
                  case "numbered-list":
                    authorList3.innerHTML = `<ol>${authorHTML}</ol>`;
                    break;
                  case "table":
                    authorList3.innerHTML = `<table>${authorHTML}</table>`;
                    break;
                  default:
                    console.log("Invalid display format.");
                }
              }
            }
          }
        }
      }
    } else {
      console.log("Brak dostępnych danych autorów.");
    }
  }
}

const aplikacja = new Aplikacja();
aplikacja.uruchom();
