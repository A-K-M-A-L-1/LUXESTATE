// Get the navbar element
const navbar = document.getElementById('nav');

// Function to toggle the 'scrolled' class based on scroll position
function handleScroll() {
    if (window.scrollY > 0) {
        
        navbar.setAttribute("class", 'scrolled');


    } else {
        navbar.removeAttribute("class", 'scrolled');
    }
}

// Listen for the 'scroll' event and call the handleScroll function
window.addEventListener('scroll', handleScroll);




/*                         HAMBURGER MENU                               */


let menu = document.getElementsByClassName(`bar`);




const visible = () => {    


    const mytext = `
    
    background: linear-gradient(120deg, black, transparent 700px);
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    

    `

    const myhiddentext = `
    
    display: none;
  
    `

     document.querySelector(`#nav`).style.cssText = mytext; 
     document.querySelector('.bar').style.cssText = myhiddentext;

}
 
 
 document.querySelector(`.bar`).addEventListener(`click`, visible)



const hidden = ()=> { 
    const myhiddentext = `
    
    display: none;
  
    `

    const mytext = `
    display: block;
    `

    document.querySelector(`#nav`).style.cssText = myhiddentext;
    document.querySelector('.bar').style.cssText = mytext;
}

document.querySelector(`.cross`).addEventListener(`click`,hidden)




