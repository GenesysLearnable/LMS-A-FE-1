import "./quiz.css"

function Quiz() {
  return (
    <div className="Quiz overflow-auto">
      {/* <sidebar /> */}
      <div className="module">
        <div className="header">
          <h2>
            <a href="" className="prev" textDecoration="none">
              &#X2190
            </a>{" "}
            Module 1 : Quiz
          </h2>
        </div>

        <div className="Question">
          <div className="number">
            <p>Question 1 of 3</p>
            <p className="what">What does UX design primarily focus on?</p>
            <div className="answer">
              <p className="single">Single correct answer</p>
            </div>
          </div>

          <form>
            <div className="option">
              <label>
                <input type="radio" />
                Visual aesthetics
              </label>
            </div>
            <div className="option">
              <label>
                <input type="radio" />
                User satisfaction and usability
              </label>
            </div>
            <div className="option">
              <label>
                <input type="radio" />
                Coding and programming
              </label>
            </div>
            <div className="option">
              <label>
                <input type="radio" />
                Marketing strategies
              </label>
            </div>
          </form>
        </div>
        <div className="Question">
          <div className="number">
            <p>Question 2 of 3</p>

            <p className="what">
              Which of the following statements best describes figma?
            </p>
            <div className="answer">
              <p className="single">Single correct answer</p>
            </div>
          </div>
          <form>
            <div className="option">
              <label>
                <input type="radio" />A programming language used for web
                development
              </label>
            </div>
            <div className="option">
              <label>
                {" "}
                <input type="radio" />A graphic design software for creating
                user interfaces
              </label>
            </div>
            <div className="option">
              <label>
                {" "}
                <input type="radio" />A social media platform for designers
              </label>
            </div>
            <div className="option">
              <label>
                {" "}
                <input type="radio" />A video editing tool
              </label>
            </div>
          </form>
        </div>
        <div className="Question">
          <div className="number">
            <p>Question 3 of 3</p>
            <p className="what">
              What does it mean for a website to be responsive?
            </p>

            <div className="answer">
              <p className="single">Single correct answer</p>
            </div>
          </div>
          <form>
            <div className="option">
              <label>
                {" "}
                <input type="radio" />
                It adapts to different devices and screen sizes
              </label>
            </div>
            <div className="option">
              <label>
                {" "}
                <input type="radio" />
                It loads quickly on all browsers
              </label>
            </div>
            <div className="option">
              <label>
                {" "}
                <input type="radio" />
                It has a visually appealing color scheme
              </label>
            </div>
            <div className="option">
              <label>
                {" "}
                <input type="radio" />
                It has interactive animations.
              </label>
            </div>
          </form>
        </div>
        <button>
          <p className="submit">Submit quiz</p>
        </button>
      </div>
    </div>
  )
}
export default Quiz
