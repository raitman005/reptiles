// All photographs are hotlinked from Wikimedia Commons via Special:FilePath.
// Swap any URL for a local file in /public/images for full control and offline use.
// Every consumer falls back to a forest gradient if an image fails to load.

const commons = (file: string, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`

export const images = {
  hero: commons('Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg', 2000),
  chameleon: commons('Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg', 1200),
  gecko: commons('Tokay_gecko_(Gekko_gecko).jpg', 1200),
  turtle: commons('Green_Sea_Turtle_grazing_seagrass.jpg', 1200),
  stats: commons('Chelonia_mydas_is_going_for_the_air_edit.jpg', 2000),
}
