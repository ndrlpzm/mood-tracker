import { Mood } from "./classes/mood";
import {
  addMoodMock,
  deleteMoodMock,
  retrieveMoodMock,
  returnAvailableTagsMock,
  returnLatestMoodsMock,
  updateMoodMock,
} from "./apiImplementationMock.ts";
import { Tag } from "./classes/tag.ts";

export async function retrieveMood(url: string, id: number) {
  await delay(100);
  console.log(`retrieve mood ${id}`);
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
export async function deleteMood(url: string): Promise<void> {
  await delay(100);
  const id = parseInt(url.split("/").pop() ?? "");
  deleteMoodMock(url, id);
}

export async function returnLatestMoods() {
  //returns moods ordered by date-time
  console.log("returnLatestMoods");
  await delay(1500);
  return returnLatestMoodsMock();
}
export function returnAvailableTags(url: string): Promise<Tag[]> {
  return returnAvailableTagsMock(url);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
