import App from './App'
import Auth from './Auth'
import Toast from './Toast'

class FashionshowAPI {

  async newFashionshow(formData){
    // send fetch request
    const response = await fetch(`${App.apiBase}/fashionshow`, {
      method: 'POST',
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`},
      body: formData
    })
  
    // if response not ok
    if(!response.ok){ 
      let message = 'Problem adding fashionshow'
      if(response.status == 400){
        const err = await response.json()
        message = err.message
      }      
      // throw error (exit this function)      
      throw new Error(message)
    }
    
    // convert response payload into json - store as data
    const data = await response.json()
    
    // return data
    return data
  }
  
  
  async getFashionshows(){
    
    // fetch the json data
    const response = await fetch(`${App.apiBase}/fashionshow`, {
      headers: { "Authorization": `Bearer ${localStorage.accessToken}`}
    })

    // if response not ok
    if(!response.ok){ 
      // console log error
      const err = await response.json()
      if(err) console.log(err)
      // throw error (exit this function)      
      throw new Error('Problem getting fashionshow')
    }
    
    // convert response payload into json - store as data
    const data = await response.json()
    
    // return data
    return data
  }
}

export default new FashionshowAPI()