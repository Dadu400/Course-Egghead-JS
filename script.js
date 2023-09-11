function addFont() {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    document.head.appendChild(link);
}

addFont();

function styleBody() {
    const body = document.body;
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.width = '100%';
    body.style.fontFamily = 'Montserrat'
}

function createContainer(maininfo) {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    container.appendChild(maininfo);
}

function styleBlueBox() {
    const maininfo = document.createElement('div');
    maininfo.classList.add('mainbox');
    maininfo.style.background = '#252B42';
    maininfo.style.padding = '114px 197px';
    maininfo.style.display = 'flex';
    maininfo.style.alignItems = 'center';
    maininfo.style.flexDirection = 'column';
    maininfo.style.gap = '30px';
    const textside = styleTextSide(); 
    const buttons = styleButtons(); 
    const courseInfos = createCourseInfo();
    maininfo.appendChild(textside);
    maininfo.appendChild(buttons);
    maininfo.appendChild(courseInfos);
    return maininfo;
}

function styleTextSide() {
    const textside = document.createElement('div')
    textside.classList.add('textside')
    return textside;
}


styleBody();

const maininfo = styleBlueBox();
createContainer(maininfo);

function createWelcome() {
    const h6 = document.createElement('h6')
    h6.innerHTML = 'Welcome'
    h6.style.color = '#23A6F0'
    h6.style.fontFamily = 'Montserrat'
    h6.style.fontSize = '16px'
    h6.style.fontWeight = '700'
    h6.style.textAlign = 'center'
    const textside = document.querySelector('.textside'); 
    textside.appendChild(h6);
}
createWelcome()

function styleH1() {
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Selling on the internet like a pro'
    h1.style.color = '#FFFFFF';
    h1.style.fontSize = '58px';
    h1.style.fontWeight = '700'
    h1.style.lineHeight = '80px'
    h1.style.letterSpacing = '0.2px'
    h1.style.width = '550px'
    h1.style.textAlign = 'center'
    const textside = document.querySelector('.textside'); 
    textside.appendChild(h1);
}
styleH1()

function styleH3() {
    const h3 = document.createElement('h3')
    h3.innerHTML = 'We know how large objects will act, but things on a small scale just do not act that way.'
    h3.style.color = '#FFFFFF';
    h3.style.fontSize = '20px';
    h3.style.fontWeight = '400'
    h3.style.lineHeight = '30px'
    h3.style.letterSpacing = '0.2px'
    h3.style.width = '542px'
    h3.style.textAlign = 'center'
    const textside = document.querySelector('.textside'); 
    textside.appendChild(h3);
}
styleH3()

function styleButtons() {
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.style.display = 'flex';
    buttons.style.gap = '20px';
    const button1 = styleButton('#23A6F0', '#FFFFFF', 'none', 'Get Quote Now')
    const button2 = styleButton('#252B42', '#23A6F0', '1px solid #23A6F0', 'Learn More') 
    buttons.appendChild(button1)
    buttons.appendChild(button2)
    return buttons;
}

function styleButton(background, color, border, text) {
    const button = document.createElement('div')
    button.style.width = '162px'
    button.style.height = '35px'
    button.style.borderRadius = '5px'
    button.style.padding = '15px 40px 0 40px'
    button.style.cursor ='pointer'
    button.style.background = background;
    button.style.textAlign = 'center'
    button.style.color = color;
    button.style.fontSize = '14px'
    button.style.fontWeight = '700'
    button.style.letterSpacing = '0.2px'
    button.style.border = border;
    button.innerHTML = text;

    return button;
}

function createCourseInfo() {
    const courseInfos = document.createElement('div');
    courseInfos.classList.add('courseInfos');
    courseInfos.style.display = 'flex';
    courseInfos.style.gap = '31px';

    return courseInfos;
}

function styleInfoCard(bgColor, imageSrc, lineImg, HeadingText, headingColor, pColor) {
    const infoCard = document.createElement('div');
    infoCard.style.padding = '35px 40px';
    infoCard.style.background = bgColor;
    infoCard.style.display = 'flex';
    infoCard.style.flexDirection = 'column';
    infoCard.style.alignItems = 'start';
    infoCard.style.marginTop = '80px';
    infoCard.style.gap = '20px';

    const image = new Image(70, 76);
    image.src = imageSrc;
    infoCard.appendChild(image);

    const cardHeading = document.createElement('h6')
    cardHeading.innerHTML = HeadingText;
    cardHeading.style.fontSize = '16px'
    cardHeading.style.fontWeight = '700'
    cardHeading.style.color = headingColor;
    cardHeading.style.margin = '0'
    infoCard.appendChild(cardHeading);

    const lineImage = new Image(50, 2)
    lineImage.src = lineImg;
    infoCard.appendChild(lineImage);

    const cardInfoText = document.createElement('p')
    cardInfoText.innerHTML = 'The gradual accumulation of information about atomic and small-scale behaviour...';
    cardInfoText.style.fontWeight = '400'
    cardInfoText.style.fontSize = '14px'
    cardInfoText.style.color = pColor;
    cardInfoText.style.width = '222px'
    cardInfoText.style.height = '60px'

    infoCard.appendChild(cardInfoText)

    return infoCard; 
}

