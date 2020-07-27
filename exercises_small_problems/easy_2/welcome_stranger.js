// first version
function greeting(array, object) {
  let fullName = array.join(' ');
  let title = object.title;
  let occupation = object.occupation;
  return `Hello ${fullName}! Nice to have a ${
    title + ' ' + occupation
  } around.`;
}

console.log(
  greeting(['Jeff', 'Cragle'], { title: 'Master', occupation: 'Fisherman' })
);

console.log(
  greeting(['Jeff', 'J', 'Cragle'], { title: 'Senior', occupation: 'Engineer' })
);

// second version

function greeting2(name, status) {
  return `Hello, ${name.join(' ')}! Nice to have a ${status['title']} ${
    status['occupation']
  } around`;
}

console.log(
  greeting2(['jeff', 'J', 'cragle'], {
    title: 'Master',
    occupation: 'Software Developer',
  })
);
