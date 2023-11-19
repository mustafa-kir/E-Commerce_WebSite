
var size1 = document.querySelector("#size1");

size1.classList.add("hideSize");

var product1 = document.querySelector("#product1");
var image1 = document.querySelector("#img1");
var footer1 = document.querySelector("#footer1");

var colImg11 = document.querySelector("#color11");
var colImg12 = document.querySelector("#color12");
var colImg13 = document.querySelector("#color13");
var colImg14 = document.querySelector("#color14");

var col11 = document.querySelector("#col11");
var col12 = document.querySelector("#col12");
var col13 = document.querySelector("#col13");
var col14 = document.querySelector("#col14");

colImg11.classList.add("active");

product1.addEventListener("mouseover",function(){
    image1.src = "img/DressPhoto/1/image1.jpeg";
    size1.classList.remove("hideSize");
    footer1.classList.add("footup");
})

product1.addEventListener("mouseout",function(){
    image1.src = "img/DressPhoto/1/image0.jpeg";
    size1.classList.add("hideSize");
    footer1.classList.remove("footup");
})

col11.addEventListener("mouseover",function(){
    colImg11.classList.add("active");
    colImg12.classList.remove("active");
    size1.classList.remove("hideSize");
    footer1.classList.add("footup");
    event.stopPropagation();
    image1.src = "img/DressPhoto/1/image1.jpeg";

})

col12.addEventListener("mouseover",function(){

    colImg12.classList.add("active");
    colImg11.classList.remove("active");
    size1.classList.remove("hideSize");
    footer1.classList.add("footup");
    event.stopPropagation();
    image1.src = "img/DressPhoto/1/image2.jpeg";
})

col13.addEventListener("mouseover",function(){

    colImg13.classList.add("active");
    colImg11.classList.remove("active");
    size1.classList.remove("hideSize");
    footer1.classList.add("footup");
    event.stopPropagation();
    image1.src = "img/DressPhoto/1/image3.jpeg";
})
col14.addEventListener("mouseover",function(){

    colImg14.classList.add("active");
    colImg11.classList.remove("active");
    size1.classList.remove("hideSize");
    footer1.classList.add("footup");
    event.stopPropagation();
    image1.src = "img/DressPhoto/1/image4.jpeg";
})
//2. ürün bölümü

var size2 = document.querySelector("#size2");

size2.classList.add("hideSize");

var product2 = document.querySelector("#product2");
var image2 = document.querySelector("#img2");
var footer2 = document.querySelector("#footer2");

var colImg21 = document.querySelector("#color21");
var colImg22 = document.querySelector("#color22");
var colImg23 = document.querySelector("#color23");
var colImg24 = document.querySelector("#color24");

var col21 = document.querySelector("#col21");
var col22 = document.querySelector("#col22");
var col23 = document.querySelector("#col23");
var col24 = document.querySelector("#col24");

colImg21.classList.add("active");

product2.addEventListener("mouseover",function(){
    image2.src = "img/DressPhoto/2/image1.jpeg";
    size2.classList.remove("hideSize");
    footer2.classList.add("footup");
})

product2.addEventListener("mouseout",function(){
    image2.src = "img/DressPhoto/2/image0.jpeg";
    size2.classList.add("hideSize");
    footer2.classList.remove("footup");
})

col21.addEventListener("mouseover",function(){
    colImg21.classList.add("active");
    colImg22.classList.remove("active");
    size2.classList.remove("hideSize");
    footer2.classList.add("footup");
    event.stopPropagation();
    image2.src = "img/DressPhoto/2/image1.jpeg";

})

col22.addEventListener("mouseover",function(){

    colImg22.classList.add("active");
    colImg21.classList.remove("active");
    size2.classList.remove("hideSize");
    footer2.classList.add("footup");
    event.stopPropagation();
    image2.src = "img/DressPhoto/2/image2.jpeg";
})

col23.addEventListener("mouseover",function(){

    colImg23.classList.add("active");
    colImg21.classList.remove("active");
    size2.classList.remove("hideSize");
    footer2.classList.add("footup");
    event.stopPropagation();
    image2.src = "img/DressPhoto/2/image3.jpeg";
})

col24.addEventListener("mouseover",function(){

    colImg24.classList.add("active");
    colImg21.classList.remove("active");
    size2.classList.remove("hideSize");
    footer2.classList.add("footup");
    event.stopPropagation();
    image2.src = "img/DressPhoto/2/image4.jpeg";
})

//3. ürün 


var size3 = document.querySelector("#size3");

size3.classList.add("hideSize");

