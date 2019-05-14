if (window.location !== window.parent.location) {
  // window.top.location.href = 'https://Redfluffydragon.github.io/bahftawreos/';
  //get around too many redirects somehow
  /* let redirect = document.createElement('a');
  redirect.href = 'https://Redfluffydragon.github.io/bahftawreos/';
  redirect.textContent = 'Redirect';
  document.body.appendChild(redirect);
  redirect.click(); */
}

const elements = {
  'Ba': {name: 'Barium', symbol: 'Ba', number: 56, group: 'Alkaline Earth Metal'},
  'Hf': {name: 'Hafnium', symbol: 'Hf', number: 72, group: 'Transition Metal'},
  'Ta': {name: 'Tantalum', symbol: 'Ta', number: 73, group: 'Transition Metal'},
  'W': {name: 'Tungsten', symbol: 'W', number: 74, group: 'Transition Metal'},
  'Re': {name: 'Rhenium', symbol: 'Re', number: 75, group: 'Transition Metal'},
  'Os': {name: 'Osmium', symbol: 'Os', number: 76, group: 'Transition Metal'}
}

let nameTable = document.getElementById('nameTable');

nameTable.addEventListener('click', e => {
  if (e.target.cellIndex !== undefined) {
    let element = elements[e.target.textContent];
    console.log(element);
    document.getElementById('name').textContent = element.name;
    document.getElementById('info').textContent = element.group;
    document.getElementById('number').textContent = element.number;
    document.getElementById('symbol').textContent = element.symbol;
  }
}, false);