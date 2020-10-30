import React, { useEffect, useState } from 'react'

export default function Practice() {

    const [person,setperson]=useState(null);

    useEffect(async() => {
        
        const response=await fetch("https://dad-jokes.p.rapidapi.com/random/joke")
        const data=await response.json();
        const [item]=data.results;
        setperson(item);
    }, []);


    return (
        <div>
            {person && person.name.last}
        </div>
    )
}
