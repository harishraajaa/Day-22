import React from 'react'
import Navbar from './Components/Navbar'
import Formcomp from './Components/Formcomp'
import Icongrid from './Components/Icongrid'
import Imageshowcase from './Components/Imageshowcase'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

function App() {
//Icon Grid component input data
  let icongriddata=[
    {
      gridimage:"bi-window m-auto text-primary",
      gridtitle:"Fully Responsive",
      griddesc:"This theme will look great on any device, no matter the size!"
    },
    {
      gridimage:"bi-layers m-auto text-primary",
      gridtitle:"Bootstrap 5 Ready",
      griddesc:"Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
      gridimage:"bi-terminal m-auto text-primary",
      gridtitle:"Easy to Use",
      griddesc:"Ready to use with your own content, or customize the source files!"
    }
  ]

//Image Showcase Input Date
  let imageshowdata=[
    {
      showtitle:"Fully Responsive Design",
      class1:"col-lg-6 order-lg-2 text-white showcase-img",
      class2:"col-lg-6 order-lg-1 my-auto showcase-text",
      style:{"backgroundImage": "url('src/assets/img/bg-showcase-1.jpg')"},
      showdesc:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
      showtitle:"Updated For Bootstrap 5",
      class1:"col-lg-6 my-auto showcase-img",
      class2:"col-lg-6 my-auto showcase-text",
      style:{"backgroundImage": "url('src/assets/img/bg-showcase-2.jpg')"},
      showdesc:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      showtitle:"Easy to Use & Customize",
      class1:"col-lg-6 order-lg-2 text-white showcase-img",
      class2:"col-lg-6 order-lg-1 my-auto showcase-text",
      style:{"backgroundImage": "url('src/assets/img/bg-showcase-3.jpg')"},
      showdesc:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
  ]

//Testimonial Input Data
  let testdata=[
    { 
      timage:"/src/assets/img/testimonials-1.jpg",
      tname:"Margaret E.",
      tdesc:"This is fantastic! Thanks so much guys!"
    },
    {
      timage:"/src/assets/img/testimonials-2.jpg",
      tname:"Fred S.",
      tdesc:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      timage:"/src/assets/img/testimonials-3.jpg",
      tname:"Sarah W.",
      tdesc:"Thanks so much for making these free resources available to us!"
    }
  ]

  return <>
  <Navbar/>
  {/* <!-- Masthead--> */}
  <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            <Formcomp/>
                        </div>
                    </div>
                  </div>
              </div>  
  </header>
  {/* <!-- Icons Grid--> */}
  <section className="features-icons bg-light text-center">
      <div className="container">
          <div className="row">
          {
            icongriddata.map((e,i)=>{
              return <Icongrid data={e} key={i}/>
            })
          }
          </div>
      </div>
  </section>
  {/* <!-- Image Showcases--> */}
  <section className="showcase">
    <div className="container-fluid p-0">
      {
        imageshowdata.map((e,i)=>{
          return <Imageshowcase data={e} key={i}/>
        })
      }
    </div>
  </section> 
  {/* <!-- Testimonials--> */}
  <section class="testimonials text-center bg-light">
    <div class="container">
        <h2 class="mb-5">What people are saying...</h2>
          <div class="row">
          {
            testdata.map((e,i)=>{
              return <Testimonials data={e} key={i}/>
            })
            
          }
          </div>
      </div>
  </section>
  {/* <!-- Call to Action--> */}
  <section class="call-to-action text-white text-center" id="signup">
    <div class="container position-relative">
      <div class="row justify-content-center">
        <div class="col-xl-6">
          <h2 class="mb-4">Ready to get started? Sign up now!</h2>
          <Formcomp/>
        </div> 
      </div> 
    </div>
  </section> 
  <Footer/>

  </>
}

export default App
