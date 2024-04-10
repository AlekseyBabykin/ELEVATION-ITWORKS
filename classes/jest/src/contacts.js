import contacts from './data/contacts.json' assert { type: 'json' };

console.log(contacts.results[0]);

export function getName() {
  return contacts.results[0].name.first;
}
