function show1(){
    document.getElementById("hide").style.display="block";
    document.getElementById("read2").style.display="block";
    document.getElementById("readsymbol2").style.display="inline-block";
    document.getElementById("read1").style.display="none";
    document.getElementById("readsymbol").style.display="none";
  
}
function show2(){
    document.getElementById("hide").style.display="none";
    document.getElementById("read2").style.display="none";
    document.getElementById("readsymbol2").style.display="none";
    document.getElementById("read1").style.display="block";
    document.getElementById("readsymbol").style.display="block";
}

window.onscroll = function() {headhide()}
function headhide(){
    let x = window.matchMedia("max-width:768px")
if(x){
    document.getElementById("heading").style.display="none";
}
    if(document.documentElement.scrollTop > 300)
    {
        document.getElementById("navcont").style.display="none";
        document.getElementById("heading").style.display="block";
}
if(document.documentElement.scrollTop < 300){
    document.getElementById("navcont").style.display="block";
}

}
function bdiv2contshow(){
        document.getElementById("b2").classList.add("show");
        document.getElementById("minus1").style.display="block";
        document.getElementById("plus1").style.display="none";      
    }
    function bdiv2conthide(){
        document.getElementById("b2").classList.remove("show");
        document.getElementById("minus1").style.display="none";
        document.getElementById("plus1").style.display="block";  
    }

    function bdiv3contshow(){
        document.getElementById("b3").classList.add("show");
        document.getElementById("minus2").style.display="block";
        document.getElementById("plus2").style.display="none";  
    }
    function bdiv3conthide(){
        document.getElementById("b3").classList.remove("show");
        document.getElementById("minus2").style.display="none";
        document.getElementById("plus2").style.display="block";  
    }

  
    