var product3 = document.querySelector("#product3");
var image3 = document.querySelector("#img3");
var footer3 = document.querySelector("#footer3");

var colImg31 = document.querySelector("#color31");
var colImg32 = document.querySelector("#color32");
var colImg33 = document.querySelector("#color33");
var colImg34 = document.querySelector("#color34");

var col31 = document.querySelector("#col31");
var col32 = document.querySelector("#col32");
var col33 = document.querySelector("#col33");
var col34 = document.querySelector("#col34");

colImg31.classList.add("active");

product3.addEventListener("mouseover",function(){
    image3.src = "img/DressPhoto/3/image1.jpeg";
    size3.classList.remove("hideSize");
    footer3.classList.add("footup");
})

product3.addEventListener("mouseout",function(){
    image3.src = "img/DressPhoto/3/image0.jpeg";
    size3.classList.add("hideSize");
    footer3.classList.remove("footup");
})

col31.addEventListener("mouseover",function(){
    colImg31.classList.add("active");
    colImg32.classList.remove("active");
    size3.classList.remove("hideSize");
    footer3.classList.add("footup");
    event.stopPropagation();
    image3.src = "img/DressPhoto/3/image1.jpeg";

})

col32.addEventListener("mouseover",function(){

    colImg32.classList.add("active");
    colImg31.classList.remove("active");
    size3.classList.remove("hideSize");
    footer3.classList.add("footup");
    event.stopPropagation();
    image3.src = "img/DressPhoto/3/image2.jpeg";
})

col33.addEventListener("mouseover",function(){

    colImg33.classList.add("active");
    colImg31.classList.remove("active");
    size3.classList.remove("hideSize");
    footer3.classList.add("footup");
    event.stopPropagation();
    image3.src = "img/DressPhoto/3/image3.jpeg";
})

col34.addEventListener("mouseover",function(){

    colImg34.classList.add("active");
    colImg31.classList.remove("active");
    size3.classList.remove("hideSize");
    footer3.classList.add("footup");
    event.stopPropagation();
    image3.src = "img/DressPhoto/3/image4.jpeg";
})

//4. ürün 


var size4 = document.querySelector("#size4");

size4.classList.add("hideSize");

var product4 = document.querySelector("#product4");
var image4 = document.querySelector("#img4");
var footer4 = document.querySelector("#footer4");

var colImg41 = document.querySelector("#color41");
var colImg42 = document.querySelector("#color42");
var colImg43 = document.querySelector("#color43");
var colImg44 = document.querySelector("#color44");

var col41 = document.querySelector("#col41");
var col42 = document.querySelector("#col42");
var col43 = document.querySelector("#col43");
var col44 = document.querySelector("#col44");

colImg41.classList.add("active");

product4.addEventListener("mouseover",function(){
    image4.src = "img/DressPhoto/4/image1.jpeg";
    size4.classList.remove("hideSize");
    footer4.classList.add("footup");
})

product4.addEventListener("mouseout",function(){
    image4.src = "img/DressPhoto/4/image0.jpeg";
    size4.classList.add("hideSize");
    footer4.classList.remove("footup");
})

col41.addEventListener("mouseover",function(){
    colImg41.classList.add("active");
    colImg42.classList.remove("active");
    size4.classList.remove("hideSize");
    footer4.classList.add("footup");
    event.stopPropagation();
    image4.src = "img/DressPhoto/4/image1.jpeg";

})

col42.addEventListener("mouseover",function(){

    colImg42.classList.add("active");
    colImg41.classList.remove("active");
    size4.classList.remove("hideSize");
    footer4.classList.add("footup");
    event.stopPropagation();
    image4.src = "img/DressPhoto/4/image2.jpeg";
})

col43.addEventListener("mouseover",function(){

    colImg43.classList.add("active");
    colImg41.classList.remove("active");
    size4.classList.remove("hideSize");
    footer4.classList.add("footup");
    event.stopPropagation();
    image4.src = "img/DressPhoto/4/image3.jpeg";
})

col44.addEventListener("mouseover",function(){

    colImg44.classList.add("active");
    colImg41.classList.remove("active");
    size4.classList.remove("hideSize");
    footer4.classList.add("footup");
    event.stopPropagation();
    image4.src = "img/DressPhoto/4/image4.jpeg";
})


// 5. ürün


var size5 = document.querySelector("#size5");

size5.classList.add("hideSize");

var product5 = document.querySelector("#product5");
var image5 = document.querySelector("#img5");
var footer5 = document.querySelector("#footer5");

