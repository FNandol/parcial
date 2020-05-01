interface mes{
    nombre: String,
    semanas: semana[]
}

interface meses{
    mes:mes[]
}
interface semana{
    semana:number,
    dias: dia[]
}
interface dia{
    nombre:String,
    valor: number
}

