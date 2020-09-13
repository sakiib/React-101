import React, { useState } from 'react';

const HookCounterThree = () => {
    const [name, setName] = useState({
        firstName: '', lastName: ''
    });

    return (
        <div>
            <form>
                {/* use the spread operator */}
                <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange={e => setName({... name, lastName: e.target.value})} />
                <h2> First Name: {name.firstName} </h2>
                <h2> Last Name: {name.lastName} </h2>
                <h2> {JSON.stringify(name)}</h2>
            </form>
        </div>
    );
};

export default HookCounterThree;
