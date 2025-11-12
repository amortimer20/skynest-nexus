<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  // questionType: (1) Fill in the blank; (2) Multiple choice
  interface Question {
    text: string;
    correctAnswers: string[];
    questionType: number;
    answerDetail: string;
    choices: string[];
  }

  let {
    dataUrl,
    isShuffled = false,
  }: { dataUrl: string; isShuffled: boolean } = $props();
  let questions: Question[] = $state([]);
  let currentQuestion: Question | null = $state(null);
  let currentQuestionIndex = $state(0);
  let submittedAnswer = $state("");
  let isQuestionComplete = $state(false);
  let isCorrectOnFirstTry = $state(true);
  let practiceEnded = $state(false);
  let questionsAnswered = $state(0);
  let score = $state(0);
  let responseHTML = $state("<p>&nbsp;</p>");
  let allQuestionsComplete = $derived(questionsAnswered === questions.length);

  onMount(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        questions = data;
        if (isShuffled) {
          for (let i = questions.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            if (i != j) {
              let temp = questions[i];
              questions[i] = questions[j];
              questions[j] = temp;
            }
          }
        }
      });
  });

  function submitAnswer() {
    if (!currentQuestion || submittedAnswer == "") return;

    if (currentQuestion.correctAnswers.includes(submittedAnswer)) {
      responseHTML = currentQuestion.answerDetail;
      isQuestionComplete = true;
      questionsAnswered++;

      if (isCorrectOnFirstTry) score++;
    } else {
      responseHTML = "Try again!";
      isCorrectOnFirstTry = false;
    }
  }

  function beginNextQuestion() {
    currentQuestion = questions[++currentQuestionIndex];
    resetQuestionState();
  }

  function restartPractice() {
    score = 0;
    questionsAnswered = 0;
    currentQuestion = questions[0];
    currentQuestionIndex = 0;
    practiceEnded = false;
    resetQuestionState();
  }

  function resetQuestionState() {
    isQuestionComplete = false;
    responseHTML = "<p>&nbsp;</p>";
    submittedAnswer = "";
    isCorrectOnFirstTry = true;
  }

  function beginPractice() {
    if (questions.length === 0) return;
    currentQuestion = questions[0];
  }
</script>

<section>
  {#if practiceEnded}
    <div class="card">
      <div class="card-header"><p class="h5">&nbsp;</p></div>
      <div class="card-body">
        <p class="text-center">Score: {score}/{questions.length}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-primary" onclick={restartPractice}>
          Restart Practice
        </button>
      </div>
    </div>
  {:else if currentQuestion}
    <div class="card" in:fade>
      <div class="card-header">
        <p class="h5">
          #{currentQuestionIndex + 1}&rpar;
          {@html currentQuestion.text}
        </p>
      </div>
      <div class="card-body">
        {#if currentQuestion.questionType == 1}
          <label class="form-label" for="answer">Answer: </label>
          <input
            id="answer"
            class="form-control"
            bind:value={submittedAnswer}
          />
        {:else}
          <div class="form-check my-2">
            <input
              type="radio"
              name="choices"
              id="choiceA"
              class="form-check-input"
              value={currentQuestion.choices[0]}
              bind:group={submittedAnswer}
            />
            <label class="form-check-label" for="choiceA"
              >{@html currentQuestion.choices[0]}</label
            >
          </div>
          <div class="form-check my-2">
            <input
              type="radio"
              name="choices"
              id="choiceB"
              class="form-check-input"
              value={currentQuestion.choices[1]}
              bind:group={submittedAnswer}
            />
            <label class="form-check-label" for="choiceB"
              >{@html currentQuestion.choices[1]}</label
            >
          </div>
          <div class="form-check my-2">
            <input
              type="radio"
              name="choices"
              id="choiceC"
              class="form-check-input"
              value={currentQuestion.choices[2]}
              bind:group={submittedAnswer}
            />
            <label class="form-check-label" for="choiceC"
              >{@html currentQuestion.choices[2]}</label
            >
          </div>
          <div class="form-check my-2">
            <input
              type="radio"
              name="choices"
              id="choiceD"
              class="form-check-input"
              value={currentQuestion.choices[3]}
              bind:group={submittedAnswer}
            />
            <label class="form-check-label" for="choiceD"
              >{@html currentQuestion.choices[3]}</label
            >
          </div>
        {/if}
        <p class="text-skynest-theme">{@html responseHTML}</p>
        <p>Score: {score}/{questions.length}</p>
      </div>
      <div class="card-footer">
        {#if allQuestionsComplete}
          <button
            class="btn btn-outline-primary"
            onclick={() => {
              practiceEnded = true;
            }}
          >
            End Practice
          </button>
        {:else if isQuestionComplete}
          <button class="btn btn-outline-primary" onclick={beginNextQuestion}>
            Next Question
          </button>
        {:else}
          <button class="btn btn-outline-primary" onclick={submitAnswer}>
            Submit
          </button>
        {/if}
      </div>
    </div>
  {:else}
    <div class="card">
      <div class="card-header"><p class="h5">&nbsp;</p></div>
      <div class="card-body d-grid gap-2 my-5">
        <button class="btn btn-outline-primary" onclick={beginPractice}>
          Begin Practice
        </button>
      </div>
      <div class="card-footer"><p class="h5">&nbsp;</p></div>
    </div>
  {/if}
</section>

<style>
  input[type="radio"] {
    vertical-align: middle;
  }
</style>