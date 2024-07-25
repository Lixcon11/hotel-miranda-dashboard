const delay = (data: any) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(data);
        }, 500)
    })
}

export { delay }