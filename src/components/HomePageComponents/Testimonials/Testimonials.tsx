import TestimonialItem from '../../TestimonialItem/TestimonialItem';
function Testimonials() {
  return (
    <>
      <div className="testimonials-container">
        <div className="max-wide-1200">
          <p className="title">WHAT OUR CLIENTS SAY ABOUT US</p>
          <div className="testimonials-list">
            <TestimonialItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
