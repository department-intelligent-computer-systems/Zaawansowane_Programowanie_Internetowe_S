class AuthorsList {
    private _authors:Author[];
    private _exportMethod:Export;

    constructor() {
        this._authors = [];
        this._exportMethod = new Export();
    }

    public addAuthor(author:Author) {
        this._authors.push(author);
    }

    public export() {
        return this._exportMethod.export(this._authors);
    }

    public setExportMethod(exportMethod:Export) {
        this._exportMethod = exportMethod;
    }
}