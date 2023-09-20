
document.body.style.padding = '0';
document.body.style.margin = '0';


document.body.style.fontFamily = 'Montserrat, sans-serif';


const section = document.createElement('section');
section.style.backgroundColor = '#252B42';  

const upperDiv = document.createElement('div');
upperDiv.style.padding = '20px';
upperDiv.style.backgroundColor = '#252B42';  
upperDiv.style.display = 'flex';
upperDiv.style.alignItems = 'center';
upperDiv.style.justifyContent = 'center';
upperDiv.style.flexDirection = 'column';  
upperDiv.style.height = '60vh';  


const welcomeParagraph = document.createElement('p');
welcomeParagraph.innerText = 'Welcome';
welcomeParagraph.style.color = '#23A6F0';
welcomeParagraph.style.textAlign = 'center'; 


const heading = document.createElement('h1');
heading.innerHTML = 'Selling on the <br>internet like a pro';
heading.style.color = 'white';  
heading.style.textAlign = 'center'; 
heading.style.fontSize = '40px'; 


const mainParagraph = document.createElement('p');
mainParagraph.style.color = 'white';  
mainParagraph.style.textAlign = 'center'; 
mainParagraph.innerHTML = 'We know how large objects will act, but things on a <br>small scale just do not act that way';


const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';


const button1 = document.createElement('button');
button1.innerText = 'Button 1';
button1.style.backgroundColor = '#23A6F0';
button1.style.width = '200px';
button1.style.height = '35px'; 
button1.style.color = 'white';
button1.style.border = '0';
button1.style.marginRight = '20px';
button1.style.borderRadius = '10px';
button1.style.fontWeight = 'bold'; 


const button2 = document.createElement('button');
button2.innerText = 'Button 2';
button2.style.backgroundColor = '#252B42';
button2.style.color = '#23A6F0';
button2.style.border = '1px solid #23A6F0';
button2.style.width = '200px'; 
button2.style.height = '35px';  
button2.style.borderRadius = '10px'; 
button2.style.fontWeight = 'bold'; 


upperDiv.appendChild(welcomeParagraph);
upperDiv.appendChild(heading);
upperDiv.appendChild(mainParagraph);
buttonContainer.appendChild(button1);
buttonContainer.appendChild(button2);
upperDiv.appendChild(buttonContainer);


const lowerDiv = document.createElement('div');
lowerDiv.style.paddingTop = '20px'; 
lowerDiv.style.paddingBottom = '30px'; 
lowerDiv.style.backgroundColor = '#252B42';  
lowerDiv.style.display = 'flex';
lowerDiv.style.alignItems = 'flex-end';
lowerDiv.style.justifyContent = 'center';
lowerDiv.style.height = '30vh';  


function createWindow(bgColor, h4Text, paragraphColor, imgSrc) {
  const windowDiv = document.createElement('div');
  windowDiv.style.width = '280px'; 
  windowDiv.style.height = '240px'; 
  windowDiv.style.backgroundColor = bgColor; 
  windowDiv.style.margin = '0 10px'; 
  windowDiv.style.display = 'flex';  
  windowDiv.style.borderRadius = '4px'
  windowDiv.style.padding = '10px';  
  windowDiv.style.justifyContent = 'start'; 
  windowDiv.style.alignItems = 'start'; 
  windowDiv.style.flexDirection = 'column';

 
  const image = document.createElement('img');
  image.src = imgSrc; 
  image.style.width = '50px';
  image.style.height = '50px';
  image.style.borderRadius = '10px'
  windowDiv.appendChild(image); 

  const h4 = document.createElement('h4');
  h4.innerText = h4Text;
  h4.style.color = (bgColor === '#23A6F0') ? 'white' : '#252B42'; 
  windowDiv.appendChild(h4); 

 
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'The gradual accumulation of <br>information about atomic and <br>small-scale behaviour...';
  paragraph.style.color = paragraphColor; 
  windowDiv.appendChild(paragraph);

  return windowDiv;
}


const window1 = createWindow('white', 'Training Courses', '#737373', 'Screenshot 2023-09-19 163026.png');
const window2 = createWindow('white', '2,769 online courses', '#737373', 'Screenshot 2023-09-19 163056.png');
const window3 = createWindow('#23A6F0', 'Training Courses', 'white', 'Screenshot 2023-09-19 163151.png');




lowerDiv.appendChild(window1);
lowerDiv.appendChild(window2);
lowerDiv.appendChild(window3);


section.appendChild(upperDiv);
section.appendChild(lowerDiv);


document.body.appendChild(section);

const section2 = document.createElement('section');
section2.style.backgroundColor = 'white'; 


section2.style.height = '80vh';


section2.style.display = 'flex';
section2.style.alignItems = 'center';
section2.style.justifyContent = 'center';


const contentDiv = document.createElement('div');
contentDiv.style.padding = '20px';


const section2Heading = document.createElement('h2');
section2Heading.innerText = 'This is the Second Section';
section2Heading.style.color = '#252B42';  


contentDiv.appendChild(section2Heading);


section2.appendChild(contentDiv);


document.body.appendChild(section2);



const practiceAdviceParagraph = document.createElement('p');
practiceAdviceParagraph.innerText = 'Practice advice';
practiceAdviceParagraph.style.color = '#252B42';  


contentDiv.insertBefore(practiceAdviceParagraph, contentDiv.firstChild);




section2Heading.innerHTML = '';


const section2Heading2 = document.createElement('h2');
section2Heading2.innerText = 'Featured Products';
section2Heading2.style.color = '#252B42';  


contentDiv.appendChild(section2Heading2);


practiceAdviceParagraph.style.color = '#23A6F0';
practiceAdviceParagraph.style.textAlign = 'center'


section2Heading2.style.color = '#252B42';
section2Heading2.style.fontSize = '40px'
section2Heading2.style.textAlign = 'center'


const secondParagraph = document.createElement('p');
secondParagraph.innerHTML = 'Problems trying to resolve the conflict between <br>the two major realms of Classical physics: Newtonian mechanics.';
secondParagraph.style.color = '#737373';  
secondParagraph.style.textAlign = 'center'


contentDiv.appendChild(secondParagraph);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Your Email';
emailInput.style.width = '600px';
emailInput.style.height = '30px';
emailInput.style.padding = '10px'; 
emailInput.style.marginTop = '15px'
emailInput.style.backgroundColor = 'whitesmoke'
emailInput.style.outline = 'none'
emailInput.style.border = 'solid 1px #E6E6E6'


const subscribeButton = document.createElement('button');
subscribeButton.innerText = 'Subscribe';
subscribeButton.style.backgroundColor = '#23A6F0';
subscribeButton.style.color = '#E6E6E6';
subscribeButton.style.padding = '10px 20px';
subscribeButton.style.border = 'none';
subscribeButton.style.height = '52px'


subscribeButton.addEventListener('click', () => {
  const email = emailInput.value;
  if (isValidEmail(email)) {
    alert('Email is valid!');
  } else {
    alert('Please enter a valid email.');
  }
});


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

contentDiv.appendChild(emailInput);
contentDiv.appendChild(subscribeButton);






