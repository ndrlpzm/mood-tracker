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
  //console.log(`retrieve mood ${id}`);
  return retrieveMoodMock(url, id);
}
export async function addMood(
  url: string,
  mood: Mood | undefined
): Promise<Mood> {
  //console.log("add");
  if (!mood) throw new Error("Undefined data");
  return addMoodMock(url, mood);
}
export async function updateMood(
  url: string,
  mood: Mood | undefined
): Promise<Mood> {
  //console.log("update");
  if (!mood) throw new Error("Undefined data");
  return updateMoodMock(url, mood);
}
export async function deleteMood(url: string): Promise<void> {
  const id = parseInt(url.split("/").pop() ?? "");
  console.log(id);
  deleteMoodMock(url, id);
}

export async function returnLatestMoods() {
  //returns moods ordered by date-time
  await delay(1500);
  return returnLatestMoodsMock();
}
export function returnAvailableTags(url: string): Promise<Tag[]> {
  //console.log("api call");
  return returnAvailableTagsMock(url);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
