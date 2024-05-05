import React from 'react';
import './index.css';

const Index = () => {
    return(
        <div className='index'>
           
            {/* hero */}
            <div className="Hero" id='hero'>
                
                <img src="/hero.jpg" alt="" />
                {/* <div className="d-flex flex-row justify-content-center ">
                    <div className="card m-0 border-0">
                        <img src="hero1.png" alt="1" />
                    </div>
                    <div className="card m-0 border-0">
                        <img src="hero2.png" alt="1" />
                    </div>
                    <div className="card m-0 border-0">
                        <img src="hero3.png" alt="1" />
                    </div>
                    <div className="card m-0 border-0">
                        <img src="hero4.png" alt="1" />
                    </div>
                </div> */}
            </div>

            {/* steps */}
            <div className="Steps">
                <h2 className="text-center"><span className="border-bottom border-primary border-3">How GlamRental Works?</span></h2>
                <div className="d-flex flex-row justify-content-evenly ">
                    <div className="card border-0 m-4">
                        <img src="dress.jpg" alt="1" />
                        <h4 className="mb-0" style={{ color: 'black' }}>Browse Outfits</h4>
                        <p>Browse outfits to pick your perfect style</p>
                    </div>
                    <div className="card border-0 m-4">
                        <img src="select.jpg" alt="2" />
                        <h4 className="mb-0" style={{ color: 'black' }}>Choose your Fit</h4>
                        <p>Book your fit for 5-7 days. The outfit will be altered to your size</p>
                    </div>
                    <div className="card border-0 m-4">
                        <img src="flaunt.jpg" alt="3" />
                        <h4 className="mb-0" style={{ color: 'black' }}>Flaunt It!</h4>
                        <p>Flaunt your look with your chosen outfit and enjoy compliments.</p>
                    </div>
                    <div className="card border-0 m-4">
                        <img src="return.jpg" alt="4" />
                        <h4 className="mb-0" style={{ color: 'black' }}>Return It</h4>
                        <p>Pack the outfit and we will pick it up from you on your chosen date.</p>
                    </div>
                </div>
            </div>

            {/* categories */}
            <div className="Categories">
                <div className="container">
                    <h2 className="text-center"><span className="text-white" style={{ letterSpacing: '8px'}}>Categories</span></h2>
                    <p className="text-center text-white">"Discover Your Signature Style!"</p>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6">
                            <div className="text-center mb-4">
                                <img src="him.jpg" alt="him" className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary">Him</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center mb-4">
                                <img src="her.jpg" alt="her" className="img-fluid" />
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-secondary">Her</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className="AboutUs" id='#About'>
            <div className="container">
                <h2 className="text-center"><span className="text-black" style={{ letterSpacing: '8px',fontWeight: 'bold'}}>About Us</span></h2>
                    <p>Step into the spotlight with Glam Rental, your ultimate destination for stunning attire without the commitment. At Glam Rental, we believe that every event deserves a touch of glamour, whether it's a high-profile gala or a chic cocktail party. Say goodbye to outfit dilemmas and hello to effortless style with our curated collection of designer dresses, suits, and accessories.

                    Glam Rental is your passport to the world of fashion, offering a diverse range of attire for every occasion. From elegant gowns that command attention to sleek suits that exude sophistication, our selection is meticulously curated to ensure you find the perfect look for any event.

                    But Glam Rental is more than just a fashion platform – it's a movement towards sustainable style. By choosing to rent instead of buy, you're not only saving money but also reducing your environmental footprint. Join us in our mission to redefine fashion consumption and embrace a more conscious approach to dressing.

                    Whether you're a fashion aficionado or simply seeking to elevate your wardrobe for a special occasion, Glam Rental has you covered. Browse our collection, rent your dream attire, and step out with confidence, knowing that you're making a stylish statement – one rental at a time.

                    Welcome to Glam Rental – where the spotlight is yours to command, and style is always within reach.

                    <br />
                    Contact Us: 
                    <br />
                    Email: glamrental@example.com
                    <br />
                    Mobile: +91 9876543210
                    <br />
                    Address: Silicon University, Near Dlf Cybercity, Bhubaneswar
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <h1>Follow Us On:</h1>
              <div className="icons">
              <i class="fa-brands fa-square-facebook fa-3x"></i>
              <i class="fa-brands fa-square-instagram fa-3x"></i>
              <i class="fa-brands fa-square-x-twitter fa-3x"></i>
              <i class="fa-brands fa-linkedin fa-3x"></i>
              <br />
              <p>© GlamRental 2024</p>
              </div>
            </div>
        </div>
    )
}
export default Index