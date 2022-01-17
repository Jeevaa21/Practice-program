import React, { Component } from 'react'
import './myStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const imgs = [
  { 
    id:1,
    img:"https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    id:2,
    img:"https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id:3,
    img:"https://images.unsplash.com/photo-1615220368123-9bb8faf4221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
  },
  {
    id:4,
    img:"https://images.unsplash.com/photo-1558383331-f520f2888351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  
  {
    id:5,
    img:"https://images.unsplash.com/photo-1601961545517-59307b1fbac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
  } ,  
  {
    id:6,
    img:"https://images.unsplash.com/photo-1601961545517-59307b1fbac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
  },
  {
    id:7,
    img:"https://cdn1.epicgames.com/undefined/offer/batman-arkham-asylum_promo-1567x917-f1248a17909e224f91845b223542306a.jpg"
  },
  {
    id:8,
    img:"https://cdn.mos.cms.futurecdn.net/aTK8YBkBAbqCSzNGxt8adL-1200-80.jpg"
  },
  {
    id:9,
    img:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/04/thor-love-and-thunder-chris-hemsworth-starrer-to-bring-back-this-dead-character-its-not-loki-1.jpg"
  },
  {
    id:10,
    img:"https://rukminim1.flixcart.com/image/416/416/k572gsw0/poster/t/s/g/large-iron-man-premium-poster-all-superheroes-wall-poster-10791-original-imafnx2wunug7z2z.jpeg?q=70"
  },
  {
    id:11,
    img:"https://i.pinimg.com/474x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg"
  }, {
    id:12,
    img:"https://m.media-amazon.com/images/M/MV5BMTY0NmVlZjEtMDMwZC00NDg2LTlmZmEtNzUxNjIyZjAyOTkwXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_.jpg"
  }   
]
class Slider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       view:false,
       imgSrc:"",
       index:0,
    }
    this.getImg = this.getImg.bind(this)
  }
  
  getImg(imgSrc,index){
    this.setState({
      view:!this.state.view,
      imgSrc:imgSrc,
      index:index,
    })
  }
  next(index){
    this.setState({
      index:index+1,
      imgSrc:imgs[index+1].img,
    })
    console.log(this.state.imgSrc)
  }
  prev(index){
    this.setState({
      index:index-1,
      imgSrc:imgs[index-1].img,
    })
    
  }
  render() {
    return (
      this.state.view?
      <div className="img-viewer">  
        <div onClick={() => this.getImg(null)} className='close'>
        <FontAwesomeIcon icon={faTimes} />
        </div>
        {
          this.state.index == 0?
          <div className="img-slider">
              <div className="next" onClick={() => this.next(this.state.index)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <img src={this.state.imgSrc}/>
          </div>:this.state.index == imgs.length-1?<div className="img-slider">
              <div className="prev" onClick={() => this.prev(this.state.index)}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <img src={this.state.imgSrc}/>
          </div>:
          <div className="img-slider">
              <div className="next" onClick={() => this.next(this.state.index)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div className="prev" onClick={() => this.prev(this.state.index)}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <img src={this.state.imgSrc}/>
          </div>
        }
      </div>:
      <div className="gallery">
        {imgs.map((img,index) => {
          return(
            <a key={index} onClick={() => this.getImg(img.img, index)}>
              <img  src={img.img}/> 
            </a>
          )
        })}
      </div>
    )
  }
}

export default Slider