
const f = (name) => 'sad ' + name;

const comparison = (a) => {

    return (b) => {
         if (a > b) {
            return true;
        } else if (a < b) {
            return false;
        } else {
            return null
        }
    }

}

const comp = comparison(10)
console.log(comp(10))
