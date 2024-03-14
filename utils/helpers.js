export function dateFormater(date){
    const newDate = new Date(date)
    const options = {
        year:'numeric',
        month:'long',
        dat:'2-digit'
    }
    return newDate.toLocaleDateString('es-ES', options)
}