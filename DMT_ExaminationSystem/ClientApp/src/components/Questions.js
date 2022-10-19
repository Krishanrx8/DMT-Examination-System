import React, { useState, useEffect } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import './styles/Questions.css';

import { questionService } from '../services/question.service';

function Questions() {
    const match = useLocation();
    const path = match.pathname;
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        questionService.getAll().then(x => setQuestions(x));
    }, []);

        return (
            <div class="container mt-sm-5 my-1">
                <div class="question ml-sm-5 pl-sm-5 pt-2">
                     {questions && questions.map(question =>
                        <div>
                            <div class="py-2 h5"><b>{question.question}</b></div>
                         {/*  <img src={require({ question.image })} />*/}
                            <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                <label class="options">{question.choice_1}
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="options">{question.choice_2}
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="options">{question.choice_3}
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="options">{question.choice_4}
                                    <input type="radio" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        )}
                </div>
                <div class="d-flex align-items-center pt-3">
                    <div id="prev">
                        <button class="btn btn-primary">Previous</button>
                    </div>
                    <div class="ml-auto mr-sm-5">
                        <button class="btn btn-success">Next</button>
                    </div>
                </div>
            </div>
            );
        }

      /*  render() {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : Questions.renderQuestionsTable(this.state.questions);

            return (
                <div>
                    <h1 id="tabelLabel" >Questions</h1>
                    <p>This component demonstrates fetching data from the server.</p>
                    {contents}
                </div>
            );
        }

        async populateQuestions() {
            const response = await fetch('https://localhost:7233/Question_Bank');
            const data = await response.json();
            console.log('Resultsssssssssssss', response);
            this.setState({ questions: data, loading: false });
        }*/

export { Questions };
