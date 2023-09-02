import React from 'react'
import { MdOutlineDeliveryDining } from "react-icons/md"
import { MdStars } from "react-icons/md"

const HomePage = () => {
    return (
        <main>
            <section id='hero'>
                <div className="first_column">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum omnis labore corporis, totam facere sint eum aspernatur voluptate odio.</p>
                    <button className='btn'>Reserve a table</button>
                </div>
                <div className="second_column">
                    <img src="/bacalhau-photo.jpeg" alt="bacalhau" />
                </div>
            </section>
            <section id="highlights">
                <h1>Specials</h1>
                <button className='btn'>Online Menu</button>
                <div className="card-menus">
                    <article className='card'>
                        <img src="greek-salad.jpg" alt="greek-salad" />
                        <div className="card-content">
                            <h2>Greek Salad</h2>
                            <h3>€12.99</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae doloremque minus quos.</p>
                            <button className='card-btn'>Order delivery <MdOutlineDeliveryDining /></button>
                        </div>
                    </article>
                    <article className='card'>
                        <img src="seafood-rice.jpg" alt="seafood-rice" />
                        <div className="card-content">
                            <h2>Seafood rice</h2>
                            <h3>€17.99</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae doloremque minus quos.</p>
                            <button className='card-btn'>Order delivery <MdOutlineDeliveryDining className='card-btn-icon' /></button>
                        </div>
                    </article>
                    <article className='card'>
                        <img src="sweet-rice.jpg" alt="sweet-rice" />
                        <div className="card-content">
                            <h2>Sweet rice</h2>
                            <h3>€7.99</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae doloremque minus quos.</p>
                            <button className='card-btn'>Order delivery <MdOutlineDeliveryDining className='card-btn-icon' /></button>
                        </div>
                    </article>
                </div>
            </section>
            <section id="testimonials">
                <h1>Testimonials</h1>
                <div className="testimonials-card__container">
                    <article>
                        <h3>Rating</h3>
                        <div className="testimonials-card">
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <p>Joaquin</p>
                        </div>
                        <p className='testimonials-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div className="testimonials-card">
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <p>Joaquin</p>
                        </div>
                        <p className='testimonials-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div className="testimonials-card">
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <p>Joaquin</p>
                        </div>
                        <p className='testimonials-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div className="testimonials-card">
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <MdStars />
                            <p>Joaquin</p>
                        </div>
                        <p className='testimonials-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </article>
                </div>
            </section>
            <section id="about">
                <div className="first_column">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur mollitia repudiandae porro reprehenderit excepturi magnam. Possimus itaque magni vero a accusantium! Assumenda nihil, inventore pariatur distinctio culpa reprehenderit rerum totam! Magnam error tempore eos deleniti esse.</p>
                </div>
                <div className="second_column">
                    <div className="about-img-1">
                        <img src="about-img1.jpg" alt="bacalhau" />
                    </div>
                    <div className="about-img-2">
                        <img src="about-img2.jpg" alt="bacalhau" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage