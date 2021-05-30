export const allPhotos = [
  process.env.PUBLIC_URL + "/images/photo1.jpg",
  process.env.PUBLIC_URL + "/images/photo2.jpg",
  process.env.PUBLIC_URL + "/images/photo3.jpg",
  process.env.PUBLIC_URL + "/images/photo4.jpg",
  process.env.PUBLIC_URL + "/images/photo5.jpg",
  process.env.PUBLIC_URL + "/images/photo6.jpg",
]

export const getRandomPhoto = (num) => {
  if (num < 1) return []
  if (num >= allPhotos.length) return allPhotos
  return getRandom(allPhotos, num)
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
