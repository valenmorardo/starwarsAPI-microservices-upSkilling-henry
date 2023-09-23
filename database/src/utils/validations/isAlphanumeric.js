import validator from "validator";

const isAlphanumeric = (prop, options) => {
    
    return validator.isAlphanumeric(prop.toString(), undefined, options)
}

export default isAlphanumeric;