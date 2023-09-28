import { Mood } from "./classes/mood";
import { Tag } from "./classes/tag";
import {
  addMoodMock,
  deleteMoodMock,
  retrieveMoodMock,
  returnAvailableTagsMock,
  returnLatestMoodsMock,
  updateMoodMock,
} from "./apiImplementationMock.ts";

export async function retrieveMood(url: string, id: number) {
  await delay(100);
  return retrieveMoodMock(url, id);
}
export async function addMood(url: string, mood: Mood) {
  await delay(100);
  return addMoodMock(url, mood);
}
export async function updateMood(url: string, mood: Mood) {
  await delay(100);
  return updateMoodMock(url, mood);
}
export async function deleteMood(url: string, id: number) {
  await delay(100);
  return deleteMoodMock(url, id);
}

export async function returnLatestMoods() {
  //returns moods ordered by date-time
  console.log("returnLatestMoods");
  await delay(1500);
  console.log("returnLatestMoods after delay");
  return returnLatestMoodsMock();
}
export function returnAvailableTags(selectedTags: Tag[]) {
  return returnAvailableTagsMock(selectedTags);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
