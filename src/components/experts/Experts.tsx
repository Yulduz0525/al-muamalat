import CustomSlider from './ExpertsSlider'
import './styles.scss'
const Experts = () => {
  return (
    <div className='experts'>
      <div className='container'>
        <h1 className='experts__title'>Our Expert Team </h1>
        <div className='experts__text-wrapper'>
          <p className='experts__text'>Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
        </div>
        <div>
          <CustomSlider/>
        </div>
      </div>
    </div>
  )
}

export default Experts