import React, { Component } from 'react';
import './styles/Questions.css';

export class Questions extends Component {
    static displayName = Questions.name;

        constructor(props) {
            super(props);
            this.state = { questions: [], loading: true };
        }

        componentDidMount() {
            this.populateQuestions();
        }

    static renderQuestionsTable(questions) {
        return (
            <div class="container mt-sm-5 my-1">
                <div class="question ml-sm-5 pl-sm-5 pt-2">
                    {questions.map(question =>
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

        render() {
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
        }
    }
