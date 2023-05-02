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
import MessageForm from '../../../Components/MessageForm';

const ServicesCategory = () => {
    return (
        <>
            {/* ========================Cetagory base Furniture ==================== */}
            <div className="scetion py-4">
                <div data-aos="fade-right" data-aos-duration="2500">
                    <h1 className="text-center Larg_Text py-2">Cetagorys products</h1>
                    <h6 className="text-center Small_Text px-5 pb-5">Classic furniture, lighting and decoration collections. <br />
                        Proudly designed htmlFor everyday living.</h6>
                </div>


                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ml-5 " >
                        <div className="carousel-item active" data-bs-interval="2500">
                            <div className="row container-fluid d-flex justify-content-center pl-5 w-full mx-auto">
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Bad} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 id='responsiveText' className='product_name  '>Bed Collections</h5>
                                            <Link to={'/cetagory-data/bed'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Sofa} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 id='responsiveText' className='product_name '>Sofa Collections</h5>
                                            <Link to={'/cetagory-data/sofa'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Gamming} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 id='responsiveText' className='product_name '>Gamming Collections</h5>
                                            <Link to={'/cetagory-data/gaming'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <div className="row container-fluid d-flex justify-content-center pl-5">
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Dyning} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 id='responsiveText' className='product_name '>Dining Collections</h5>
                                            <Link to={'/cetagory-data/dining'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Almary} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 id='responsiveText' className='product_name '>Almary Collections</h5>
                                            <Link to={'/cetagory-data/almary'} className='product_details'>Details</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mb-4">
                                    <div className="d-block me-1">
                                        <img className='productImg' src={Dolpon} alt="" />
                                        <div className="d-flex justify-content-between mt-2 mx-1">
                                            <h5 id='responsiveText' className='product_name '>Mirror Collections</h5>
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
            <section className="description mt-5 px-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="blank"></div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex ">
                            <div data-aos="zoom-in" data-aos-duration="1500" className="d-content py-sm-5 w-full d-none d-md-block">
                                <h1>Upcoming furniture
                                    collection</h1>
                                <p className='py-3 px-1'>Typically, furniture from the modernist tradition is constructed from natural materials such as wood, leather, and linen. Many pieces also incorporate metal into their designs, helping modern furniture present a visually “lighter” and less cluttered appearance when compared to more traditional styles.</p>
                                <Link to={`upcoming`} className="btn btn-primary py-3 fw-semibold ">SHOW FURNITURE</Link>
                            </div>
                            <div className="d-content py-sm-5 w-full d-md-none">
                                <h1>Upcoming furniture
                                    collection</h1>
                                <p className='py-3 px-1'>Typically, furniture from the modernist tradition is constructed from natural materials such as wood, leather, and linen. Many pieces also incorporate metal into their designs, helping modern furniture present a visually “lighter” and less cluttered appearance when compared to more traditional styles.</p>
                                <Link to={`upcoming`} className="btn btn-primary py-3 fw-semibold ">SHOW FURNITURE</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* ==============================Full Home Decoretion ========================== */}
            <section className="FullHome_Decoretion">
                <div className="container">
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className="text-center Larg_Text py-2">Full Home Decoration Services</h1>
                        <h6 className="text-center Small_Text px-5 pb-4">Use the following content marketing tips to strengthen <br></br>your online presence as a home décor brand.</h6>

                    </div>

                    <div className="row container-fluid d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6 col-12">

                            <div data-aos="zoom-in-down" data-aos-duration="1500" className="products-boxs">
                                <PhotoProvider>
                                    <PhotoView src={Home1}>
                                        <img className='w-100' src={Home1} alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className="products-details">
                                    <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                                        <h4 className='texts'>Home Service 7</h4>
                                        <button className='service_7' data-bs-toggle="modal" data-bs-target="#staticBackdrop222"> Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">

                            <div data-aos="zoom-in" data-aos-duration="1500" className="products-boxs">
                                <PhotoProvider>
                                    <PhotoView src='https://mydecorative.com/wp-content/uploads/2019/04/living-room-furniture.gif'>
                                        <img className='w-100' src='https://mydecorative.com/wp-content/uploads/2019/04/living-room-furniture.gif' alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className="products-details">
                                    <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                                        <h4 className='texts'>Home Service 7</h4>
                                        <button className='service_7' data-bs-toggle="modal" data-bs-target="#staticBackdrop222"> Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">

                            <div data-aos="zoom-in-down" data-aos-duration="1500" className="products-boxs my-sm-3 my-md-0">
                                <PhotoProvider>
                                    <PhotoView src={Home2} >
                                        <img className='w-100' src={Home2} alt="" />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className="products-details">
                                    <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                                        <h4 className='texts'>Home Service 12</h4>
                                        <button className='service_7' data-bs-toggle="modal" data-bs-target="#staticBackdrop222"> Details</button>
                                    </div>
                                </div>
                            </div>
                            {/* ==modal== */}
                            <div class="modal fade" id="staticBackdrop222" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel"></h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h5>This Serves have already Booking.</h5>
                                            <p>Thank you sir.</p>
                                        </div>
                                        <div class="modal-footer">

                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/* ==========Messaging section========== */}
            <section className="my-4">
                <div data-aos="fade-up"
                    data-aos-duration="1500">
                    <h1 className="text-center Larg_Text pt-2">Any InForation Collection Our Furniture Zoon</h1>
                    <h6 className="text-center Small_Text px-5 pb-4">Please, Write This From in Message Field. <br></br> What's your Problem ?</h6>

                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <img className='d-none d-md-block p-5 massage_Image' src="https://images.getstark.co/marketing/highlights/homepage__community.webp" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <form data-aos="fade-zoon-in"
                            data-aos-duration="1500" className='' action="https://getFor.io/f/346003ba-86ef-4b17-9fc1-6ebd93a3af1a" method="POST">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 ">
                                    <div className="p-5 from_background ">
                                        <p className=" text-uppercase text-center text-white">Write Message Here</p>


                                        <div className="block mx-2">
                                            <input
                                                type="text" name="name"
                                                id='name'
                                                placeholder='Your full Name'
                                                className="For-group  rounded-3 ps-3  w-100 justify-center flex mx-auto input_border"
                                                data-temp-mail-org='0'
                                                required />

                                        </div>
                                        <div className="block my-3 mx-2">
                                            <input type="email" name="email" id='email' placeholder="Your Email" className="For-group input_border w-100 justify-center flex mx-auto For-group  rounded-3 ps-3 " data-temp-mail-org='0' required />
                                        </div>
                                        <div className="block mx-2">
                                            <input name='phone' id='phone' type="number" placeholder="Your Phone Number" className="For-group input_border For-group w-100 justify-center flex mx-auto For-group pb-2 rounded-3 ps-3 pt-2" data-temp-mail-org='0' required />
                                        </div>
                                        <div className="block mx-2">
                                            <textarea type="text" name="message" className="For-group textarea input_border textarea-info For-group pb-4 ps-3 pt-1  w-100 justify-center flex mx-auto mt-3" placeholder="Type Your Message"></textarea>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3 mx-2">
                                            <button type="submit" className='w-100 mx-auto py-3 btn btn-primary' >Submite</button>
                                        </div>




                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>

            </section>

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


        </>
    );
};

export default ServicesCategory;