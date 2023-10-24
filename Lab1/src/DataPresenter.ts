import { IDataType } from "./IDataType";
import { DataJson } from "./DataJson";

export class DataPresenter {
    constructor(private _dataType: IDataType) {}

    set dataType(value: IDataType) {
        this._dataType = value;
    }

    get dataType(): IDataType {
        return this._dataType;
    }

    showData(elementToAppend: Element): void {
        elementToAppend.append(this._dataType.getData());
    }

    //Dodane w 7 zadaniu aby usunąć poprzedni wybrany element
    getData(): string | Element {
        return this._dataType.getData();
    }
}