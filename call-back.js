function call_back (name,age,task){
    console.log('hello',name);
    console.log('your age',age);
    task();
}
function wash(){
    console.log('wash your hasd');
}
function shawer(){
    console.log('Take a Shawer');
}
call_back('anik',17,wash);
call_back('Akash',17,shawer);