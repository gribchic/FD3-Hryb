export const Required = value => {
    return value
        ? value.trim().length > 0
        : false;
};

export const isUrl = value => {
    const regexpression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    
    return regexpression.test(value);
};

export const isPositiveInteger = value => {
    const regexpression = /^[1-9]\d*$/;

    return regexpression.test(value);
};

export const isPrice = value => {
    const regexpression = /^\d+(\.\d{1,2})?$/;

    return regexpression.test(value);
}