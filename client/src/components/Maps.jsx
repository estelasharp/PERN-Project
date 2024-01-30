import { useFetchMapsQuery } from "../api/powderplannerApi"
import { useNavigate } from "react-router-dom"

export default function Maps () {
    const navigate = useNavigate()
    

    const { data = {}, error, isLoading } = useFetchMapsQuery()

    if (isLoading) {
        return <div>Loading...</div>

    } if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
        <h1 style={{fontSize: '75px'}}>Maps</h1>
            {data.map((maps) => {
                return (
                    <div className='maps-container' key={maps.id}>
                        <h2 style={{fontWeight: 'bold'}}>{maps.title}</h2>
                        <img src={maps.imgUrl} alt={maps.title}/>
                        <nav>
                            <Link style={{ fontWeight: 'bold', color: '#e8b38c', lineHeight : 5, padding: 50 }} to={maps.id}>Resort Map</Link>
                        </nav>
                    </div>
                )
                })
            }
        </>
    )
        
}
