const loadPosts= () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayAI(data.data.tools));
}

const displayAI = (AI) =>{
  const aiContainer = document.getElementById('AI-container');
  console.log(AI[0]);
  AI.forEach(Ai => {
      const div = document.createElement('div');
      div.classList.add = 'col';
      div.innerHTML = `
      <div class="card p-2">
              <img src="${Ai.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
          <ol type="1">
            <li>${Ai.features[0]}</li>
            <li>${Ai.features[1]}</li>
            <li>${Ai.features[2]}</li>
          </ol>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
              <div>
                <h5>${Ai.name}</h5>
                <p><i class="fa-regular fa-calendar-days"></i> ${Ai.published_in}</p>
              </div>
              <button class="rounded-circle my-5 my-auto"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
      ` 
      aiContainer.appendChild(div);   
  });
  
}

loadPosts();
