import React, { Dispatch, ReactNode, useReducer } from "react";
import { Mood } from "./classes/mood";import { createContext } from 'react';
export type MoodActionType="add" | "update" | "delete" | "replace";
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
		case "update":{
			console.log("delete");
			return moods.map((x) => {
				if (x.id === action.mood.id) return action.mood;
				else return x;
			  });
		}
		case "delete":{
			console.log("delete");
			return moods.filter((value) => action.mood.id !== value.id);
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

export const MoodsContext = createContext(new Array<Mood>());
export const MoodsDispatchContext = createContext<Dispatch<MoodAction>>(null!);

interface MoodsProviderInput {
	children: ReactNode
}
export function MoodsProvider({children}:MoodsProviderInput){
	const [moodList, dispatch] = useReducer(moodsReducer, new Array<Mood>());
	return(
		<MoodsContext.Provider value={moodList}>
			<MoodsDispatchContext.Provider value={dispatch}>
				{children}
			</MoodsDispatchContext.Provider>
		</MoodsContext.Provider>
	);
}