
const list =[1,2,3,4,5];
const otherList = list.concat([6,7,8]);
const otherList2 = [...list, 9,10,11];

//console.log(otherList2);


export const aTurtle = {
    type: 'animal',
    name: 'Franklin'
};

export function addProperties({type, name}) {
    return{
        type,
        name,
        species:'Turtle',
        color:'green'
    }
}

// console.log(addProperties(aTurtle));