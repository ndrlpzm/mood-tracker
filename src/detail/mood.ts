export class Mood{
	value: number;
	date: Date;
	comment: string;
	constructor(){
		this.value=0;
		this.date=new Date();
		this.comment="";
	}
}