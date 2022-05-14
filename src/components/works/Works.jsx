import React, {useState} from 'react'
import "./works.scss"

function Works() {
  const [currentSlider, setCurrentSlider] = useState(0)
  const data=[
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ]

  const handleClick = (event)=>{
    event === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) : setCurrentSlider(currentSlider < data.length-1 ?currentSlider+1 : 0)
  }//If click left and current slider is less than 0, then move to #2. Else, minus 1. Else (right click) if current slider is less than data.length, +1. Else, = 0 (max, go back to 0)

  return (
    <div className="works" id="works">
        <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
          {data.map((data)=> (
          <div className='container'>
            <div className="item">
              <div className="top">
                <img
                src={data.img}
                alt=""
                />
              </div>
              <div className="bottom">
                <div className="bottomContainer">
                <span>Projects</span>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                </div>
              </div>
            </div>
          </div>))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt=""  onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}

export default Works