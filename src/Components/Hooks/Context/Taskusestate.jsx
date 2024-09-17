import React,{useState} from 'react'

export default function Taskusestate() {

    const [text,settext] = useState("https://www.srkevents.co.in/coimbatore%20sight%20seeing.jpg");
    
    function nextimage(){
        settext('https://blog.lemontreehotels.com/wp-content/uploads/2018/05/Places-to-Visit-in-Coimbatore-with-Family.jpg');
    }

    function previousimage(){
        settext('https://paramountclientweb.s3.ap-south-1.amazonaws.com/indian-holiday-trip/visualstories/Img_9477_202231081058_coimbatore.jpg?time=1644317344');
    }
  return (
    <div>
        <h1>Welcome to Image Presentation...</h1>
        <img src={text} alt="" height={500} width={500} />
        {/* <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/08/kw-050917-The-famous-Loucky-Falls-at-the-Black-Thunder-water-park-in-Coimbatore.jpg?tr=w-400" alt="" height={500} width={500} /> */}

        <button onClick={previousimage}>Previous-image</button>
        <button onClick={nextimage}>Next-image</button>
    </div>
  )
}
