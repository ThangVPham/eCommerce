let slide = document.querySelectorAll(".slide");
let prevBtn = document.getElementById("pre");
let nextBtn = document.getElementById("nxt");
var index = 0;
let autoSlideTimer = 10000;

autoSlide()

function nextSlide(){
    index++;
    for(i=0;i<slide.length;i++){
        slide[i].setAttribute("style", "display:none");
    }
    if(index >= slide.length){index = 0}
    for(i=0;i<slide.length;i++){       
            slide[i].classList.replace("fade-left","fade-right");  
    }
    slide[index].setAttribute("style", "display:block");
    clearTimeout(timer)                                     //if next is pressed, reset timer for autoplay
    setTimeout(autoSlide, autoSlideTimer);     
}

function prevSlide(){
    index--;
    for(i=0;i<slide.length;i++){
        slide[i].setAttribute("style", "display:none");
    }
    if(index < 0){index = slide.length-1;} 
    for(i=0;i<slide.length;i++){
            slide[i].classList.add("fade-left");   
    }
    slide[index].setAttribute("style", "display:block");
    clearTimeout(timer)                                      //if prev is pressed, reset timer for autoplay
    setTimeout(autoSlide, autoSlideTimer);
}

function autoSlide(){
    var i;
    index++;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }  
    if(index >= slide.length){index = 1}   
    for(i=0;i<slide.length;i++){
        slide[i].classList.remove("fade-left");
        slide[i].classList.add("fade-right");
    }
    slide[index].setAttribute("style","display:block"); 
    timer = setTimeout(autoSlide, autoSlideTimer);  
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
}

//Dropdown menu for navbar
const prod = document.getElementById("products");
const dropdown = document.querySelector(".dropdown");
const dropdown2 = document.querySelector(".dropdown-2")
const abtUs = document.getElementById("about-us");
abtUs.onmouseover = ()=>{
    dropdown2.classList.add("open");
}
abtUs.onmouseout =()=>{
    dropdown2.classList.remove("open");
}
prod.onmouseover = ()=>{
    dropdown.classList.add("open");
}
prod.onmouseout =()=>{
    dropdown.classList.remove("open");
}



//---------------------------------------------------------------------------------
//Product Name and Descriptions
const productName =['Obcaecati', 'Ducimus', 'Voluptate', 'Laudantium', 'Consequuntur', 'Excepturi', 
                    'Architecto', 'Recusandae', 'Accusamus', 'Quisquam', 'Cupiditate', 'Blanditiis',
                    'Laboriosam', 'Exercitationem', 'Molestiae', 'Consequatur'] 

