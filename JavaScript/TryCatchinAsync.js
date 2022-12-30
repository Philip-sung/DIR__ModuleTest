//Exception handle for Promise(!Executed Simultaneously with below code!)
console.log('**EXCEPTION HANDLE FOR PROMISE')
function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(" : Error occured")
        }, sec * 1000)
    })
}

wait(3).catch(e => {
    console.log('1st catch alone', e)
})

wait(3).catch(e => {
    console.log('1st catch in chain', e)
}).catch(e => {
    console.log('2nd catch in chain for former catch', e)
})

wait(3).catch(e => {
    console.log('1st catch in chain-2', e)
    throw e
}).catch(e => {
    console.log('2nd catch in chain-2 for former e', e)
})


//exception handle for async(!Executed Simultaneously with upper code!)
console.log('**EXCEPTION HANDLE FOR ASYNC/AWAIT')
function myPromiseFunc() {
    return new Promise((resolve, reject) => {
        reject('myPromiseFunc Error')
    })
}

async function myAsyncFunc() {
    throw 'myAsyncFunc Error'
}

myPromiseFunc().catch((e) => {
    console.log(e)
})

myAsyncFunc().catch((e) => {
    console.log(e)
})

//exception handle for await(!Executed Simultaneously with upper code!)
function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error Occured')
        }, sec * 1000)
    })
}

async function myAsyncFunc() {
    console.log('await exception start : ', new Date())
    try {
        await wait(2)
    } catch (e) {
        console.error(e)
    }
    console.log('await exception end : ', new Date())
}

const result = myAsyncFunc()