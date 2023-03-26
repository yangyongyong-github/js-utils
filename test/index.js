const _ = require('../src')

console.log(
    // _.typeOf([]),
    // _.isSameArray([1, 2, 3, 'a'], ['a', 1, 2, 3])
    // _.dayDiff(1111111111, 22222222)

)

console.log(
    JSON.stringify(
        _.getDeepValue({
            name: 'Tesla',
            age: 100,
            children: [
                { name: 'jack', age: 10 }
            ]
        }, 'children')
    )
);