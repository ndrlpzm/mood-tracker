import { Mood } from "./classes/mood";
import { Tag } from "./classes/tag";
import {addMoodMock, deleteMoodMock, retrieveMoodMock, returnAvailableTagsMock, returnLatestMoodsMock, updateMoodMock} from "./apiImplementationMock.ts";

export async function retrieveMood(url: string, id: number) {
  console.log("retrieveMood mock");
  await delay(100);
  return retrieveMoodMock(url,id);
}
export async function addMood(url: string, mood: Mood) {
  console.log("addMood mock");
  await delay(500);
  return addMoodMock(url,mood);
}
export async function updateMood(url: string, mood: Mood) {
  console.log("updateMood mock");
  await delay(100);
  return updateMoodMock(url,mood);
}
export function deleteMood(url: string, mood: Mood) {
  console.log("deleteMood mock");
  return deleteMoodMock(url,mood);
}
export async function returnLatestMoods() {
  console.log("returnLatestMoods mock");
  //returns moods ordered by date-time
  await delay(1500);
  return returnLatestMoodsMock();
}
export function returnAvailableTags(selectedTags: Tag[]) {
  console.log("returnAvailableTags mock");
  return returnAvailableTagsMock(selectedTags);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}