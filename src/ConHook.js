import { useEffect } from "react"

const ConHook = ({numero, pepito}) => {
    console.log(pepito)
    useEffect(() => {
        console.log("Yo me voy a ejecutar cuando el componente se monta (como todos) y cuando cambie el valor de cualquier variable porque no tengo segundo parámetro.")
        return () => {
            console.log("Yo soy la función de cleanup")
        }
    })

    useEffect(() => {
        console.log("Yo me voy a ejecutar cuando el componente se monta (como todos) y cuando cambie el valor de la/s variable/s que tengo en mis dependencias = ninguna = nunca más")
    }, [])

    useEffect(() => {
        console.log("Yo me voy a ejecutar cuando el componente se monta (como todos) y cuando cambie el valor de la/s variable/s que tengo en mis dependencias = numero")
    }, [pepito])

    return (
        <h1>Yo soy conHook {numero}</h1>
    )
}

export default ConHook