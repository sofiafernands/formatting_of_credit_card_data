export const formatDateShort = (value) => {
    return new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'numeric',
    }).format(new Date(value))
    }
    export const accountFormat = (value) => {
        return value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
    }

console.log(formatDateShort('2020-12-25T12:00:00.00Z'));
console.log(accountFormat('161234567890123456'));