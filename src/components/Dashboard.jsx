import React from 'react'
import ServicesCard from './ServicesCard'
import '../styles/dashboard.css'


function Dashboard() {
  return (
    <div className='container'>
        
      <ServicesCard title={"Chat Bot"} imagepath = {"src\\assets\\chatbot.jpeg"} route={'/chatbot'}/>
      <ServicesCard title={"Translator"} imagepath = {"src\\assets\\translator.jpg"} route={"/translator"}/>
    </div>
  )
}

export default Dashboard
