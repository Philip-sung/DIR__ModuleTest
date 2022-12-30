function testPromise(sec) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(new Date().toISOString())
        }, sec * 1000)
    )
}

testPromise(1).then((result) => {
    console.log('First : ', result)
    return testPromise(1)
}).then((result) => {
    console.log('Second : ', result)
})