var colImg51 = document.querySelector("#color51");
var colImg52 = document.querySelector("#color52");
var colImg53 = document.querySelector("#color53");


var col51 = document.querySelector("#col51");
var col52 = document.querySelector("#col52");
var col53 = document.querySelector("#col53");


colImg51.classList.add("active");

product5.addEventListener("mouseover",function(){
    image5.src = "img/DressPhoto/5/image1.jpeg";
    size5.classList.remove("hideSize");
    footer5.classList.add("footup");
})

product5.addEventListener("mouseout",function(){
    image5.src = "img/DressPhoto/5/image0.jpeg";
    size5.classList.add("hideSize");
    footer5.classList.remove("footup");
})

col51.addEventListener("mouseover",function(){
    colImg51.classList.add("active");
    colImg52.classList.remove("active");
    size5.classList.remove("hideSize");
    footer5.classList.add("footup");
    event.stopPropagation();
    image5.src = "img/DressPhoto/5/image1.jpeg";

})

col52.addEventListener("mouseover",function(){

    colImg52.classList.add("active");
    colImg51.classList.remove("active");
    size5.classList.remove("hideSize");
    footer5.classList.add("footup");
    event.stopPropagation();
    image5.src = "img/DressPhoto/5/image2.jpeg";
})

col53.addEventListener("mouseover",function(){

    colImg53.classList.add("active");
    colImg51.classList.remove("active");
    size5.classList.remove("hideSize");
    footer5.classList.add("footup");
    event.stopPropagation();
    image5.src = "img/DressPhoto/5/image3.jpeg";
})



// 6. ürün
var size6 = document.querySelector("#size6");

size6.classList.add("hideSize");

var product6 = document.querySelector("#product6");
var image6 = document.querySelector("#img6");
var footer6 = document.querySelector("#footer6");

var colImg61 = document.querySelector("#color61");
var colImg62 = document.querySelector("#color62");
var colImg63 = document.querySelector("#color63");
var colImg64 = document.querySelector("#color64");

var col61 = document.querySelector("#col61");
var col62 = document.querySelector("#col62");
var col63 = document.querySelector("#col63");
var col64 = document.querySelector("#col64");

colImg61.classList.add("active");

product6.addEventListener("mouseover",function(){
    image6.src = "img/DressPhoto/6/image1.jpeg";
    size6.classList.remove("hideSize");
    footer6.classList.add("footup");
})

product6.addEventListener("mouseout",function(){
    image6.src = "img/DressPhoto/6/image0.jpeg";
    size6.classList.add("hideSize");
    footer6.classList.remove("footup");
})

col61.addEventListener("mouseover",function(){
    colImg61.classList.add("active");
    colImg62.classList.remove("active");
    size6.classList.remove("hideSize");
    footer6.classList.add("footup");
    event.stopPropagation();
    image6.src = "img/DressPhoto/6/image1.jpeg";

})

col62.addEventListener("mouseover",function(){

    colImg62.classList.add("active");
    colImg61.classList.remove("active");
    size6.classList.remove("hideSize");
    footer6.classList.add("footup");
    event.stopPropagation();
    image6.src = "img/DressPhoto/6/image2.jpeg";
})

col63.addEventListener("mouseover",function(){

    colImg63.classList.add("active");
    colImg61.classList.remove("active");
    size6.classList.remove("hideSize");
    footer6.classList.add("footup");
    event.stopPropagation();
    image6.src = "img/DressPhoto/6/image3.jpeg";
})

col64.addEventListener("mouseover",function(){

    colImg64.classList.add("active");
    colImg61.classList.remove("active");
    size6.classList.remove("hideSize");
    footer6.classList.add("footup");
    event.stopPropagation();
    image6.src = "img/DressPhoto/6/image4.jpeg";
})
//7.ürün
var size7 = document.querySelector("#size7");

size7.classList.add("hideSize");

var product7 = document.querySelector("#product7");
var image7 = document.querySelector("#img7");
var footer7 = document.querySelector("#footer7");

var colImg71 = document.querySelector("#color71");
var colImg72 = document.querySelector("#color72");
var colImg73 = document.querySelector("#color73");
var colImg74 = document.querySelector("#color74");

var col71 = document.querySelector("#col71");
var col72 = document.querySelector("#col72");
var col73 = document.querySelector("#col73");
var col74 = document.querySelector("#col74");

colImg71.classList.add("active");

product7.addEventListener("mouseover",function(){
    image7.src = "img/DressPhoto/7/image1.jpeg";
    size7.classList.remove("hideSize");
    footer7.classList.add("footup");
})

