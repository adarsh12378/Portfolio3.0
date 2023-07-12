import React, { useState } from 'react'
import me from "../assest/alumni.jpg";
import toast from "react-hot-toast";
import { motion} from "framer-motion"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
const Contact = () => {
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [message,setmessage]=useState("");

const [disableBtn, setDisableBtn] = useState(false);

const submitHandler = async (e) => {
  e.preventDefault();
  setDisableBtn(true);
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
    });
    setname("");
    setemail("");
    setmessage("");
    toast.success("Message Sent");
    setDisableBtn(false);
  } catch (error) {
    toast.error("Error");
    console.log(error);
    setDisableBtn(false);
  }
};

    const animations = {
        form: {
          initial: {
            x: '-100%',
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: '-100%',
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
        transition: {
          delay: 0.5,
        },
      };
    

  return (
    <div id ="contact">
    <section>
        <motion.form onSubmit={submitHandler} {...animations.form} >
            <h2>Contact Me</h2>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='your name ' required/>
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='your email ' required/>
            <input type="text" value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='your message' required/>
            <motion.button {...animations.button} disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button} type='submit'>Send</motion.button>

        </motion.form>
    </section>
    <aside>
        <img src={me} alt="" srcset="" />
    </aside>
    </div>
  )
}

export default Contact
