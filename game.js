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
];

let correctCount = 0;
let wrongCount = 0;

function setupGame() {
    const imageElement = document.getElementById('symbolImage');
    const optionsContainer = document.getElementById('options');
    const statusMessage = document.getElementById('statusMessage');

    const shuffledImages = [...images].sort(() => 0.5 - Math.random());
    const selectedImage = shuffledImages[0];
    imageElement.src = selectedImage.src;
    imageElement.alt = selectedImage.name;

    optionsContainer.innerHTML = '';
    statusMessage.textContent = '';

    // Seleciona mais duas imagens aleatórias para serem as opções erradas
    let options = [selectedImage];
    while (options.length < 3) {
        let option = shuffledImages[Math.floor(Math.random() * shuffledImages.length)];
        if (!options.includes(option)) {
            options.push(option);
        }
    }

    // Embaralha as opções para que a posição da resposta correta varie
    options = options.sort(() => 0.5 - Math.random());

    // Cria botões apenas para as três opções selecionadas
    options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option.name;
        button.onclick = () => checkAnswer(option.name, selectedImage.name);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedName, correctName) {
    if (selectedName === correctName) {
        correctCount++;
        document.getElementById('statusMessage').textContent = 'Correto!';
    } else {
        wrongCount++;
        document.getElementById('statusMessage').textContent = 'Incorreto, tente novamente.';
    }
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    // Aguarda um pouco antes de configurar o próximo jogo para que o jogador veja a resposta
    setTimeout(setupGame, 1000);
}

function resetGame() {
    correctCount = 0;
    wrongCount = 0;
    setupGame();
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    document.getElementById('statusMessage').textContent = '';
}

window.onload = setupGame;
