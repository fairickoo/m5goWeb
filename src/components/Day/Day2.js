import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import "../Day/Day.css";
export default  function Day2() {
   
        return (
            <Moment className="day2" interval={30000}>
            2019-07-19T12:59-0500
           </Moment>
        );

}