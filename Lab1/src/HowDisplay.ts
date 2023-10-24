import { DataPresenter } from "./DataPresenter";
import { Author } from "./Author";
import { DataList } from "./DataList";
import { DataHTML } from "./DataHTML";
import { DataListol } from "./DataListol";

export class HowDisplay {
    private select: HTMLSelectElement;
    private displayedData: Element | null = null;

    constructor(
        private _dataPresenter: DataPresenter,
        private _parentElement: Element,
        private _authorList: Author[]
    ) {
        this.renderSelectOptions();
        this.attachEventListeners();
    }

    private renderSelectOptions(): void {
        this.select = document.createElement("select");
        this.select.setAttribute("id", "displaySelector");

        const optionList = document.createElement("option");
        optionList.value = "list";
        optionList.text = "Lista punktowana";
        this.select.appendChild(optionList);

        const optionNumbered = document.createElement("option");
        optionNumbered.value = "numbered";
        optionNumbered.text = "Lista numerowana";
        this.select.appendChild(optionNumbered);

        const optionTable = document.createElement("option");
        optionTable.value = "table";
        optionTable.text = "Tabela";
        this.select.appendChild(optionTable);

        this._parentElement.appendChild(this.select);
    }

    private attachEventListeners(): void {
        this.select.addEventListener("change", () => {
            const selectedOption = this.select.value;

            if (selectedOption === "list") {
                this._dataPresenter.dataType = new DataList(this._authorList);
            } else if (selectedOption === "numbered") {
                this._dataPresenter.dataType = new DataListol(this._authorList);
            } else if (selectedOption === "table") {
                this._dataPresenter.dataType = new DataHTML(this._authorList);
            }

            if (this.displayedData) {
                this.displayedData.remove(); // Usuń poprzedni wybrany element
            }

            this.displayedData = this._dataPresenter.getData() as Element;
            this._parentElement.appendChild(this.displayedData);
        });
    }
}