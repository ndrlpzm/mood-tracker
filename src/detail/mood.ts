class Mood{
	value: number;
	date: Date;
	comment: string;
	constructor(value:number){
		this.value=value;
		this.date=new Date();
		this.comment="";
	}
}