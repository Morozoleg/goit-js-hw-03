const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addAndReplase(key, value) {
    this[key] = value;
  },
};

user.addAndReplase('mood', 'happy');
user.addAndReplase('hobby', 'skydiving');
user.addAndReplase('premium', false);

for (const key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}
