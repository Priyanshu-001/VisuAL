function column(w,l,c,mode){
this.w=w
this.l=l
this.c=c || [random(0, 255), random(0, 255), random(0, 255)]

function colorise(){
	if(mode=="random")
	{
	 	c1 = random(0, 255)
    	c2 = random(0, 255)
    	c3 = random(0, 255)
    }
   else if(mode="gradient")
   {
   	
   }
    this.c= [c1, c2, c3]
}
}