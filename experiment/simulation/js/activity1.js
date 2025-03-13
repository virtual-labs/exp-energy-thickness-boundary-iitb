let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Displacement, Momentum and Energy thickness-Boundary layer flow</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      
      <p style="text-align:left;">Find the displacement thickness, the momentum thickness and energy thickness for the velocity distribution in the boundary layer given by <span style="display:inline-block;">$$\\frac{u}{U} = \\frac{y}{\\delta}$$</span>, where u is the velocity at a distance y from the plate and u = U at y = &delta;, where &delta; = boundary layer thickness.<br> Also calculate the value of &delta;*/&theta;.</p>
      <br>
      <br>

      <div id="act1-q1-div">

      </div>
      <br><br>
   </div>`;
    maindiv.innerHTML += text;
    indx1_a1 = shuffleArray(opt1_a1, ans1_a1);
    let ques = `
      Q.1. &nbsp; What is displacement thickness &delta;*?
      $$
         δ^* = \\int_0^{\\delta}\\left(1- \\frac{u}{U}\\right)dy = \\int_0^{\\delta}\\left(1 - \\frac{y}{\\delta}\\right)dy \\tag*{$  \\left\\{∵ \\frac{u}{U} = \\frac{y}{\\delta} \\right\\}$}
      $$ 
   `;
    let q_div = document.getElementById('act1-q1-div');
    let question = new Question_Options(ques, opt1_a1, indx1_a1, q_div, 'act1-ques1', a1_load_ques2);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function a1_load_ques2() {
    act1_div.innerHTML += `
      <div id="act1-q2-div"></div>
      <br><br><br>
   `;
    indx2_a1 = shuffleArray(opt2_a1, ans2_a1);
    let ques = `
      Q.2. &nbsp; What is momentum thickness &theta;?
      $$
         \θ = \\int_0^{\\delta}\\frac{u}{U}\\left(1 - \\frac{u}{U}\\right)dy
      $$
         
      $$
         \\text{Substituting the value of } \\frac{u}{U} = \\frac{y}{\\delta},
      $$
      $$
         \θ = \\int_0^{\\delta}\\frac{y}{\\delta}\\left(1-\\frac{y}{\\delta}\\right)dy = \\int_0^{\\delta}\\left(\\frac{y}{\\delta}- \\frac{y^2}{\\delta^2}\\right)dy
      $$
   `;
    let q_div = document.getElementById('act1-q2-div');
    let question = new Question_Options(ques, opt2_a1, indx2_a1, q_div, 'act1-ques2', a1_load_ques3);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_load_ques3() {
    act1_div.innerHTML += `
      <div id="act1-q3-div"></div>
      <br><br><br>
   `;
    indx3_a1 = shuffleArray(opt3_a1, ans3_a1);
    let ques = `
      Q.3. &nbsp; What is energy thickness &delta;**?
      $$
      \\delta^{**} = \\int_0^{\\delta} \\frac{u}{U}\\left[1-\\frac{u^2}{U^2}\\right]dy = \\int_0^{\\delta}\\frac{y}{\\delta}\\left[1-\\frac{y^2}{\\delta^2}\\right]dy \\tag*{$ \\left\\{ \∵ \\frac{u}{U} = \\frac{y}{\\delta} \\right\\}$}
   $$
   `;
    let q_div = document.getElementById('act1-q3-div');
    let question = new Question_Options(ques, opt3_a1, indx3_a1, q_div, 'act1-ques3', a1_load_ques4);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_load_ques4() {
    act1_div.innerHTML += `
   <div id="act1-q4-div"></div>
   <br><br><br>
`;
    indx4_a1 = shuffleArray(opt4_a1, ans4_a1);
    let ques = `
   $$
      \\text{Q.4.} \\ \\ \\frac{\\delta^*}{\\theta} = \\frac{\\frac{\\delta}{2}}{\\frac{\\delta}{6}} = \\frac{\\delta}{2} \× \\frac{6}{\\delta} = 
$$
`;
    let q_div = document.getElementById('act1-q4-div');
    let question = new Question_Options(ques, opt4_a1, indx4_a1, q_div, 'act1-ques4', activity2);
    question.load_question();
    question.get_question_element().querySelector('h5').style.fontSize = '20px';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
//this function is to shuffle the elements of the array
//for options array to shuffle the options in Question_option class
//it accepts options array and correct answer so after shuffling it can find the correct index and return it as a string
function shuffleArray(arr, ans) {
    arr.sort(() => Math.random() - 0.5);
    return (arr.indexOf(ans) + 1).toString();
}
activity1();
//# sourceMappingURL=activity1.js.map