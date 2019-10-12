const getItems = (acc, obj, items, id) => {
  if (obj.manager === id) {
    obj.children = getTree(items, obj.id);
    acc.push(obj);
  }
  return acc;
};

const getTree = (items, manager) => {
  const mapper = [];
  for (let i = 0, t = items.length; i < t; i++) {
    const item = items[i];
    if (item.manager === manager) {
      item.children = items.reduce(
        (acc, obj) => getItems(acc, obj, items, item.id),
        []
      );
      mapper.push(item);
    }
  }
  return mapper;
};

export { getItems, getTree };
