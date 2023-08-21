import { Mood } from "./classes/mood";
export type MoodActionType="add" | "delete" | "replace";
export class MoodAction{
	constructor(
		public type:MoodActionType,
		public mood: Mood,
		public moodIndex:number,
		public newList:Mood[]
	){}
}
export default function moodsReducer(moods:Mood[],action: MoodAction){
	switch(action.type){
		case "add":{
			console.log("add");
			return [...moods, action.mood];
		}
		case "delete":{
			console.log("delete");
			return moods.filter((value, idx) => action.moodIndex !== idx);
		}
		case "replace":{
			console.log("replace");
			return action.newList;
		}
		default:{
			console.log("Unknown action type");
			return moods;
		}
	}

}