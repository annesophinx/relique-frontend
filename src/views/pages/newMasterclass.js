import App from './../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import MasterclassAPI from '../../MasterclassAPI'
import Toast from '../../Toast'

class newMasterclassView {
  init(){
    document.title = 'New Masterclass'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newMasterclassSubmitHandler(e){
    e.preventDefault()    
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = new FormData(e.target)
    try{
        await MasterclassAPI.newMAsterclass(formData)  
        Toast.show('Masterclass added!')
        submitBtn.removeAttribute('loading')
        //reset form
        //reset text + textarea inputs
    const textInputs = document.querySelectorAll('sl-input, sl-textarea')
    if(textInputs) textInputs.forEach(textInputs => textInputs.value = null)
        // reset file input
    const fileInput = document.querySelector('input[type=file]')
    if(fileInput) fileInput.value = null

    }catch(error){
    Toast.show(err)
    submitBtn.removeAttribute('loading')
    }
    
  }
  
  render(){
    const template = html`
      <va-app-header user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <video autoplay muted loop id="myVideo3">
        <source src="videos/video3.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
      <div class="page-content1">        
        <h1 class="black">New Masterclass</h1>
        <p class="register">Add a new Masterclass.</p>
        <form class="page-form" @submit=${this.newMasterclassSubmitHandler}>
  <input type="hidden" name="user" value="${Auth.currentUser._id}" />
  <div class="input-group">
    <sl-input name="name" type="text" placeholder="Masterclass Name" required></sl-input>
  </div>
  <div class="input-group">              
    <sl-input name="price" type="text" placeholder="Price" required>
      <span slot="prefix">$</span>
    </sl-input>
  </div>
  <div class="input-group">
    <sl-textarea name="description" rows="3" placeholder="Description"></sl-textarea>
  </div>
  <div class="input-group" style="margin-bottom: 2em;">
    <label class="register" >Upload Image: </label><br>
    <br>
    <input type="file" name="image" />              
  </div>
  <sl-button variant="primary" type="submit" class="submit-btn">Add Masterclass</sl-button>
</form>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new newMasterclassView()