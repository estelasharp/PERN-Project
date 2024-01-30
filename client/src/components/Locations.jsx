import { useFetchLocationsQuery } from "../api/powderplannerApi"
import Location from "./Location"

export default function Locations () {
    const { data = {}, isError, error, isLoading } = useFetchLocationsQuery()
        
        if (isLoading) {
            return <div>Loading...</div>
        }
        
        if (isError) {
            return <div>Error: {error.data.message}</div>
        }

        return (<div className="locations-container">
            {
                data.map((location) => (<div classname= "locations" key={location.id}>
                    <Location id= {location.id} />
                    <br />
                </div>))
            }
                
</div>)
}