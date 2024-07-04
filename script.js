var runs=0;
var wickets=0;
var over=0;
var aage=0;
function six(){
    runs = runs+6;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="gone for six"
}
function wide(){
    runs++;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
}
function wo(){
    runs=runs+2;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
}
function wt(){
    runs=runs+3;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
}
function wth(){
    runs=runs+4;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
}
function wf(){
    runs=runs+5;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
}
function wicket(){
    wickets++;
    over++;
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    if(wickets==10){
        dp.innerHTML="all out!"
    }
    up.innerHTML="it's wicket"

}
function four(){
    runs = runs+4;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="gone for four"
}
function three(){
    runs = runs+3;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="play nicely for three"
}
function double(){
    runs = runs+2;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="great shot for two"
}
function single(){
    runs++;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="it's single"
}
function nb(){
    runs++;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
    up.innerHTML="its free hit on the next delivery"
}
function nbo(){
    runs=runs+2;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
    up.innerHTML="its free hit on the next delivery"
}
function nbt(){
    runs=runs+3;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
    up.innerHTML="its free hit on the next delivery"
}
function nbth(){
    runs=runs+4;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
    up.innerHTML="its free hit on the next delivery"
}
function nbf(){
    runs=runs+5;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
    up.innerHTML="its free hit on the next delivery"
}
function nbs(){
    runs=runs+7;
    adi.innerHTML=runs+"-"+wickets+"/"+aage+"."+over
    up.innerHTML="its free hit on the next delivery"
}
function lbo(){
    runs++;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="it's leg bye single"
}
function lbt(){
    runs=runs+2;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="it's leg bye and double"
}
function lbth(){
    runs=runs+3;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="it's leg bye and three runs"
}
function lbf(){
    runs=runs+4;
    over++
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    up.innerHTML="it's leg bye and gone for four"
}
function dot(){
    over++;
    if(over==6){
        aage++;
       adi.innerHTML=runs+"-"+wickets+"/"+aage+".0"
       over=0;
    }
    adi.innerHTML = runs+"-"+wickets+"/"+aage+"."+over;
    up.innerHTML="it's dot"
}