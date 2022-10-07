
function submit() {

  var q=1,r=1,s=1,t=1,u=1,v=1,w=1,x=1,y=1,z=1,a1=1,a2=1;

  a=parseInt(document.getElementById("h1_1").value);  
  b=parseInt(document.getElementById("h1_2").value);  
  c=parseInt(document.getElementById("h1_3").value);  
   var d=3;  
   var e=4;  
  f=parseInt(document.getElementById("h2_2").value);  
  g=parseInt(document.getElementById("h2_3").value);  
  h=parseInt(document.getElementById("h2_4").value);   
  i=parseInt(document.getElementById("h3_1").value);  
  var j=1;  
  var k=3;  
  l=parseInt(document.getElementById("h3_4").value);  
  var m=3;  
  n=parseInt(document.getElementById("h4_2").value);  
  var o=2;  
  p=parseInt(document.getElementById("h4_4").value);    
//checking Row
 if(a!=b!=c!=d) 
 {  --q;
    

 }
 if(e!=f!=g!=h) 
 {  --r;
    console.write

 }if(i!=j!=k!=l) 
 {  --s;
    

 }
 if(m!=n!=o!=p) 
 {  --t;
    

 }
 //checking Coloum

 if(a!=e!=i!=m) 
 { --u;
    

 }
 if(a!=f!=j!=n) 
 {  --v;
    

 }
 if(c!=g!=k!=o) 
 {  --w;
    

 }
 if(d!=h!=l!=p) 
 {  --x;
    

 }

//checking Boxes
 if(a!=b!=e!=f) 
 {  --y;
    

 }
 if(c!=d!=g!=h) 
 {  --z;
    

 }
 if(i!=j!=m!=n) 
 {  --a1;
    

 }
 
 if(k!=l!=o!=p) 
 {  --a2;
    

 }

if(q==r==s==t==u==v==w==x==y==z==a1==a2==0)
{
   alert("You are a winner");
}
 else
 {
   alert("Sorry try again");

 }

}


