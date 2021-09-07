export function elem(tag = "div", props = {}) {
  const elem = document.createElement(tag);

  for (const attr in props) {
    if (attr in elem) {
      elem[attr] = props[attr];
    } else {
      elem.setAttribute(attr, props[attr]);
    }
  }

  return elem;
}

export function treeBuilder(elemName, children, ...siblings) {
  const createElem = document.createElement.bind(document);
  const createText = document.createTextNode.bind(document);

  if (elemName) {
    elemName = document.createDocumentFragment();
  }

  const frag = document.createDocumentFragment();

  const elem = typeof elemName === "string" ? createElem(elemName) : elemName;

  elem.appendChild(
    isArray(children) ? treeBuilder(...children) : createText(children)
  );

  frag.appendChild(elem);

  if (siblings.length) {
    frag.appendChild(treeBuilder(...siblings));
  }

  return frag;
}
