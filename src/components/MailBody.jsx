import React from "react";
import "../MailBody.css";
function MailBody({ mailId,handleUpdate}) {
  const [mail, setMail] = React.useState([]);

  const fetchData = async (mailId) => {
    const data = await fetch(
      `https://flipkart-email-mock.vercel.app/?id=${mailId}`
    );
    const res = await data.json();
    console.log("Res", res.body);
    setMail([res]);
  };  

  // const handleClick=async(mailId)=>{

  //   const fevData=allData.map(item=>item.id===mailId?{...item,favorite:true}:item)
   
  //   console.log("fevData",fevData)


  // }

  React.useEffect(() => {
    fetchData(mailId);
  }, [mailId]);
  console.log(mail);
  return (
    <section className="main">
      <section className="headers1">
        <figure className="avatar-1">F</figure>
        <p>Lorem apsum</p>
      </section>

      <p className="body-date">1582728505000</p>
      {mail?.map((item) => (
        <section key={item.id} className="content">{item.body}
        <button className="mark-fav-btn" onClick={()=>handleUpdate(mailId)}>Mark as favorite</button>
        </section>
        
      ))}
    </section>
  );
}

export default MailBody;
