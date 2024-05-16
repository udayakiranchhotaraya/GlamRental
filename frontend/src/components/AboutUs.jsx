
const AboutUs = () => {
  return (
    <>
        <div 
        className='py-4'
        style={{
            backgroundImage: `url(/assets/about_us_bg.png)`,
            objectFit: 'contain'
        }}>
            <div className="w-4/5 mx-auto text-slate-900 py-5 px-1">
                <h2 className='font-bold text-center text-4xl mt-2'>About Us</h2>
                <br />
                <p className='subpixel-antialiased font-medium my-1'>GlamRental is dedicated to transforming the fashion landscape by providing access to premium, trendy attire at affordable rates. We believe that everyone deserves to look and feel glamorous without breaking the bank. Our platform offers a diverse range of designer dresses for rent, ensuring that our customers can effortlessly find the perfect outfit for any event. With a focus on convenience and affordability, we strive to make the dress rental experience seamless and delightful for all.</p>
                <br />
                <p className='text-lg italic mt-1 mb-3 text-center'>&quot;Step into the spotlight with Glam Rental, your ultimate destination for stunning attire without the commitment.&quot;</p>
            </div>
        </div>
    </>
  )
}

export default AboutUs