product7.addEventListener("mouseout",function(){
    image7.src = "img/DressPhoto/7/image0.jpeg";
    size7.classList.add("hideSize");
    footer7.classList.remove("footup");
})

col71.addEventListener("mouseover",function(){
    colImg71.classList.add("active");
    colImg72.classList.remove("active");
    size7.classList.remove("hideSize");
    footer7.classList.add("footup");
    event.stopPropagation();
    image7.src = "img/DressPhoto/7/image1.jpeg";

})

col72.addEventListener("mouseover",function(){

    colImg72.classList.add("active");
    colImg71.classList.remove("active");
    size7.classList.remove("hideSize");
    footer7.classList.add("footup");
    event.stopPropagation();
    image7.src = "img/DressPhoto/7/image2.jpeg";
})

col73.addEventListener("mouseover",function(){

    colImg73.classList.add("active");
    colImg71.classList.remove("active");
    size7.classList.remove("hideSize");
    footer7.classList.add("footup");
    event.stopPropagation();
    image7.src = "img/DressPhoto/7/image3.jpeg";
})

col74.addEventListener("mouseover",function(){

    colImg74.classList.add("active");
    colImg71.classList.remove("active");
    size7.classList.remove("hideSize");
    footer7.classList.add("footup");
    event.stopPropagation();
    image7.src = "img/DressPhoto/7/image4.jpeg";
})

//8. ürün 

var size8 = document.querySelector("#size8");

size8.classList.add("hideSize");

var product8 = document.querySelector("#product8");
var image8 = document.querySelector("#img8");
var footer8 = document.querySelector("#footer8");

var colImg81 = document.querySelector("#color81");
var colImg82 = document.querySelector("#color82");
var colImg83 = document.querySelector("#color83");
var colImg84 = document.querySelector("#color84");

var col81 = document.querySelector("#col81");
var col82 = document.querySelector("#col82");
var col83 = document.querySelector("#col83");
var col84 = document.querySelector("#col84");

colImg81.classList.add("active");

product8.addEventListener("mouseover",function(){
    image8.src = "img/DressPhoto/8/image1.jpeg";
    size8.classList.remove("hideSize");
    footer8.classList.add("footup");
})

product8.addEventListener("mouseout",function(){
    image8.src = "img/DressPhoto/8/image0.jpeg";
    size8.classList.add("hideSize");
    footer8.classList.remove("footup");
})

col81.addEventListener("mouseover",function(){
    colImg81.classList.add("active");
    colImg82.classList.remove("active");
    size8.classList.remove("hideSize");
    footer8.classList.add("footup");
    event.stopPropagation();
    image8.src = "img/DressPhoto/8/image1.jpeg";

})

col82.addEventListener("mouseover",function(){

    colImg82.classList.add("active");
    colImg81.classList.remove("active");
    size8.classList.remove("hideSize");
    footer8.classList.add("footup");
    event.stopPropagation();
    image8.src = "img/DressPhoto/8/image2.jpeg";
})

col83.addEventListener("mouseover",function(){

    colImg83.classList.add("active");
    colImg81.classList.remove("active");
    size8.classList.remove("hideSize");
    footer8.classList.add("footup");
    event.stopPropagation();
    image8.src = "img/DressPhoto/8/image3.jpeg";
})

col84.addEventListener("mouseover",function(){

    colImg84.classList.add("active");
    colImg81.classList.remove("active");
    size8.classList.remove("hideSize");
    footer8.classList.add("footup");
    event.stopPropagation();
    image8.src = "img/DressPhoto/8/image4.jpeg";
})

//9. ürün

var size9 = document.querySelector("#size9");

size9.classList.add("hideSize");

var product9 = document.querySelector("#product9");
var image9 = document.querySelector("#img9");
var footer9 = document.querySelector("#footer9");

var colImg91 = document.querySelector("#color91");
var colImg92 = document.querySelector("#color92");
var colImg93 = document.querySelector("#color93");

var col91 = document.querySelector("#col91");
var col92 = document.querySelector("#col92");
var col93 = document.querySelector("#col93");

colImg91.classList.add("active");

product9.addEventListener("mouseover",function(){
    image9.src = "img/DressPhoto/9/image1.jpeg";
    size9.classList.remove("hideSize");
    footer9.classList.add("footup");
})

product9.addEventListener("mouseout",function(){
    image9.src = "img/DressPhoto/9/image0.jpeg";
    size9.classList.add("hideSize");
    footer9.classList.remove("footup");
})