const courseInfos = createCourseInfo();
maininfo.appendChild(courseInfos);

const card1 = styleInfoCard('#FFFFFF', 'assets/icon-smile.svg', 'assets/icon-line.svg', 'training Courses', '#252B42', '#737373')
const card2 = styleInfoCard('#FFFFFF', 'assets/icon-done.svg', 'assets/icon-line.svg', '2,769 online courses', '#252B42', '#737373')
const card3 = styleInfoCard('#23A6F0', 'assets/icon-card.svg', 'assets/icon-line-wh.svg', 'training Courses', '#FFFFFF', '#FFFFFF')

courseInfos.appendChild(card1)
courseInfos.appendChild(card2)
courseInfos.appendChild(card3)

function styleWhiteBox() {
    const whitebox = document.createElement('div'); 
    whitebox.classList.add('whitebox');
    whitebox.style.padding = '160px 195px'
    whitebox.style.display = 'flex';
    whitebox.style.alignItems = 'center';
    whitebox.style.flexDirection = 'column';
    whitebox.style.gap = '20px';
    const textarea = styleTextarea();
    const inputarea = styleInput();
    container.appendChild(whitebox);
    whitebox.appendChild(textarea);
    whitebox.appendChild(inputarea);
}

const container = document.querySelector('.container');
styleWhiteBox(container);

function styleTextarea() {
    const textarea = document.createElement('div')
    textarea.classList.add('textarea')
    return textarea;
}

function styleH5() {
    const h5 = document.createElement('h5')
    h5.innerHTML = 'Practice Advice'
    h5.style.fontFamily = '14px'
    h5.style.color = '#23A6F0'
    h5.style.fontWeight = '700'
    h5.style.letterSpacing ='0.2px'
    h5.style.lineHeight ='24px'
    h5.style.textAlign ='center'
    const textarea = document.querySelector('.textarea'); 
    textarea.appendChild(h5)
}
styleH5()

function styleH2() {
    const h2 = document.createElement('h2')
    h2.innerHTML = 'Featured Products'
    h2.style.fontFamily = '40px'
    h2.style.color = '#252B42'
    h2.style.fontWeight = '700'
    h2.style.letterSpacing ='0.2px'
    h2.style.lineHeight ='50px'
    h2.style.textAlign ='center'
    const textarea = document.querySelector('.textarea'); 
    textarea.appendChild(h2)
}
styleH2()

function styleTextP() {
    const ProblemP = document.createElement('p')
    ProblemP.innerHTML = 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics'
    ProblemP.style.fontFamily = '14px'
    ProblemP.style.color = '#737373'
    ProblemP.style.fontWeight = '400'
    ProblemP.style.letterSpacing ='0.2px'
    ProblemP.style.lineHeight ='20px'
    ProblemP.style.textAlign ='center'
    ProblemP.style.width = '460px'
    const textarea = document.querySelector('.textarea'); 
    textarea.appendChild(ProblemP)
}
styleTextP()

function styleInput() {
    const inputContainer = document.createElement('div')
    inputContainer.classList.add('form')
    inputContainer.style.marginTop = '80px'

    const emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    emailInput.placeholder = 'Your Email'
    emailInput.classList.add('email-input')
    emailInput.style.width = '688px'
    emailInput.style.height = '28.5px'
    emailInput.style.border = '1px solid #E6E6E6'
    emailInput.style.padding = '16px 20px'

    const subscribeBtn = document.createElement('button')
    subscribeBtn.classList.add('subscribebtn')
    subscribeBtn.textContent = 'Subscribe' 
    subscribeBtn.style.width = '117px'
    subscribeBtn.style.height = '62px'
    subscribeBtn.style.padding = '15px 0'
    subscribeBtn.style.borderRadius = '0 5px 5px 0'
    subscribeBtn.style.border = 'none'
    subscribeBtn.style.background = '#23A6F0'
    subscribeBtn.style.color = '#FFFFFF'
    subscribeBtn.style.cursor = 'pointer'
    subscribeBtn.style.position = 'absolute'
    subscribeBtn.style.right = '403px'

    inputContainer.appendChild(emailInput)
    inputContainer.appendChild(subscribeBtn)
    
    return inputContainer;
}





