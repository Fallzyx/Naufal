document.getElementById("OrderButton").onclick = function () {
    let foodPrice = parseInt(document.getElementById
        ("Food").value);
    let drinkPrice = parseInt(document.getElementById
        ("drink").value);

        let totalPrice = foodPrice + drinkPrice;
        let discount = 0;

        if (totalPrice > 1){
            alert("Got Scammed HAHAHAHA");
            
        }
     
}
