let readlineSync=require("readline-sync")
var name=readlineSync.question("Enter your name:")
var pass=readlineSync.question("Enter your password:")
console.log("🌸🌸🌸🌸You login up sucessfully🌸🌸🌸🌸")
var location=readlineSync.question("Enter your location:")
console.log("Choose one option\n","1-Vegetarian\n","2-Nonvege")
console.log()
var option=readlineSync.question("Press 1 or 2:")
var lis=[]
function main(){
    if (option=="1"){
        first()}
    else{
        second()}}
console.log("🔴🟠🟡🟢🔵🟣⚫⚪🟤🔴🟠🟡🟢🔵🟣⚫⚪🟤🔴🟠🟡🟢🔵🟣⚫⚪🟤")
function first(){
    if (option==="1"){
        console.log(" 1-Paneer         4-Kachaudi\n","2-Cake           5-Pizza\n","3-Momos          6-Lassi ")
        console.log("🔴🟠🟡🟢🔵🟣⚫⚪🟤🔴🟠🟡🟢🔵🟣⚫⚪🟤🔴🟠🟡🟢🔵🟣⚫⚪🟤")
        var dish=readlineSync.question("Enter number which dish you want:")
        if (dish=="paneer" || dish=="cake" || dish=="momos" || dish=="kachaudi" ||dish=="pizza" || dish=="lassi"){
            console.log(" 1-Annpoorna Restaurant(Rating:5.6)\n","2-Basant Leela Restaurant(Rating:5.4)\n","3-Ham Tum Restaurant(Rating:4.9)")
            var non=readlineSync.question("Choose Restaurant:")
            var paneer={
                "Dish":"Paneer",
                "Dish Price":"Rs.250",
                "Dilivery charge":40,
                "Total Price":290}
            var cake={
                "Dish":"Cake",
                "Dish Price":"Rs.650",
                "Dilivery charge":40,
                "Total Price":690}
            var momos={
                "Dish":"Momos",
                "Dish Price":"Rs.120",
                "Dilivery charge":40,
                "Total Price":160}
            var kachaudi={
                "Dish":"Kachaudi",
                "Dish Price":"Rs.180",
                "Dilivery charge":40,
                "Total Price":220}
            var pizza={
                "Dish":"Pizza",
                "Dish Price":"Rs.380",
                "Dilivery charge":40,
                "Total Price":420}
            var lassi={
                "Dish":"Lassi",
                "Dish Price":"Rs.180",
                "Dilivery charge":40,
                "Total Price":220}
            if (non=="1"){
                console.log("You choosed Annpoorna Restaurant")}
            if (non=="2"){
                console.log("You choosed Basant Leela Restaurant")}
            if (non=="3"){
                console.log("You choosed Ham Tum Restaurant")}
            if (dish=="paneer"){
                console.log(paneer)
                lis.push(paneer)}
            else if(dish=="cake"){
                console.log(cake)
                lis.push(cake)}
            else if(dish=="momos"){
                console.log(momos)
                lis.push(momos)}
            else if(dish=="kachaudi"){
                console.log(kachaudi)
                lis.push(kachaudi)}
            else if(dish=="pizza"){
                console.log(pizza)
                lis.push(pizza)}
            else if(dish=="lassi"){
                console.log(lassi)
                lis.push(lassi)}            
        var add=readlineSync.question("Do you want to another item if yes then add to cart:")
        if (add=="yes"){
            console.log("Note:You have to choose same restaurent for add item in your cart🙏🙏")
            first()}
        else{
            console.log("Thank you😇😇")
            console.log(lis)
            var i=0
            var sum=0
            while (i<lis.length){
                sum=sum+lis[i]["Total Price"]
                i=i+1}
            console.log("Delivery Time: 40 Minutes")
            console.log("Grand Total:Rs.",sum)
    payloc()
    rate()       }        }    }}
function second(){
    if (option=="2"){
        console.log(" 1-Mutton           3-Fish\n","2-Chiken","          4-Egg")
        console.log("🔴🟠🟡🟢🔵🟣⚫⚪🟤🔴🟠🟡🟢🔵🟣⚫⚪🟤🔴🟠🟡🟢🔵🟣⚫⚪🟤")
        var user=readlineSync.question("Choose Dish:")
        if (user=="mutton" || user=="chicken" || user=="fish" || user=="egg"){
            console.log(" 1-Annpoorna Restaurant(Rating:5.6)\n","2-Basant Leela Restaurant(Rating:5.4)\n","3-Ham Tum Restaurant(Rating:4.9)")}
            var non=readlineSync.question("Choose Restaurant:")
            console.log("🎄🎄🎄🎄🎄🎄☘️🍁☘️🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄☘️🍁☘️🎄🎄🎄🎄🎄🎄")
            var mutton={
                "Dish":"Mutton",
                "Dish Price":"Rs.550",
                "Dilivery charge":40,
                "Total Price":590}
            var chicken={
                "Dish":"Chicken",
                "Dish Price":"Rs.440",
                "Dilivery charge":40,
                "Total Price":480}
            var fish={
                "Dish":"Fish",
                "Dish Price":"Rs.350",
                "Dilivery charge":40,
                "Total Price":390}
            var egg={
                "Dish":"Egg",
                "Dish Price":"Rs.180",
                "Dilivery charge":40,
                "Total Price":220}

            if (non=="1"){
                console.log("You choosed Annpoorna Restaurant")}
            if (non=="2"){
                console.log("You choosed Basant Leela Restaurant")}
            if (non=="3"){
                console.log("You choosed Ham Tum Restaurant")}
            if (user=="mutton"){
                console.log(mutton)
                lis.push(mutton)}
            if(user=="chicken"){
                console.log(chicken)
                lis.push(chicken)}
            if(user=="fish"){
                console.log(fish)
                lis.push(fish)}
            else if (user=="egg"){
                console.log(egg)
                lis.push(egg)}
        var add=readlineSync.question("Do you want to another item if yes then add to cart:")
        if (add=="yes"){
            console.log("Note:You have to choose same restaurent for add item in your cart🙏🙏")
            second()}
        else{
            console.log("Thank you😇😇")
            console.log(lis)
            var i=0
            var sum=0
            while (i<lis.length){
                sum=sum+lis[i]["Total Price"]
                i=i+1}
            console.log("Delivery Time: 40 minutes")
            console.log("Grand Total:Rs.",sum)
        payloc() 
        rate() }}}
function payloc(){
    console.log("🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄")
    console.log("Add payment method\n","1-UPI Net Banking\n","2-Cash on delivery")
    var pay=readlineSync.question("Enter payment method:")
    if (pay=="1"){
        var up=readlineSync.question("Enter your card number:")
        var up1=readlineSync.question("Enter your password:")
        console.log("Payment Sucessfully😇😇😇😇")}
    else{
        console.log("You choosed cash on dilivery..")}
    console.log("Add final location or other location")
    var add=readlineSync.question("Enter your final location:")
    console.log("😇😇😇😇Thank you for using Zomato app😇😇😇😇")}
function rate(){
    console.log("Please rate up this app.......")
    var rate=readlineSync.question("Enter number how many star you want to give..")
    if (rate=="1"){
        console.log("           🌟")}
    else if(rate=="2"){
        console.log("           🌟🌟")}
    else if(rate=="3"){
        console.log("           🌟🌟🌟")}
    else if(rate=="4"){
        console.log("           🌟🌟🌟🌟")}
    else if(rate=="5"){
        console.log("            🌟🌟🌟🌟🌟")}}
main()