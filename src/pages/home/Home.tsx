import { Clients, Comments, Experts, Header, OurMedia, OurServices } from '../../components'
import './styles.scss'
const Home = () => {
  return (
    <div>
      <Header/>
      <OurServices/>
      <Experts/>
      <Clients/>
      <OurMedia/>
      <Comments/>
    </div>
  )
}

export default Home