export function toList(objects)
{
  if (!objects) return []
  return Object.values(objects)
}

export function nullToList(list)
{
  if (!list) return []
  return list
}