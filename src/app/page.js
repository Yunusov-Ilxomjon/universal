import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
    return (
        <div className="home-container">

            <div className="home-container-cards">

                <div className="home-cards">

                    <div className="card-parts">
                        <h1 style={{ width: '155px', fontSize: '16px', color: 'white' }}>25 Songs That Tell Us Where Music Is Going</h1>
                        <Image style={{
                            marginRight: '25px'
                        }} src="/section-image/guitar.jpg" alt="" width={65} height={65} />
                    </div>

                    <div className="card-parts">
                        <h1 style={{ width: '155px', fontSize: '16px', color: 'white' }}>These Ancient Assassins Eat Their Own Kind</h1>
                        <Image style={{
                            marginRight: '25px'
                        }} src="/section-image/kapalak.jpg" alt="" width={65} height={65} />
                    </div>

                    <div className="card-parts">
                        <h1 style={{ width: '155px', fontSize: '16px', color: 'white' }}>How Do You Teach People to Love Difficult Music?</h1>
                        <Image style={{
                            marginRight: '25px'
                        }} src="/section-image/guitar.jpg" alt="" width={65} height={65} />
                    </div>

                    <div className="card-parts">
                        <h1 style={{ width: '155px', fontSize: '16px', color: 'white' }}>International Soccer's Man of Mystery</h1>
                        <Image style={{
                            marginRight: '25px'
                        }} src="/section-image/stadion.jpg" alt="" width={65} height={65} />
                    </div>

                </div>

            </div>

            {/* ----------------------------------------------- */}

            <div className="home-container-video"></div>

            <div className="home-video">
                <div className="video-card"></div>
                <div className="text-card"></div>
            </div>

            {/* ----------------------------------------------- */}

            <div className="cars-info">

                <div className="cars-info-left">
                    <div className="cars-card">
                        <div className="cars-card-top">
                            <h3 style={{ color: 'gray', fontSize: '12px' }}>CARS</h3>
                            <h1 style={{ width: '235px', fontSize: '25px' }}>The joy of replicas: A $ 5 million car <br></br> for $ 50,000</h1>
                            <p style={{ width: '235px', color: 'gray', fontSize: '14px' }}>Here's the text from the image you provided:
                                The 31-year-old self-taught engineer and former
                                amateur racer spends his days building artful
                                recreations of one of most iconic sports cars.</p>
                            <Image src="/section-image/cars.png" alt="" width={280} height={292}
                                style={{
                                    position: 'absolute',
                                    left: '273px',
                                    bottom: '50px'
                                }} />
                        </div>


                        <div className="cars-card-bottom">
                            <Image src="/section-image/girl.webp" alt="" width={30} height={30}
                                style={{
                                    borderRadius: '50px'
                                }} />
                            <h2 style={{ fontSize: '14px' }}>Jessica Miller:</h2>
                            <p style={{ color: 'gray', fontSize: '14px' }}>Even as the ride-hailing
                                service's future remem...
                            </p>
                            <button
                                style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    cursor: 'pointer'
                                }} >
                                <Image src="/section-image/comment.png" alt="" width={15} height={15} />
                            </button>
                            <p style={{ color: 'gray', fontSize: '14px' }}>342</p>
                        </div>

                    </div>

                    <div className="cats-card">
                        <Image src="/section-image/cat.jpg" alt="" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} width={263} height={275} />
                        <h2 style={{
                            fontSize: '16px',
                            margin: '15px 25px'
                        }}>200+ Doomed Cats Saved From Euthanization</h2>
                    </div>

                    <div className="coffe-card">
                        <h2 style={{ color: '#262D33', fontSize: '16px' }}>Is Coffee Bad for Bones?</h2>
                        <p style={{ color: '#4B5157', fontSize: '14px' }}>Coffee drinkers may excrete
                            more calcium, but it doesn't appear to weaken bones
                        </p>
                        <p style={{ color: '#939699', fontSize: '12px' }}>Oct 15</p>
                    </div>

                    <div className="stressful-card">
                        <h2 style={{ color: '#262D33', fontSize: '16px' }}>It’s a Stressful World</h2>
                        <p style={{ color: '#4B5157', fontSize: '14px' }}>Can a cruise skeptic enjoy four
                            days on the seas with his family and a bunch of princesses?</p>
                        <p style={{ color: '#939699', fontSize: '12px' }}>Oct 14</p>
                    </div>



                </div>


                <div className="cars-card-center">
                    <div className="cars-card-img">
                        <button className="popular"
                            style={{
                                width: '66px',
                                height: '25px',
                                borderRadius: '5px',
                                color: 'white',
                                backgroundColor: '#3DC47E',
                                border: 'none',
                                cursor: 'pointer',

                            }}>popular
                        </button>

                        <h2 style={{ marginTop: '100px', color: 'rgba(240, 229, 229, 0.984)', fontSize: '12px' }}>Art & Design</h2>
                        <h1 style={{ color: 'white', width: '203px', fontSize: '16px' }}>INVISIBLE INK: THE WEIRD WORLD OF TATTOO REMOVAL – IN PICTURES</h1>
                        <h2 style={{ color: 'rgba(240, 229, 229, 0.984)', fontSize: '14px', width: '150px' }}>By Sarah Jenkins</h2>
                        <p style={{ color: '#939699', fontSize: '12px', float: 'left' }}>Sept 26</p>

                    </div>

                    <div className="manufacture-card">
                        <h2 style={{ color: '#262D33', fontSize: '16px' }}>What We Manufacture</h2>
                        <p style={{ color: '#4B5157', fontSize: '14px' }}>A global history of the factory and the modern
                            World that all should read
                        </p>
                        <p style={{ color: '#939699', fontSize: '12px' }}>Oct 14</p>
                    </div>

                    <div className="lemon-card">
                        <h2 style={{ color: '#262D33', fontSize: '16px' }}>A Treat for Lemon Lovers</h2>
                        <p style={{ color: '#4B5157', fontSize: '14px' }}>This tangerine, ginger and chocolate tart has verve
                            depth and a hint of spice
                        </p>
                        <p style={{ color: '#939699', fontSize: '12px' }}>Oct 13</p>
                    </div>


                </div>

                {/* ---------------------------------------------- */}

                <div className="cars-card-right">
                    <div className="columns" style={{
                        color: 'white',
                        fontSize: '16px',

                    }}>Columns</div>
                    <div className="columns-card1">
                        <h2 style={{ color: 'white', fontSize: '20px' }}>
                            Architecture is the thoughtful making of space
                        </h2>
                        <Image src="/section-image/cardboy1.jpg" alt=""
                            style={{
                                position: 'absolute',
                                top: '130px',
                                borderRadius: '50%',

                            }} width={45} height={45} />

                        <p style={{ marginLeft: '60px', marginTop: '20px', color: '#D1E2EB', fontSize: '14px' }}>David Williams
                            <br /> Architect
                        </p>
                    </div>

                    <div className="columns-card2">
                        <h2 style={{ color: 'white', fontSize: '20px' }}>
                            The details are not the details. they make the design.
                        </h2>
                        <Image src="/section-image/cardgirl1.jpg" alt=""
                            style={{
                                position: 'absolute',
                                top: '130px',
                                borderRadius: '50%',

                            }} width={45} height={45} />

                        <p style={{ marginLeft: '60px', marginTop: '20px', color: '#D1E2EB', fontSize: '14px' }}>
                            Alexandra Green
                            <br /> Interior designer
                        </p>
                    </div>


                    <div className="columns-card3">
                        <h2 style={{ color: 'white', fontSize: '20px' }}>
                            Live life to the fullest, and focus on the positive
                        </h2>
                        <Image src="/section-image/cardgirl1.jpg" alt=""
                            style={{
                                position: 'absolute',
                                top: '130px',
                                borderRadius: '50%',

                            }} width={45} height={45} />

                        <p style={{ marginLeft: '60px', marginTop: '20px', color: '#D1E2EB', fontSize: '14px' }}>
                            Olivia Thompson
                            <br /> Coacher
                        </p>
                    </div>

                    <div className="readmore">
                        <button style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'white',
                            fontSize: '14px',
                            cursor: 'pointer',
                            width: '100%',
                        }}>Read more</button>
                    </div>


                </div>




            </div>

            {/* ------------------------------------ */}

            <div className="flower">
                <h1 style={{
                    alignItems: 'center',

                    color: 'red',
                }}>The Big Bloom or «How Flowering <br />
                    Plants Changed the World
                </h1>
                <button style={{
                    backgroundColor: '#4592FF',
                    border: 'none',
                    color: 'white',
                    fontSize: '14px',
                    cursor: 'pointer',
                    width: '140px',
                    height: '40px',
                    borderRadius: '20px'
                }}>Read more</button>
            </div>

            {/* --------------------------------------------- */}

            <div className="news">

                <div className="news-card-left">

                    <div className="news-cards">
                        <Image src="/section-image/risehand.jpg" alt="" width={336} height={195} />
                        <div className="news-cards-text">
                            <div className="flights" style={{
                                width: "100%",
                                height: "22px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <a href="#">FLIGHTS</a>
                                <button style={{ border: 'none', cursor: 'pointer' }}>
                                    <Image src="/section-image/bookmark.png" alt="" width={20} height={20} />
                                </button>
                            </div>

                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '15px',
                            }}>Passengers Suffer as Crowded Field Puts Pressure in Europe's Airlans</h1>

                            <p style={{
                                fontSize: '14pxpx',
                                color: '#4B5157',
                                marginTop: '10px'
                            }}>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>

                            <div className="news-comments">
                                <p style={{ color: '12px', color: 'gray' }}>Aug 6</p>
                                <button><Image src="/section-image/comment.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>342</p>
                                <button><Image src="/section-image/heart.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>830</p>

                            </div>
                        </div>






                    </div>

                    {/* -------------------------------------- */}

                    <div className="news-cards">
                        <Image src="/section-image/bread.jpg" alt="" width={336} height={195} />
                        <div className="news-cards-text">
                            <div className="flights" style={{
                                width: "100%",
                                height: "22px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <a href="#">FOOD</a>
                                <button style={{ border: 'none', cursor: 'pointer' }}>
                                    <Image src="/section-image/bookmark.png" alt="" width={20} height={20} />
                                </button>
                            </div>

                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '15px',
                            }}>Passengers Suffer as Crowded Field Puts Pressure in Europe's Airlans</h1>

                            <p style={{
                                fontSize: '14pxpx',
                                color: '#4B5157',
                                marginTop: '10px'
                            }}>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>

                            <div className="news-comments">
                                <p style={{ color: '12px', color: 'gray' }}>Aug 6</p>
                                <button><Image src="/section-image/comment.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>342</p>
                                <button><Image src="/section-image/heart.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>830</p>

                            </div>
                        </div>


                    </div>

                    {/* ------------------------------------- */}

                    <div className="news-cards">
                        <Image src="/section-image/flower2.jpg" alt="" width={336} height={195} />
                        <div className="news-cards-text">
                            <div className="flights" style={{
                                width: "100%",
                                height: "22px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <a href="#">SCIENCE</a>
                                <button style={{ border: 'none', cursor: 'pointer' }}>
                                    <Image src="/section-image/bookmark.png" alt="" width={20} height={20} />
                                </button>
                            </div>

                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '15px',
                            }}>Passengers Suffer as Crowded Field Puts Pressure in Europe's Airlans</h1>

                            <p style={{
                                fontSize: '14pxpx',
                                color: '#4B5157',
                                marginTop: '10px'
                            }}>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>

                            <div className="news-comments">
                                <p style={{ color: '12px', color: 'gray' }}>Aug 6</p>
                                <button><Image src="/section-image/comment.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>342</p>
                                <button><Image src="/section-image/heart.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>830</p>

                            </div>
                        </div>


                    </div>

                    {/* ------------------------------------ */}

                    <div className="news-cards">
                        <Image src="/section-image/swim.jpg" alt="" width={336} height={195} />
                        <div className="news-cards-text">
                            <div className="flights" style={{
                                width: "100%",
                                height: "22px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <a href="#">HEALTH</a>
                                <button style={{ border: 'none', cursor: 'pointer' }}>
                                    <Image src="/section-image/bookmark.png" alt="" width={20} height={20} />
                                </button>
                            </div>

                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '15px',
                            }}>Passengers Suffer as Crowded Field Puts Pressure in Europe's Airlans</h1>

                            <p style={{
                                fontSize: '14pxpx',
                                color: '#4B5157',
                                marginTop: '10px'
                            }}>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>

                            <div className="news-comments">
                                <p style={{ color: '12px', color: 'gray' }}>Aug 6</p>
                                <button><Image src="/section-image/comment.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>342</p>
                                <button><Image src="/section-image/heart.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>830</p>

                            </div>
                        </div>


                    </div>

                    {/* ------------------------------ */}

                    <div className="news-cards">
                        <Image src="/section-image/tree.jpg" alt="" width={336} height={195} />
                        <div className="news-cards-text">
                            <div className="flights" style={{
                                width: "100%",
                                height: "22px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <a href="#">SCIENCE</a>
                                <button style={{ border: 'none', cursor: 'pointer' }}>
                                    <Image src="/section-image/bookmark.png" alt="" width={20} height={20} />
                                </button>
                            </div>

                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '15px',
                            }}>Passengers Suffer as Crowded Field Puts Pressure in Europe's Airlans</h1>

                            <p style={{
                                fontSize: '14pxpx',
                                color: '#4B5157',
                                marginTop: '10px'
                            }}>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>

                            <div className="news-comments">
                                <p style={{ color: '12px', color: 'gray' }}>Aug 6</p>
                                <button><Image src="/section-image/comment.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>342</p>
                                <button><Image src="/section-image/heart.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>830</p>

                            </div>
                        </div>


                    </div>


                    {/* ------------------------------ */}

                    <div className="news-cards">
                        <Image src="/section-image/universitet.jpg" alt="" width={336} height={195} />
                        <div className="news-cards-text">
                            <div className="flights" style={{
                                width: "100%",
                                height: "22px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <a href="#">ART & DESIGN</a>
                                <button style={{ border: 'none', cursor: 'pointer' }}>
                                    <Image src="/section-image/bookmark.png" alt="" width={20} height={20} />
                                </button>
                            </div>

                            <h1 style={{
                                fontSize: '20px',
                                marginTop: '15px',
                            }}>Passengers Suffer as Crowded Field Puts Pressure in Europe's Airlans</h1>

                            <p style={{
                                fontSize: '14pxpx',
                                color: '#4B5157',
                                marginTop: '10px'
                            }}>Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</p>

                            <div className="news-comments">
                                <p style={{ color: '12px', color: 'gray' }}>Aug 6</p>
                                <button><Image src="/section-image/comment.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>342</p>
                                <button><Image src="/section-image/heart.png" alt="" width={15} height={15} />
                                </button>
                                <p style={{ color: '12px', color: 'gray' }}>830</p>

                            </div>
                        </div>


                    </div>

                    {/* ------------------------------- */}










                </div>

                {/* ------------------------------------------- */}

                <div className="news-card-right">
                    <div className="recommended">
                        <h1 style={{
                            fontSize: '14px',
                        }}>RECCOMENDED FOR YOU</h1>
                    </div>

                    {/* --------------------------- */}

                    <div className="recommend-cards">
                        <Image src="/section-image/reccomend1.jpg" alt="" width={60} height={60} />
                        <div className="recommend-text">
                            <h1 style={{
                                fontSize: '14px',
                                color: 'gray'
                            }}>Office Meetings Leave the Office</h1>
                            <p style={{
                                fontSize: '12px',
                                color: 'gray'
                            }}>15 minutes ago</p>
                        </div>
                    </div>


                    {/* --------------------------- */}

                    <div className="recommend-cards">
                        <Image src="/section-image/reccomend2.jpg" alt="" width={60} height={60} />
                        <div className="recommend-text">
                            <h1 style={{
                                fontSize: '14px',
                                color: 'gray'
                            }}>Experimental Vocal Music in Brooklyn</h1>
                            <p style={{
                                fontSize: '12px',
                                color: 'gray'
                            }}>32 minutes ago</p>
                        </div>
                    </div>


                    {/* --------------------------- */}

                    <div className="recommend-cards">
                        <Image src="/section-image/reccomend3.jpg" alt="" width={60} height={60} />
                        <div className="recommend-text">
                            <h1 style={{
                                fontSize: '14px',
                                color: 'gray'
                            }}>Google’s Influence Over Think Tanks</h1>
                            <p style={{
                                fontSize: '12px',
                                color: 'gray'
                            }}>28 minutes ago</p>
                        </div>
                    </div>

                    {/* --------------------------- */}

                    <div className="recommend-cards">
                        <Image src="/section-image/reccomend4.jpg" alt="" width={60} height={60} />
                        <div className="recommend-text">
                            <h1 style={{
                                fontSize: '14px',
                                color: 'gray'
                            }}>Homes for Sale in NYC And Connecticut</h1>
                            <p style={{
                                fontSize: '12px',
                                color: 'gray'
                            }}>55 minutes ago</p>
                        </div>
                    </div>

                    {/* --------------------------- */}

                    <div className="recommend-cards">
                        <Image src="/section-image/reccomend5.jpg" alt="" width={60} height={60} />
                        <div className="recommend-text">
                            <h1 style={{
                                fontSize: '14px',
                                color: 'gray'
                            }}>Homes for Sale in NYC And Connecticut</h1>
                            <p style={{
                                fontSize: '12px',
                                color: 'gray'
                            }}>55 minutes ago</p>
                        </div>
                    </div>


                    {/* --------------------------- */}

                    <div className="recommend-cards">
                        <Image src="/section-image/reccomend6.jpg" alt="" width={60} height={60} />
                        <div className="recommend-text">
                            <h1 style={{
                                fontSize: '14px',
                                color: 'gray'
                            }}>Are You There, Dad? It’s me, Alice</h1>
                            <p style={{
                                fontSize: '12px',
                                color: 'gray'
                            }}>19 minutes ago</p>
                        </div>
                    </div>



                    {/* --------------------------- */}

                    <div className="recommend-cards">
                        <Image src="/section-image/reccomend7.jpg" alt="" width={60} height={60} />
                        <div className="recommend-text">
                            <h1 style={{
                                fontSize: '14px',
                                color: 'gray'
                            }}>The New Punk Look: Lacy and Colorful</h1>
                            <p style={{
                                fontSize: '12px',
                                color: 'gray'
                            }}>25 minutes ago</p>
                        </div>
                    </div>

                    <button style={{
                        backgroundColor: 'transparent',
                        margin: '12px 90px'

                    }}>
                        <h1 style={{
                            fontSize: '14px',

                        }}>
                            Read more
                        </h1>
                    </button>

                </div>
                {/* ----------------------------------------------- */}
            </div>

            {/* ------------------------------------------- */}

            <div className="reader">

                <div className="reader-img">

                    <button className="hot-btn">Hot</button>

                    <div className="reader-top">
                        <Image src="/section-image/readergirl.jpg" style={{
                            borderRadius: '50%',
                        }} width={60} height={60} />
                        <h1 style={{
                            fontSize: '14px',
                            color: '#FFFFFF'
                        }}>By Sarah Jenkins</h1>
                        <p style={{
                            fontSize: '12px',
                            color: '#FFFFFF'
                        }}>Photographer</p>
                    </div>

                    {/* -------------- */}
                    <div className="reader-center">
                        <h1 style={{
                            fontSize: '40px',
                            color: 'clack',
                            textAlign: 'center',
                        }}>Readers' Choice winners: Your wine country favorite</h1>
                    </div>

                    {/* ---------------------- */}

                    <button className="reader-bottom">
                        <Image src="/section-image/galery2.png" style={{
                            backgroundColor: "transparent"
                        }} width={20} height={20} />
                        <h2 style={{
                            fontSize: '14px',
                            color: '#FFFFFF'
                        }}>Whatch photos 25</h2>
                    </button>

                </div>

                {/* ------------------------------------- */}

                <div className="career-container">
                    <h2 style={{
                        fontSize: '12px',
                        color: '#6E99AE'
                    }}>CAREER</h2>

                    <h1 style={{
                        fontSize: '25px',
                        color: '#262D33'
                    }}>
                        Had a Job Interview But No Callback? Here's What to Do
                    </h1>
                    <p style={{
                        fontSize: '14px',
                        color: '#4B5157'
                    }}>Try to understand the culture of the company where you want to work and be authentic in your interview, experts emphasize</p>
                    <button className="career-btn">Read more</button>
                </div>

                <div className="career-coffe">
                    <h1 style={{
                        fontSize: '16px',
                        color: '#262D33'
                    }}>Is Coffee Bad for Bones?</h1>

                    <p style={{
                        fontSize: '14px',
                        color: '#4B5157'
                    }}>offee drinkers may excrete more calcium, but it doesn’t appear to weaken bones </p>
                    <p style={{
                        fontSize: '14px',
                        color: '#939699'
                    }}>Oct 15</p>
                </div>
                {/* --------------------------------------- */}

                <div className="career-coffe">
                    <h1 style={{
                        fontSize: '16px',
                        color: '#262D33'
                    }}>What We Manufacture</h1>

                    <p style={{
                        fontSize: '14px',
                        color: '#4B5157'
                    }}>offee drinkers may excrete more calcium, but it doesn’t appear to weaken bones </p>
                    <p style={{
                        fontSize: '14px',
                        color: '#939699'
                    }}>Oct 14</p>
                </div>
            </div>




        </div>
    );
}
