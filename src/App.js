import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";


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
        <Router>
            <Header />
            <div className="container">
                <Routes> 
                <Route exact path="/" element={
                    <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                    <AboutIconLink /> 
                    </>
                }>
                    
                </Route>
                
                <Route path='/about' element={<AboutPage/>} />
                    
                
                </Routes>
                
            </div>
        </Router>
    )
}
export default App;