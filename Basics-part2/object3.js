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
*/

//De-Structor..
const {courseInstructor, price,courseName} = course
console.log(courseInstructor);
console.log(price);
console.log(courseName);