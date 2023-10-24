import { Author } from "./Author";
import { IDataType } from "./IDataType";

export class DataJson implements IDataType{

    constructor(private authors : Author[]){
    }
        getData(): Element | string {
            let jsonStr = JSON.stringify(this.authors, null, '\t');
            return jsonStr;
        }
    }