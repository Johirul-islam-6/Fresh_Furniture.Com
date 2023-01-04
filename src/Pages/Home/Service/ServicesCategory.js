import React from 'react';
import './CervicesCategory.css'
import Bad from '../../../Assent/Background Image/Bad.jpg'
import Sofa from '../../../Assent/Background Image/Shofa.jpg'
import image3 from '../../../Assent/img/asset 6.jpeg'
import Gamming from '../../../Assent/Background Image/Gamming room.jpg'
import Dyning from '../../../Assent/Background Image/Dynign Table.jpg'
import Almary from '../../../Assent/Background Image/almary.jpg'
import Dolpon from '../../../Assent/Background Image/Dolpon.jpg'
import Home1 from '../../../Assent/Background Image/Home1.gif'
import Home2 from '../../../Assent/Background Image/Home2.gif'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import About from '../About/About';

const ServicesCategory = () => {
    return (
        <>
            {/* ========================Cetagory base Furniture ==================== */}
            <div className="scetion py-4">
                <h1 className="text-center Larg_Text py-2">Cetagorys products</h1>
                <h6 className="text-center Small_Text px-5 pb-4">Classic furniture, lighting and decoration collections. <br />
                    Proudly designed for everyday living.</h6>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner  ml-5">
                        <div className="carousel-item active ">
                            <div className="row container-fluid d-flex justify-content-center pl-5">
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Bad} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 className='product_name'>Bed Collections</h5>
                                            <Link to={'/cetagory-data/bed'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Sofa} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 className='product_name'>Sofa Collections</h5>
                                            <Link to={'/cetagory-data/sofa'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Gamming} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 className='product_name'>Gamming Collections</h5>
                                            <Link to={'/cetagory-data/gaming'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  ">
                            <div className="row container-fluid d-flex justify-content-center pl-5">
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Dyning} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 className='product_name'>Dining Collections</h5>
                                            <Link to={'/cetagory-data/dining'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Almary} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 className='product_name'>Almary Collections</h5>
                                            <Link to={'/cetagory-data/almary'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Dolpon} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 className='product_name'>Mirror Collections</h5>
                                            <Link to={'/cetagory-data/mirror'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex smalldiv">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"><FaAngleLeft className='priveSlider'></FaAngleLeft></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"><FaAngleRight className='priveSlider'></FaAngleRight></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ========================= Future Furniture collection====================== */}
            <section className="description ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="blank"></div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex ">
                            <div className="d-content py-sm-5">
                                <h1>New furniture
                                    collection</h1>
                                <p className='py-3 px-1'>Typically, furniture from the modernist tradition is constructed from natural materials such as wood, leather, and linen. Many pieces also incorporate metal into their designs, helping modern furniture present a visually “lighter” and less cluttered appearance when compared to more traditional styles.</p>
                                <button className="btn btn-primary py-3 fw-semibold ">SHOW FURNITURE</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* ==============================Full Home Decoretion ========================== */}
            <section className="FullHome_Decoretion">
                <div className="container">
                    <h1 className="text-center Larg_Text py-2">Full Home Decoration Services</h1>
                    <h6 className="text-center Small_Text px-5 pb-4">Use the following content marketing tips to strengthen <br></br>your online presence as a home décor brand.</h6>

                    <div className="row container-fluid d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="products-boxs">
                                <PhotoProvider>
                                    <PhotoView src={Home1}>
                                        <img className='w-100' src={Home1} alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className="products-details">
                                    <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                                        <h4 className='texts'>Home Service 7</h4>
                                        <button className='service_7'> Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="products-boxs">
                                <PhotoProvider>
                                    <PhotoView src='https://mydecorative.com/wp-content/uploads/2019/04/living-room-furniture.gif'>
                                        <img className='w-100' src='https://mydecorative.com/wp-content/uploads/2019/04/living-room-furniture.gif' alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className="products-details">
                                    <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                                        <h4 className='texts'>Home Service 7</h4>
                                        <button className='service_7'> Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="products-boxs my-sm-3 my-md-0">
                                <PhotoProvider>
                                    <PhotoView src={Home2} >
                                        <img className='w-100' src={Home2} alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className="products-details">
                                    <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                                        <h4 className='texts'>Home Service 10</h4>
                                        <button className='service_7'>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* ==========About section========== */}


            <section className="Our_client pb-2 pt-5">
                <h1 className="text-center Larg_Text py-0">Our Best Clients</h1>
                <h6 className="text-center Small_Text px-5 pb-4">In customer service, context is about capturing the idea, value,<br></br> and meaning of the customer's experience</h6>
                <div className="container pb-5">
                    <div className="row md-px-5 flex justify-content-center">
                        <div className="col-lg-2 col-md-2 col-sm-4 col-4"><img className='client_img' src="https://i0.wp.com/andrewmortonfurniture.co.uk/wp-content/uploads/2022/08/logo-png.png?fit=256%2C256&ssl=1" alt="" /></div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-4"><img className='client_img' src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/aa3cc073a17dc88cc7a1b0d037e0541e" alt="" /></div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-4"><img className='client_img' src="https://assets.website-files.com/6193af0ab299822fd9049e56/62826d3780fd1ce1f6cc6632_lav-logo.png" alt="" /></div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-4"><img className='client_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GfXZyhnwhzohp4dKVlQ30L8SEYOF4PGJpA&usqp=CAU" alt="" /></div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-4"><img className='client_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObXMBx6HfDXZ8G3Hk7fm2KGiS_mR4AWshog&usqp=CAU" alt="" /></div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-4"><img className='client_img' src="https://static.vecteezy.com/system/resources/thumbnails/007/796/631/small_2x/furniture-logo-furniture-logo-outline-free-vector.jpg" alt="" /></div>
                    </div>
                </div>

            </section>

            {/* <div className="all">
                <div className="col-lg-4 col-md-6 col-12">

                    <div className="products-box">
                        <img className='w-100' src={Sofa} alt="" />
                        <div className="products-details">
                            <div className="p-top d-flex justify-content-between pt-2 ">
                                <a className="d-block" href="#">Bolero Sofa</a>
                                <span className="d-block">Details</span>
                            </div>
                            <div className="p-bottom d-flex justify-content-between">
                                <div className="wrapper">
                                    <a className="cta bg-primary" href="#">
                                        <span className='text-white'>View Details</span>

                                    </a>
                                </div>
                                <div className="wrapper">
                                    <a className="cta" href="#">
                                        <span className='text-white'>Add to Card</span>

                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">

                    <div className="products-box">
                        <img className='w-100' src={image3} alt="" />
                        <div className="products-details">
                            <div className="p-top d-flex justify-content-between pt-2 ">
                                <a className="d-block" href="#">Bolero Sofa</a>
                                <span className="d-block">Details</span>
                            </div>
                            <div className="p-bottom d-flex justify-content-between">
                                <div className="wrapper">
                                    <a className="cta bg-primary" href="#">
                                        <span className='text-white'>View Details</span>

                                    </a>
                                </div>
                                <div className="wrapper">
                                    <a className="cta" href="#">
                                        <span className='text-white'>Add to Card</span>

                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
           </div> */}

        </>
    );
};

export default ServicesCategory;