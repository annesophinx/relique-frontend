import App from '../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Toast from '../../Toast'
import UserAPI from '../../UserAPI'

class favouriteFashionshowsView {
  init(){
    document.title = 'Favourite Fashionshows'    
    this.favFashionshows = null
    this.render()    
    Utils.pageIntroAnim()
    this.getFavFashionshows()
  }

  async getFavFashionshows(){
    try {
      const currentUser = await UserAPI.getUser(Auth.currentUser._id)
      this.favFashionshows = currentUser.favouriteFashionshows
      console.log(this.favFashionshows)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }
  
  render(){
    const template = html`
      <va-app-header title="Favourites " user="${JSON.stringify(Auth.currentUser)}"><lottie-player class="heart" src="https://assets1.lottiefiles.com/packages/lf20_sqrntqup.json"  background="transparent"  speed="1"  style="width: 60px; height: 50px;"  loop autoplay></lottie-player></va-app-header>
      <div class="page-content">        
      <div class="waviy">
      <span style="--i:1">F</span>
      <span style="--i:2">A</span>
      <span style="--i:3">V</span>
      <span style="--i:4">O</span>
      <span style="--i:5">U</span>
      <span style="--i:6">R</span>
      <span style="--i:7">I</span>
      <span style="--i:8">T</span>
      <span style="--i:9">E</span>
     </div>
     <br>
     <h3 class="subhead">Get all your favourite shows here!</h3> 

        <div class="Fashionshows-grid">
${this.favFashionshows == null ? html`
  <sl-spinner></sl-spinner>
` : html`
  ${this.favFashionshows.map(fashionshow => html`
    <as-fashionshow class="fashionshow-card"
      id="${fashionshow._id}"
      name="${fashionshow.name}"
      description="${fashionshow.description}"
      price="${fashionshow.price}"
      user="${JSON.stringify(fashionshow.user)}"
      image="${fashionshow.image}"
    >        
    </as-fashionshow >
  

  `)}
`}

</div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new favouriteFashionshowsView()