import { module1 } from './module1'
import { module2 } from './module2'

function getClasses() {
    console.log("getClasses function was called")
    console.log(module1)
    console.log(module2)
}

export default getClasses