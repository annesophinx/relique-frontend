import { LitElement, html } from 'lit'
import {render} from 'lit'
import {anchorRoute, gotoRoute} from '../Router'
import Auth from '../Auth'
import App from '../App'
import UserAPI from '../UserAPI'
import Toast from '../Toast'




customElements.define('as-masterclass', class Masterclass extends LitElement {
 constructor(){
   super()   
 }


 static get properties(){
   return {
     id:{
       type: String
     },
     name: {
       type: String
     },
     description: {
       type: String
     },
     price: {
       type: Number
     },
     image: {
       type: String
     },
     user: {
       type: Object
     }
              
   }
 }


 firstUpdated(){
   super.firstUpdated()
 }


 moreInforHander(){
   //create sl-dialog
   const dialogEl = document.createElement('sl-dialog')
   //add className
   dialogEl.className = 'masterclass-dialog'
   //sl-dialog content
   const dialogContent = html`
   <style>
   h2{
    font-family: var(--special-font-family);
   }
   p{
    font-family: var(--base-font-family);
    font-weight: lighter;
    color: var(--heading-color);
   }
   .photo-gallery{
    max-width: 40em;
    max-height:30em;
   }
  .photo img{
    width: 100%;
  }
 
   </style>

   
  <div class= "photo-gallery">
  <div class="photo"> 
   <img src="${App.apiBase}/images/${this.image}" data-scroll-zoom />
  </div>
   <h2>${this.name}</h2>
   <p>${this.description}</p>
   <h3>$${this.price}</h3>
   <p class="author">by ${this.user.firstName} ${this.user.lastName}</p>
     </div>
   </div>
</div>
 `
   render(dialogContent, dialogEl)
   //append to document.body
   document.body.append(dialogEl)


   //show sl-dialog
   dialogEl.show()


   //on hide delete dialogEl
   dialogEl.addEventListener('sl-after-hide', () => {
     dialogEl.remove()
 })
  
 }
  async addFavHandler(){   
   try {
     await UserAPI.addFavFashionshow(this.id)
     Toast.show('masterclass added to favourites')
   }catch(err){
     Toast.show(err, 'error')
   }
 }
 render(){   
   return html`
   <style>
   h2{
    font-family: var(--special-font-family);
   }
   .photo-gallery{
    margin-left:0.5em;
    padding-left: 0.5em;
    padding-top:0.5em;
    max-height: 42em;
    max-width: 21em;
    transition: transform .2s; /* Animation */
   }
   .photo-gallery:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
   .photo img{
    width: 100%;
   }

   </style>


   
  <sl-card class= "photo-gallery">
  <div class="photo"> 
   <img src="${App.apiBase}/images/${this.image}" data-scroll-zoom />
  </div>
   <h2>${this.name}</h2>
   <h3>$ ${this.price}</h3>
   <p class="author">by ${this.user.firstName} ${this.user.lastName}</p>
   <sl-button class="buttonhome1" @click=${this.moreInforHander.bind(this)}> More Info </sl-button>
 </sl-card>
  </div>
 
   `
 }
 })
