import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-inner'>
                <div className='footer-left'>
                    <div className='footer-col'>
                        <h4>About</h4>
                        <a>Contact us</a>
                        <a>About us</a>
                        <a>Careers</a>
                        <a>Flipkart Stories</a>
                        <a>Press</a>
                        <a>Corporate Information</a>
                    </div>

                    <div className='footer-col'>
                        <h4>GROUP COMPANIES</h4>
                        <a>Myntra</a>
                        <a>Cleartrip</a>
                        <a>Shopsy</a>
                    </div>

                    <div className='footer-col'>
                        <h4>HELP</h4>
                        <a>Payments</a>
                        <a>Shipping</a>
                        <a>Cancellation &amp; Returns</a>
                        <a>FAQ</a>
                    </div>

                    <div className='footer-col'>
                        <h4>CONSUMER POLICY</h4>
                        <a>Cancellation &amp; Returns</a>
                        <a>Terms Of Use</a>
                        <a>Security</a>
                        <a>Privacy</a>
                        <a>Sitemap</a>
                        <a>Grievance Redressal</a>
                        <a>EPR Compliance</a>
                        <a>FSSAI Food Safety Connect</a>
                        <a>App</a>
                    </div>
                </div>


                <div className="footer-right">
                    <div className='footer-col'>
                        <h4>Mail Us:</h4>
                        <p>
                            Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia &amp;<br />
                            Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,<br />
                            Bengaluru, 560103,<br />
                            Karnataka, India
                        </p>

                        <p className="footer-social-title">Social:</p>
                        <div className="footer-social">
                            <span>📘</span>
                            <span>𝕏</span>
                            <span>▶️</span>
                            <span>📸</span>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Registered Office Address:</h4>
                        <p>
                            Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia &amp;<br />
                            Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,<br />
                            Bengaluru, 560103,<br />
                            Karnataka, India<br />
                            CIN : U51109KA2012PTC066107<br />
                            Telephone: 044-45614700 / 044-67415800
                        </p>


                    </div>
                </div>






            </div>
        </footer>
    )
}

export default Footer