col91.addEventListener("mouseover",function(){
    colImg91.classList.add("active");
    colImg92.classList.remove("active");
    size9.classList.remove("hideSize");
    footer9.classList.add("footup");
    event.stopPropagation();
    image9.src = "img/DressPhoto/9/image1.jpeg";

})

col92.addEventListener("mouseover",function(){

    colImg92.classList.add("active");
    colImg91.classList.remove("active");
    size9.classList.remove("hideSize");
    footer9.classList.add("footup");
    event.stopPropagation();
    image9.src = "img/DressPhoto/9/image2.jpeg";
})

col93.addEventListener("mouseover",function(){

    colImg93.classList.add("active");
    colImg91.classList.remove("active");
    size9.classList.remove("hideSize");
    footer9.classList.add("footup");
    event.stopPropagation();
    image9.src = "img/DressPhoto/9/image3.jpeg";
})

//10. ürün

var size10 = document.querySelector("#size10");

size10.classList.add("hideSize");

var product10 = document.querySelector("#product10");
var image10 = document.querySelector("#img10");
var footer10 = document.querySelector("#footer10");

var colImg101 = document.querySelector("#color101");
var colImg102 = document.querySelector("#color102");
var colImg103 = document.querySelector("#color103");
var colImg104 = document.querySelector("#color104");

var col101 = document.querySelector("#col101");
var col102 = document.querySelector("#col102");
var col103 = document.querySelector("#col103");
var col104 = document.querySelector("#col104");

colImg101.classList.add("active");

product10.addEventListener("mouseover",function(){
    image10.src = "img/DressPhoto/10/image1.jpeg";
    size10.classList.remove("hideSize");
    footer10.classList.add("footup");
})

product10.addEventListener("mouseout",function(){
    image10.src = "img/DressPhoto/10/image0.jpeg";
    size10.classList.add("hideSize");
    footer10.classList.remove("footup");
})

col101.addEventListener("mouseover",function(){
    colImg101.classList.add("active");
    colImg102.classList.remove("active");
    size10.classList.remove("hideSize");
    footer10.classList.add("footup");
    event.stopPropagation();
    image10.src = "img/DressPhoto/10/image1.jpeg";

})

col102.addEventListener("mouseover",function(){

    colImg102.classList.add("active");
    colImg101.classList.remove("active");
    size10.classList.remove("hideSize");
    footer10.classList.add("footup");
    event.stopPropagation();
    image10.src = "img/DressPhoto/10/image2.jpeg";
})

col103.addEventListener("mouseover",function(){

    colImg103.classList.add("active");
    colImg101.classList.remove("active");
    size10.classList.remove("hideSize");
    footer10.classList.add("footup");
    event.stopPropagation();
    image10.src = "img/DressPhoto/10/image3.jpeg";
})

col104.addEventListener("mouseover",function(){

    colImg104.classList.add("active");
    colImg101.classList.remove("active");
    size10.classList.remove("hideSize");
    footer10.classList.add("footup");
    event.stopPropagation();
    image10.src = "img/DressPhoto/10/image4.jpeg";
})


// 11. ürün

var size11 = document.querySelector("#size11");

size11.classList.add("hideSize");

var product11 = document.querySelector("#product11");
var image11 = document.querySelector("#img11");
var footer11 = document.querySelector("#footer11");

var colImg111 = document.querySelector("#color111");
var colImg112 = document.querySelector("#color112");
var colImg113 = document.querySelector("#color113");
var colImg114 = document.querySelector("#color114");

var col111 = document.querySelector("#col111");
var col112 = document.querySelector("#col112");
var col113 = document.querySelector("#col113");
var col114 = document.querySelector("#col114");

colImg111.classList.add("active");

product11.addEventListener("mouseover",function(){
    image11.src = "img/DressPhoto/11/image1.jpeg";
    size11.classList.remove("hideSize");
    footer11.classList.add("footup");
})

product11.addEventListener("mouseout",function(){
    image11.src = "img/DressPhoto/11/image0.jpeg";
    size11.classList.add("hideSize");
    footer11.classList.remove("footup");
})

col111.addEventListener("mouseover",function(){
    colImg111.classList.add("active");
    colImg112.classList.remove("active");
    size11.classList.remove("hideSize");
    footer11.classList.add("footup");
    event.stopPropagation();
    image11.src = "img/DressPhoto/11/image1.jpeg";

})

col112.addEventListener("mouseover",function(){

    colImg112.classList.add("active");
    colImg111.classList.remove("active");
    size11.classList.remove("hideSize");
    footer11.classList.add("footup");
    event.stopPropagation();
    image11.src = "img/DressPhoto/11/image2.jpeg";
})

