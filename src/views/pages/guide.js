import App from '../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Toast from '../../Toast'
import UserAPI from '../../UserAPI'

class guideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
    this.updateCurrentUser()
  }
//update user
  async updateCurrentUser(){
    try{ //try user
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, { newUser: false}, 'json')
      console.log('user updated')
      console.log(updatedUser)
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
          
      <div class="page-contenthc"> 
      <div class="page-content">     
        <div class="waviy">
        <span style="--i:1">W</span>
        <span style="--i:2">E</span>
        <span style="--i:3">L</span>
        <span style="--i:4">C</span>
        <span style="--i:5">O</span>
        <span style="--i:6">M</span>
        <span style="--i:7">E</span>
       </div>
       <br>
        <h1 class="specialtitle" ><center> ${Auth.currentUser.firstName} !</center> </h1>
        
        <p> <center>This is a quick tour to teach you the basics of using Relique ...<center></p>
        <a class="down" href="#down">click to scroll down</a>
        <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_1TcivY.json"  background="transparent"  speed="1"  style="width: 450px; height: 450px;"  loop  autoplay></lottie-player>
        
        
      <div class="guide-step">
        <h4 id="down" >Know more about the Fashion industry</h4>
        <img src="images/more.png">
      </div>
      
      <div class="guide-step">
        <h4>Add Fashionshows to favourite</h4>
        <img src="images/favourite.png">
      </div>
      
      <div class="guide-step">
        <h4>Add a new Masterclass</h4>
        <img src="images/masterclass.png">
      </div>
      
      <sl-button variant="primary" @click=${() => gotoRoute('/')}>Okay got it!</sl-button>
    
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new guideView()