const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = src;
        document.body.appendChild(script)
        script.onload = () => {
            resolve(1)
        }
        script.onerror = () => {
            reject(0)
        }
    })
}

let promise1 = loadScript('http://localhost:5500/index.js')
promise1.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log('we are sorry butwe are having problems with the loading of the script')
})