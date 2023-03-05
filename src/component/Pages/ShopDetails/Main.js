import { Link } from 'react-router-dom'
import React from 'react'
import BGImg from "../../../assets/img/bg/bdrc-bg.jpg";

const Main = () => {
    
  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Shop Details</h2>    
                                    <div className="breadcrumb-wrap">
                            
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shop Details </li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="shop-banner-area pt-120 pb-90 " data-animation="fadeInUp animated" data-delay=".2s">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="shop-thumb-tab mb-30">
                                <ul className="nav" id="myTab2" role="tablist">
                                    <li className="nav-item">
                                        <Link to="#home" className="nav-link active" id="home-tab" data-bs-toggle="tab"  role="tab"
                                            aria-selected="true"><img src="assets/img/shop/details/thumb1.jpg" alt="" /> </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#profile" className="nav-link" id="profile-tab" data-bs-toggle="tab" role="tab"
                                            aria-selected="false"><img src="assets/img/shop/details/thumb2.jpg" alt="" /></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#profile1" className="nav-link" id="profile-tab2" data-bs-toggle="tab" role="tab"
                                            aria-selected="false"><img src="assets/img/shop/details/thumb3.jpg" alt="" /></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-details-img mb-30">
                                <div className="tab-content" id="myTabContent2">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel">
                                        <div className="product-large-img">
                                            <img src="assets/img/shop/details/large1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel">
                                        <div className="product-large-img">
                                            <img src="assets/img/shop/details/large2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile1" role="tabpanel">
                                        <div className="product-large-img">
                                            <img src="assets/img/shop/details/large3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="product-details mb-30">
                                <div className="product-details-title">
                                    <p>Workstead</p>
                                    <h1>Helios Piranho Lamp</h1>
                                    <div className="price details-price pb-30 mb-20">
                                        <span>$700.00</span>
                                        <span className="old-price">$820.00</span>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                    when looking at its
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                    letters, as opposed to
                                    using 'Content here, content here', making it look like readable English.</p>
                                <div className="product-cat mt-30 mb-30">
                                    <span>Category: </span>
                                    <Link to="#">furniture,</Link>
                                    <Link to="#">decor</Link>
                                </div>                            
                                <div className="product-details-action">
                                    <form action="#">
                                        <div className="plus-minus">
                                            <div className="cart-plus-minus"><input type="text" value="1" /></div>
                                        </div>
                                        <button className="btn btn-black" type="submit">add to cart</button>                                   
                                    </form>
                                </div>
                                <div className="product-social mt-45">
                                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-behance"></i></Link>
                                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="#"><i className="fab fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-desc-area pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bakix-details-tab">
                                <ul className="nav text-center justify-content-center pb-30 mb-50" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link to="#id-desc" className="nav-link active" id="desc-tab" data-bs-toggle="tab" role="tab">Description </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#id-add" className="nav-link" id="id-add-in" data-bs-toggle="tab" role="tab">Additional Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#id-rev" className="nav-link" id="id-r" data-bs-toggle="tab" role="tab">Reviews(10)</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="id-desc" role="tabpanel" aria-labelledby="desc-tab">
                                    <div className="event-text mb-40">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                            id est laborum. Sed ut perspiciatis
                                            unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab
                                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            Nemo enim ipsam voluptatem quia
                                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                            eos qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                            consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                            voluptatem.</p>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum. Sed ut
                                            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque
                                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                            sunt explicabo. Nemo enim ipsam voluptatem
                                            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                            dolores eos qui ratione voluptatem sequi
                                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                            consectetur, adipisci velit, sed quia non
                                            numquam eius modi tempora.</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="id-add" role="tabpanel" aria-labelledby="id-add-in">
                                    <div className="additional-info">
                                        <div className="table-responsive">
                                            <h4>Additional information</h4>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Weight</th>
                                                        <td className="product_weight">1.4 oz</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dimensions</th>
                                                        <td className="product_dimensions">62 × 56 × 12 in</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Size</th>
                                                        <td className="product_dimensions">XL, XXL, LG, SM, MD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="id-rev" role="tabpanel" aria-labelledby="id-r">
                                    <div className="additional-info">
                                        <div className="event-text mb-40">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                                id est laborum. Sed ut perspiciatis
                                                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                                totam rem aperiam, eaque ipsa quae ab
                                                illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                Nemo enim ipsam voluptatem quia
                                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                                eos qui ratione voluptatem sequi
                                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                consectetur, adipisci velit, sed quia non
                                                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                                voluptatem.</p>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum. Sed ut
                                                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                laudantium, totam rem aperiam, eaque
                                                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                                sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                                dolores eos qui ratione voluptatem sequi
                                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                consectetur, adipisci velit, sed quia non
                                                numquam eius modi tempora.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>         
        </main>
    </>
  )
}

export default Main