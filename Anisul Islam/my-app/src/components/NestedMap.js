import React from 'react'


const users = [
    {
        fullName: "Showkat Ali",
        age: 30,
        phones: [
            {
                home: "01932365263",
                office: "01932365263"
            }
        ]
    }, {
        fullName: "Momotaj Akter",
        age: 26,
        phones: [
            {
                home: "01932365263",
                office: "01932365263"
            }
        ]
    }
]

export default function NestedMap() {
  return (
    <div>
      {
        users.map((user, index) =>(< article key={index}> 
            <h2>User Name : {user.fullName}</h2>
            <h5>User Age : {user.age}</h5>
            {user.phones.map((phone, index)=>
                <div key={index}>
                    <p>Home: {phone.home}</p>
                    <p>Office: {phone.office}</p>
                </div>
            )}
        </article>))
    }
    </div>
  )
}
