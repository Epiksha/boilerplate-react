export default ([first, ...rest]: string): string => first.toUpperCase() + rest.join("");