import App from '../../App'
import {html, render } from 'lit'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import FashionshowAPI from '../../FashionshowAPI'
import Toast from '../../Toast'

class newFashionshowView {
  init(){
    document.title = 'New Fashionshow'    
    this.render()    
    Utils.pageIntroAnim()
  }
  async newFashionshowSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading','')
    const formData = new FormData(e.target)
    
    try{
      await FashionshowAPI.newFashionshow(formData)  
      Toast.show('Fashionshow added!')
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
      <div class="page-content1">
        <video autoplay muted loop id="myVideo2">
        <source src="videos/video2.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
      <div class="page-content">        
      <h1 class="black">New Masterclass</h1>
      <p class="register">Add a new Masterclass.</p>
        <form class="page-form" @submit=${this.newFashionshowSubmitHandler}>
  <input type="hidden" name="user" value="${Auth.currentUser._id}" />
  <div id="test" class="input-group">
    <sl-input name="name" type="text" placeholder="Fashionshow Name" required></sl-input>
  </div>
  <div class="input-group">              
  <sl-input name="price" type="text" placeholder="Price" required>
  <span slot="prefix">$</span>
</sl-input>
  </div>
  <div class="input-group">
    <sl-input type="text" name="description" rows="3" placeholder="Description"></sl-textarea>
  </div>
  <div class="input-group" style="margin-bottom: 2em;">
  <label class="register" >Upload Image: </label><br>
  <br>
    <input type="file" name="image" />              
  </div>
  <sl-button variant="primary" type="submit" class="submit-btn">Add Fashionshow</sl-button>
</form>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new newFashionshowView()