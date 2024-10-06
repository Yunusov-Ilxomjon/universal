import React from 'react'
import './universal.css'
import Link from 'next/link'
import Image from 'next/image'

const Universal = () => {
  return (
    <div className='universal-container'>



      <div className="moto-container">

        <div className="destination">
          <Link style={{
            color: '#4592FF',
            fontSize: '12px'
          }} href="#">DESTINATIONS</Link>

          <div className="back-btn">
            <Link style={{
              color: '#FFFFFF',
              fontSize: '14px'
            }} href="/">Back to main</Link>
            <Link style={{
              color: '#FFFFFF',
              fontSize: '14px'
            }} href="/">Prev</Link>
            <Link style={{
              color: '#FFFFFF',
              fontSize: '14px'
            }} href="universal">Next</Link>
          </div>

        </div>

        <h1 style={{
          width: '750px',
          height: '210px',
          fontSize: '55px',
          marginTop: '102px',
          color: 'yellow',
        }}>Five Travel Stories From 2017 to Help You Escape
          Into the World</h1>

        <h2 style={{
          width: '600px',
          height: '60px',
          fontSize: '18px',
          marginTop: '30px',
          color: 'white',
        }}>
          From the coastlines of Europe to remote Kodiak Island, Alaska, here are five of our favorite stories to help you explore the world
        </h2>

        <div className="share">

          <img width={15} height={15} src="/universal-image/time.png" alt="" />
          <p>Aug 6, 10:23 pm</p>

          <img width={15} height={15} src="/universal-image/heart.png" alt="" />
          <p>800</p>

          <img width={15} height={15} src="/universal-image/comment.png" alt="" />
          <p>19</p>


          <button className='share-btn'>
            <img width={20} height={20} src="/universal-image/share.png" alt="" />142 Shares
          </button>
        </div>
      </div>


      <div className="text-container1">
        <p style={{
          fontSize: '18px'
        }}><span class="dropcap">M</span>any geographers are trained in toponymy and cartology, this is not their main preoccupation. Geographers study the space and the temporal database distribution of phenomena, processes, and features as well as the interaction of humans and their environment. Because space and place affect a variety of topics, such as economics, health, climate, plants and animals, geography is highly interdisciplinary. The interdisciplinary nature of the geographical approach depends on an attentiveness to the relationship between physical and human phenomena and its spatial patterns.</p>

        <div className="text-card">
          <img style={{
            borderRadius: '50%',
            marginTop: '35px'
          }} src="https://avatars.mds.yandex.net/get-shedevrum/11552302/img_013df3a2f68c11eebb105e708ac16c58/orig" width={90} alt="" />
          <h1 style={{
            fontSize: '20px',
            color: '#262D33',
            marginTop: '20px'
          }}>Mira Anderson</h1>
          <p style={{
            fontSize: '14px',
            color: '#4B5157',
            marginTop: '10px'
          }}>Traveler & Photographer</p>
          <h2 style={{
            fontSize: '14px',
            color: '#262D33',
            marginTop: '20px'
          }}>82 articles</h2>

          <div className="messenjer">
            <Link href="#"><img src="/footer-image/facebook.png" alt="" width={40} /></Link>
            <Link href="#"><img src="/footer-image/twitter.png" alt="" width={40} /></Link>
            <Link href="#"><img src="/footer-image/instagram.png" alt="" width={40} /></Link>
          </div>

          <button style={{
            border: 'none',
            borderTop: '1px solid gray',
            width: '100%',
            height: '45px',
            backgroundColor: 'white',
          }}> <h3>Follow on Universal</h3> </button>

        </div>

      </div>


      <div className="text-container2">
        <h1 style={{
          fontSize: '25px',
          color: '#262D33',
          marginTop: '30px'
        }}>Integrated Geography</h1>
        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '30px'
        }}>Geography as a discipline can be split broadly into two main subsidiary fields: human geography and physical geography. The former largely focuses on the built environment and how humans create, view, manage, and influence space. The latter examines the natural environment, and how organisms, climate, soil, water, and landforms produce and interact.</p>

        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '30px'
        }}>The difference between these approaches led to a third field, environmental geography, which combines physical and human geography and concerns the interactions between the environment and humans.</p>

        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '30px'
        }}>The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent.</p>

      </div>


      <div className="universal-image">
        <img width={1140} height={555} src="https://geographical.co.uk/wp-content/uploads/somalaya-mountain-range-title.jpg" alt="" />

        <div style={{
          display: 'flex',

        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '880px',
            height: '65px',
            borderRight: '1px solid gray',
          }}><p style={{
            fontSize: '14px',
            color: '#4B5157',
            marginLeft: '35px',
          }}>Geostatistics deal with quantitative data analysis, specifically the application of statistical methodology</p>
          </div>

          <div style={{
            display: 'flex',
            padding: '12px 35px',
            alignItems: 'center',
            gap: '15px',
          }}>
            <img style={{
              borderRadius: '50%',
            }} src="https://t3.ftcdn.net/jpg/00/23/33/58/360_F_23335866_HAA1QKdrtHEudzs3mQryoHYyBxM4YjFg.jpg" alt="" width={45} height={45} />
            <h3 style={{
              fontSize: '14px',
              color: '#4B5157',
              width: '145px'
            }}>Andrew Washington</h3>

            <p style={{
              fontSize: '12px',
              color: '#939699'
            }}>Photographer</p>

          </div>

        </div>

      </div>

      <div className="text-container3">
        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '45px'
        }}>
          The oldest known world maps date back to ancient Babylon from the 9th century BC. The best known Babylonian world map, however, is the Imago Mundi of 600 BC. The map as reconstructed by Eckhard Unger shows Babylon on the Euphrates, surrounded by a circular landmass showing Assyria, Urartu and several cities, in turn surrounded by a "bitter river" (Oceanus), with seven islands arranged around it so as to form a seven-pointed star.
        </p>

        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '35px'
        }}>
          The accompanying text mentions seven outer regions beyond the encircling ocean. The descriptions of five of them have survived. In contrast to the Imago Mundi, an earlier Babylonian world map dating back to the 9th century BC depicted Babylon as being further north from the center of the world, though it is not certain what that center was supposed to represent.
        </p>

        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '35px'
        }}>
          The ideas of Anaximander: considered by later Greek writers to be the true founder of geography, come to us through fragments quoted by his successors. Anaximander is credited with the invention of the gnomon, the simple, yet efficient Greek instrument that allowed the early measurement of latitude. Thales is also credited with the prediction of eclipses. The foundations of geography can be traced to the ancient cultures, such as the ancient, medieval, and early modern Chinese.
        </p>

        <div className="text-container3-card">
          <h1 style={{
            fontSize: '20px',
            color: '#262D33',
          }}>Material on Theme</h1>
          <img style={{
            borderRadius: '10px',
            marginTop: '20px'
          }} src="https://naked-science.ru/wp-content/uploads/2016/05/field_image_5670291793_743c19e30f_b.jpg" width={263} height={180} />
          <h2 style={{
            fontSize: '16px',
            color: '#262D33',
            marginTop: '15px'
          }}>Application of Postcolonial Theory in the Middle East</h2>
          <p style={{
            fontSize: '14px',
            color: '#4B5157',
            marginTop: '7px'
          }}>In the essays "Overstating the Arab State", by Nazih Ayubi, and "Is Jordan Palestine?", by Raphael Israel, the authors deal with the psychologically fragmented postcolonial identity.</p>

          <div className="wievs">
            <img src="/universal-image/eye.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',
            }}>1.623</p>

            <img style={{
              marginLeft: '15px',
            }} src="/universal-image/comment.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',

            }}>102</p>

          </div>

        </div>

      </div>


      <div className="text-container4">
        <h1 style={{
          width: '470px',
          fontSize: '25px'
        }}>Names of places... are not geography... know by heart a whole gazetteer full of them would not, in itself, constitute anyone a geographer. Geography has higher aims than this: it seeks to classify phenomena.</h1>

        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '45px'
        }}>
          The Greeks, who were the first to explore geography as both art and science, achieved this through Cartography, Philosophy, and Literature, or through Mathematics. There is some debate about who was the first person to assert that the Earth is spherical in shape, with the credit going either to Parmenides or Pythagoras. Anaxagoras was able to demonstrate that the profile of the Earth was circular by explaining eclipses. However, he still believed that the Earth was a flat disk, as did many of his contemporaries.
        </p>

        <p style={{
          fontSize: '18px',
          color: '#4B5157',
          width: '620px',
          marginTop: '30px'
        }}>
          The first rigorous system of latitude and longitude lines is credited to Hipparchus. He employed a sexagesimal system that was derived from Babylonian mathematics.
        </p>

        <div style={{
          display: 'flex',
          gap: '15px',
          marginTop: '50px',
        }}>
          <button style={{
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '5px 10px',
          }}>Travel</button>

          <button style={{
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '5px 10px',
          }}>Destinations</button>


          <button style={{
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '5px 10px',
          }}>Nature</button>


          <button style={{
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '5px 10px',
          }}>World</button>


          <button style={{
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '5px 10px',
          }}>Alaska</button>


        </div>

        <div style={{
          width: '600px',
          height: '1px',
          border: '1px solid gray',
          marginTop: '50px',
        }}></div>

        <h1 style={{
          marginTop: '30px',
        }}>Show Your Support</h1>
        <div className="support-btn">
          <button className='sup-btn1'>
            <img src="/universal-image/heart.png" width={20} />
            <h4>Like it</h4>
            <p>42</p>
          </button>

          <button className='sup-btn2'>
            <img src="/footer-image/facebook.png" width={20} />
            <h4>Like it</h4>
            <p>42</p>
          </button>

          <button className='sup-btn3'>
            <img src="/footer-image/twitter.png" width={20} />
            <h4>Like it</h4>
            <p>42</p>
          </button>

          <button className='else-btn'><h2>. . .</h2></button>

        </div>

      </div>



      <div className="universal-images">

        <div className="universal-images-card">
          <img style={{
            width: '265px',
            height: '180px',
            borderRadius: '10px',
          }} src="/universal-image/card1.jpg" alt="" />
          <h2
            style={{
              fontSize: '16px',
              color: '#262D33',
              marginTop: '15px'
            }}>An Evangelist of Singaporean Food Has a New Pulpit</h2>

          <div className="wievs2">
            <img src="/universal-image/eye.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',
            }}>1.623</p>

            <img style={{
              marginLeft: '15px',
            }} src="/universal-image/comment.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',

            }}>102</p>

          </div>
        </div>

        <div className="universal-images-card">
          <img style={{
            width: '265px',
            height: '180px',
            borderRadius: '10px',
          }} src="/universal-image/card2.jpg" alt="" />
          <h2
            style={{
              fontSize: '16px',
              color: '#262D33',
              marginTop: '15px'
            }}>At the Mouth of the Mississippi, a Weird and Fragile Beauty</h2>

          <div className="wievs2">
            <img src="/universal-image/eye.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',
            }}>1.623</p>

            <img style={{
              marginLeft: '15px',
            }} src="/universal-image/comment.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',

            }}>102</p>

          </div>
        </div>

        <div className="universal-images-card">
          <img style={{
            width: '265px',
            height: '180px',
            borderRadius: '10px',
          }} src="/universal-image/card3.webp" alt="" />
          <h2
            style={{
              fontSize: '16px',
              color: '#262D33',
              marginTop: '15px'
            }}>Chattanooga Is Changing. But Its Charms Remain.</h2>

          <div className="wievs2">
            <img src="/universal-image/eye.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',
            }}>1.623</p>

            <img style={{
              marginLeft: '15px',
            }} src="/universal-image/comment.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',

            }}>102</p>

          </div>
        </div>

        <div className="universal-images-card">
          <img style={{
            width: '265px',
            height: '180px',
            borderRadius: '10px',
          }} src="/universal-image/card4.jpg" alt="" />
          <h2
            style={{
              fontSize: '16px',
              color: '#262D33',
              marginTop: '15px'
            }}>How to Get by in a Country if You Don't Know the Language</h2>

          <div className="wievs2">
            <img src="/universal-image/eye.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',
            }}>1.623</p>

            <img style={{
              marginLeft: '15px',
            }} src="/universal-image/comment.png" width={15} height={15} />
            <p style={{
              fontSize: '12px',
              color: '#939699',

            }}>102</p>

          </div>
        </div>

      </div>


      <div className="add-comments">

        <div className="add-comments-btn">
          <h1 style={{
            fontSize: '40px',
            color: '#262D33',
          }}>Comments</h1>
          <h1 style={{
            fontSize: '40px',
            color: '#939699',
            marginRight: '290px',
          }}>19</h1>

          <button style={{
            width: '165px',
            height: '40px',
            backgroundColor: '#F9F9F9',
            borderRadius: '35px',
            border: '1px solid #939699',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            marginLeft: '30px',
            gap: '10px',
          }}>
            <img style={{
              width: '20px'
            }} src="/universal-image/pencil.png" alt="" />
            Add comment
          </button>

        </div>

        <div className="people-comments">

          <div className="ryanhall-image">
            <img style={{
              width: '75px',
              height: '75px',
              borderRadius: '50%',
            }} src="/universal-image/man1.jpg" alt="" />
          </div>

          <div className="ryanhall-info">
            <div className="ryanhall-time">
              <h2 style={{
                fontSize: '16px',
                color: '#262D33'
              }}>Ryan Hall</h2>
              <p style={{
                fontSize: '12px',
                color: '#939699'
              }}>July 17, 6:38 pm</p>
            </div>

            <div className="ryanhall-text">
              <p style={{
                width: '580px',
                fontSize: '18px',
                color: '#939699',
                marginTop: '10px',
              }}>In the event, "in places like Iraq and Jordan, leaders of the new sovereign states were brought in from the outside, tailored to suit colonial interests and commitments</p>
            </div>

            <div className="replay">
              <img src="/universal-image/comment.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#262D33',
              }}>Replay</h3>
              <img src="/universal-image/like.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#3DC47E',
              }}>+10</h3>
              <img src="/universal-image/like.png" width={20} height={20} />

            </div>


          </div>


        </div>

        <div style={{
          marginLeft: '90px'
        }} className="people-comments">

          <div className="ryanhall-image">
            <img style={{
              width: '75px',
              height: '75px',
              borderRadius: '50%',
            }} src="/universal-image/woman1.webp" alt="" />
          </div>

          <div className="ryanhall-info">
            <div className="ryanhall-time">
              <h2 style={{
                fontSize: '16px',
                color: '#262D33'
              }}>Lora Morrow</h2>
              <p style={{
                fontSize: '12px',
                color: '#939699'
              }}>July 17, 6:41 pm</p>
            </div>

            <div className="ryanhall-text">
              <p style={{
                width: '580px',
                fontSize: '18px',
                color: '#939699',
                marginTop: '10px',
              }}>Likewise, most states in the Persian Gulf were handed over to those who could protect and safeguard imperial interests in the post-withdrawal phase</p>
            </div>

            <div className="replay">
              <img src="/universal-image/comment.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#262D33',
              }}>Replay</h3>
              <img src="/universal-image/like.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#3DC47E',
              }}>+10</h3>
              <img src="/universal-image/like.png" width={20} height={20} />

            </div>

          </div>

        </div>


        <div className="people-comments">

          <div className="ryanhall-image">
            <img style={{
              width: '75px',
              height: '75px',
              borderRadius: '50%',
            }} src="/universal-image/woman2.webp" alt="" />
          </div>

          <div className="ryanhall-info">
            <div className="ryanhall-time">
              <h2 style={{
                fontSize: '16px',
                color: '#262D33'
              }}>Tara Stark</h2>
              <p style={{
                fontSize: '12px',
                color: '#939699'
              }}>July 17, 6:53 pm</p>
            </div>

            <div className="ryanhall-text">
              <p style={{
                width: '580px',
                fontSize: '18px',
                color: '#939699',
                marginTop: '10px',
              }}>French Indochina was divided into five subdivisions: Tonkin, Annam, Cochinchina, Cambodia and Laos. Cochinchina was the first territory under French Control. Saigon was conquired in 1859. Then, in 1887, the Indochinese Union was established.</p>
            </div>

            <div className="replay">
              <img src="/universal-image/comment.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#262D33',
              }}>Replay</h3>
              <img src="/universal-image/like.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#3DC47E',
              }}>+10</h3>
              <img src="/universal-image/like.png" width={20} height={20} />

            </div>


          </div>


        </div>

        <div className="people-comments">

          <div className="ryanhall-image">
            <img style={{
              width: '75px',
              height: '75px',
              borderRadius: '50%',
            }} src="/universal-image/man2.jpg" alt="" />
          </div>

          <div className="ryanhall-info">
            <div className="ryanhall-time">
              <h2 style={{
                fontSize: '16px',
                color: '#262D33'
              }}>Kris Robertson</h2>
              <p style={{
                fontSize: '12px',
                color: '#939699'
              }}>July 17, 7:12 pm</p>
            </div>

            <div className="ryanhall-text">
              <p style={{
                width: '580px',
                fontSize: '18px',
                color: '#939699',
                marginTop: '10px',
              }}>Indian Marxist scholar Vivek Chibber has critiqued some foundational logics of Postcolonial Theory in his book Postcolonial Theory and the Specter of Capital</p>
            </div>

            <div className="replay">
              <img src="/universal-image/comment.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#262D33',
              }}>Replay</h3>
              <img src="/universal-image/like.png" width={20} height={20} />
              <h3 style={{
                fontSize: '12px',
                color: '#3DC47E',
              }}>+10</h3>
              <img src="/universal-image/like.png" width={20} height={20} />

            </div>


          </div>


        </div>

        <button className="loadmore">
          <h2>Load more</h2>
        </button>

      </div>


      <div className="think">
        <div className="think-page">
          <div className="think-image">
            <img style={{
              borderRadius: '50%',
              marginTop: '70px'
            }} src="/universal-image/woman1.webp" width={75} />
          </div>

          <div className="comment-think">
            <h1 style={{
              fontSize: '20px',
              color: '#262D33',
              marginTop: '30px'
            }}>What do you think?</h1>
            <textarea style={{
              width: '595px',
              height: '130px',
              backgroundColor: 'white',
              marginTop: '15px'
            }}></textarea>

            <button style={{
              width: '115px',
              height: '40px',
              backgroundColor: '#4592FF',
              marginTop: '15px',
              borderRadius: '30px',
              color: 'white'
            }}>Submit</button>
          </div>


        </div>


      </div>


    </div>
  )
}

export default Universal