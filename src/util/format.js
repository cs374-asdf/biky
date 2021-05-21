export function toList(objects) {
  if (!objects) return [];
  return Object.values(objects);
}

export function nullToList(list) {
  if (!list) return [];
  return list;
}

export function formatTime(time) {
  const hours = parseInt(time / 60);
  const minutes = time % 60;
  return `${hours > 0 ? `${hours} hr${hours > 1 ? "s" : ""} ` : " "}${
    minutes >= 0 ? `${minutes} min${minutes > 1 ? "s" : ""}` : ""
  }`;
}

export function formatDistance(distance) {
  return `${distance} km`;
}
