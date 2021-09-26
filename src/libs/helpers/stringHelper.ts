export const capitalize = ([first, ...rest]: string) => first.toUpperCase() + rest.join('');

export const copyToClipboard = (text: string) => {
    const element = document.createElement('textarea');

    element.value = text;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);

    element.select();
    document.execCommand('copy');

    document.body.removeChild(element);
};

export const htmlToText = (html: string) => {
    const tempElement = document.createElement('textarea');
    
    tempElement.innerHTML = html;

    return tempElement.childNodes.length === 0 ? '' : tempElement.childNodes[0].nodeValue;
};

export default {
    capitalize,
    copyToClipboard,
    htmlToText,
};