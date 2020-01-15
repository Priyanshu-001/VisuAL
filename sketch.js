
var total=15;
var data=[];
function setup() {
  background(0)
  createCanvas(400, 400);
  w=width/total
  for(i=0;i<total;i++)
  { c1=random(0,255)
    c2=random(0,255)
    c3=random(0,255)
   
   c=[c1,c2,c3]
    a= new column(w,random(10,100),c)
    // a.mouseOver()
    
    data.push(a)
  }
      }
function swap(a,b){
  temp=data[a]
  data[a]=data[b]
  data[b]=temp

}
 o=total
   

function draw() {
   

 
  // sortIt()
  frameRate(1)
   
   
    background(255);
     plot()
   
    
    j=getMax(o)
    o--
    console.log("J=",j)
    console.log("o=",o)
    
    swap(j,o)
      
  if(o==0)
  {
    noLoop()
    console.log("done")
  }

}
function getMax(limit){
  m=data[limit-1].l
  bigg=limit-1
   for(i=0;i<limit;i++)
  { 
   if(m<data[i].l)
   {
       m=data[i].l
       bigg=i
   }
  
  }
   return bigg
}
function plot()
{
   for(i=0;i<total;i++)
  {
    fill(data[i].c)
     obj=rect(w*i, 200,data[i].w, -data[i].l)
   
  }
  
}
function changeColor()
{
  console.log("abc")
}