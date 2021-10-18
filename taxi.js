const taksistas = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a*5)
        }, 2000)
    })
}

