import App from './../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'

class ProfileView {
  init(){
    console.log('ProfileView.init')
    document.title = 'Profile'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        ${Auth.currentUser && Auth.currentUser.avatar ? html`
          <sl-avatar style="--size: 350px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
        
          `:html`
        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        `}
        <h2 class="stitle">${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h2>
        <p>${Auth.currentUser.email}</p>
        
        <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>
        
        ${Auth.currentUser.bio ? html` 
        <h3>Bio</h3>
          <p>${Auth.currentUser.bio}</p>
         
        
        `: html`  
        <p> no bio yet </p>
        
        `}
        <sl-button  @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>

    </div>
      </div>   
      <div class="icons">
      <div class="icon-child">
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_Joz0FE.json"  background="transparent"  speed="1"  style="width: 3em; height: 5em;"  loop  autoplay></lottie-player>
      </div>
      <div class="icon-child">
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_3s913D.json"  background="transparent"  speed="1"  style="width: 3em; height: 5em;"  loop  autoplay></lottie-player>
      </div>
      <div class="icon-child">
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_rS001s.json"  background="transparent"  speed="1"  style="width: 3em; height: 5em;"  loop  autoplay></lottie-player>
      </div>
      </div> 
  `
    render(template, App.rootEl)
  }
}


export default new ProfileView()