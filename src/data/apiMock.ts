import { Mood } from "../detail/mood";

export async function addMood(url: string, mood: Mood) {
  await delay(500);
  var maxIdElement = storedMoodList.reduce((prevMood, curMood) => {
    return (prevMood = prevMood.id > curMood.id ? prevMood : curMood);
  });
  const newMood = { ...mood, id: maxIdElement.id + 1 };
  storedMoodList.push(newMood);
  return newMood;
}
export function deleteMood(url: string, mood: Mood) {
  const index = storedMoodList.indexOf(mood);
  storedMoodList = storedMoodList.splice(index, 1);
}
export async function returnLatestMoods() {
  //returns moods ordered by date-time
  await delay(1500);
  const orderDatesDesc = (prevMood: Mood, curMood: Mood) => {
    return prevMood.date.valueOf() - curMood.date.valueOf();
  };
  const orderedMoodList = storedMoodList.sort(orderDatesDesc);
  return orderedMoodList;
}
export function returnMoodsByDate(startingDate: Date, endDate: Date) {
  //returns moods within a date range
  setTimeout(() => {}, 2000);
}
/*------------------------------------------------------------------- */
const now = new Date();
var storedMoodList: Mood[] = [
  { id: 1, value: 4, date: now, comment: "Great weather" },
  { id: 2, value: 2, date: getDate(1), comment: "Received bad news" },
  { id: 3, value: 3, date: getDate(2), comment: "Self care day" },
  { id: 4, value: 5, date: getDate(4), comment: "Went on a trip" },
  { id: 5, value: 1, date: getDate(5), comment: "Got hurt" },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function getDate(addedDays: number) {
  const today = new Date();
  today.setDate(now.getDate() + addedDays);
  return today;
}

