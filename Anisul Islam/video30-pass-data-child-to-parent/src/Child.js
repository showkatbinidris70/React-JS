import React from "react";

export default function Child(props) {
    const childData = "This is Child component";
  return (
    <div>
      <p>{props.data}</p>

    </div>
  );
}
