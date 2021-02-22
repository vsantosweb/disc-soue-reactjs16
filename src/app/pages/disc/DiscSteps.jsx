import React, { useState } from 'react';
import { getQuestions } from '../../../api/resources/disc/DiscQuestion';
import Validator from 'Validator';

// import { Container } from './styles';

const questionInputs = () => {

    const [questionsData, setQuestionsData] = useState(null);
    const [formData, setFormData] = useState([]);
    const [score, setScore] = useState([]);


    const formRules = (formData) => (
        Validator.make(formData, {
            more: 'required',
            less: 'required'
        })
    )
    const handleInput = (e, questionOption, row) => {

        let inputs = document.getElementsByClassName('questionOption');

        let scoreData = Object.assign([], score);

        for (let i = 0; i < inputs.length; i++) {

            let input = inputs[i];

            if (input.getAttribute('row') == row) {
                input.checked = false;
            }
        }

        e.target.checked = true;
        scoreData[e.target.name] = e.target.value;

        setScore(scoreData);


        if (scoreData.less === scoreData.more) {
            e.target.checked = false;
            delete scoreData[e.target.name];
            setScore('');
        }

        let validator = formRules(scoreData);

        if (validator.fails()) {

            setDisableSubmit(true);

            return
        }

        let json = Object.assign([], formData);

        questionOption.answers = scoreData;

        json[questionOption.id - 1] = questionOption

        setFormData(json);

        console.log(json, 'hahahaahah')
        setDisableSubmit(false);
    }
    
    return  <div></div>
}
