export class Mood{
	id:number;
	value: number;
	date: Date;
	comment: string;
	//TODO: pass values on declaration
	constructor(){
		this.id=-1;
		this.value=0;
		this.date=new Date();
		this.comment="";
	}
}