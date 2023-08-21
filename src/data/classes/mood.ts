export class Mood{
	id:number;
	value: number;
	date: Date;
	comment: string;
	
	constructor(id:number, value: number, date: Date,comment: string){
		this.id=id;
		this.value=value;
		this.date=date;
		this.comment=comment;
	}
}