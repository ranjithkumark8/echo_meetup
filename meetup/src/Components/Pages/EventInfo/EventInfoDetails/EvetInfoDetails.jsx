import React from 'react'
import { useSelector } from 'react-redux'
import { EventInfoSideBar } from '../EventInfoRightSideComponent/EventInfoSideBar'
import Styles from './EventInfoDetails.module.css'

const EvetInfoDetails = ({ img }) => {
    const eventInfoData = useSelector(state => state.eventInfo.eventInfoData)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className={Styles.evetInfoDetails__details_container}>
                <img className={Styles.event_image} src={img} alt={img} height="300px" width="450px" style={{ borderRadius: "10px" }} />
                <br />
                <h3 style={{ fontSize: "20px", marginTop: "70px", fontWeight: 'bold' }}>Details</h3>
                <p>Hello all Airflow-lovers in Bangalore/India.</p>
                <p>It's been almost a year since we hosted our first Apache Airflow meetup in <br /> Bangalore. It was quite a day to see so many energetic faces and 4 great talks <br /> on Airflow.</p>
                <p style={{ marginBottom: "20px" }}>Given the pandemic situation, we would be going fully virtual this time.<br /> Unfortunately, we gonna miss the physical presence, lunch, and swags but a<br /> large number of attendees should be able to square that feeling off.</p>
                <span>========</span>
                <br />
                <span style={{ fontSize: "16px" }}>Schedule:</span>
                <br />
                <span>========</span>
                <p>Talk 1: Workflow Platform at Cloudera</p>
                <p>Abstract: The Workflow Platform at Cloudera is build upon Airflow. In this talk,<br /> Vivek will talk about various features of the platform which he & his team has built <br />at Cloudera. Some of the key features are:</p>
                <ol>
                    <li>Running Rest API for internal microservices using the custom-built operator.</li>
                    <li>Running test jobs using the K8S operator.</li>
                    <li>Running existing test Jenkins job execution.</li>
                    <li>S3 Log streaming for k8S pods and S3 log integration for task logs.</li>
                    <li>Notification for failed tasks.</li>
                    <li>Re-running tasks with the support of reporting.</li>
                    <li>Integration of airflow tasks reporting with internal Cloudera engineering dashboard.</li>

                </ol>
                <p>Speaker: Vivek Pemawat is a Staff SWE from the Infrastructure team at<br /> Cloudera and leads the "Workflow Platform".</p>
                <p>-----------</p>
                <p>Talk 2: Airflow Artifacts deployment mechanism at Societe Generale</p>
                <p>Abstract: This talk will cover the presentation of service offer which provide<br /> on-demand managed airflow instances using Airflow at Societe Generale.<br /> Also, covers the deployment strategy developed at SG to deploy DAGs,<br /> Python packages, System packages, etc.</p>
                <p>The main topics of this talk would be the following:</p>
                <ol>
                    <li>Service Offer overview.</li>
                    <li>Dogfooding Airflow (use Airflow to provision Airflow).</li>
                    <li>Image-Based Artifact deployment (DAGs, python, and system dependencies).</li>
                    <li>"One Page UI".</li>
                </ol>
                <p>Speaker: Jilan Kothakota - Lead Developer & Scrum master for Airflow team at Societe Generale.</p>
                <p>-----------</p>
                <p>Talk 3: Oozie to Airflow - A migration story</p>
                <p>Abstract: Inmobi recently switched from Oozie to Airflow. Amit would talk<br /> about how they are using Airflow, what challenges they have faced and the<br /> features/plugins they have developed while migrating.</p>
                <p>Speaker: Amit Khanna - Sr SWE at Inmobi</p>
                <p>============</p>
                <p>Thanks,</p>
                <h3>Apache Airflow Bangalore Moderators.</h3>
            </div>
            <EventInfoSideBar {...eventInfoData} />
        </div>
    )
}

export default EvetInfoDetails
