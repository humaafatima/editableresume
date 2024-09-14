const resumeForm = document.getElementById('resumeForm') as HTMLInputElement|null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement|null;

if (resumeForm && resumeOutput)
    {
resumeForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    //Generate HTML for our resume
    const resumeHTML = `
    <h2> Generated Resume</h2>
    <p><strong>Name:</strong> <span id="editname" class="editable"> ${name} </span></p>
    <p><strong>Email:</strong> <span id="editemail" class="editable"> ${email} </span> </p>
    <p><strong>Phone:</strong> <span id="editphone" class="editable"> ${phone} </span> </p>
    <p><strong>Education:</strong> <span id="editeducation" class="editable"> ${education} </span> </p>
    <p><strong>Experience:</strong> <span id="editexperience" class="editable"> ${experience} </span> </p>
    <p><strong>Skills:</strong> <span id="editskills" class="editable"> ${skills} </span>
    </p>
    `;

    resumeOutput.innerHTML=resumeHTML
});
    edit()

} else {

    console.error('Form or outputdiv not found in the document')
}

    function edit() {
        const editableelements = document.querySelectorAll('.editable');
        editableelements.forEach(element => {
            element.addEventListener('click', function() {
                const currentelement = element as HTMLElement;
const currentvalue = currentelement.textContent || "";

if (currentelement.tagName === "p" || currentelement.tagName === "SPAN") {
    const input = document.createElement('input')
    input.type = "text"
    input.value = currentvalue
    input.classList.add('editinginput')

currentelement.style.display = 'none'
currentelement.parentNode?.insertBefore(input, currentelement)
input.focus()

}
            })
        })
    }