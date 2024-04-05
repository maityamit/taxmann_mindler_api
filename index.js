const express = require("express");
const bodyParser = require('body-parser')
const axios = require('axios');
const cheerio = require('cheerio');
var jsonParser = bodyParser.json()


const app = express();
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});



const reactQuestions = [
    // Easy Questions
    {
      questionNumber: 1,
      question: "What is JSX?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "React",
      questionOptions: [
        "A JavaScript extension that allows mixing HTML with JavaScript",
        "A new programming language developed by Facebook",
        "A lightweight CSS framework",
        "An advanced state management library"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 2,
      question: "What are props in React?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "React",
      questionOptions: [
        "Internal state of a component",
        "HTML attributes passed to a component",
        "Methods used for event handling",
        "A type of React component"
      ],
      correctOptionNumber: 1
    },
    {
      questionNumber: 3,
      question: "What does React.useState() do?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "React",
      questionOptions: [
        "It updates the component's state",
        "It creates a new component",
        "It imports external libraries",
        "It defines the initial state of a component"
      ],
      correctOptionNumber: 3
    },
    {
      questionNumber: 4,
      question: "What is the significance of keys in React lists?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "React",
      questionOptions: [
        "To optimize rendering performance",
        "To uniquely identify list items",
        "To manage state within list components",
        "To handle event delegation"
      ],
      correctOptionNumber: 1
    },
  
    // Medium Questions
    {
      questionNumber: 5,
      question: "What is the purpose of the virtual DOM in React?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "React",
      questionOptions: [
        "To speed up rendering",
        "To enable server-side rendering",
        "To provide a clean separation between HTML and JavaScript",
        "To improve memory management"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 6,
      question: "What is the main function of React Router?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "React",
      questionOptions: [
        "To manage state in React components",
        "To handle HTTP requests",
        "To enable navigation in a single-page application",
        "To optimize rendering performance"
      ],
      correctOptionNumber: 2
    },
    {
      questionNumber: 7,
      question: "What is the purpose of the useEffect hook in React?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "React",
      questionOptions: [
        "To handle user input events",
        "To manage component lifecycle events",
        "To fetch data from a server",
        "To render components conditionally"
      ],
      correctOptionNumber: 1
    },
    {
      questionNumber: 8,
      question: "What does Redux offer in React applications?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "React",
      questionOptions: [
        "A centralized state management solution",
        "A library for styling React components",
        "A tool for server-side rendering",
        "A framework for routing"
      ],
      correctOptionNumber: 0
    },
  
    // Hard Questions
    {
      questionNumber: 9,
      question: "What is server-side rendering in React?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "React",
      questionOptions: [
        "Rendering React components on the server side",
        "Rendering React components without JSX",
        "Rendering React components on the client side",
        "Rendering React components without a virtual DOM"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 10,
      question: "What is the purpose of React Hooks?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "React",
      questionOptions: [
        "To enable class components in React",
        "To handle asynchronous operations",
        "To manipulate the DOM directly",
        "To add stateful logic to functional components"
      ],
      correctOptionNumber: 3
    },
    {
      questionNumber: 11,
      question: "What is the role of the render() method in React components?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "React",
      questionOptions: [
        "To define the initial state of the component",
        "To update the component's state",
        "To render JSX elements to the DOM",
        "To handle user input events"
      ],
      correctOptionNumber: 2
    },
    {
      questionNumber: 12,
      question: "What is the purpose of the useContext hook in React?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "React",
      questionOptions: [
        "To manage side effects in functional components",
        "To handle asynchronous operations",
        "To provide access to context in functional components",
        "To optimize rendering performance"
      ],
      correctOptionNumber: 2
    }
  ];

  const nodejsQuestions = [
    // Easy Questions
    {
      questionNumber: 1,
      question: "What is Node.js?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "Node.js",
      questionOptions: [
        "A web browser",
        "A JavaScript runtime built on Chrome's V8 JavaScript engine",
        "A database management system",
        "A front-end framework"
      ],
      correctOptionNumber: 1
    },
    {
      questionNumber: 2,
      question: "Which of the following is the package manager for Node.js?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "Node.js",
      questionOptions: [
        "npm",
        "yarn",
        "bower",
        "composer"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 3,
      question: "What is the purpose of the 'require' function in Node.js?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "Node.js",
      questionOptions: [
        "To include external JavaScript files",
        "To define a new function",
        "To handle asynchronous operations",
        "To import modules"
      ],
      correctOptionNumber: 3
    },
    {
      questionNumber: 4,
      question: "Which event is emitted when an error occurs in Node.js streams?",
      questionType: "mcq",
      questionDifficulty: "easy",
      questionTopic: "Node.js",
      questionOptions: [
        "error",
        "end",
        "data",
        "close"
      ],
      correctOptionNumber: 0
    },
  
    // Medium Questions
    {
      questionNumber: 5,
      question: "What is the purpose of the 'fs' module in Node.js?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "Node.js",
      questionOptions: [
        "To interact with the file system",
        "To handle network requests",
        "To perform database operations",
        "To create web servers"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 6,
      question: "What is the role of the 'cluster' module in Node.js?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "Node.js",
      questionOptions: [
        "To create child processes",
        "To manage worker threads",
        "To handle network communication",
        "To implement caching mechanisms"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 7,
      question: "What is the purpose of the 'os' module in Node.js?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "Node.js",
      questionOptions: [
        "To interact with the operating system",
        "To handle HTTP requests",
        "To perform encryption",
        "To manipulate data structures"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 8,
      question: "Which HTTP method is used to update a resource in RESTful APIs?",
      questionType: "mcq",
      questionDifficulty: "medium",
      questionTopic: "Node.js",
      questionOptions: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      correctOptionNumber: 2
    },
  
    // Hard Questions
    {
      questionNumber: 9,
      question: "What is the purpose of the 'child_process' module in Node.js?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "Node.js",
      questionOptions: [
        "To handle multi-threading",
        "To interact with child processes",
        "To manage memory allocation",
        "To handle authentication"
      ],
      correctOptionNumber: 1
    },
    {
      questionNumber: 10,
      question: "What is an event loop in Node.js?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "Node.js",
      questionOptions: [
        "A mechanism for handling asynchronous operations",
        "A data structure used for caching",
        "A security feature to prevent cross-site scripting",
        "A routing mechanism for HTTP requests"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 11,
      question: "What is a callback function in Node.js?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "Node.js",
      questionOptions: [
        "A function passed as an argument to another function, to be executed later",
        "A function that returns a Promise",
        "A function that handles errors in asynchronous operations",
        "A function that executes immediately after declaration"
      ],
      correctOptionNumber: 0
    },
    {
      questionNumber: 12,
      question: "What is the purpose of the 'net' module in Node.js?",
      questionType: "mcq",
      questionDifficulty: "hard",
      questionTopic: "Node.js",
      questionOptions: [
        "To interact with the network",
        "To manage database connections",
        "To perform data validation",
        "To handle file operations"
      ],
      correctOptionNumber: 0
    }
  ];
  

app.post('/questions', async (req, res) => {
    const topic = req.body.topic;
    const difficult = req.body.difficult;
    const string_list = topic.split(";");

    let returnFinalAnd = []

    if(string_list.length==1){
        if(topic=="react"){
            for(const ele of reactQuestions){
                if(ele.questionDifficulty==difficult){
                    returnFinalAnd.push(ele);
                }
            }
        }else if(topic=="nodejs"){
            for(const ele of nodejsQuestions){
                if(ele.questionDifficulty==difficult){
                    returnFinalAnd.push(ele);
                }
            }
        }
    }else{
        let count = 0;
        for(const ele of reactQuestions){
            if(ele.questionDifficulty==difficult && count<2){
                returnFinalAnd.push(ele);
                count++;
            }
        }
        for(const ele of nodejsQuestions){
            if(ele.questionDifficulty==difficult && count<4){
                returnFinalAnd.push(ele);
                count++;
            }
        }
    }


    res.json({
        "response": true,
        "questions": returnFinalAnd
    });
    
});






app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
