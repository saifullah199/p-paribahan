
let titleCount = 1;
let totalPrice = 0;
let seatCount =0;

const btns = document.querySelectorAll(".seat-btn");
// console.log(btns);

for ( let index =0; index< btns.length; index ++){
    const btn = btns[index];
    // console.log(btn);
    btn.addEventListener("click",function(){
        // console.log("clicked");
         
        btn.style.backgroundColor = 'green';
        seatCount = seatCount + 1;
        document.getElementById("seat-count").innerText= seatCount;
        if( seatCount > 4){
            // document.getElementById("seatNumber").disabled = true;
            // const seatNumber = document.getElementById("seatNumber");
            // seatNumber.setAttribute("disabled", false);
            return;
        }

        

        // seat left
       const seatLeft = document.getElementById("seat-left").innerText;
    

       document.getElementById("seat-left").innerText = seatLeft - 1;

        // get the seat no
        const title = btn.querySelector("h5").innerText;
        
        const price = parseInt(document.getElementById("seat-price").innerText);
        console.log(typeof price);
        const seat = document.getElementById("seat");
        
        const p = document.createElement("p");
        p.innerText = titleCount+ ". "+ title;
        seat.appendChild(p);
        titleCount++;

        
        // const seatClass =document.getElementById("seat-Class");
        // console.log(seatClass);
        // const p2 = document.createElement("p");
        // p2.innerText = "Economy";
        // seatClass.appendChild(p2);

        const priceCount =document.getElementById("price");
        console.log(priceCount);
        const p3 = document.createElement("p");
        p3.innerText = price;
        priceCount.appendChild(p3);

        totalPrice += price;
        document.getElementById("total-price").innerText = totalPrice;
        handleClick(event)
    })
}

const applyBtn = document.getElementById("btn-apply");
applyBtn.addEventListener("click", function(){
    
// coupon calculation
    const couponElement = document.getElementById("coupon-code").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    

    const couponElement2 = document.getElementById("coupon-code").value;
    const couponCode2 = couponElement2.split(" ").join(" ");
    console.log(couponCode2);

    if(totalPrice >= 2200){
        if( couponCode === "NEW15" ){
            // discount calculation
            const disCountAmount = totalPrice * 0.15;
            
            const grandTotal = document.getElementById("grand-total");
            grandTotal.innerText = totalPrice - disCountAmount.toFixed(2);
            document.getElementById("coupon-code").value="";
        }
        else if( couponCode2 === "Couple 20"){
            const disCountAmount = totalPrice * 0.2;
            const grandTotal = document.getElementById("grand-total");
            grandTotal.innerText = totalPrice - disCountAmount.toFixed(2);
            document.getElementById("coupon-code").value="";
        }
        else {
            
            alert("invalid coupon")
            document.getElementById("coupon-code").value="";
        }

    }else{
        alert('Please buy at least 4 tickets');
        document.getElementById("coupon-code").value="";
    }
    hideElementById("coupon-section");
})

function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add("hidden");
}