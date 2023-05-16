import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App(){
   
    const [feedback,setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
    
        if(window.confirm('Are you sure ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)

    }
    
    return(
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} /> 
            </div>
        
        </>
    )
}
export default App;