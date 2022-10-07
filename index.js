
function submit() {

  var q=1,r=1,s=1,t=1,u=1,v=1,w=1,x=1,y=1,z=1,a1=1,a2=1;

  var a=1;  
  b=document.getElementById("h1_2").value;  
  c=document.getElementById("h1_3").value;  
   var d=4;  
  e=document.getElementById("h2_1").value;  
  f=document.getElementById("h2_2").value;  
   var g=2;  
  h=document.getElementById("h2_4").value;   
  i=document.getElementById("h3_1").value;  
  j=document.getElementById("h3_2").value;  
  k=document.getElementById("h3_3").value;  
   var l=3;  
  m=document.getElementById("h4_1").value;  
  n=document.getElementById("h4_2").value;  
  o=document.getElementById("h4_3").value;  
  var p=2;    
//checking Row
 if(a!=b!=c!=d) 
 {  --q;
    

 }
 if(e!=f!=g!=h) 
 {  --r;
    

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




