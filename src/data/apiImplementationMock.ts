import { Mood } from "./classes/mood";
import { Tag } from "./classes/tag";

export async function retrieveMoodMock(url: string, id: number) {
  const results = storedMoodList.find((x) => {
    if (x.id === id) return x;
  });
  return results;
}
export async function addMoodMock(url: string, mood: Mood) {
  var maxIdElement = storedMoodList.reduce((prevMood, curMood) => {
    return (prevMood = prevMood.id > curMood.id ? prevMood : curMood);
  });
  const newMood = { ...mood, id: maxIdElement.id + 1 };
  storedMoodList.push(newMood);
  return newMood;
}
export async function updateMoodMock(url: string, mood: Mood) {
  storedMoodList = storedMoodList.map((x) => {
    if (x.id === mood.id) return mood;
    else return x;
  });
  return storedMoodList;
}
export async function deleteMoodMock(url: string, id: number): Promise<void> {
  // const index = storedMoodList.indexOf(mood);
  // return storedMoodList = storedMoodList.splice(index, 1);

  storedMoodList = storedMoodList.filter((value) => id !== value.id);
}
export async function returnLatestMoodsMock() {
  const orderDatesDesc = (prevMood: Mood, curMood: Mood) => {
    return prevMood.date.valueOf() - curMood.date.valueOf();
  };
  const orderedMoodList = storedMoodList.map((x) => x);
  orderedMoodList.sort(orderDatesDesc);
  if (1 === 1) {
    throw new Error("error");
  }
  return orderedMoodList;
}
export function returnAvailableTagsMock(selectedTagIds: number[]) {
  return storedTagList.filter((x) => !selectedTagIds.includes(x.id));
}
/*------------------------------------------------------------------- */
const now = new Date();
var storedMoodList: Mood[] = [
  {
    id: 1,
    value: 4,
    date: now,
    comment: "Great weather",
    tags: [{ id: 1, value: "Sad", color: "blue" }],
  },
  {
    id: 2,
    value: 2,
    date: getDate(1),
    comment: "Received bad news",
    tags: [{ id: 2, value: "Angry", color: "red" }],
  },
  { id: 3, value: 3, date: getDate(2), comment: "", tags: [] },
  { id: 4, value: 5, date: getDate(2), comment: "Went on a trip", tags: [] },
  {
    id: 5,
    value: 1,
    date: getDate(4),
    comment: "Got hurt",
    tags: [
      { id: 4, value: "Frustrated", color: "orange" },
      { id: 3, value: "Anxious", color: "green" },
    ],
  },
];
var storedTagList: Tag[] = [
  { id: 1, value: "Sad", color: "blue" },
  { id: 2, value: "Angry", color: "red" },
  { id: 3, value: "Anxious", color: "green" },
  { id: 4, value: "Frustrated", color: "orange" },
  { id: 5, value: "Tired", color: "gray" },
];

function getDate(addedDays: number) {
  const today = new Date();
  today.setDate(now.getDate() + addedDays);
  return today;
}
