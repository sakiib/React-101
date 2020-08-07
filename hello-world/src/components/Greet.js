import React from 'react';

// normal function
// function Greet() {
//     return <h1> Hello Sakib! </h1>
// }

// using arrow function
// const Greet = () => {
//     return <h1> Hello Sakib!! </h1>
// };

// same thing as above

// const Greet = ({name, heroName}) destructuring in parameter
const Greet = (props) => {
    // console.log(props);
    // destructuring props
    const { name, heroName } = props;
    return(
        <div>
            <h1> Hello { name } { heroName }(functional)! </h1>
            {props.children}
        </div>
    );
};

// exporting as default enables us to import it by any name
// other one is constant
export default Greet;