col113.addEventListener("mouseover",function(){

    colImg113.classList.add("active");
    colImg111.classList.remove("active");
    size11.classList.remove("hideSize");
    footer11.classList.add("footup");
    event.stopPropagation();
    image11.src = "img/DressPhoto/11/image3.jpeg";
})

col114.addEventListener("mouseover",function(){

    colImg114.classList.add("active");
    colImg111.classList.remove("active");
    size11.classList.remove("hideSize");
    footer11.classList.add("footup");
    event.stopPropagation();
    image11.src = "img/DressPhoto/11/image4.jpeg";
})

//12. ürün

var size12 = document.querySelector("#size12");

size12.classList.add("hideSize");

var product12 = document.querySelector("#product12");
var image12 = document.querySelector("#img12");
var footer12 = document.querySelector("#footer12");

var colImg121 = document.querySelector("#color121");

var col121 = document.querySelector("#col121");

colImg121.classList.add("active");

product12.addEventListener("mouseover",function(){
    image12.src = "img/DressPhoto/12/image1.jpeg";
    size12.classList.remove("hideSize");
    footer12.classList.add("footup");
})

product12.addEventListener("mouseout",function(){
    image12.src = "img/DressPhoto/12/image0.jpeg";
    size12.classList.add("hideSize");
    footer12.classList.remove("footup");
})

col121.addEventListener("mouseover",function(){
    colImg121.classList.add("active");
    colImg122.classList.remove("active");
    size12.classList.remove("hideSize");
    footer12.classList.add("footup");
    event.stopPropagation();
    image12.src = "img/DressPhoto/12/image1.jpeg";

})

//13. ürün

var size13 = document.querySelector("#size13");

size13.classList.add("hideSize");

var product13 = document.querySelector("#product13");
var image13 = document.querySelector("#img13");
var footer13 = document.querySelector("#footer13");

var colImg131 = document.querySelector("#color131");
var colImg132 = document.querySelector("#color132");
var colImg133 = document.querySelector("#color133");
var colImg134 = document.querySelector("#color134");

var col131 = document.querySelector("#col131");

colImg131.classList.add("active");

product13.addEventListener("mouseover",function(){
    image13.src = "img/DressPhoto/13/image1.jpeg";
    size13.classList.remove("hideSize");
    footer13.classList.add("footup");
})

product13.addEventListener("mouseout",function(){
    image13.src = "img/DressPhoto/13/image0.jpeg";
    size13.classList.add("hideSize");
    footer13.classList.remove("footup");
})

col131.addEventListener("mouseover",function(){
    colImg131.classList.add("active");
    colImg132.classList.remove("active");
    size13.classList.remove("hideSize");
    footer13.classList.add("footup");
    event.stopPropagation();
    image13.src = "img/DressPhoto/13/image1.jpeg";

})



//14. ürün

var size14 = document.querySelector("#size14");

size14.classList.add("hideSize");

var product14 = document.querySelector("#product14");
var image14 = document.querySelector("#img14");
var footer14 = document.querySelector("#footer14");

var colImg141 = document.querySelector("#color141");
var colImg142 = document.querySelector("#color142");
var colImg143 = document.querySelector("#color143");
var colImg144 = document.querySelector("#color144");

var col141 = document.querySelector("#col141");
var col142 = document.querySelector("#col142");
var col143 = document.querySelector("#col143");
var col144 = document.querySelector("#col144");

colImg141.classList.add("active");

product14.addEventListener("mouseover",function(){
    image14.src = "img/DressPhoto/14/image1.jpeg";
    size14.classList.remove("hideSize");
    footer14.classList.add("footup");
})

product14.addEventListener("mouseout",function(){
    image14.src = "img/DressPhoto/14/image0.jpeg";
    size14.classList.add("hideSize");
    footer14.classList.remove("footup");
})

col141.addEventListener("mouseover",function(){
    colImg141.classList.add("active");
    colImg142.classList.remove("active");
    size14.classList.remove("hideSize");
    footer14.classList.add("footup");
    event.stopPropagation();
    image14.src = "img/DressPhoto/14/image1.jpeg";

})

col142.addEventListener("mouseover",function(){

    colImg142.classList.add("active");
    colImg141.classList.remove("active");
    size14.classList.remove("hideSize");
    footer14.classList.add("footup");
    event.stopPropagation();
    image14.src = "img/DressPhoto/14/image2.jpeg";
})

col143.addEventListener("mouseover",function(){

    colImg143.classList.add("active");
    colImg141.classList.remove("active");
    size14.classList.remove("hideSize");
    footer14.classList.add("footup");
    event.stopPropagation();
    image14.src = "img/DressPhoto/14/image3.jpeg";
})

