import { Clients, Experts, Header, OurMedia, OurServices } from '../../components'
import './styles.scss'
const Home = () => {
  return (
    <div>
      <Header/>
      <OurServices/>
      <Experts/>
      <Clients/>
      <OurMedia/>
    </div>
  )
}

export default Home