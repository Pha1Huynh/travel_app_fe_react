import { ITestimonialItem } from '../../interfaces/components/testimonials.interface';
import './TestimonialItem.scss';
function TestimonialItem(props: ITestimonialItem) {
  const { image, icon, customerName, dateTime, title, description } = props
  return <>
    <div className='testimonialsItem-container' style={{ backgroundImage: `url(${image})` }}>
      <div className='icon'><img src={icon} alt='' /></div>
      <div className='customer-info'>
        <p className='name'>{customerName}</p>
        <p className='dateTime'>{dateTime}</p>
      </div>
      <div className='customer-comment'>
        <p className='customer-comment-title'>" {title} "</p>
        <p className='customer-comment-description'>{description}</p>
      </div>
      <div className='bottom-background'></div>

    </div>
  </>;
}

export default TestimonialItem;
