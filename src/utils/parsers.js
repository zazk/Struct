const itemsPerPage = 10;
const urlBase = `https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api`;

const getRowsUrl = offset =>
  `${urlBase}?limit=${itemsPerPage}&offset=${offset}`;

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

const getPeople = (onComplete, offset = 0, items = []) => {
  fetch(getRowsUrl(offset))
    .then(response => response.json())
    .then(results => parseRows(results, items, offset, onComplete));
};

const parseRows = (results, items, offset, onComplete) => {
  const isSameAsPage = results.length === itemsPerPage;
  const isLastPage = results.length < itemsPerPage || results.length === 0;
  if (isSameAsPage) {
    offset += itemsPerPage;
    getPeople(onComplete, offset, items.concat(results));
  }
  if (isLastPage) {
    onComplete(items.concat(results));
  }
};

export { getItems, getTree, getPeople, getRowsUrl, parseRows };
