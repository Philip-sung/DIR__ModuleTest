const map = new Map<string, number>();
map.set("a", 1);
map.set("b", 3);
map.set("d", 5);
map.set("c", 7);

console.log("map : ");
console.log(map);
console.log("map_dir : ");
console.dir(map);
console.log(typeof map);
console.log(map.get("a"));

map.delete("b");

console.log(map);
console.log(map.get("b"));
