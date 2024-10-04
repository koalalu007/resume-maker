const downloadButton = document.getElementById("download-button");
const inputFields = document.querySelectorAll("input"); // Select all input fields
const textAreaFields = document.querySelectorAll("textarea");
const clearImageButton = document.getElementById("clear-image-button");

inputFields.forEach((inputField) => {
  inputField.addEventListener("input", updateIframeContent);
});
textAreaFields.forEach((textAreaField) => {
  textAreaField.addEventListener("input", updateIframeContent);
});

clearImageButton.addEventListener("click", function () {
  // Clear the input field and the image preview
  const profileImageInput = document.getElementById("profile-image");
  profileImageInput.value = ""; // Clear the input field
  updateIframeContent();
});

function updateIframeContent() {
  // Retrieve user input from the input fields
  const resumeData = {
    profileImage: document.getElementById("profile-image").files[0],
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    summary: document.getElementById("summary").value,
    school: document.getElementById("school").value,
    degree: document.getElementById("degree").value,
    major: document.getElementById("major").value,
    graduationDate: document.getElementById("graduation-date").value,
    company: document.getElementById("company").value,
    title: document.getElementById("title").value,
    startDate: document.getElementById("start-date").value,
    endDate: document.getElementById("end-date").value,
    skill1: document.getElementById("skill-1").value,
    skill2: document.getElementById("skill-2").value,
    skill3: document.getElementById("skill-3").value,
    reference1: document.getElementById("reference-1").value,
    reference2: document.getElementById("reference-2").value,
    reference3: document.getElementById("reference-3").value,
  };

  // Check if any of the input fields or text areas have non-empty values
  const isNotEmpty = Object.values(resumeData).some((value) => value.trim() !== "");

  // Get the iframe element
  const iframe = document.querySelector("iframe");
  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow.document;
  const iframeBody = iframeDocument.body;

  // Create an object URL for the profileImage
  const profileImageURL = resumeData.profileImage
    ? URL.createObjectURL(resumeData.profileImage)
    : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";

  if (isNotEmpty) {
    // Replace the content of the iframe with the user's data
    iframeBody.innerHTML = `
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

          .personalInfo {
            display: flex;
            align-items: center; /* Vertically center the content */
          }

          .personalInfo img {
            width: 200px; /* Set the maximum width of the image */
            height: 200px;
            margin-right: 20px; /* Add some spacing between the image and text */
            border-radius: 50%; /* Make the image round */
          }

          .personalInfo h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .personalInfo ul {
            list-style-type: none;
            padding: 0;
          }

          .personalInfo li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="personalInfo">
        <img src="${profileImageURL}" alt=" "/>
        <ul>
          <li><h1>${resumeData.name}</h1></li>
          <li>Email: ${resumeData.email}</li>
          <li>Phone: ${resumeData.phone}</li>
          <li>Address: ${resumeData.address}</li>
        </ul>
        </div>
        <h2>Summary</h2>
        <ul>
          <li>${resumeData.summary}</li>
        </ul>
        <h2>Education</h 2>
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
  } else {
    // Show a message or take appropriate action when all fields are empty
    iframeBody.innerHTML = "<p>No data entered.</p>";
  }
}

downloadButton.addEventListener("click", () => {
  // Retrieve user input from the main HTML page
  const resumeData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    summary: document.getElementById("summary").value,
    school: document.getElementById("school").value,
    degree: document.getElementById("degree").value,
    major: document.getElementById("major").value,
    graduationDate: document.getElementById("graduation-date").value,
    company: document.getElementById("company").value,
    title: document.getElementById("title").value,
    startDate: document.getElementById("start-date").value,
    endDate: document.getElementById("end-date").value,
    skill1: document.getElementById("skill-1").value,
    skill2: document.getElementById("skill-2").value,
    skill3: document.getElementById("skill-3").value,
    reference1: document.getElementById("reference-1").value,
    reference2: document.getElementById("reference-2").value,
    reference3: document.getElementById("reference-3").value,
  };

  // Check if any of the input fields or text areas have non-empty values
  const isNotEmpty = Object.values(resumeData).some((value) => value.trim() !== "");

  if (isNotEmpty) {
    // Populate the iframe with the user data and generate the PDF
    const iframe = document.querySelector("iframe");
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    const iframeBody = iframeDocument.body;

    // Create an object URL for the profileImage
    const profileImageURL = resumeData.profileImage
      ? URL.createObjectURL(resumeData.profileImage)
      : "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";

    iframeBody.innerHTML = `
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

          .personalInfo {
            display: flex;
            align-items: center; /* Vertically center the content */
          }

          .personalInfo img {
            width: 200px; /* Set the maximum width of the image */
            height: 200px;
            margin-right: 20px; /* Add some spacing between the image and text */
            border-radius: 50%; /* Make the image round */
          }

          .personalInfo h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .personalInfo ul {
            list-style-type: none;
            padding: 0;
          }

          .personalInfo li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="personalInfo">
        <img src="${profileImageURL}" alt=" "/>
        <ul>
          <li><h1>${resumeData.name}</h 1></li>
          <li>Email: ${resumeData.email}</li>
          <li>Phone: ${resumeData.phone}</li>
          <li>Address: ${resumeData.address}</li>
        </ul>
        </div>
        <h2>Summary</h2>
        <ul>
          <li>${resumeData.summary}</li>
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

    // Generate PDF from the updated iframe content
    html2pdf(iframeBody, {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    }).then(function (pdf) {
      pdf.save("resume.pdf");
    });
  } else {
    // Show a message or take appropriate action when all fields are empty
    alert("Please enter some data before generating the resume.");
  }
});