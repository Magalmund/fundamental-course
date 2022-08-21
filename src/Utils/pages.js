export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalpages) => {
    let result = []
    for (let i = 0; i < totalpages; i++) {
        result.push(i + 1)
    }
    return result
}