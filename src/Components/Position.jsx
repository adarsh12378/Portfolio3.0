import React from 'react'
import me from '../assest/tnp.jpg'
import me1 from "../assest/ojaswa.jpg"
import me2 from "../assest/alumni.jpg"

const Position = () => {
  return (
    <div id='position'>
      <h1>My College Positons</h1>
      <section className='section1'>
        <div>
            <img src={me} alt="" srcset="" />
            <h2>Training and <br />Placement Coordinator</h2>
            <p><li>
            Liaisons with corporate recruitment team to invite top companies and manage the placement</li>
            <li>Contact the companies and invite them to campus recruitment
</li>
<li>Informing the students briefly about the Training Placement procedure, without creating any ambiguity.
</li>
<li>Responsible for hospitality of the company and conduct the placement drive smoothly.</li></p>
        </div>
      </section>
      <section className='section1'>
        <div>
            <img src={me1} alt="" srcset="" />
            <h2>Head Of Sponsership <br /> at Club Ojaswa</h2>
            <p> <li>Organizing So Many Event Thats Improve My Personality and Public Speaking For the Club Ojaswa.</li>
            <li>Adding The Event Registration Form Link On The Website Managing The Text And Background Of The
Website.</li>
            <li> Official Personality Development Club.</li>
<li> Created a sponsership in my tenure of more than 80k Rupees.</li></p>
        </div>
      </section>
      <section className='section1'>
        <div>
            <img src={me2} alt="" srcset="" />
            <h2>Founding Member<br />SGSITS Alumni Association Club</h2>
            <p> <li>Founding the Club Connects with lots of alumni of sgsits indore hiring volunteers for the club and conducted so many event so far.</li>
            <li>Conducted a two days event in a college gather all alumni of our college.</li>
            <li>Working with the club techno team ,marketing and media team ,sponsership team to make the event successful.</li>
            <li>Work and manage the team of around 50+ member</li>

    </p>
        </div>
      </section>
     
    </div>
  )
}

export default Position

