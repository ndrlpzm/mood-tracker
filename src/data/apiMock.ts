import { Mood } from "../detail/mood";

export async function addMood(url: string, mood: Mood) {
  await delay(1000);
  console.log(mood);
}
export function deleteMood() {
  setTimeout(() => {}, 2000);
}
export async function returnLatestMoods() {
  //returns moods ordered by date-time
  await delay(1500);
  return storedMoodList;
}
export function returnMoodsByDate(startingDate: Date, endDate: Date) {
  //returns moods within a date range
  setTimeout(() => {}, 2000);
}

const now = new Date();
function delay(ms: number) {
  new Promise((resolve) => setTimeout(resolve, ms));
}
function getDate(addedDays: number) {
  const today = new Date();
  today.setDate(now.getDate() + addedDays);
  return today;
}

const storedMoodList: Mood[] = [
  { value: 4, date: now, comment: "Great weather" },
  { value: 2, date: getDate(1), comment: "Received bad news" },
  { value: 3, date: getDate(2), comment: "Self care day" },
  { value: 5, date: getDate(4), comment: "Went on a trip" },
  { value: 1, date: getDate(5), comment: "Got hurt" },
];
