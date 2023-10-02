const downloadButton = document.getElementById('download-button');
downloadButton.addEventListener('click', () => {
  const resumeData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    school: document.getElementById('school').value,
    degree: document.getElementById('degree').value,
    major: document.getElementById('major').value,
    graduationDate: document.getElementById('graduation-date').value,
    company: document.getElementById('company').value,
    title: document.getElementById('title').value,
    startDate: document.getElementById('start-date').value,
    endDate: document.getElementById('end-date').value,
    skill1: document.getElementById('skill-1').value,
    skill2: document.getElementById('skill-2').value,
    skill3: document.getElementById('skill-3').value,
    reference1: document.getElementById('reference-1').value,
    reference2: document.getElementById('reference-2').value,
    reference3: document.getElementById('reference-3').value,
  };
  const resumeTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
      body {
        background-color: #f7f7f7;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
  
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
  
      h1 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #007BFF;
      }
  
      h2 {
        font-size: 20px;
        margin-top: 20px;
        color: #333;
      }
  
      ul {
        list-style-type: none;
        padding: 0;
      }
  
      li {
        margin-bottom: 10px;
        color: #555;
      }
  
      .contact-info {
        font-size: 18px;
        margin-top: 10px;
      }
  
      .contact-info span {
        color: #007BFF;
        font-weight: bold;
      }
  
      .education {
        border-top: 2px solid #007BFF;
        padding-top: 20px;
      }
  
      .work-experience {
        border-top: 2px solid #007BFF;
        padding-top: 20px;
      }
  
      .skills {
        border-top: 2px solid #007BFF;
        padding-top: 20px;
      }
  
      .references {
        border-top: 2px solid #007BFF;
        padding-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>${resumeData.name}</h1>
      <div class="contact-info">
        <span>Email:</span> ${resumeData.email}<br>
        <span>Phone:</span> ${resumeData.phone}<br>
        <span>Address:</span> ${resumeData.address}
      </div>
      <h2 class="education">Education</h2>
      <ul>
        <li><span>School:</span> ${resumeData.school}</li>
        <li><span>Degree:</span> ${resumeData.degree}</li>
        <li><span>Major:</span> ${resumeData.major}</li>
        <li><span>Graduation Date:</span> ${resumeData.graduationDate}</li>
      </ul>
      <h2 class="work-experience">Work Experience</h2>
      <ul>
        <li><span>Company:</span> ${resumeData.company}</li>
        <li><span>Title:</span> ${resumeData.title}</li>
        <li><span>Start Date:</span> ${resumeData.startDate}</li>
        <li><span>End Date:</span> ${resumeData.endDate}</li>
      </ul>
      <h2 class="skills">Skills</h2>
      <ul>
        <li>${resumeData.skill1}</li>
        <li>${resumeData.skill2}</li>
        <li>${resumeData.skill3}</li>
      </ul>
      <h2 class="references">References</h2>
      <ul>
        <li>${resumeData.reference1}</li>
        <li>${resumeData.reference2}</li>
        <li>${resumeData.reference3}</li>
      </ul>
    </div>
  </body>
  </html>
  
  `;
  const resumeBlob = new Blob([resumeTemplate], { type : 'text/html' });
  const resumeUrl = URL.createObjectURL(resumeBlob);
  const resumeLink = document.createElement('a');
  resumeLink.href = resumeUrl;
  resumeLink.download = 'resume.html';
  resumeLink.click();
  URL.revokeObjectURL(resumeUrl);
})