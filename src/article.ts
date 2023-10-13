import { comment } from "./comment"
export class article{
    private _id: number
    private _title: string
    private _content: string
    private _creationDate: Date
    private _comments: comment[]
}
