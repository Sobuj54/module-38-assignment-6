const singleApi = ai =>{
    fetch('https://openapi.programming-hero.com/api/ai/tool/01')
    .then(res => res.json())
    .then (data => displaySingleApi(data.data));
} 

const displaySingleApi = data =>{
    //console.log(data);
    const modalBody = document.getElementById('modal-body');
    const div = document.createElement('div');
    div.classList.add('d-flex');
    div.innerHTML = `
    <div>
    <h5>${data.description}</h5>
    <div class="d-flex gap-1 border">
      <p>${data.pricing[0].price}</p>
      <p>${data.pricing[1].price}</p> 
      <p>${data.pricing[2].price}</p>
    </div>
    <div class="d-flex">
      <div>
        <h5>Features</h5>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <h5>intergrations</h5>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
  <div>
   
      <img src="${data.image_link[0]}" class="img-fluid" alt="">
      <h5></h5>
      <p></p>
    
  </div>
    `
    modalBody.appendChild(div);
}

singleApi();