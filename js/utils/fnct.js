export const percentageAnimation = (currentX, start, end) => {
     return ((currentX - start) / (end - start)) * 100
}

export const percentageInfo = (currentX, startInfo, endInfo) => {
    return  Math.min((((currentX - startInfo) / (endInfo - startInfo)) * 100), 100)
}