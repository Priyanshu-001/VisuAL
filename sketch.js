var total = 12;
var data = [];

function setup() {
  o = total
  SWAPS=0
  cmps=0
  isDone=false

  background(0)
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
      if(data[j].l>data[j+1].l)
      {
        swap(j,j+1)
      }
      limit-=1
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

function draw() {



  // sortIt()
  frameRate(1)

  // o=selectionSort(o)
  o=bubbleSort(o)
  background(255);
  plot()


 
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

