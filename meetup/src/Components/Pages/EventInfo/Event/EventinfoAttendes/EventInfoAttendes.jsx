import React from 'react'
import Styles from './EventInfoAttendes.module.css'
import { MdSort } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { Modal, Button } from 'antd';
import { useSelector } from 'react-redux';

const EventInfoAttendes = ({attendees , header}) => {
    const [search , setSearch] = React.useState("")
    const [modalVisible , setModalVisible] = React.useState(false)
    const eventInfoData = useSelector(state => state.eventInfo.eventInfoData)
    
    if(eventInfoData !== undefined){
        console.log(eventInfoData,attendees)
    }
    
    return (
        <div className = {Styles.eventInfoAttendes_container}>
            <div className = {Styles.eventInfoAttendes__header}>
                <h3 style = {{fontSize : "20px", marginTop : "20px",fontWeight : 'bold'}}>Attendees ({eventInfoData.attendees ? eventInfoData.attendees.length : 0})</h3>
                <Button style = {{color : "#0098AB" , fontSize : "16px" ,border : "none",backgroundColor : "whitesmoke"}}onClick={() => setModalVisible(true)}>See all</Button>
            </div>
            <div className = {Styles.eventInfoAttendesCard_Container}>
               {eventInfoData?.attendees?.map(e => (
                <div className = {Styles.eventInfoAttendesCard}>
                    <img className = {Styles.eventInfoAttendes__attendes_image} src = {e.img} alt = {e.img}/>
                    <span style = {{fontSize : "14px"}}>{e.name}</span>
                    <span style = {{fontSize : "12px" ,color : "#757575"}}>Member</span>
                </div>
               ))}
                <Modal className = {Styles.ModalContainer}
                    centered
                    visible={modalVisible}
                    onOk={() => setModalVisible(false)}
                    onCancel={() => setModalVisible(false)}
                    footer={null}>
                    <div style = {{display : "flex" , justifyContent : "space-between" , marginTop : "20px" , alignItems : "baseline" , marginRight : "10%" , marginLeft : "10%"}}>
                        <MdKeyboardArrowLeft style = {{fontSize : "20px"}}/>
                        <p style = {{color : "0098AB", marginRight : "80px"}}>Attendes</p>
                        <br/>
                       
                        <span style = {{display : "flex"}}>
                            <MdSort style = {{fontSize : "18px"}}/>
                            <div style = {{marginLeft : "10px"}}>Sort</div>
                        </span>
                    </div>
                    <h3 style = {{color : "0098AB", fontSize : "16px" , marginLeft : "25%"}}>{header}</h3>
                    <div style = {{marginTop : "40px" , border : "1px solid silver" , padding : "10px" , borderRadius : "8px"}}>
                        <MdSearch style = {{fontSize : "18px"}}/>
                        <input className = {Styles.inputSearch} placeholder = "Search" value = {search} onChange = {(e) => setSearch(e.target.value)} />
                    </div>
                    {eventInfoData?.attendees?.filter(e => {
                        if(search === ""){
                            return e
                        }
                        else if(e.name.toLowerCase().includes(search.toLowerCase())){
                            return e
                        }
                        return null
                    }).map(e =>(
                        <div style = {{borderBottom : "1px solid silver" , paddingBottom : "20px" , display : "flex" , paddingTop : "20px",alignItems : "center"}}>
                        <img className = {Styles.eventInfoAttendes__attendes_image} src = {e.img} alt = "attende"/>
                        <h4 style = {{marginLeft : "20px"}}>{e.name}</h4>
                        </div>
                    ))}
                </Modal>
            </div>
        </div>
    )
}

export {EventInfoAttendes}
