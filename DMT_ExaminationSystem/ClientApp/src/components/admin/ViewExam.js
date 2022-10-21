import React, { useState, useEffect } from "react";
import { FormGroup, legend, Input, Label } from "reactstrap";
import { Link, useLocation, } from "react-router-dom";

import { questionService } from "../../services/question.service";

function ViewExam() {
    const match = useLocation();
    const path = match.pathname;
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        questionService.getAll().then(x => setQuestions(x));
        console.log(questions);
    }, []);

    return (
        <div class="container mt-sm-5 my-1">
            <div class="question ml-sm-5 pl-sm-5 pt-2">
                {questions && questions.map(question =>
                <FormGroup tag="fieldset">
                    <legend>
                       {question.question}
                    </legend>
                    <FormGroup check>
                        <Input name="radio1" type="radio"/>
                      {question.choice_1}
                        <Label> {question.choice_1}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name="radio1" type="radio"/>
                      {question.choice_2}
                        <Label check> {question.choice_2} </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name="radio3" type="radio" />
                        {question.choice_3}
                        <Label> {question.choice_3}</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name="radio4" type="radio" />
                        {question.choice_4}
                        <Label check> {question.choice_4} </Label>
                    </FormGroup>
                </FormGroup>
              
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
      const response = await fetch("https://localhost:7233/Question_Bank");
      const data = await response.json();
      console.log("Resultsssssssssssss", response);
      this.setState({ questions: data, loading: false });
  }*/

export { ViewExam };