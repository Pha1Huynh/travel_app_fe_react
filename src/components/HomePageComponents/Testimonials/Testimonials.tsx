import TestimonialItem from '../TestimonialItem/TestimonialItem';
import tripImg from '../../../images/icons/trip.webp'
import customerImg from '../../../images/testimonials/testimonial1.webp'
import './Testimonials.scss'
function Testimonials() {
  return (
    <>
      <div className="testimonials-container">
        <div className="max-wide-1200">
          <p className="title">WHAT OUR CLIENTS SAY ABOUT US</p>
          <div className="testimonials-list">
            <TestimonialItem image={customerImg} icon={tripImg} dateTime='May 24, 2020' customerName='CARLA SMITH' title='Best holliday ever' description='Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.' />
            <TestimonialItem image={customerImg} icon={tripImg} dateTime='May 24, 2020' customerName='CARLA SMITH' title='Best holliday ever' description='Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.' />
            <TestimonialItem image={customerImg} icon={tripImg} dateTime='May 24, 2020' customerName='CARLA SMITH' title='Best holliday ever' description='Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.' />

          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
