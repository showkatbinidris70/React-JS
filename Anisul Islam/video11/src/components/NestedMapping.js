import React from "react";
import Users from "./users.json";

function NestedMapping() {
  return (
        <div>
            {Users.map((user,index) => {
                const { fullName, age } = user;
                return (
                    <div key={index}>
                        <h2>{fullName}</h2>
                        <p>{age}</p>
                        {user.phones.map((phone, index)=>{
                            const {home, office} = phone;
                            return(
                                <div key={index}>
                                    <p>{home}</p>
                                    <p>{office}</p>
                                </div>
                            );
                        })}
                    </div>
                );

            })}
        </div>
    );
}
export default NestedMapping;