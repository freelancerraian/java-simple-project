// -------------Problem ------------- 1

function seerToMon(seer){

    // Error massege Defain sec
    if(typeof seer == "string" || typeof seer == "boolean"){
        const error1 = "Please Input a Number";
        return error1;
    }
    else if(typeof seer == "number"){
        const mon = 40;
        const result = seer / mon;
        return result;
    }
}
 const check1 = seerToMon(100);
 console.log(check1);

 // -------------Problem ------------- 2

function totalSales(shart, pant, shoes){

        // Product price
        const shartPrice = 100;
        const pantPrice = 200;
        const shoesPrice = 500;

        // Error massege Defain sec
        if(typeof shart == "string" || pant == "string" || shoes == "string" || typeof shart == "boolean" || pant == "boolean" || shoes == "boolean" ){
            const error1 = "Please Input a Number";
            return error1;            
        }
        else{
            const totalShartPrice = shartPrice * shart;
            const totalPantPrice = pantPrice * pant;
            const tatalShartPrice = shoesPrice * shoes;

            const totalSell = totalShartPrice + totalPantPrice + tatalShartPrice;
            return totalSell;
        }
    }

const check2 = totalSales(2, 2, 2);
console.log(check2);

// -------------Problem ------------- 3

function deliveryCost(products){

    // Product delivery cost
    const DeliverCost100Products = 100;
    const DeliverCost200Products = 80;
    const DeliverCostUper200Products = 50;

    // Error massege Defain sec
    if(typeof products == "string" || typeof products == "boolean"){
        const error3 = "Please Input a Number";
        return error3;
    }
    else if(products <=100){
        const Productscost100 = products * DeliverCost100Products;
        return Productscost100;
    }
    else if(products <=200){
        const addfrist100ProductsCost = 100 * DeliverCost100Products;
        const decreaseProductsFrist = products - 100;
        const Productscost200 = decreaseProductsFrist * DeliverCost200Products;

        const total200Productscost = addfrist100ProductsCost + Productscost200;
        return total200Productscost;
    }
    else{
        const addfrist100ProductsCost = 100 * DeliverCost100Products;
        const addSecond200ProductsCost = 100 * DeliverCost200Products;
        const decreaseProductsSecond = products - 200;
        const ProductsCostUper200 = decreaseProductsSecond * DeliverCostUper200Products;

        const totalProductscostUper200 = ProductsCostUper200 + addfrist100ProductsCost + addSecond200ProductsCost
        return totalProductscostUper200;
    }
}
const check3 = deliveryCost(201);
console.log(check3);

// -------------Problem ------------- 4

// Arry 
let arryFriends = ["Abdullah","Reyan","Lion","Muin","Sulaiman","Mahbub"]

function perfectFriend(arryFriends) {
    // for loop 
    for(i = 0 ; i < arryFriends.length ; i++){

        // Error massege Defain sec
        if(typeof arryFriends[i] == "number" || typeof arryFriends[i] == "boolean" ){
            const error4 = "Please Input a Name";
            return error4;
        }
        else if(arryFriends[i].length == 5){
        return arryFriends[i];
        break;
        }
    }
}
console.log(perfectFriend(arryFriends)) ; 