col144.addEventListener("mouseover",function(){

    colImg144.classList.add("active");
    colImg141.classList.remove("active");
    size14.classList.remove("hideSize");
    footer14.classList.add("footup");
    event.stopPropagation();
    image14.src = "img/DressPhoto/14/image4.jpeg";
})


//15. ürün

var size15 = document.querySelector("#size15");

size15.classList.add("hideSize");

var product15 = document.querySelector("#product15");
var image15 = document.querySelector("#img15");
var footer15 = document.querySelector("#footer15");

var colImg151 = document.querySelector("#color151");
var colImg152 = document.querySelector("#color152");
var colImg153 = document.querySelector("#color153");
var colImg154 = document.querySelector("#color154");

var col151 = document.querySelector("#col151");
var col152 = document.querySelector("#col152");
var col153 = document.querySelector("#col153");
var col154 = document.querySelector("#col154");

colImg151.classList.add("active");

product15.addEventListener("mouseover",function(){
    image15.src = "img/DressPhoto/15/image1.jpeg";
    size15.classList.remove("hideSize");
    footer15.classList.add("footup");
})

product15.addEventListener("mouseout",function(){
    image15.src = "img/DressPhoto/15/image0.jpeg";
    size15.classList.add("hideSize");
    footer15.classList.remove("footup");
})

col151.addEventListener("mouseover",function(){
    colImg151.classList.add("active");
    colImg152.classList.remove("active");
    size15.classList.remove("hideSize");
    footer15.classList.add("footup");
    event.stopPropagation();
    image15.src = "img/DressPhoto/15/image1.jpeg";

})

col152.addEventListener("mouseover",function(){

    colImg152.classList.add("active");
    colImg151.classList.remove("active");
    size15.classList.remove("hideSize");
    footer15.classList.add("footup");
    event.stopPropagation();
    image15.src = "img/DressPhoto/15/image2.jpeg";
})

col153.addEventListener("mouseover",function(){

    colImg153.classList.add("active");
    colImg151.classList.remove("active");
    size15.classList.remove("hideSize");
    footer15.classList.add("footup");
    event.stopPropagation();
    image15.src = "img/DressPhoto/15/image3.jpeg";
})

col154.addEventListener("mouseover",function(){

    colImg154.classList.add("active");
    colImg151.classList.remove("active");
    size15.classList.remove("hideSize");
    footer15.classList.add("footup");
    event.stopPropagation();
    image15.src = "img/DressPhoto/15/image4.jpeg";
})

//16. ürün

var size16 = document.querySelector("#size16");

size16.classList.add("hideSize");

var product16 = document.querySelector("#product16");
var image16 = document.querySelector("#img16");
var footer16 = document.querySelector("#footer16");

var colImg161 = document.querySelector("#color161");
var colImg162 = document.querySelector("#color162");
var colImg163 = document.querySelector("#color163");
var colImg164 = document.querySelector("#color164");

var col161 = document.querySelector("#col161");
var col162 = document.querySelector("#col162");
var col163 = document.querySelector("#col163");
var col164 = document.querySelector("#col164");

colImg161.classList.add("active");

product16.addEventListener("mouseover",function(){
    image16.src = "img/DressPhoto/16/image1.jpeg";
    size16.classList.remove("hideSize");
    footer16.classList.add("footup");
})

product16.addEventListener("mouseout",function(){
    image16.src = "img/DressPhoto/16/image0.jpeg";
    size16.classList.add("hideSize");
    footer16.classList.remove("footup");
})

col161.addEventListener("mouseover",function(){
    colImg161.classList.add("active");
    colImg162.classList.remove("active");
    size16.classList.remove("hideSize");
    footer16.classList.add("footup");
    event.stopPropagation();
    image16.src = "img/DressPhoto/16/image1.jpeg";

})

col162.addEventListener("mouseover",function(){

    colImg162.classList.add("active");
    colImg161.classList.remove("active");
    size16.classList.remove("hideSize");
    footer16.classList.add("footup");
    event.stopPropagation();
    image16.src = "img/DressPhoto/16/image2.jpeg";
})

col163.addEventListener("mouseover",function(){

    colImg163.classList.add("active");
    colImg161.classList.remove("active");
    size16.classList.remove("hideSize");
    footer16.classList.add("footup");
    event.stopPropagation();
    image16.src = "img/DressPhoto/16/image3.jpeg";
})

