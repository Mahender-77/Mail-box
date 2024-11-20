import React from 'react'
import '../AllMails.css'
import MailBody from './MailBody'

function AllMails() {
  const [data,setData]=React.useState([])
  const [getId,setGetId]=React.useState("")



  const fetchData=async()=>{
    try {
      fetch('https://flipkart-email-mock.now.sh/')
      .then(response => response.json())
      .then(data => {
        const emailsWithState = data.list.map(email => ({
          ...email,
          read: false,
          favorite: false,
        }));
        setData(emailsWithState);
      });
    } catch (error) {
      console.log("Something Went wrong")
    }
     
  }
  React.useEffect(()=>{
    fetchData()
  },[])
  
  const handleUpdate=(mailId)=>{
    
    const updatedDate=data.map(item=>item.id===mailId?{...item,favorite:true}:item)
    setData(updatedDate)

  }
 

  return (
    <section className='mails'>
      <section className={getId===""?'mails-section':"mails-section1"} >
      {data?.map((item)=>(<section key={item.id} className={getId===item.id?'mail-box1':"mail-box"} onClick={()=>{setGetId(item.id)}}>
   

<figure className="avatar"> {item.from.name.charAt(0).toUpperCase()}</figure>
  <article className="mail-content">
    <p className="from">From: <strong>&lt;{item.from.email}&gt;</strong> </p>
    <p className="subject">Subject: <strong>{item.subject}</strong></p>
    <section className='message'>{item.short_description}</section>
    <section className={item.favorite===true?'dispaly-fev':'dispaly-fev1'}>Favorite</section>
    <time className="date">{item.date}</time>
  </article>
      </section>))}
      </section>
      <section className={getId===""?"mail-close":'mail-open'}>
       {getId && <MailBody mailId={getId} allData={data} handleUpdate={handleUpdate}/>} 
      </section>
      
    </section>
  )
}

export default AllMails