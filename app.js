const b = document.querySelector('button.button--no')
const a = document.querySelector('button.button--yes')
const ques = document.getElementById('question')
b.addEventListener("mouseover", moveHover)
function moveHover(){
    const i=Math.floor(Math.random( ) * 500)+1 ;
    const j=Math.floor(Math.random( ) * 500)+1 ;
    const o=Math.floor(Math.random( ) * 500)+1 ;
    const n=Math.floor(Math.random( ) * 500)+1 ;

   b.style.right=i+"px"
   b.style.top=j+"px"
}
a.addEventListener("click", ()=>{
ques.innerHTML = "SHEEEESH ANG ANGAS MO ATE"
})