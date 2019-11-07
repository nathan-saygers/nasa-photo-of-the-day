import React, {useState} from "react";
import { Jumbotron, Button } from 'reactstrap';

export default function POTD(props) {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">This! Is! NASA!</h1>
        <img className="POTD-img" alt="NASA's photo of the day" src={props.img}/>
        <p className="lead">
          <Button onClick={() => props.yesterdaysPhoto()} color="primary">Back One Day</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

//   return (
//   <div>
//     
//   </div>
//   );
// } 