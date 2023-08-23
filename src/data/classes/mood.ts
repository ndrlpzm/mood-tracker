import { Tag } from "./tag";

export class Mood{
	id:number;
	value: number;
	date: Date;
	comment: string;
	tags: Tag[]
	
	constructor(id:number, value: number, date: Date,comment: string, tags:Tag[]){
		this.id=id;
		this.value=value;
		this.date=date;
		this.comment=comment;
		this.tags=tags;
	}
}