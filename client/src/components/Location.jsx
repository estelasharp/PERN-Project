import { useFetchSingleLocationQuery } from "../api/powderplannerApi"
import { useNavigate } from 'react-router-dom'

export default function Location () {
    const navigate = useNavigate()
    const { data = {}, isError, error, isLoading } = useFetchSingleLocationQuery()
        
        if (isLoading) {
            return <div>Loading...</div>
        }
        
        if (isError) {
            return <div>Error: {error.data.message}</div>
        }

        return (
            <div className="single-location-container">
            {
                data.map((location) => (<Location id={location.id} size= 'small' />))
            }
                </div>)
   
}