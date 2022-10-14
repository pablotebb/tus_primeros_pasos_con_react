import "./Testimonial.css";
import Photo1 from "../images/profile1.jpg";

function Testimonial({ img, name, stars, text }) {
  return (
    <div className="Testimonial__container">
      <div>
        <img className="Testimonial__photo" src={img} alt="photo profile"></img>
        <h2 className="Testimonial__name">{name}</h2>
      </div>

      <div className="Testimonial__content">
        <p className="Testimonial__starts">{stars}</p>
        <p className="Testimonial__text">{text}</p>
      </div>
    </div>
  );
}

export default Testimonial;
// 1:24:41
