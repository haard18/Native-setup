import { useEffect, useState } from "react"

const useAppWrite = (fn: any) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fn();

            setData(response)
        } catch (error) {
            // @ts-expect-error: Argument of type 'string' is not assignable to parameter of type 'AlertButton[]'.
            Alert.alert('Error', error.message)

        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    const refetch = () => fetchData()
    return { data, isLoading, refetch }
}
export default useAppWrite