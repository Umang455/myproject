import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Form() {
    const [content, setContent] = useState([]);
    const [inputs, setInputs] = useState({});
    
    useEffect(() => {
        const studentName = window.location.href.split('?')[1];
        
        axios
            .get(`https://inplant-backend.onrender.com/teacher/send-details/${studentName}`)
            .then((res) => {
                setContent(res.data.student);
            })
            .catch((err) => {
                console.log('error : ', err);
                alert(err.response.data.message);
            });
    }, [])
    if (!content) return null;

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    // console.log(inputs);

    const handleSubmit = (e) => {
        const name = window.location.href.split('?')[1];
        const studentName = name.split('=')[1];
        e.preventDefault();
        axios
            .post(`https://inplant-backend.onrender.com/teacher/upload-details/${studentName}`, inputs)
            .then((res) => {
                console.log(res);
                alert(res.data.message);
            })
            .catch((err) => {
                console.log('error : ', err);
                alert(err.response.data.message);
            });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="title-div">
                    <h1>Industry Mentor</h1>
                    <p>Marks Evaluation for Student</p>
                    {
                        // show the student name here
                        <p className="py-2 text-xl"><b>{content.name}</b></p>
                    }
                    <p className="required">*Required</p>
                </div>

                <div className="name-div">
                    <div className="title">
                        Punctuality/ discipline<span className="required">*</span>
                    </div>
                    <div className="input-div">
                        <input required type="number" name="discipline" placeholder="Your answer" onChange={handleChanges}/>
                    </div>
                </div>

                <div className="college-div">
                    <div className="title">
                        Learning initiatives / attitude<span className="required">*</span>
                    </div>
                    <div className="input-div">
                        <input required type="number" name="attitude" placeholder="Your answer" onChange={handleChanges}/>
                    </div>
                </div>

                <div className="gmail-div">
                    <div className="title">
                        Daily and weekly dairy maintenance<span className="required">*</span>
                    </div>
                    <div className="input-div">
                        <input required type="number" name="maintenance" placeholder="Your answer" onChange={handleChanges}/>
                    </div>
                </div>

                <div className="mobile-div">
                    <div className="title">
                        Inplant traning report writing<span className="required">*</span>
                    </div>
                    <div className="input-div">
                        <input required type="number" name="report" placeholder="Your answer" onChange={handleChanges}/>
                    </div>
                </div>

                <div className="mobile-div">
                    <div className="title">
                        Knowledge gained / skills achieved<span className="required">*</span>
                    </div>
                    <div className="input-div">
                        <input required type="number" name="achievement" placeholder="Your answer" onChange={handleChanges}/>
                    </div>
                </div>

                <div>
                    <input className="btn" type="submit" name="Submit"/>
                </div>
            </div>
        </form>
        </>
    );
}