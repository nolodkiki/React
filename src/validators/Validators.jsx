export const required = (value) => {
    if (!value) return 'The field is required'
    return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`
    return undefined
}