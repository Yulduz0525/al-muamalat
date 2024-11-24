import CommentSlider from "./CommentSlider"
import './style.scss'
const Comments = () => {
  return (
    <div className="comments">
      <div className="container">
        <h1 className="comments_title">What students say</h1>
        <div className="comments_dsc_wrapper">
        <p className="comments_dsc">Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>
        </div>
        <div className="commentsSlider">
        <CommentSlider/>
        </div>
      </div>
    </div>
  )
}

export default Comments