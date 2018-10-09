var myQuestions =
[
  {question: 'What is 2+2?', choices: [1, 6, 4, 12], correct: 4},
  {question: 'What house was Harry Potter in?', choices: ['Gryffindor', 'Hufflepuff','Ravenclaw', 'Slytherin'], correct: 'Gryffindor'},
  {question: 'What is 10/5?' , choices: [3, 2, 9, 15], correct: 2},
  {question: 'Finish this sentence: winter is ______?', choices: ['cold', 'hot','warm' ], correct:'cold' },
  {question: 'Who is the youngest Lannister sibling', choices: ['Tywin', 'Lancel','Tytos'], correct:'Lancel' },
  {question: 'Where does Jorah Mormonts family live?', choices: ['Lys', 'Essos','Westeros'], correct: 'Westeros'},
  {question: 'How many dragons does Daenerys Targaryen have?', choices: [1, 2, 3], correct: 3},
  {question: 'How many hands does Jaime Lannister have after book 3?' , choices: [0, 1, 2], correct: 1 },
  {question: 'Did Tyrion commit regicide or patricide?', choices: [ 'regicide', 'patricide'], correct:'patricide' },
  {question: 'How many Direwolves do the starks find?', choices: [3, 4, 5, 6], correct: 6 }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');

function showQuestions(questions, quizContainer){
	var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		
		answers = [];

		for(letter in questions[i].choices){

			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'"> '
					+ letter + ') '
					+ questions[i].choices[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('<br>') + '</div>'
		);
	}
    
 quizContainer.innerHTML = output.join('');
}
           
function showResults(questions, quizContainer, resultsContainer){
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	var userAnswer = '';
	var numCorrect = 0;
	
	for(var i=0; i<questions.length; i++){
		
		const selector = `input[name=question${i}]:checked`;
        const userAnswer = (answerContainers[i].querySelector(selector) || {}).value;

		if(questions[i].choices[userAnswer]===questions[i].correct){
		
			numCorrect++;
		
			answerContainers[i].style.color = 'lightgreen';
		}
	
		else{
			answerContainers[i].style.color = 'red';
		}
	}

	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

function result(){
		showResults(this.myQuestions, this.quizContainer, this.resultsContainer);
}

window.onload = showQuestions(this.myQuestions, this.quizContainer);  

