export function addMapOffset(map) {
  const { y } = map.getSize();
  const offsetY = y * 0.1;
  map.panBy([0, -offsetY], { animate: false });
}
