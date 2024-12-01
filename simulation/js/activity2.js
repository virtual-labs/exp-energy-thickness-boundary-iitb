let act2_div;
function activity2() {
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
         <h3>Activity 2</h3>
      
         <p style="text-align:left;">Find the displacement thickness, the momentum thickness and energy thickness for the velocity distribution in the boundary layer given by <span style="display:inline-block;">$$\\frac{u}{U} = 2\\left(\\frac{y}{\\delta}\\right) - \\left(\\frac{y}{\\delta}\\right)^2$$</span>.</p>
         <br>
         <br>

         <div id="act2-q1-div">

         </div>
      <br><br>
      </div>
   `;
    maindiv.innerHTML += text;
    indx1_a2 = shuffleArray(opt1_a2, ans1_a2);
    let ques = `
      Q.1. &nbsp; What is displacement thickness &delta;*?
      $$
         \\begin{aligned}
            δ^* &= \\int_0^{\\delta}\\left(1- \\frac{u}{U}\\right)dy \\\\ 
            \\text{Substuting the value of } \\quad \\frac{u}{U} &= 2\\left(\\frac{y}{\\delta}\\right) - \\left(\\frac{y}{\\delta}\\right)^2, \\text{we have} \\\\
            \\delta^* &= \\int_0^{\\delta} \\left\\{1 - \\left[2\\left(\\frac{y}{\\delta}\\right) - \\left(\\frac{y}{\\delta}\\right)^2\\right]\\right\\}dy \\\\
            &= \\int_0^{\\delta}\\left\\{1-2\\left(\\frac{y}{\\delta}\\right) + \\left(\\frac{y}{\\delta}\\right)^2\\right\\} dy = \\left[y-\\frac{2y^2}{2\\delta} + \\frac{y^3}{3\\delta^2}\\right]_0^{\\delta}
         \\end{aligned}
      $$ 
   `;
    let q_div = document.getElementById('act2-q1-div');
    let question = new Question_Options(ques, opt1_a2, indx1_a2, q_div, 'act2-ques1', a2_load_ques2);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function a2_load_ques2() {
    act2_div.innerHTML += `
      <div id="act2-q2-div"></div>
      <br><br><br>
   `;
    indx2_a2 = shuffleArray(opt2_a2, ans2_a2);
    let ques = `
      Q.2. &nbsp; What is momentum thickness &theta;?
      $$
      \\begin{aligned}
         \θ &= \\int_0^{\\delta}\\frac{u}{U}\\left\\{1-\\frac{u}{U}\\right\\}dy = \\int_0^{\\delta}\\left(\\frac{2y}{\\delta} - \\frac{y^2}{\\delta^2}\\right)\\left[1-\\left(\\frac{2y}{\\delta}-\\frac{y^2}{\\delta^2}\\right)\\right]dy \\\\
         &= \\int_0^{\\delta}\\left[\\frac{2y}{\\delta} - \\frac{y^2}{\\delta^2}\\right]\\left[1 - \\frac{2y}{\\delta} + \\frac{y^2}{\\delta^2}\\right]dy \\\\
         &= \\int_0^{\\delta}\\left[\\frac{2y}{\\delta} - \\frac{4y^2}{\\delta^2} + \\frac{2y^3}{\\delta^3} - \\frac{y^2}{\\delta^2} + \\frac{2y^3}{\\delta^3} - \\frac{y^4}{\\delta^4}\\right]dy \\\\
         &= \\int_0^{\\delta} \\left[\\frac{2y}{\\delta} - \\frac{5y^2}{\\delta^2} + \\frac{4y^3}{\\delta^3} - \\frac{y^4}{\\delta^4}\\right]dy = \\left[\\frac{2y^2}{2\\delta}-\\frac{5y^3}{3\\delta^2} + \\frac{4y^4}{4\\delta^3} - \\frac{y^5}{5\\delta^4}\\right]_0^{\\delta}
      \\end{aligned}
   $$
   `;
    let q_div = document.getElementById('act2-q2-div');
    let question = new Question_Options(ques, opt2_a2, indx2_a2, q_div, 'act2-ques2', a2_load_ques3);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_load_ques3() {
    act2_div.innerHTML += `
      <div id="act2-q3-div"></div>
      <br><br><br>
   `;
    indx3_a2 = shuffleArray(opt3_a2, ans3_a2);
    let ques = `
      Q.3. &nbsp; What is energy thickness &delta;**?
      $$
      \\begin{aligned}
         \\delta^{**} &= \\int_0^{\\delta}\\frac{u}{U}\\left[1-\\frac{u^2}{U^2}\\right]dy = \\int_0^{\\delta}\\left(\\frac{2y}{\\delta} - \\frac{y^2}{\\delta^2}\\right)\\left(1-\\left[\\frac{2y}{\\delta} - \\frac{y^2}{\\delta^2}\\right]^2\\right)dy \\\\

         &= \\int_0^{\\delta}\\left(\\frac{2y}{\\delta} - \\frac{y^2}{\\delta^2}\\right)\\left(1-\\left[\\frac{4y^2}{\\delta^2} + \\frac{y^4}{\\delta^4} - \\frac{4y^3}{\\delta^3}\\right]\\right)dy \\\\

         &= \\int_0^{\\delta}\\left(\\frac{2y}{\\delta} - \\frac{y^2}{\\delta^2}\\right)\\left(1-\\frac{4y^2}{\\delta^2} - \\frac{y^4}{\\delta^4} + \\frac{4y^3}{\\delta^3}\\right)dy \\\\

         &= \\int_0^{\\delta}\\left(\\frac{2y}{\\delta} - \\frac{8y^3}{\\delta^3} - \\frac{2y^5}{\\delta^5} + \\frac{8y^4}{\\delta^4} - \\frac{y^2}{\\delta^2} + \\frac{4y^4}{\\delta^4} + \\frac{y^6}{\\delta^6} - \\frac{4y^5}{\\delta^5}\\right)dy \\\\

         &= \\int_0^{\\delta}\\left[\\frac{2y}{\\delta} - \\frac{y^2}{\\delta^2} - \\frac{8y^3}{\\delta^3}   + \\frac{12y^4}{\\delta^4} - \\frac{6y^5}{\\delta^5}  + \\frac{y^6}{\\delta^6} \\right]dy \\\\

         &= \\left[\\frac{2y^2}{2\\delta} - \\frac{y^3}{3\\delta^2} - \\frac{8y^4}{4\\delta^3}   + \\frac{12y^5}{5\\delta^4} - \\frac{6y^6}{6\\delta^5}  + \\frac{y^7}{7\\delta^6} \\right]_0^{\\delta} \\\\
      \\end{aligned}
      $$
   `;
    let q_div = document.getElementById('act2-q3-div');
    let question = new Question_Options(ques, opt3_a2, indx3_a2, q_div, 'act2-ques3', activity_completed);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map