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
  const minutes = parseInt(time % 60);
  return `${hours > 0 ? `${hours} hr${hours > 1 ? "s" : ""} ` : " "}${
    minutes >= 0 ? `${minutes} min${minutes > 1 ? "s" : ""}` : ""
  }`;
}

export function formatDistance(distance) {
  if (distance < 1) {
    return `${(distance * 1000).toFixed(0)}m`;
  } else {
    return `${distance.toFixed(2)}km`;
  }
}
