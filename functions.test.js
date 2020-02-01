const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal  5', () => {
    expect(functions.add(2,2)).not.toBe(5)
})

// check for truthy and falsey values
// toBeNull matches only null
// toBeUndefined
// toBeDefined
// toBeTruthy

test('Should be Null', () => {
    expect(functions.isNull()).toBeNull()
})

test('User should be Brad Traversy', () => {
    expect(functions.createUser()).toEqual({
        firstname : 'Brad',
        lastname: 'Traversy'
    })
})

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect( load1 + load2 ).toBeLessThanOrEqual(1600)
})

test('Admin should be in array', () => {
    const usernames = ['admin', 'you']
    expect( usernames ).toContain('admin')
})

test('User fetched name should be Leanne Graham',  () => {
    expect.assertions(1);

    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
})

test('User fetched name should be Leanne Graham', async  () => {
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');

})
