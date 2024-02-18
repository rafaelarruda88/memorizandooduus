const images = [
    {src: 'image1.png', name: 'Eji Ogbe'},
    {src: 'image2.png', name: 'Oyeku Meji'},
    {src: 'image3.png', name: 'Iwori Meji'},
    {src: 'image4.png', name: 'Odi Meji'},
    {src: 'image5.png', name: 'Irosun Meji'},
    {src: 'image6.png', name: 'Owonrin Meji'},
    {src: 'image7.png', name: 'Obara Meji'},
    {src: 'image8.png', name: 'Okanran Meji'},
    {src: 'image9.png', name: 'Ogunda Meji'},
    {src: 'image10.png', name: 'Osa Meji'},
    {src: 'image11.png', name: 'Ika Meji'},
    {src: 'image12.png', name: 'Oturupon Meji'},
    {src: 'image13.png', name: 'Otura Meji'},
    {src: 'image14.png', name: 'Irete Meji'},
    {src: 'image15.png', name: 'Ose Meji'},
    {src: 'image16.png', name: 'Ofun Meji'},
    // Adicione todos os 16 objetos com as propriedades 'src' e 'name'
];

let correctCount = 0; // Inicializa a contagem de acertos
let wrongCount = 0; // Inicializa a contagem de erros

function setupGame() {
    const imageElement = document.getElementById('symbolImage');
    const optionsContainer = document.getElementById('options');
    const statusMessage = document.getElementById('statusMessage');

    // Embaralha as imagens e escolhe uma aleatoriamente
    const shuffledImages = [...images].sort(() => 0.5 - Math.random());
    const selectedImage = shuffledImages[0]; // Pega a primeira imagem do array embaralhado
    imageElement.src = selectedImage.src; // Atualiza o src da imagem
    imageElement.alt = selectedImage.name; // Atualiza o alt da imagem

    optionsContainer.innerHTML = ''; // Limpa opções anteriores
    statusMessage.textContent = '';

    // As opções podem ser geradas com base em todas as imagens ou um subconjunto
    images.forEach((image, index) => {
        const button = document.createElement('button');
        button.textContent = image.name;
        button.onclick = () => checkAnswer(image.name, selectedImage.name);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedName, correctName) {
    if (selectedName === correctName) {
        correctCount++; // Incrementa a contagem de acertos
        setupGame(); // Randomiza novamente as imagens
    } else {
        wrongCount++; // Incrementa a contagem de erros
        document.getElementById('statusMessage').textContent = 'Incorreto, tente novamente.';
    }
    // Atualiza o placar na página
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
}

function resetGame() {
    correctCount = 0;
    wrongCount = 0;
    setupGame(); // Reconfigura o jogo para o início
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    document.getElementById('statusMessage').textContent = '';
}

window.onload = setupGame;
