import App from './../../App'
import Auth from './../../Auth'
import {html, render } from 'lit'
import {anchorRoute, gotoRoute} from './../../Router'
import Utils from './../../Utils'


class SignUpView{
   
  init(){      
    console.log('SignUpView.init')  
    document.title = 'Sign In'    
    this.render()
    Utils.pageIntroAnim()
  }

  signUpSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = new FormData(e.target)
    
    // sign up using Auth
    Auth.signUp(formData, () => {
      submitBtn.removeAttribute('loading')
    })   
  }

  render(){
    const template = html`      
    <img class="back"  src="images/landscreen.jpg" />
    <div class="page-content page-centered">
    <div class="content">
    <h2 class="stitle" >Relique</h2>
    <h2 class="stitle" >Relique</h2>
    </div>    
        <div class="signinup-box1">
          <h1 class="cream" >Sign Up</h1>
          <form class="input-validation-required" @submit="${this.signUpSubmitHandler}" enctype="multipart/form-data">
            <div class="input-group">
              <sl-input class="box2" name="firstName" type="text" placeholder="First Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input class="box2" name="lastName" type="text" placeholder="Last Name" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input class="box2" name="email" type="email" placeholder="Email" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input class="box2" name="phone" type="text" placeholder="Phone" required></sl-input>
            </div>
            <div class="input-group">
              <sl-input class="box2" name="password" type="password" placeholder="Password" required toggle-password></sl-input>
            </div>            
            <div class="input-group">
            <sl-select name="accessLevel" placeholder="I am a ...">
             <sl-option value="1">Customer</sl-option>
            <sl-option value="2">Fashion Show Organiser</sl-option>
            <sl-option value="3">Masterclass Giver</sl-option>
          </sl-select>
            </div>
            <sl-button variant="primary" type="submit" class="submit-btn" style="width: 100%;">Sign Up</sl-button>
          </form>
          <p class="register">Have an account? <a href="/signin" @click=${anchorRoute}>Sign In</a></p>
        </div>
      </div>
    `
    render(template, App.rootEl)
  }
}


export default new SignUpView()