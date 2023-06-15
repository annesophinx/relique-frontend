import App from '../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import MasterclassAPI from './../../MasterclassAPI'

class MasterclassesView {
  init(){
    document.title = 'Masterclassses'    
    this.masterclasses = null
    this.render()    
    Utils.pageIntroAnim()
    this.getMasterclasses()
  }
 async  getMasterclasses(){
    try{
      this.masterclasses = await MasterclassAPI.getMasterclasses()
      console.log(this.masterclasses)
      this.render()
      
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Masterclasses" user="${JSON.stringify(Auth.currentUser)}"><lottie-player class="master" src="https://assets5.lottiefiles.com/packages/lf20_crwpngvr.json"  background="transparent"  speed="1"  style="width: 60px; height: 50px;"  loop autoplay></lottie-player></va-app-header>
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
      <h3 class="subhead">Get prepared for our memorable masterclasses.</h3> 
      <br>
      <div class="masterclasses-grid">    
      ${this.masterclasses == null ? html`
      <sl-spinner></spinner>
      `:html`
      ${this.masterclasses.map(masterclass => html`
      <as-masterclass class="masterclass-card"
      id="${masterclass._id}"
      name="${masterclass.name}"
      image="${masterclass.image}"
      description="${masterclass.description}"
      price="${masterclass.price}"
      user="${JSON.stringify(masterclass.user)}"
      >
      </as-masterclass>
      `)}
      `}
       </div>
     </div>     
   `
    render(template, App.rootEl)
  }
}


export default new MasterclassesView()





