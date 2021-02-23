import React, { useEffect, useState, useRef } from 'react';
import { getQuestions } from '../../../api/resources/disc/DiscQuestion';
import { useDispatch, useSelector } from 'react-redux';

// import { Container } from './styles';

import Validator from 'Validator';
import DiscForms from './DiscForms';
import { finishSession } from '../../../api/resources/disc/DicSession';
import { setDiscStep } from './redux/actions';

const discLetterScores = { 'D': 0, 'I': 0, 'S': 0, 'C': 0, 'N': 0 };

const calcGraphDiff = (more, less) => {

    let graph = Object.assign({}, discLetterScores);

    for (let key in discLetterScores) {

        graph[key] = more[key] - less[key]
    }
    return graph;
}

const incrementLetterCount = (letters) => {

    let graph = Object.assign({}, discLetterScores);

    for (let key in graph) {

        for (let i = 0; i < letters.length; i++) {
            if (key === letters[i]) {
                graph[key] = graph[key] + 1;
            }
        }
    }
    return graph;
}


export default function DiscQuestions() {

    const [score, setScore] = useState([]);
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [step, setStep] = useState(0);

    let currentStep = useSelector(state => state.disc.currentStep);
    let session = useSelector(state => state.disc.session);
    let questions = useSelector(state => state.disc.questions || []);

    const lastStepIndex = questions.length - 1;
    const isLastStep = lastStepIndex === currentStep;
    let dispatch = useDispatch();

    const formRules = (formData) => (
        Validator.make(formData, {
            more: 'required',
            less: 'required'
        })
    )
    
    useEffect(() => {

        getQuestions().then((response) => {
            let questionsData = [];

            for (let i = 0; i < 3 /* response.data.length */; i++) {
                response.data[i].isValid = false;
                questionsData.push(response.data[i]);
            }

            if (step === 0 && !currentStep) dispatch({ type: 'SET_CURRENT_STEP', payload: 0 });
            if (questions.length === 0) dispatch({ type: 'SET_DISC_QUESTIONS', payload: questionsData });
        })

    }, [])

    const handleInput = (e, questionOption, row) => {

        const inputs = document.getElementsByClassName('options');
        e.target.checked = false;
        let scoreData = Object.assign([], score);

        for (let i = 0; i < inputs.length; i++) {

            let input = inputs[i];

            if (input.getAttribute('row') == row && input.checked) {
                input.checked = false;
                scoreData = [];
            }
        }

        e.target.checked = true;
        scoreData[e.target.name] = { id: e.target.id, letter: e.target.value, };
        setScore(scoreData);
        let validator = formRules(scoreData);

        if (validator.fails()) {
            setDisableSubmit(true);
            return
        }

        let json = Object.assign([], questions);
        questionOption.answers = { ...scoreData };

        questionOption.isValid = true;
        json[questionOption.id - 1] = questionOption

        dispatch({ type: 'SET_DISC_QUESTIONS', payload: json });
        setDisableSubmit(false);

    }

    const handleSubmitNextQuestion = (e) => {

        e.preventDefault();
        setDisableSubmit(true);
        setStep(Math.min(step + 1, lastStepIndex));
        dispatch({ type: 'SET_CURRENT_STEP', payload: Math.min(currentStep + 1, lastStepIndex) });
        setScore('');

    }

    const handleSubmitQuestions = (e) => {

        e.preventDefault();

        const answers = questions.map(question => question.answers);
        console.log(questions, 'kosadksoa')

        for (let question of questions) {

            if (!question.isValid) {
                setDisableSubmit(true);
                dispatch({ type: 'SET_CURRENT_STEP', payload: 0 });
                setStep(0);
                return;
            }
        }

        let more = questions.map(question => question.answers.letter);
        let less = questions.map(question => question.answers.letter);

        let graphLess = incrementLetterCount(less);
        let graphMore = incrementLetterCount(more)
        let graphDiff = calcGraphDiff(graphMore, graphLess);

        // console.log(graphLess, 'less')
        // console.log(graphMore, 'more')
        // console.log(graphDiff, 'diff')

        session.session_data.items[0].graphLetters = graphLess;
        session.session_data.items[1].graphLetters = graphMore;
        session.session_data.items[2].graphLetters = graphDiff;

        finishSession({

            graphs: session.session_data.items,
            respondent_uuid: session.respondent.uuid,
            disc_test_code: session.session_data.disc_code,
            token: session.token

        }).then(response => console.log(response, 'deu certo!'))

    }

    const getSteps = questions.map((question, key) => (
        <div key={question.uuid}>
            <form onSubmit={!isLastStep ? ((e) => handleSubmitNextQuestion(e, question)) : handleSubmitQuestions}>
                <h6>{question.name}</h6>
                {question.options.map((option, key) => {
                    return <div key={key}>
                        <h6>{option.name}</h6>
                        <p>{option.description}</p>
                        <label>
                            <span>Mais</span>
                            <input className={'options'} id={option.id} type={'radio'} row={key} name={'more'} onChange={(el) => handleInput(el, question, key)} value={option.more} />
                        </label>
                        <label>
                            <span>Menos</span>
                            <input className={'options'} id={option.id} type={'radio'} row={key} name={'less'} onChange={(el) => handleInput(el, question, key)} value={option.less} />
                        </label>
                    </div>
                })}
                <button type={'submit'} disabled={disableSubmit}> {isLastStep ? 'Finalizar' : 'Proxima'} </button>
            </form>
            <hr />
        </div>
    )
    )

    return (
        <React.Fragment>
            {getSteps[currentStep]}
            <span>{currentStep + 1} / {questions.length}</span>
        </React.Fragment>
    )
}

