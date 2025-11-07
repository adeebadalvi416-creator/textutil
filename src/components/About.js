import React, { useState } from 'react'

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  return (
    <div className="container" >
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionPanelsStayOpenExample">

        <div className="accordion-item">
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> You can modify any of this with custom CSS or overriding our default variables.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
