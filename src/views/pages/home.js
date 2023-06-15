import App from './../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content1">
        <video autoplay muted loop id="myVideo">
        <source src="videos/video.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <div class="page-contenth">    
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
        <div class="overlay">
        <h1 class="specialtitle" ><center> ${Auth.currentUser.firstName} !</center> </h1>
        <h3 class="homeh" ><center>Take a tour to our:</center></h3>
        </div>
        <div class="buttonhome">
        <sl-button class="anim-in" @click=${() => gotoRoute('/fashionshows')}>Fashionshows</sl-button>
        <sl-button class="anim-in" @click=${() => gotoRoute('/masterclasses')}>Masterclasses</sl-button>
        </div>
      </div>
     
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()