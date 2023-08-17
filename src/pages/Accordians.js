import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import BackArrow from "../assets/images/arrowBack.svg";
import { Link } from 'react-router-dom';
// import { Toast } from "./Toast";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';

const Accordians = () => {

    const [popup, setPopup] = useState(false);
    const [htmlQuestions, setHtmlQuestions] = useState({
        html: "No",
        htm2: "No",
        htm3: "No",
        htm4: "No",
        htm5: "No",
        isHtmlFilled: false
    })
    const [cssQuestions, setCssQuestions] = useState({
        css1: "No",
        css2: "No",
        css3: "No",
        css4: "No",
        css5: "No",
        isAllSelected: false
    })
    const [bootstrapQuest, setBootstrapQuest] = useState({
        boot1: "No",
        boot2: "No",
        boot3: "No",
        boot4: "No",
        boot5: "No",
        isAllSelected: false
    })
    const [javascriptKeys, setjavascriptKeys] = useState({
        java1: "No",
        java2: "No",
        java3: "No",
        java4: "No",
        java5: "No",
        isAllSelected: false
    })
    // Html Values
    const storeHtmlValues = () => {
        if (htmlQuestions.html === "No" ||
            htmlQuestions.htm2 === "No" ||
            htmlQuestions.htm3 === "No" ||
            htmlQuestions.htm4 === "No" ||
            htmlQuestions.htm5 === "No") {
            toast.error('Please Solve All HTML Questions', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            setHtmlQuestions({
                ...htmlQuestions,
                isHtmlFilled: false
            })
        }
        else {
            toast.success('HTML Checks Done', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            localStorage.setItem("htmlQuestions", JSON.stringify(htmlQuestions))
            setHtmlQuestions({
                ...htmlQuestions,
                isHtmlFilled: true
            })
        }
    }
    // css values
    const storeCssValues = () => {
        if (cssQuestions.css1 === "No" ||
            cssQuestions.css2 === "No" ||
            cssQuestions.css3 === "No" ||
            cssQuestions.css4 === "No" ||
            cssQuestions.css5 === "No") {
            toast.error('Please Solve All Css Questions', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            setCssQuestions({
                ...cssQuestions,
                isAllSelected: false
            })
        }
        else {
            toast.success('CSS Checks Done', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            setCssQuestions({
                ...cssQuestions,
                isAllSelected: true
            })
            localStorage.setItem("cssQuestions", JSON.stringify(cssQuestions))
        }
    }
    //  Bootstrap values
    const storeBootValues = () => {
        if (bootstrapQuest.boot1 === "No" ||
            bootstrapQuest.boot2 === "No" ||
            bootstrapQuest.boot3 === "No" ||
            bootstrapQuest.boot4 === "No" ||
            bootstrapQuest.boot5 === "No") {
            toast.error('Please Solve All BootStrap Questions', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            setBootstrapQuest({
                ...bootstrapQuest,
                isAllSelected: false
            })
        }
        else {
            toast.success('BootStrap Checks Done', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            setBootstrapQuest({
                ...bootstrapQuest,
                isAllSelected: true
            })
            localStorage.setItem('bootstrapQuest', JSON.stringify(bootstrapQuest))
        }

    }
    // Javascript Values
    const storeJavaValues = () => {

        if (javascriptKeys.java1 === "No" ||
            javascriptKeys.java2 === "No" ||
            javascriptKeys.java3 === "No" ||
            javascriptKeys.java4 === "No" ||
            javascriptKeys.java5 === "No") {
            toast.error('Please Solve All JavaScript Questions', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            setjavascriptKeys({
                ...javascriptKeys,
                isAllSelected: false
            })
        }
        else {
            setPopup(true)
            toast.success('Javascript Checks Done', {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
            setjavascriptKeys({
                ...javascriptKeys,
                isAllSelected: true
            })
            localStorage.setItem('javascriptKeys', JSON.stringify(javascriptKeys))
        }
    }
    return (
        <>
            <div className="mainAccordian">
                <div className="tittle">
                    <Link to="/">
                        <img src={BackArrow} className='me-2' height="22" width="22" alt="" />
                    </Link>
                    <h1>Accordians List</h1>
                </div>
                <div className="accordiansList">
                    <div className="accordItem">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>HTML Questions</Accordion.Header>
                                <Accordion.Body>
                                    <ol className='questionsList'>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Can you use HTML to create the structure and content of a webpage?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        type="radio"
                                                        value="Yes"
                                                        checked={htmlQuestions.html === 'Yes'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, html: e.target.value })}
                                                        name="flexRadioDefault"
                                                        id="yesId" />
                                                    <label class="form-check-label" for="yesId">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        type="radio"
                                                        value="No"
                                                        checked={htmlQuestions.html === 'No'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, html: e.target.value })}
                                                        name="flexRadioDefault" id="noId" />
                                                    <label class="form-check-label" for="noId">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        type="radio"
                                                        value="NA"
                                                        checked={htmlQuestions.html === 'NA'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, html: e.target.value })}
                                                        name="flexRadioDefault" id="naId" />
                                                    <label class="form-check-label" for="naId">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Does HTML provide a way to embed images and videos on a webpage?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="Yes"
                                                        checked={htmlQuestions.htm2 === 'Yes'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm2: e.target.value })}
                                                        type="radio" name="html" id="yesId1" />
                                                    <label class="form-check-label" for="yesId1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="No"
                                                        checked={htmlQuestions.htm2 === 'No'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm2: e.target.value })}
                                                        type="radio" name="html" id="noId1" />
                                                    <label class="form-check-label" for="noId1">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="NA"
                                                        checked={htmlQuestions.htm2 === 'NA'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm2: e.target.value })}
                                                        type="radio" name="html" id="naId1" />
                                                    <label class="form-check-label" for="naId1">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Is HTML a programming language?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="Yes"
                                                        checked={htmlQuestions.htm3 === 'Yes'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm3: e.target.value })}
                                                        type="radio" name="programming" id="yesId2" />
                                                    <label class="form-check-label" for="yesId2">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="No"
                                                        checked={htmlQuestions.htm3 === 'No'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm3: e.target.value })}
                                                        type="radio" name="programming" id="noId2" />
                                                    <label class="form-check-label" for="noId2">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="NA"
                                                        checked={htmlQuestions.htm3 === 'NA'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm3: e.target.value })}
                                                        type="radio" name="programming" id="naId2" />
                                                    <label class="form-check-label" for="naId2">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Can you use HTML to apply styling, such as changing colors and fonts, to elements on a webpage?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="Yes"
                                                        checked={htmlQuestions.htm4 === 'Yes'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm4: e.target.value })}
                                                        type="radio" name="html4" id="yesId3" />
                                                    <label class="form-check-label" for="yesId3">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="No"
                                                        checked={htmlQuestions.htm4 === 'No'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm4: e.target.value })}
                                                        type="radio" name="html4" id="noId3" />
                                                    <label class="form-check-label" for="noId3">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="NA"
                                                        checked={htmlQuestions.htm4 === 'NA'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm4: e.target.value })}
                                                        type="radio" name="html4" id="naId3" />
                                                    <label class="form-check-label" for="naId3">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5> Is the "div" element used to create lists of items in HTML?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="Yes"
                                                        checked={htmlQuestions.htm5 === 'Yes'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm5: e.target.value })}
                                                        type="radio" name="html5" id="yesId4" />
                                                    <label class="form-check-label" for="yesId4">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="No"
                                                        checked={htmlQuestions.htm5 === 'No'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm5: e.target.value })}
                                                        type="radio" name="html5" id="noId4" />
                                                    <label class="form-check-label" for="noId4">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        value="NA"
                                                        checked={htmlQuestions.htm5 === 'NA'}
                                                        onChange={(e) => setHtmlQuestions({ ...htmlQuestions, htm5: e.target.value })}
                                                        type="radio" name="html5" id="naId4" />
                                                    <label class="form-check-label" for="naId4">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                    {
                                        htmlQuestions.html === "Yes" || htmlQuestions.html === "NA" ||
                                            htmlQuestions.htm2 === "Yes" || htmlQuestions.htm2 === "NA" ||
                                            htmlQuestions.htm3 === "Yes" || htmlQuestions.htm3 === "NA" ||
                                            htmlQuestions.htm4 === "Yes" || htmlQuestions.htm4 === "NA" ||
                                            htmlQuestions.htm5 === "Yes" || htmlQuestions.htm5 === "NA" ?
                                            <>
                                                <div className="belowBtns">
                                                    <button className='saveBtn' onClick={storeHtmlValues}>Save</button>
                                                    <button className='CancleBtn'>Cancel</button>
                                                </div>
                                            </>
                                            : null
                                    }

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> {htmlQuestions.isHtmlFilled ? "CSS Questions" : <span className="text-danger">To Fill Css Question Solve Html Question's First</span>} </Accordion.Header>
                                <Accordion.Body>
                                    <ol className='questionsList'>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Can CSS be used to apply styling to HTML elements, such as changing colors and fonts?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="Yes"
                                                        checked={cssQuestions.css1 === 'Yes'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css1: e.target.value })}
                                                        type="radio" name="css1" id="cssYes" />
                                                    <label class="form-check-label" for="cssYes">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="No"
                                                        checked={htmlQuestions.isHtmlFilled ? cssQuestions.css1 === 'No' : false}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css1: e.target.value })}
                                                        type="radio" name="css1" id="cssNo" />
                                                    <label class="form-check-label" for="cssNo">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="NA"
                                                        checked={cssQuestions.css1 === 'NA'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css1: e.target.value })}
                                                        type="radio" name="css1" id="cssNa" />
                                                    <label class="form-check-label" for="cssNa">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Does CSS allow you to control the layout and positioning of elements on a webpage?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="Yes"
                                                        checked={cssQuestions.css2 === 'Yes'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css2: e.target.value })}
                                                        type="radio" name="css2" id="yesCss2" />
                                                    <label class="form-check-label" for="yesCss2">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="No"
                                                        checked={htmlQuestions.isHtmlFilled ? cssQuestions.css2 === 'No' : false}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css2: e.target.value })}
                                                        type="radio" name="css2" id="noCss2" />
                                                    <label class="form-check-label" for="noCss2">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="NA"
                                                        checked={cssQuestions.css2 === 'NA'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css2: e.target.value })}
                                                        type="radio" name="css2" id="naCss2" />
                                                    <label class="form-check-label" for="naCss2">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Can CSS be included directly within an HTML file using the "style" element?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="Yes"
                                                        checked={cssQuestions.css3 === 'Yes'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css3: e.target.value })}
                                                        type="radio" name="flexRadioDefault3" id="yesCss3" />
                                                    <label class="form-check-label" for="yesCss3">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="No"
                                                        checked={htmlQuestions.isHtmlFilled ? cssQuestions.css3 === 'No' : false}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css3: e.target.value })}
                                                        type="radio" name="flexRadioDefault3" id="noCss3" />
                                                    <label class="form-check-label" for="noCss3">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="NA"
                                                        checked={cssQuestions.css3 === 'NA'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css3: e.target.value })}
                                                        type="radio" name="flexRadioDefault3" id="naCss3" />
                                                    <label class="form-check-label" for="naCss3">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Does CSS have the capability to create animations and transitions on web elements?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="Yes"
                                                        checked={cssQuestions.css4 === 'Yes'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css4: e.target.value })}
                                                        type="radio" name="flexRadioDefault4" id="yesCss4" />
                                                    <label class="form-check-label" for="yesCss4">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="No"
                                                        checked={htmlQuestions.isHtmlFilled ? cssQuestions.css4 === 'No' : false}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css4: e.target.value })}
                                                        type="radio" name="flexRadioDefault4" id="noCss4" />
                                                    <label class="form-check-label" for="noCss4">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="NA"
                                                        checked={cssQuestions.css4 === 'NA'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css4: e.target.value })}
                                                        type="radio" name="flexRadioDefault4" id="naCss4" />
                                                    <label class="form-check-label" for="naCss4">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Is CSS primarily used for processing and manipulating data on the server side of web applications?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="Yes"
                                                        checked={cssQuestions.css5 === 'Yes'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css5: e.target.value })}
                                                        type="radio" name="flexRadioDefault5" id="yesCss5" />
                                                    <label class="form-check-label" for="yesCss5">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="No"
                                                        checked={htmlQuestions.isHtmlFilled ? cssQuestions.css5 === 'No' : false}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css5: e.target.value })}
                                                        type="radio" name="flexRadioDefault5" id="noCss5" />
                                                    <label class="form-check-label" for="noCss5">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!htmlQuestions.isHtmlFilled ? true : false}
                                                        value="NA"
                                                        checked={cssQuestions.css5 === 'NA'}
                                                        onChange={(e) => setCssQuestions({ ...cssQuestions, css5: e.target.value })}
                                                        type="radio" name="flexRadioDefault5" id="nsCss5" />
                                                    <label class="form-check-label" for="nsCss5">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                    {
                                        cssQuestions.css1 === "Yes" || cssQuestions.css1 === "NA" ||
                                            cssQuestions.css2 === "Yes" || cssQuestions.css2 === "NA" ||
                                            cssQuestions.css3 === "Yes" || cssQuestions.css3 === "NA" ||
                                            cssQuestions.css4 === "Yes" || cssQuestions.css4 === "NA" ||
                                            cssQuestions.css5 === "Yes" || cssQuestions.css5 === "NA" ?
                                            <>
                                                <div className="belowBtns">
                                                    <button className='saveBtn' onClick={storeCssValues}>Save</button>
                                                    <button className='CancleBtn'>Cancel</button>
                                                </div>
                                            </>
                                            : null
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> {cssQuestions.isAllSelected ? "BOOTSTRAP Questions" : <span className="text-danger">To Fill Bootstrap Question Solve Css Question's First</span>}</Accordion.Header>
                                <Accordion.Body>
                                    <ol className='questionsList'>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Is Bootstrap a popular front-end framework for building responsive and mobile-first websites?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={bootstrapQuest.boot1 === 'Yes'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot1: e.target.value })}
                                                        type="radio" name="testing" id="yesboot1" />
                                                    <label class="form-check-label" for="yesboot1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={cssQuestions.isAllSelected ? bootstrapQuest.boot1 === 'No' : false}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot1: e.target.value })}
                                                        type="radio" name="testing" id="bootNo" />
                                                    <label class="form-check-label" for="bootNo">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={bootstrapQuest.boot1 === 'NA'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot1: e.target.value })}
                                                        type="radio" name="testing" id="naboot1" />
                                                    <label class="form-check-label" for="naboot1">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Does Bootstrap provide a grid system that helps in creating responsive layouts for different screen sizes?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={bootstrapQuest.boot2 === 'Yes'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot2: e.target.value })}
                                                        type="radio" name="formboot2" id="yesboot2" />
                                                    <label class="form-check-label" for="yesboot2">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={cssQuestions.isAllSelected ? bootstrapQuest.boot2 === 'No' : false}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot2: e.target.value })}
                                                        type="radio" name="formboot2" id="noboot2" />
                                                    <label class="form-check-label" for="noboot2">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={bootstrapQuest.boot2 === 'NA'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot2: e.target.value })}
                                                        type="radio" name="formboot2" id="naboot2" />
                                                    <label class="form-check-label" for="naboot2">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5> Can you use Bootstrap's pre-designed components like navigation bars, buttons, and modals to speed up web development?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={bootstrapQuest.boot3 === 'Yes'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot3: e.target.value })}
                                                        type="radio" name="formBoot3" id="yesboot3" />
                                                    <label class="form-check-label" for="yesboot3">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={cssQuestions.isAllSelected ? bootstrapQuest.boot3 === 'No' : false}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot3: e.target.value })}
                                                        type="radio" name="formBoot3" id="noboot3" />
                                                    <label class="form-check-label" for="noboot3">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={bootstrapQuest.boot3 === 'NA'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot3: e.target.value })}
                                                        type="radio" name="formBoot3" id="naboot3" />
                                                    <label class="form-check-label" for="naboot3">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Does Bootstrap require you to write custom CSS for styling elements?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={bootstrapQuest.boot4 === 'Yes'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot4: e.target.value })}
                                                        type="radio" name="formboot4" id="yesboot4" />
                                                    <label class="form-check-label" for="yesboot4">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={cssQuestions.isAllSelected ? bootstrapQuest.boot4 === 'No' : false}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot4: e.target.value })}
                                                        type="radio" name="formboot4" id="noboot4" />
                                                    <label class="form-check-label" for="noboot4">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={bootstrapQuest.boot4 === 'NA'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot4: e.target.value })}
                                                        type="radio" name="formboot4" id="naboot4" />
                                                    <label class="form-check-label" for="naboot4">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Is Bootstrap only compatible with a specific programming language or technology?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={bootstrapQuest.boot5 === 'Yes'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot5: e.target.value })}
                                                        type="radio" name="formBoot5" id="yesboot5" />
                                                    <label class="form-check-label" for="yesboot5">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={cssQuestions.isAllSelected ? bootstrapQuest.boot5 === 'No' : false}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot5: e.target.value })}
                                                        type="radio" name="formBoot5" id="noboot5" />
                                                    <label class="form-check-label" for="noboot5">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!cssQuestions.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={bootstrapQuest.boot5 === 'NA'}
                                                        onChange={(e) => setBootstrapQuest({ ...bootstrapQuest, boot5: e.target.value })}
                                                        type="radio" name="formBoot5" id="naboot5" />
                                                    <label class="form-check-label" for="naboot5">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                    {
                                        bootstrapQuest.boot1 === "Yes" || bootstrapQuest.boot1 === "NA" ||
                                            bootstrapQuest.boot2 === "Yes" || bootstrapQuest.boot2 === "NA" ||
                                            bootstrapQuest.boot3 === "Yes" || bootstrapQuest.boot3 === "NA" ||
                                            bootstrapQuest.boot4 === "Yes" || bootstrapQuest.boot4 === "NA" ||
                                            bootstrapQuest.boot5 === "Yes" || bootstrapQuest.boot5 === "NA" ?
                                            <>
                                                <div className="belowBtns">
                                                    <button className='saveBtn' onClick={storeBootValues}>Save</button>
                                                    <button className='CancleBtn'>Cancel</button>
                                                </div>
                                            </>
                                            : null
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> {bootstrapQuest.isAllSelected ? "JAVASCRIPT Questions" : <span className="text-danger">To Fill Javascript Question Solve Bootstrap Question's First</span>}</Accordion.Header>
                                <Accordion.Body>
                                    <ol className='questionsList'>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Can you use JavaScript to add interactivity to websites, such as responding to user actions like clicks and input?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={javascriptKeys.java1 === 'Yes'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java1: e.target.value })}
                                                        type="radio" name="formJava1" id="java1" />
                                                    <label class="form-check-label" for="java1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={bootstrapQuest.isAllSelected ? javascriptKeys.java1 === 'No' : false}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java1: e.target.value })}
                                                        type="radio" name="formJava1" id="nojava1" />
                                                    <label class="form-check-label" for="nojava1">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={javascriptKeys.java1 === 'NA'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java1: e.target.value })}
                                                        type="radio" name="formJava1" id="naJava1" />
                                                    <label class="form-check-label" for="naJava1">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Is JavaScript primarily used on the client side to run in web browsers?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={javascriptKeys.java2 === 'Yes'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java2: e.target.value })}
                                                        type="radio" name="formJava2" id="yesjava2" />
                                                    <label class="form-check-label" for="yesjava2">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={bootstrapQuest.isAllSelected ? javascriptKeys.java2 === 'No' : false}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java2: e.target.value })}
                                                        type="radio" name="formJava2" id="noJava2" />
                                                    <label class="form-check-label" for="noJava2">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={javascriptKeys.java2 === 'NA'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java2: e.target.value })}
                                                        type="radio" name="formJava2" id="naJava2" />
                                                    <label class="form-check-label" for="naJava2">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Can you declare variables in JavaScript using the var, let, and const keywords?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={javascriptKeys.java3 === 'Yes'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java3: e.target.value })}
                                                        type="radio" name="formJava3" id="yesJava3" />
                                                    <label class="form-check-label" for="yesJava3">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={bootstrapQuest.isAllSelected ? javascriptKeys.java3 === 'No' : false}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java3: e.target.value })}
                                                        type="radio" name="formJava3" id="noJava3" />
                                                    <label class="form-check-label" for="noJava3">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={javascriptKeys.java3 === 'NA'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java3: e.target.value })}
                                                        type="radio" name="formJava3" id="naJava3" />
                                                    <label class="form-check-label" for="naJava3">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5> Is JavaScript a statically typed language where variable types are declared explicitly?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={javascriptKeys.java4 === 'Yes'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java4: e.target.value })}
                                                        type="radio" name="formJava4" id="yesjava4" />
                                                    <label class="form-check-label" for="yesjava4">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={bootstrapQuest.isAllSelected ? javascriptKeys.java4 === 'No' : false}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java4: e.target.value })}
                                                        type="radio" name="formJava4" id="noJava4" />
                                                    <label class="form-check-label" for="noJava4">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={javascriptKeys.java4 === 'NA'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java4: e.target.value })}
                                                        type="radio" name="formJava4" id="naJava4" />
                                                    <label class="form-check-label" for="naJava4">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='innerList'>
                                            <div className="question">
                                                <h5>Can JavaScript be used to manipulate the Document Object Model (DOM) and dynamically update content on a webpage?</h5>
                                            </div>
                                            <div className="solution">
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="Yes"
                                                        checked={javascriptKeys.java5 === 'Yes'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java5: e.target.value })}
                                                        type="radio" name="formJava5" id="yesJava5" />
                                                    <label class="form-check-label" for="yesJava5">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="No"
                                                        checked={bootstrapQuest.isAllSelected ? javascriptKeys.java5 === 'No' : false}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java5: e.target.value })}
                                                        type="radio" name="formJava5" id="noJava5" />
                                                    <label class="form-check-label" for="noJava5">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input"
                                                        disabled={!bootstrapQuest.isAllSelected ? true : false}
                                                        value="NA"
                                                        checked={javascriptKeys.java5 === 'NA'}
                                                        onChange={(e) => setjavascriptKeys({ ...javascriptKeys, java5: e.target.value })}
                                                        type="radio" name="formJava5" id="naJava5" />
                                                    <label class="form-check-label" for="naJava5">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                    {
                                        javascriptKeys.java1 === "Yes" || javascriptKeys.java1 === "NA" ||
                                            javascriptKeys.java2 === "Yes" || javascriptKeys.java2 === "NA" ||
                                            javascriptKeys.java3 === "Yes" || javascriptKeys.java3 === "NA" ||
                                            javascriptKeys.java4 === "Yes" || javascriptKeys.java4 === "NA" ||
                                            javascriptKeys.java5 === "Yes" || javascriptKeys.java5 === "NA" ?
                                            <>
                                                <div className="belowBtns">
                                                    <button className='saveBtn' onClick={storeJavaValues}>Save</button>
                                                    <button className='CancleBtn'>Cancel</button>
                                                </div>
                                            </>
                                            : null
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>

            {/* Pop Up */}
            <Modal show={popup} onHide={() => setPopup(false)}>
                <Modal.Body className='modal_body'>
                    <div className="testpopup">
                        <div className="insideBox">
                            <h1>Test Is Submitted</h1>
                            <h1>Result's Will Be Shared Through Mail...</h1>
                            <Link to="/" className="redirectLink">
                                <button className="innerBtn">Home</button>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </ >
    )
}

export default Accordians;
