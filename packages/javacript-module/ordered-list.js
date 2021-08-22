export function showList(list, nodeId) {
  const node = document.getElementById(nodeId);
  const ul = node.appendChild(document.createElement('ol'));
  for(const item of list) {
    const li = ul.appendChild(document.createElement('li'));
    li.innerHTML = item;
  }
}