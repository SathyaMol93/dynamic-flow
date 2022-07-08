export function itemUUID(list, newObject) {
  const updateChild = JSON.parse(JSON.stringify(newObject.added.element));
  const index = list.findIndex((child) => {
    return child.id === updateChild.id;
  });
  if (index !== -1) {
    let child = JSON.parse(JSON.stringify(list[index]));
    child.id = Math.floor(Math.random() * 1000000) + 1;
    list[index] = child;
  }
  return list;
}
