import { AutoPlay1, AutoPlay2 } from './ClientsSlider'
import './style.scss'
const Clients = () => {
    return (
        <div className='clients'>
            <h1 className='clients__title'>Our Partners and Clients</h1>
            <div className='clients__slider'>
                <AutoPlay1 />
                <AutoPlay2 />
            </div>
        </div>
    )
}

export default Clients