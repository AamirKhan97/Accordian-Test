import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import BackArrow from "../assets/images/arrowBack.svg";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Accordians = () => {
    return (
        <div>
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
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="yesId" />
                                                    <label class="form-check-label" for="yesId">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" checked name="flexRadioDefault" id="noId" />
                                                    <label class="form-check-label" for="noId">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="naId" />
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
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault2" id="yesId1" />
                                                    <label class="form-check-label" for="yesId1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" checked name="flexRadioDefault2" id="noId1" />
                                                    <label class="form-check-label" for="noId1">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault2" id="naId1" />
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
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault3" id="yesId1" />
                                                    <label class="form-check-label" for="yesId1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" checked name="flexRadioDefault3" id="noId1" />
                                                    <label class="form-check-label" for="noId1">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault3" id="naId1" />
                                                    <label class="form-check-label" for="naId1">
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
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="yesId1" />
                                                    <label class="form-check-label" for="yesId1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" checked name="flexRadioDefault4" id="noId1" />
                                                    <label class="form-check-label" for="noId1">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault4" id="naId1" />
                                                    <label class="form-check-label" for="naId1">
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
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault5" id="yesId1" />
                                                    <label class="form-check-label" for="yesId1">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" checked name="flexRadioDefault5" id="noId1" />
                                                    <label class="form-check-label" for="noId1">
                                                        No
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault5" id="naId1" />
                                                    <label class="form-check-label" for="naId1">
                                                        NA
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                    <div className="belowBtns">
                                        <button>Save</button>
                                        <button>Cancel</button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>CSS Questions</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>BOOTSTRAP Questions</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>JAVASCRIPT Questions</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordians;
