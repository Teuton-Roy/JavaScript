//switch-case..
//Syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
const name = 'Teuton Roy, Pragna Biswas, Shivani Shrivasthab'
switch (month) {
    case 1:
        console.log(`January`)
        break;
    case 2:
        console.log(`February`);
        break;
    case 3:
        console.log(`March! paida huya hy es mahine mai ${name}.`);
        break;
    case 4:
        console.log(`April`);
    default:
        console.log(`Default hy`);
        break;
}