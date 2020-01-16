function column(w,l,c,mode, Colour){
this.w=w
this.l=l
this.c=c || [random(0, 255), random(0, 255), random(0, 255)]
this.Colour=Colour

function colorise(){
	if(mode=="random")
	{
	 	  c1 = random(0, 255)
    	c2 = random(0, 255)
    	c3 = random(0, 255)
      this.c= [c1, c2, c3]
    }
   else if(mode="single")
   {
   	
    this.c=this.Colour

   }
    
}
}