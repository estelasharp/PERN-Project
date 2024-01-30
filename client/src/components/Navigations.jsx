import { Link } from 'react-router-dom'

export default function Navigations () {

    return(
        <header >

        <nav>
        <div className='navigations'>
            <Link to={'/'}>Home</Link>
            <br />
            <Link to={'/locations'}>Locations</Link>
            <br />
            <Link to={'/resorts'}>Resorts</Link>
            <br />
            <Link to={'/maps'}>Maps</Link>            
            <br />
           
        </div>
        <h1>Powder Planner</h1>
    </nav>
    </header>
    )}
