if (!parent.document.location) {
  // window.location.href = 'https://Redfluffydragon.github.io/bahftawreos/';
  let redirect = document.createElement('a');
  redirect.href = 'https://Redfluffydragon.github.io/bahftawreos/';
  document.body.appendChild(redirect);
  redirect.click();
  console.log('not canon');
}