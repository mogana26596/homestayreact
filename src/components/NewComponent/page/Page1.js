import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

 function Page1() {

 const [date, setDate] = useState([new Date(2023, 11, 9),
 new Date(2023, 11, 14)] );
 const images= [
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/e110a099-0679-48b6-a66a-ae2172e6d24f.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/7410e005-396f-4914-818b-3927a974c82e.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/937535ae-98a8-4f6f-a8ea-51c5ece6aa43.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/7020e8d6-d0cf-4e37-8761-12addde07664.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/0c39c81d-7747-40b5-afab-81389088438b.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/461996fb-3427-46e8-a694-7e1e54a1f0aa.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/902f2a27-6185-4496-8575-93becf6d6dbb.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/f1bef636-db1d-48b2-b780-081c1fcd78bb.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/6acf7570-ec34-43ce-a7e6-d30fcf534982.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/91c4acbd-4956-49b3-80df-a54e727d57f1.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/fc9fbd93-a73d-4427-b668-513f78da6f7f.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/a797b115-9d79-4612-89b2-4518058a55fc.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/9a3af8b5-5c06-422b-aa48-c95dd117b190.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-759968212961672487/original/50573189-3e82-4577-8900-6093dfa9b486.jpeg?im_w=720" }
]
     const [counter, setCounter] = useState(1);
     const incrementCounter = () => { 
      if(counter<10) {
         setCounter(counter + 1);
      }
   };
     let decrementCounter = () => { 
      if(counter>1) {
         setCounter(counter - 1);
      }
   };
   const [counter1, setCounter1] = useState(0);
   const AddCounter = () => { 
    if(counter1<9) {
       setCounter1(counter1 + 1);
    }
 };
   let MinusCounter = () => { 
    if(counter1>0) {
       setCounter1(counter1 - 1);
    }
 };
 const [count, setCount] = useState(0);
 const AddCount = () => { 
  if(count<5) {
     setCount(count + 1);
  }
};
 let MinusCount = () => { 
  if(count>0) {
     setCount(count - 1);
  }
};

 const handlesubmit=(e)=>{
    e.preventDefault();
    var options={
        key:"rzp_test_7Ufao8ZnpRzVZq",
        key_secret:"L7kmIC11vJcDVttHDMimF7zm",
        amount:"371342"*100,
        currency:"INR",
        name:"Your booking is protected by HomeStaybnb",
        description:"For testing purpose",
        handler:function(response){
          alert(response.razorpay_payment_id);
        },
        prefill:{
          name:"aababab",
          email:"aaa@gmail.com",
          contact:"7878666787"
        },
        roles:{
          address:"Razorpay corporate office"
        },
        theme:{
          color:"red"
        }
      };
      var pay=new window.Razorpay(options);
      pay.open();
    }
  

return (
<>
    <nav className="navbar navbar-light bg-secondary">
    <img src="https://cdn6.f-cdn.com/contestentries/2280428/62667522/64b39488b3f79_thumb900.jpg" width="180" height="65" className="d-inline-block align-top" alt="" style={{marginLeft:"15px"}}/>
        <div style={{fontSize:"35px", color:"red", marginRight:"50px"}}><b>Explore Your Place To Stay</b></div>
    </nav>
    <h3 style={{ margin:"40px 0px 10px 100px"}}>Belaria - Hauteurs de la Milady</h3>
    <div style={{ color: "orange", marginLeft:"100px"}}>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span> <b>5.0</b>
    </div>
    <div style={{ margin:"40px 0px 20px 100px"}}>
       <SimpleImageSlider
        width={1200}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        navSize={40}
        autoPlay={true}
        />
    </div>
   
   
   <div style={{display: "flex"}} class="col2">
   <div class="col2fdd">
     <h4 style={{ margin:"40px 0px 15px 100px"}}>Entire home hosted by Edouard</h4>
    <ul style={{ marginLeft:"80px",display:"flex",columnGap:"20px"}}>
        <li>10 guests</li>
        <li>5 bedrooms</li>
        <li>5 beds</li>
        <li>3 bathrooms</li>
    </ul>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
         <i class="fa fa-certificate fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-8">
       <p><b>Edouard is a Superhost</b></p>
        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</p>
       </div>
    </div>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
       <i class="fa fa-key fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-8">
        <p><b>Great check-in experience</b></p>
        <p>100% of recent guests gave the check-in process a 5-star rating.</p>
       </div>
    </div>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
       <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-8">
        <p>Free cancellation for 48 hours.</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>

    {/* aircover */}
    <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="aircover" width="130" height="28" style={{ marginLeft:"100px"}}/>
    <div style={{ marginLeft:"85px",marginTop:"15px",marginBottom:"15px"}} class="col-8">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
    <div class="row">
      <div class="col-sm-4" style={{ marginLeft:"100px"}}>
        <p><b>Booking Protection Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>In the unlikely event that a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home or we’ll refund you.</p>
      </div>
      <div class="col-sm-4" style={{ marginLeft:"50px"}}>
        <p><b>Check-In Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay or we’ll refund you.</p>
      </div>
    </div>
    <div class="row">
       <div class="col-8 col-sm-4" style={{ marginLeft:"100px"}}>
        <p><b>Get-What-You-Booked Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>If at any time during your stay you find your listing isn't as advertised – for example, the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed – you'll have three days to report it and we’ll find you a similar or better home, or we’ll refund you.</p>     
       </div>
       <div class="col-8 col-sm-4" style={{ marginLeft:"50px"}}>
        <p><b>24-hour Safety Line</b></p>
        <p style={{ textAlign: "justify"}}>If you ever feel unsafe, you’ll get priority access to specially trained safety agents, day or night.</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>

    {/* About the space */}
    <div class="col-9" style={{ marginLeft:"90px"}}>
    <h4>About the space</h4>
    <p>Relax with the whole family at this peaceful 5 Bedroom Villa overlooking Hout Bay Beach</p>
    <p>** LOADSHEDDING BACK UP FROM DEC ONWARDS *</p>
    <p>5 BEDROOMS – 3 BATHROOMS</p>
    <p>This spacious modern family home boasting 5 bedrooms. The main bedroom ( en-suite) has a king-size bed, the remaining four bedrooms have queen-sized beds.</p>
    <p>Open plan kitchen and lounge area with fire place overlooking the mountains.</p>
    <p>The kitchen is fully equipped.</p>
    <p><b>The space</b></p>
    <p>There is an outdoor pizza oven, BBQ grill, large garden and swimming pool.</p>
    <p>Main Bedroom - King size bed (ensuite)</p>
    <p>Remaining 4 Bedrooms do have Queen size beds and share 2 bathrooms</p>
    <p>Housekeeping included from Monday to Friday</p>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>

    {/* What this place offers */}
    <h4 style={{ marginLeft:"100px"}}>What this place offers</h4>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-picture-o" aria-hidden="true"></i>   Bay view</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-sun-o" aria-hidden="true"></i> Beach view</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-cutlery" aria-hidden="true"></i> Kitchen</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-wifi" aria-hidden="true"></i> Wifi</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-car" aria-hidden="true"></i> Free parking on premises</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-map" aria-hidden="true"></i> Pool</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-television" aria-hidden="true"></i> HDTV</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-shower" aria-hidden="true"></i> Outdoor shower</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-6"/>

    {/* Select checkout date */}
    <h4 style={{ marginLeft:"100px"}}>Select checkout date</h4>
    <p style={{ marginLeft:"100px"}}>Minimum stay: 5 nights</p>
    
    <div style={{ marginLeft:"100px"}}>
     <Calendar onChange={setDate} value={date} showDoubleView={true} selectRange={true}/>
     {date.length > 0 ? (
   <p><br/>
   <span><b>CHECK-IN:</b></span>{' '} {date[0].toDateString()}
   <br/><br/>
   <span><b>CHECK-OUT:</b></span> {date[1].toDateString()}
 </p> ): (
         <p></p>
         )}
   </div>
   </div>   


   <div style={{border: "1px solid black", backgroundColor: "white", boxShadow:" 10px 10px 5px #aaaaaa",position:"sticky",top:"50px",right:"100px",width:"375px",left:"800px",height:"600px", padding: "20px", borderRadius: "15px"}} id="col1">
      <h4 style={{padding: "12px 10px"}}>₹61,474 night</h4>
    <div class="container">
      <div class="row">
         <div style={{border: "1px solid black",width:"350px",height:"60px"}} class="col-11">
         {date.length > 0 ? (
   <p style={{padding: "5px 10px"}}>
     <span><b>CHECK-IN:</b></span>{' '} {date[0].toDateString()}
     <br/>
     <span><b>CHECK-OUT:</b></span> {date[1].toDateString()}
   </p> ): (
        <p></p>
         )}
            </div>
      </div>
      <div class="row">
         <div style={{border: "1px solid black",height:"230px",padding:"15px 25px"}} class="col-11">
          <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Adults</h5>
            <p >Age 13+</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={incrementCounter}>+</button>  
            <div style={{margin: "0px 10px"}}>{counter}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={decrementCounter}>-</button>
            </div>
            </div> 
            <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Children</h5>
            <p >Ages 2–12</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={AddCounter}>+</button>  
            <div style={{margin: "0px 10px"}}>{counter1}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={MinusCounter}>-</button>
            </div>
            </div> 
            <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Infants</h5>
            <p >Under 2</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={AddCount}>+</button>  
            <div style={{margin: "0px 10px"}}>{count}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={MinusCount}>-</button>
            </div>
            </div> 
           </div>
      </div>
    </div>
    <button style={{width:"320px", margin:"15px 3px"}} type="button" class="btn btn-danger" onClick={handlesubmit}>Reserve</button>
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6>₹61,474 x 5 nights</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹3,07,371</p></div>     
    </div> 
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6> Cleaning fee</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹63,971</p></div>    
    </div> 
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6>Service fee</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹0</p></div>     
    </div> 
    <hr style={{ margin:"0px"}} class="col-10"/>
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6> Total before taxes</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹3,71,342</p></div>     
    </div> 
   </div>
</div>


{/* Review */}
<hr style={{ marginLeft:"100px"}} class="col-10"/>
<div style={{marginLeft:"100px", display:"flex",columnGap:"10px", fontSize:"20px"}}>
        <span class="fa fa-star checked"></span>
        <b>5.0</b><ul ><li >5 reviews</li></ul>
</div>
   <div class="row">
       <div style={{ marginLeft:"100px"}} class="col-2">Cleanliness</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
       <div class="col-2">Accuracy</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
   </div>

   <div class="row">
       <div style={{ marginLeft:"100px"}} class="col-2">Communication</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
       <div class="col-2">Location</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">4.4</div>
   </div>

   <div class="row">
       <div style={{ marginLeft:"100px"}} class="col-2">Check-in</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
       <div class="col-2">Value</div>
       <div class="col-2"style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
   </div>

   <div class="row">
      <div style={{ marginLeft:"100px", textAlign: "justify",marginRight:"60px", marginTop:"30px"}} class="col-5">
         <h5>Lydia</h5>
         <p>Jen was a wonderfully responsive and helpful host and Thandi, who did housekeeping was a marvel. We tried to be respectful and do most of own cleaning but for such w big group having help made our lives a lot easier. I would highly recommend this place.</p>
      </div>
      <div style={{ textAlign: "justify",marginRight:"50px", marginTop:"30px"}} class="col-5">
         <h5>Zimkitha</h5>
         <p>The pictures don't do any justice to how beautiful the villa is.Jen welcomed us with such warm hands even though we were late.There was also complimentary wine on arrival and pizza as well.The house was fully equipped.</p>
         <p>Absolutely beautiful stay, thank you Jen for being such a great host❤️. </p>
      </div>
   </div>

   <div class="row">
      <div style={{ marginLeft:"100px", textAlign: "justify",marginRight:"50px"}} class="col-5">
         <h5>Thokozani</h5>
         <p>Beautiful place, tranquil and Jenny is a great host. Really enjoyed our group stay.</p>
      </div>
      <div style={{ textAlign: "justify",marginRight:"50px"}} class="col-5">
         <h5>Craig</h5>
         <p>Greta value, great spot, well kept and great value for money. The VIEW is INCREDIBLE - !</p>
      </div>
   </div>

   {/* Footer */}

   <footer className="bg-secondary text-center">
  <div className="container p-2 pb-0">
    <section className="text-white mb-0">    
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "blue"}} 
         href="https://www.facebook.com" role="button"><i className="fa fa-facebook-official" aria-hidden="true"></i>
      </a>
     
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "skyblue"}}  
         href="https://twitter.com" role="button"><i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
      
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "red"}} 
        href="https://www.google.co.in" role="button"><i className="fa fa-google" aria-hidden="true"></i>
      </a>

      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "violet"}} 
        href="https://www.instagram.com" role="button"><i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </section>
  </div>
  <div className="text-white text-center p-2" >HomeStaybnb, Inc.</div>
</footer>
</>
);
}
export default Page1;