import { faBehance, faDribbble, faFacebook, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blog_img1 from '../../images/footer/blog_img1.webp';
import blog_img2 from '../../images/footer/blog_img2.webp';
import blog_img3 from '../../images/footer/blog_img3.webp';
import logo from '../../images/logo.webp';
import phone_img from '../../images/footer/phone.svg';
import email_img from '../../images/footer/email.svg';
import earth_img from '../../images/footer/earth.svg';
import address_img from '../../images/footer/address.svg';
import './Footer.scss';
function Footer() {
    return (
        <div id="footer">
            <div className="footer-container">
                <div className="max-wide-1200">
                    <div className="footer-container-wapper">
                        <div className="footer-container-group">
                            <div className="footer-container-about">
                                <a href="" className="footer-title-logo">
                                    <img className="footer-title-img" src={logo} alt="" /> Travelix
                                </a>
                            </div>
                            <div className="footer-container-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>
                            </div>
                            <div className="footer-container-logo">
                                <ul>
                                    <li><a href=""><FontAwesomeIcon icon={faPinterest} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faDribbble} /></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faBehance} /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-container-group">
                            <div className="footer-container-blog">
                                <h2 className="footer-title-heading">BLOG POSTS</h2>
                                <div className="footer-container-blog-content">
                                    <div className="footer-container-blog-content--item">
                                        <div className="footer-container-blog-img">
                                            <img src={blog_img1} alt="" />
                                        </div>
                                        <div className="footer-container-blog-text">
                                            <a href="">Travel with us this year</a>
                                            <span>July 20, 2021</span>
                                        </div>
                                    </div>
                                    <div className="footer-container-blog-content--item">
                                        <div className="footer-container-blog-img">
                                            <img src={blog_img2} alt="" />
                                        </div>
                                        <div className="footer-container-blog-text">
                                            <a href="">Travel with us this year</a>
                                            <span>July 20, 2021</span>
                                        </div>
                                    </div>
                                    <div className="footer-container-blog-content--item">
                                        <div className="footer-container-blog-img">
                                            <img src={blog_img3} alt="" />
                                        </div>
                                        <div className="footer-container-blog-text">
                                            <a href="">Travel with us this year</a>
                                            <span>July 20, 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-container-group">
                            <div className="footer-container-tags">
                                <h2 className="footer-title-heading">TAGS</h2>
                                <div className="footer-container-tags-content">
                                    <ul>
                                        <li>
                                            <a href="">design</a>
                                        </li>
                                        <li>
                                            <a href="">fashion</a>
                                        </li>
                                        <li>
                                            <a href="">music</a>
                                        </li>
                                        <li>
                                            <a href="">video</a>
                                        </li>
                                        <li>
                                            <a href="">party</a>
                                        </li>
                                        <li>
                                            <a href="">photography</a>
                                        </li>
                                        <li>
                                            <a href="">adventure</a>
                                        </li>
                                        <li>
                                            <a href="">travel</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="footer-container-group">
                            <div className="footer-container-contact">
                                <h2 className="footer-title-heading">CONTACT</h2>
                                <div className="footer-container-contact-content">
                                    <div className="footer-contact-info">
                                        <img src={address_img} alt="" />
                                        <span>316/1A Huynh Tan Phat, Quan 7</span>
                                    </div>
                                    <div className="footer-contact-info">
                                        <img src={email_img} alt="" />
                                        <span>suport@gmail.com</span>
                                    </div>
                                    <div className="footer-contact-info">
                                        <img src={phone_img} alt="" />
                                        <span>19001505</span>
                                    </div>
                                    <div className="footer-contact-info">
                                        <img src={earth_img} alt="" />
                                        <span>www.newbiedev.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-by-craete">Copyright © 2021 By <a href=""> KGU Suport Travel</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;