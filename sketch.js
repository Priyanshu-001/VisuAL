const total = 6;
var data = [];
var execute=false
curr=0


function setup() {
  o = total
  SWAPS=0
  execute=false
  cmps=0
  isDone=false
  button= createButton("Start")
  button.position(height/2,width/2)
  button.mousePressed(Toggle)
   dropdown = createSelect(); 
    // Position the dropdown menu 
    dropdown.position(button.x,button.y+button.height); 
    // Set options 
    dropdown.option("selectionSort"); 
    dropdown.option("bubbleSort"); 
    

 
  createCanvas(420, 400);
  w = width / total
  for (i = 0; i < total; i++) {
   
    a = new column(w, random(10, 100))
   

    data.push(a)
  }
}

function swap(a, b) {
  SWAPS+=1
  temp = data[a]
  data[a] = data[b]
  data[b] = temp

}

function bubbleSort(limit)
{
  
    for(j=0;j<limit-1;j++){
      console.log(j)
      console.log(limit)
      cmps+=1
      if(data[j].l>data[j+1].l)
      { 
        

        swap(j,j+1)
      }
    }
      limit-=1
      if(limit==0){
        isDone=true
      }
      return limit
  
  }

function selectionSort(limit){
   j = getMax(limit)
  limit--
  
  swap(j, limit)
  if(limit==0){
    isDone=true
  }
  return limit


}
function Toggle(){
  execute=!execute
  o=total
 
 if(isDone){
  isDone=false
  loop()
 }
  
}

function sortIt(mode="selectionSort",o)
{
  if(mode="selectionSort")
  {
    o=selectionSort(o)

  }
  else if(mode="bubbleSort")
  {
    o=bubbleSort(o)
  }
  return o
}
function draw() {

 

  // sortIt()
 
  // o=selectionSort(o)
  
 // o=bubbleSort(o)
  
  
  if(execute){

  background(255)
  plot()
  frameRate(1)

  o=sortIt(dropdown.value,o)
  console.log("Sorting Starts")


 }
  if (isDone) {
    noLoop()
    console.log("done")
    console.log("Swaps=",SWAPS)
    console.log("Comparisons=",cmps)
  }

}

function getMax(limit) {
  m = data[limit - 1].l
  bigg = limit - 1
  for (i = 0; i < limit; i++) {
    cmps+=1
    if (m < data[i].l) {
      m = data[i].l
      bigg = i
    }

  }
  return bigg
}

function plot() {
  for (i = 0; i < total; i++) {
    fill(data[i].c)
    obj = rect(w * i, 200, data[i].w, -data[i].l)

  }

}