const desc = ['Velit aperiam enim beatae sequi exercitationem ex, ratione cum qui facilis blanditiis voluptatum aliquid asperiores unde alias earum. Esse consectetur doloribus optio dolore veniam? In deserunt nemo cum est autem culpa provident consequuntur aperiam? Laborum, impedit suscipit tempora praesentium atque odio libero provident?<br>Nostrum quod itaque dolores error pariatur et, repellat provident!',
              'Odio natus corporis quidem ea quas, ad explicabo molestiae doloribus obcaecati exercitationem voluptate fuga labore. Numquam est porro obcaecati laudantium dolorum perspiciatis, culpa excepturi adipisci reprehenderit, repellendus ducimus rem reiciendis libero nobis veniam.<br>Repudiandae maxime quisquam delectus maiores repellendus dignissimos minus sint.',
              'Ut quisquam, ipsam dignissimos cupiditate blanditiis ipsa deserunt placeat quia amet? Amet dicta deleniti reprehenderit praesentium optio voluptatibus quaerat possimus repudiandae aliquam? Sequi aliquam ex delectus error est quia, dignissimos neque dolorum impedit harum, libero possimus sed!<br>Blanditiis autem error est enim.',
              'Facilis praesentium sunt obcaecati commodi consequuntur. Ducimus iure assumenda corrupti recusandae soluta, incidunt beatae cupiditate tenetur deserunt hic tempora reiciendis, illo eaque excepturi. Delectus, numquam aliquid dolor reiciendis aut beatae saepe.<br>Consequuntur ipsam aut nam vitae repudiandae fugit commodi labore neque pariatur.',
              'Aperiam soluta repellat magnam non, sunt ex et voluptates eius debitis? Dolorem, iste quae ullam asperiores sequi, nostrum cum ea dicta laborum sed recusandae odit beatae quaerat error officia consequatur! Nesciunt consequuntur dolore deleniti unde sed delectus distinctio eaque?<br>Excepturi, laudantium quibusdam!',
              'Accusamus libero odio eligendi tempore quis voluptate in eos porro quos nemo vitae voluptatem explicabo officiis laudantium consequatur corrupti alias ea quae, modi assumenda itaque eius voluptatum. Dolore eaque commodi minima cupiditate dignissimos nulla corporis saepe quidem, laboriosam iure dolor, voluptatem repudiandae.',
              'Repellat adipisci quia voluptatibus mollitia sunt recusandae consequuntur, perspiciatis asperiores maiores eos autem, dicta laboriosam voluptatum esse quis, cumque quae ducimus veritatis perferendis sit libero quo ex temporibus! Culpa doloremque expedita magni.<br>Voluptatibus, amet consectetur at tempora non molestiae veniam similique quisquam.',
              'Nam animi vero ut doloribus sint rem ullam ad.<br>Officia dolore quam perspiciatis obcaecati laudantium? Ad alias facere voluptates soluta eum doloribus eligendi minima id vero nemo quaerat fuga, maiores maxime deserunt atque accusamus deleniti facilis expedita animi recusandae! Soluta, error nobis!',
              'Aspernatur in unde commodi dolorum debitis delectus harum voluptate sint sed, pariatur assumenda esse.<br>Laborum similique iste eum voluptate quaerat, minima quibusdam ad corporis, est aut accusantium quae maxime officiis. Unde, totam perferendis. Blanditiis nostrum minus aliquid veritatis amet consequatur sapiente magni!',
              'Fugit quisquam aliquid accusamus, laudantium nihil aperiam modi excepturi ut expedita.<br>Dolorem ea vitae a obcaecati ratione, cumque quo mollitia, repudiandae incidunt ipsa quas quod eligendi. Eius eos officiis ducimus reiciendis quaerat libero doloribus minus commodi, itaque repellat fuga sit sed iste?',
              'In quae nisi tenetur perferendis? In quod consequatur vero maxime soluta delectus voluptates quis animi pariatur architecto.<br>Voluptas cupiditate eos voluptate ab dignissimos! Mollitia deserunt eaque, assumenda consequatur iste alias sed fuga inventore accusantium, placeat expedita iusto? Totam sint ipsa quia illum?',
              'Fugiat, dignissimos? Modi itaque ducimus harum, beatae sint exercitationem aut! Repellendus commodi totam veritatis ullam voluptatem quia officia obcaecati deleniti. Non iusto culpa odio facilis, quam assumenda praesentium omnis magnam totam itaque, facere sed accusamus, quaerat quod obcaecati officiis. Accusamus, nihil optio.',
              'Eligendi sint velit magnam vel voluptates similique est minus exercitationem, neque, possimus accusamus enim laborum labore asperiores! Quasi ut, possimus officia illo itaque mollitia ipsa, adipisci, deserunt cumque assumenda magnam. Molestiae cupiditate modi aliquam tenetur velit. Facilis, doloribus quia? Perspiciatis, soluta excepturi.',
              'Corporis vitae qui consectetur sunt? Fuga ullam accusamus cumque excepturi odit tempore animi unde ipsum. Quibusdam, reprehenderit ipsa. Voluptate, quidem pariatur, fugiat excepturi voluptatum fuga odio, a facere hic sunt exercitationem nobis tenetur? Pariatur laudantium aut consectetur explicabo? Consectetur nisi iusto vitae!',
              'Dolor facere commodi, tempore ducimus laboriosam placeat cum eum. Facere sapiente ullam quaerat fugit, dolorem quae minus, eum assumenda earum repellendus porro praesentium, eligendi quos eaque hic molestias? Aspernatur officia, animi sint in sapiente quo numquam reiciendis repudiandae, temporibus maxime perferendis doloribus!',
              'Exercitationem laborum laboriosam sequi iusto adipisci impedit recusandae eligendi ipsam maiores sed nemo quod, non enim praesentium ullam asperiores numquam? Vero iste dignissimos necessitatibus consequatur quidem cumque neque velit nihil, enim repellat beatae sit aut officia illum quis laborum id dolor suscipit?'
]
//---------------------------------------------------------------------------------
             

//Adding content to modal when click on product catalogue image
const featured = document.querySelectorAll(".featured-item img")
const products = document.querySelectorAll(".product-item img");
const modal = document.querySelector(".modal");
const productImg = document.querySelector(".product-image");
const productDesc = document.getElementById("descriptions");
const modalName = document.getElementById("product-name");
const quan = document.getElementById("quantity"); 
let q = 0; // stores quantity to add to cart
featured.forEach((feature)=>{
    feature.addEventListener("click",()=>{
        const picName = feature.getAttribute("src");
        var featureIndex = feature.getAttribute("alt");
        featureIndex = parseInt(featureIndex);
        openModal(picName,featureIndex);     
    })
})
products.forEach((product)=>{
    product.addEventListener("click",()=>{
        const picName = product.getAttribute("src");  
        var productIndex = product.getAttribute("alt");
        productIndex = parseInt(productIndex);
        openModal(picName,productIndex);         
    })    
})
function openModal(imgSource, index){
        modal.classList.add("open");      
        productImg.setAttribute("src", imgSource);   
        productDesc.innerHTML=desc[index];
        modalName.innerHTML=productName[index]     ;
        document.body.style.overflow = "hidden";        //lock scrolling
}
modal.addEventListener('click', (e)=>{                  //click outside image to close
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        document.body.style.overflow = "auto";           //un-lock scrolling   
        quan.setAttribute("value", 0);
        q=0;
    }        
})

//Add to Cart Functionality

const incr = document.getElementById("increase");
const decr = document.getElementById("decrease");
const addBtn = document.getElementById("add-to-cart-button");
incr.addEventListener("click",()=>{
        q++;
        quan.setAttribute("value",q);
})
decr.addEventListener("click",()=>{
    if(q > 0) 
        q--;
        quan.setAttribute("value", q);
})









