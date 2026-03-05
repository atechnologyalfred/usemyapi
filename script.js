
const main = document.querySelector("main");
const span = document.querySelector("span");
const fetchApi = async () => {
  span.style.display = 'block';
  try {
    const res = await fetch("https://fetchapi-o5nd.onrender.com/");
    const data = await res.json();
    console.log
    data.forEach((data) => {
      const content = `
    <button 
            style="width: 60%; background-color: #f4f6f8; 
            box-shadow: 1px 1px 1px rgba(0,0,0,0.1); padding:1rem; margin: 0 auto; display: flex;
            flex-direction: column; align-items: center; justify-contents: center; border: none;
            border-radius: 1rem; cursor: pointer;" data-id=${data.id}>

                <h2>${data.name} (${data.gender})</h2>
                <p>${data.tech} at ${data.age}</p>
                <div style="background-color: #fff; box-shadow: 1px 1px 1px rgba(0,0,0,0.1); 
                padding: 2rem 4rem; display: flex; gap: 4px;">
                ${data.movement.map(mov=>` <span>${mov}</span>`      
                )}
                </div>
    </button>
            `;
      main.innerHTML += content;
    });
  } catch (err) {
    console.error(err);
  } finally {
    span.style.display = 'none'
  }
};
fetchApi();

main.addEventListener('click', (e)=> {
    const click = e.target;
    const id = click.dataset.id;

})
