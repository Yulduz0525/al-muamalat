import { Clients, Experts, Header, OurServices } from '../../components'
import './styles.scss'
const Home = () => {
  return (
    <div>
      <Header/>
      <OurServices/>
      <Experts/>
      <Clients/>
    </div>
  )
}

export default Home