col164.addEventListener("mouseover",function(){

    colImg164.classList.add("active");
    colImg161.classList.remove("active");
    size16.classList.remove("hideSize");
    footer16.classList.add("footup");
    event.stopPropagation();
    image16.src = "img/DressPhoto/16/image4.jpeg";
})

//17. ürün

var size17 = document.querySelector("#size17");

size17.classList.add("hideSize");

var product17 = document.querySelector("#product17");
var image17 = document.querySelector("#img17");
var footer17 = document.querySelector("#footer17");

var colImg171 = document.querySelector("#color171");
var colImg172 = document.querySelector("#color172");
var colImg173 = document.querySelector("#color173");
var colImg174 = document.querySelector("#color174");

var col171 = document.querySelector("#col171");
var col172 = document.querySelector("#col172");
var col173 = document.querySelector("#col173");
var col174 = document.querySelector("#col174");

colImg171.classList.add("active");

product17.addEventListener("mouseover",function(){
    image17.src = "img/DressPhoto/17/image1.jpeg";
    size17.classList.remove("hideSize");
    footer17.classList.add("footup");
})

product17.addEventListener("mouseout",function(){
    image17.src = "img/DressPhoto/17/image0.jpeg";
    size17.classList.add("hideSize");
    footer17.classList.remove("footup");
})

col171.addEventListener("mouseover",function(){
    colImg171.classList.add("active");
    colImg172.classList.remove("active");
    size17.classList.remove("hideSize");
    footer17.classList.add("footup");
    event.stopPropagation();
    image17.src = "img/DressPhoto/17/image1.jpeg";

})

col172.addEventListener("mouseover",function(){

    colImg172.classList.add("active");
    colImg171.classList.remove("active");
    size17.classList.remove("hideSize");
    footer17.classList.add("footup");
    event.stopPropagation();
    image17.src = "img/DressPhoto/17/image2.jpeg";
})

col173.addEventListener("mouseover",function(){

    colImg173.classList.add("active");
    colImg171.classList.remove("active");
    size17.classList.remove("hideSize");
    footer17.classList.add("footup");
    event.stopPropagation();
    image17.src = "img/DressPhoto/17/image3.jpeg";
})

col174.addEventListener("mouseover",function(){

    colImg174.classList.add("active");
    colImg171.classList.remove("active");
    size17.classList.remove("hideSize");
    footer17.classList.add("footup");
    event.stopPropagation();
    image17.src = "img/DressPhoto/17/image4.jpeg";
})

//18. ürün

var size18 = document.querySelector("#size18");

size18.classList.add("hideSize");

var product18 = document.querySelector("#product18");
var image18 = document.querySelector("#img18");
var footer18 = document.querySelector("#footer18");

var colImg181 = document.querySelector("#color181");
var colImg182 = document.querySelector("#color182");
var colImg183 = document.querySelector("#color183");
var colImg184 = document.querySelector("#color184");

var col181 = document.querySelector("#col181");
var col182 = document.querySelector("#col182");
var col183 = document.querySelector("#col183");
var col184 = document.querySelector("#col184");

colImg181.classList.add("active");

product18.addEventListener("mouseover",function(){
    image18.src = "img/DressPhoto/18/image1.jpeg";
    size18.classList.remove("hideSize");
    footer18.classList.add("footup");
})

product18.addEventListener("mouseout",function(){
    image18.src = "img/DressPhoto/18/image0.jpeg";
    size18.classList.add("hideSize");
    footer18.classList.remove("footup");
})

col181.addEventListener("mouseover",function(){
    colImg181.classList.add("active");
    colImg182.classList.remove("active");
    size18.classList.remove("hideSize");
    footer18.classList.add("footup");
    event.stopPropagation();
    image18.src = "img/DressPhoto/18/image1.jpeg";

})

col182.addEventListener("mouseover",function(){

    colImg182.classList.add("active");
    colImg181.classList.remove("active");
    size18.classList.remove("hideSize");
    footer18.classList.add("footup");
    event.stopPropagation();
    image18.src = "img/DressPhoto/18/image2.jpeg";
})

col183.addEventListener("mouseover",function(){

    colImg183.classList.add("active");
    colImg181.classList.remove("active");
    size18.classList.remove("hideSize");
    footer18.classList.add("footup");
    event.stopPropagation();
    image18.src = "img/DressPhoto/18/image3.jpeg";
})

col184.addEventListener("mouseover",function(){

    colImg184.classList.add("active");
    colImg181.classList.remove("active");
    size18.classList.remove("hideSize");
    footer18.classList.add("footup");
    event.stopPropagation();
    image18.src = "img/DressPhoto/18/image4.jpeg";
})
