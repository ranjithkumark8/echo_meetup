import React from 'react'
import {BsFillQuestionCircleFill } from "react-icons/bs";
import Styles from './EventInfoSideBar.module.css'
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiVideo } from "react-icons/bi";
import { Calendar, Alert } from 'antd';
import moment from 'moment';


const EventInfoSideBar = () => {
   
    const [value , setValue] = React.useState(moment('2017-01-25'))
    const [selectedValue , setselectedValue] = React.useState(moment('2017-01-25'))
    // let gapi = window.gapi
    // let CLIENT_ID = '1057056086972-bat9npn4nfr8qh676h3h9o97n1n9mv2s.apps.googleusercontent.com';
    // let API_KEY = 'AIzaSyBMIa0IyUB2gp4E7a3BZzgKLDoaagdit7Y';
    // let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    // let SCOPES = "https://www.googleapis.com/auth/calendar";

    const onSelect = value => {
        setValue(value)
        setselectedValue(value)
      };
    
      const onPanelChange = value => {
        this.setState({ value });
      };
    const handleClick = () =>{
    // gapi.load('client:auth2',() => {
    //     gapi.client.init({
    //         apiKey: API_KEY,
    //         clientId: CLIENT_ID,
    //         discoveryDocs: DISCOVERY_DOCS,
    //         scope: SCOPES
    //       })
    //       gapi.client.load('calender' , 'v3' , () => console.log("calender"))
    //       gapi.auth2.getAuthInstance().signIn()
    //       .then(() =>{
    //         var event = {
    //             'summary': 'Google I/O 2015',
    //             'location': '800 Howard St., San Francisco, CA 94103',
    //             'description': 'A chance to hear more about Google\'s developer products.',
    //             'start': {
    //               'dateTime': '2015-05-28T09:00:00-07:00',
    //               'timeZone': 'America/Los_Angeles'
    //             },
    //             'end': {
    //               'dateTime': '2015-05-28T17:00:00-07:00',
    //               'timeZone': 'America/Los_Angeles'
    //             },
    //             'recurrence': [
    //               'RRULE:FREQ=DAILY;COUNT=2'
    //             ],
    //             'attendees': [
    //               {'email': 'lpage@example.com'},
    //               {'email': 'sbrin@example.com'}
    //             ],
    //             'reminders': {
    //               'useDefault': false,
    //               'overrides': [
    //                 {'method': 'email', 'minutes': 24 * 60},
    //                 {'method': 'popup', 'minutes': 10}
    //               ]
    //             }
    //           };
    //           var request = gapi.client.calendar.events.insert({
    //             'calendarId': 'primary',
    //             'resource': event
    //           });
              
    //           request.execute(event =>{
    //             window.open(event.htmlLink);
    //           });
              
    //       })
    // });

    }

    
    return (
        <div className = {Styles.eventInfo__sidebar_container}>
            <div className = {Styles.eventInfo__sidebar_upper_div}>
               <img src = "https://dummyimage.com/50x50/fff/aaa" alt = "" height = "80px" width = "80px" />
               <div style = {{marginLeft : "10px"}}>
                    <h3>Apache Airflow Virtual Meetup</h3>
                    <p>Public group <BsFillQuestionCircleFill style = {{color : "grey"}}/></p>
                </div>
                
            </div>
            <div className = {Styles.eventInfo__sidebar_lower_div}>
                <div style = {{display : "flex",flexDirection : "column"}}>
                    <div style = {{display : "flex" , alignItems : "baseline"}}>
                    <AiOutlineClockCircle style = {{color : "grey"}}/>
                    <p style = {{marginLeft : "10px"}}>Friday, February 12, 2021</p>
                    </div>
                    <p style = {{marginLeft : "25px"}}> 2:00 PM to 4:00 PM GMT+5:30</p>
                    <p style = {{color : "#00A2C7" ,marginLeft : "25px", cursor : "pointer"}} onClick = {handleClick}>Add to calender</p>
                </div>
                <div style = {{display : "flex" , alignItems : "baseline"}}>
                    <BiVideo style = {{color : "grey"}}/>
                    <p style = {{marginLeft : "10px"}}>Online event</p>
                </div>
               
     
            </div>
        </div>
    )
}

export {EventInfoSideBar}
