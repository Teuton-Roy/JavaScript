
const coding = ['C/C++','Java','Python','JavaScript','Go']

//for-each loop do not return value.
const values = coding.forEach((item) =>{
    console.log(item);
    return item;
})
console.log(values);