const course = {
    courseName: "JavaScript",
    price: "499",
    courseInstructor: "Teuton Roy"
}

/*
    course.courseName
    course.price
    course.courseInstructor

    To, access every value so many time need to write this (course.)

    To, avoid this follow the below methods it's called De-structure
    Also, chage the variable name if the variable is too big
*/

//De-Structor..
const {courseInstructor: master, price,courseName} = course
console.log(master);
console.log(price);
console.log(courseName);

