const normalpersone={
    firstname:"anik",
    lastname:"ghosh",
    sallary:15000,

    getFullName:function(){
        console.log(this.firstname,this.lastname)
    },
    chareBill : function(amount,tax,tips){
        this.sallary=this.sallary-amount-tax-tips
        return this.sallary
    },
    Extraearn :function(money){
        this.sallary=this.sallary+money
        return  this.sallary
    }

}
//console.log(normalpersone.getFullName()) getfull name from the object
//normalpersone.chareBill(500)
//normalpersone.Extraearn(700)
//console.log(normalpersone.sallary)
const friendpersone={
    firstname:"Akash",
    lastname:"Kumar",
    sallary:18000}

// }
// //normalpersone.chareBill()
// const friendlyChargenBill=normalpersone.chareBill.bind(friendpersone);//here use "bind " to create a new function
// friendlyChargenBill(330);
// console.log(friendpersone);
//call use for a object that use that method
// normalpersone.chareBill.call(friendpersone,500)
// console.log(friendpersone.sallary) 
normalpersone.chareBill.apply(friendpersone,[5000,200,13])
console.log(friendpersone.sallary)