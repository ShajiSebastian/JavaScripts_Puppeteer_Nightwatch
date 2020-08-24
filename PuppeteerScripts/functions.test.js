
// we can write the method in any other file. Then we just need to import it eg: const functions = require('./functions').
// We have to write module.exports = functions in the file where we have written method

// axios is required only for User fetched name should be Leanne Graham
const axios = require('axios');

const functions = {
  add: (num1 , num2) => num1 + num2,
  isNull: () => null,
  // add: function (num1 , num2) {
  //   return num1 + num2;
// }
  createUser: () => {
    const user =  {firstName: 'Shaji'}
    user['lastName'] = 'Sebastian' ;
    return user;
  },

  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
                        .then(res => res.data)
                        .catch(err => 'error')
  }


test('Adding two numbers', () => {
    expect(functions.add(2,3)).toBe(5);
  });

test('Should be Null value', () => {
  expect(functions.isNull()).toBeNull();
});

test('User object', () => {
  expect(functions.createUser()).toEqual({ 
    firstName: 'Shaji', 
    lastName: 'Sebastian'})
});

test('Regex- no I in the word', () => {
  expect('shaj sebastan').not.toMatch(/I/i);
});

test('Array list', () => {
  usernames = ['john','Shaji','Litto']
  expect(usernames).toContain('Shaji')
});

test('Array list', () => {
  usernames = ['john','Shaji','Litto']
  expect(usernames).toContain('Shaji')
});

//promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
});

// Async await
test('User fetched name should be Leanne Graham - Async call', async() => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham');
    })

   