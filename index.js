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
          background-color: #fff;
          font-family: sans-serif;
        }
    
        h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
    
        ul {
          list-style-type: none;
          padding: 0;
        }
    
        li {
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <h1>${resumeData.name}</h1>
      <ul>
        <li>Email: ${resumeData.email}</li>
        <li>Phone: ${resumeData.phone}</li>
        <li>Address: ${resumeData.address}</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>School: ${resumeData.school}</li>
        <li>Degree: ${resumeData.degree}</li>
        <li>Major: ${resumeData.major}</li>
        <li>Graduation Date: ${resumeData.graduationDate}</li>
      </ul>
      <h2>Work Experience</h2>
      <ul>
        <li>Company: ${resumeData.company}</li>
        <li>Title: ${resumeData.title}</li>
        <li>Start Date: ${resumeData.startDate}</li>
        <li>End Date: ${resumeData.endDate}</li>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li>${resumeData.skill1}</li>
        <li>${resumeData.skill2}</li>
        <li>${resumeData.skill3}</li>
      </ul>
      <h2>References</h2>
      <ul>
        <li>${resumeData.reference1}</li>
        <li>${resumeData.reference2}</li>
        <li>${resumeData.reference3}</li>
      </ul>
    </body>
    </html>
  `;

  const element = document.createElement('div');
  element.innerHTML = resumeTemplate;

  html2pdf(element, {
    margin: 10,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).then(function(pdf) {
    pdf.save('resume.pdf');
  });

})