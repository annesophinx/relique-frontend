import App from '../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import FashionshowAPI from '../../FashionshowAPI'

class FashionshowsView {
  init(){
    document.title = 'Fashionshows'  
    this.fashionshows = null  
    this.render()    
    Utils.pageIntroAnim()
    this.getFashionshows()
  }

async getFashionshows(){
  try{
    this.fashionshows = await FashionshowAPI.getFashionshows()
    console.log(this.fashionshows)
    this.render()

  }catch(err){
    Toast.show(err, 'error')
  }
}
  render(){
    const template = html`
      <va-app-header title="Fashionshows" user="${JSON.stringify(Auth.currentUser)}"><lottie-player class="fash" src="https://assets2.lottiefiles.com/private_files/lf30_js1vizoc.json"  background="transparent"  speed="1"  style="width: 60px; height: 50px;"  loop autoplay></lottie-player></va-app-header>
      <div class="page-content">    
      <div class="waviy">
      <span style="--i:1">R</span>
      <span style="--i:2">E</span>
      <span style="--i:3">L</span>
      <span style="--i:4">I</span>
      <span style="--i:5">Q</span>
      <span style="--i:6">U</span>
      <span style="--i:7">E</span>
     </div>
     <br>
      <h3 class="subhead">Get prepared for our stunning fashionshows and their backstage.</h3> 
      <br>
      <div class="fashionshows-grid">       
      ${this.fashionshows == null ? html`
      <sl-spinner></spinner>
      `:html`
      ${this.fashionshows.map(fashionshow => html`
      <as-fashionshow class="fashionshow-card"
      id="${fashionshow._id}"
      name="${fashionshow.name}"
      image="${fashionshow.image}"
      description="${fashionshow.description}"
      price="${fashionshow.price}"
      user="${JSON.stringify(fashionshow.user)}"
      >
      </as-fashionshow>
      `)}
      `}
       </div>
     </div>     
   `

    render(template, App.rootEl)
  }
}


export default new FashionshowsView()