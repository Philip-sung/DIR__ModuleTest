function f2() {
    console.log('Start of f2')
    throw new error('Error of f2')
    console.log('End of f2')
}

function f1() {
    console.log('Start of f1')
    try{
        f2()
    } catch (e) {
        console.dir(e)
    }
    console.log('End of f1')
}

f1()
