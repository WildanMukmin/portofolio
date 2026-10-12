/**
 * The "W" monogram outline, y-up in a 120 x 80 box. One source for the nav
 * logo, the SVG poster, and the extruded 3D shape, so all three always match.
 *
 * Four strokes of equal horizontal width. The inner valleys sit where the
 * stroke edges intersect: (33.61, 23.23) and (86.39, 23.23); the notch under
 * the centre peak sits at (60, 40).
 */
export const MONOGRAM_WIDTH = 120;
export const MONOGRAM_HEIGHT = 80;

export const monogramPoints: ReadonlyArray<readonly [number, number]> = [
  [0, 80],
  [18, 80],
  [33.61, 23.23],
  [51, 58],
  [69, 58],
  [86.39, 23.23],
  [102, 80],
  [120, 80],
  [98, 0],
  [80, 0],
  [60, 40],
  [40, 0],
  [22, 0],
];

/** SVG path for the same outline (y flipped, since SVG's y axis points down). */
export const monogramPath =
  monogramPoints
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${MONOGRAM_HEIGHT - y}`)
    .join(" ") + " Z";
