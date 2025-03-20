let boxes=document.querySelectorAll(".boxes")
let  first=0
let po=0
let w=document.getElementById("w")
let h1=document.createElement("h1")
let dr=document.getElementById("dr")
let dh=document.createElement("h1")
const winpatern=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
  ]
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(first==0){
        box.value="x"
        
        first=1
        
        }
        else{
            box.value="o"
            first=0
        }
        box.disabled=true
        
        
        checkwinner ()
    })
   
   
     
    })
   const checkwinner = () =>{

    for(let pat of winpatern ){
    let pos1=boxes[pat[0]].value
    let pos2=boxes[pat[1]].value
    let pos3=boxes[pat[2]].value
     if( pos1!=""&& pos2!=""&& pos3!=""){
    if(pos1===pos2 && pos2===pos3 ){
        
      
   
    h1.textContent="winner is "+pos1

  po++
   

    boxes.forEach((box)=>{
        
    
    box.disabled=true
    
    })
    w.appendChild(h1)
  
    console.log("winner")
    
    
  
    }
    
   
      
   
}

}

    }

   
let newg=document.getElementById("newg")
newg.addEventListener("click",() => {
boxes.forEach((box)=>{
box.value=""
box.disabled=false
h1.textContent=""
po=0
dh.textContent=""

})

})
let reset=document.getElementById("re")
reset.addEventListener("click",() => {
boxes.forEach((box)=>{
box.value=""
box.disabled=false
h1.textContent=""
po=0
dh.textContent=""
})})
