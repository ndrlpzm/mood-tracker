import { Mood } from "./classes/mood";
import { Tag } from "./classes/tag";

export async function retrieveMood(url: string, id: number) {
  console.log("retrieveMood mock");
  await delay(100);
  const results= storedMoodList.find((x)=>{if(x.id===id) return x;});
  return results;
}
export async function addMood(url: string, mood: Mood) {
  console.log("addMood mock");
  await delay(500);
  var maxIdElement = storedMoodList.reduce((prevMood, curMood) => {
    return (prevMood = prevMood.id > curMood.id ? prevMood : curMood);
  });
  const newMood = { ...mood, id: maxIdElement.id + 1 };
  storedMoodList.push(newMood);
  return newMood;
}
export function deleteMood(url: string, mood: Mood) {
  console.log("deleteMood mock");
  const index = storedMoodList.indexOf(mood);
  storedMoodList = storedMoodList.splice(index, 1);
}
export async function returnLatestMoods() {
  console.log("returnLatestMoods mock");
  //returns moods ordered by date-time
  await delay(1500);
  const orderDatesDesc = (prevMood: Mood, curMood: Mood) => {
    return prevMood.date.valueOf() - curMood.date.valueOf();
  };
  const orderedMoodList = storedMoodList.map(x=>x);
  orderedMoodList.sort(orderDatesDesc);
  return orderedMoodList;
}
export function  returnAvailableTags(selectedTags:Tag[]){
  console.log("returnAvailableTags mock");
  return storedTagList.filter(x => !selectedTags.includes(x));
}
/*------------------------------------------------------------------- */
const now = new Date();
var storedMoodList: Mood[] = [
  { id: 1, value: 4, date: now, comment: "Great weather", tags:[{ id: 1, value: "Sad", color: "blue" }] },
  { id: 2, value: 2, date: getDate(1), comment: "Received bad news", tags:[{ id: 2, value: "Angry", color: "red"  }]  },
  { id: 3, value: 3, date: getDate(2), comment: "", tags:[]  },
  { id: 4, value: 5, date: getDate(2), comment: "Went on a trip", tags:[]  },
  { id: 5, value: 1, date: getDate(4), comment: "Got hurt", tags:[{ id: 4, value: "Frustrated", color: "orange"  },
  { id: 3, value: "Anxious", color: "green"  }]  },
];
var storedTagList: Tag[] = [
  { id: 1, value: "Sad", color: "blue" },
  { id: 2, value: "Angry", color: "red"  },
  { id: 3, value: "Anxious", color: "green"  },
  { id: 4, value: "Frustrated", color: "orange"  },
  { id: 5, value: "Tired", color: "gray"  },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getDate(addedDays: number) {
  const today = new Date();
  today.setDate(now.getDate() + addedDays);
  return today;
}

