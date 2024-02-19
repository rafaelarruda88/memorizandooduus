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

    // Limpa opções anteriores e a mensagem de status
    optionsContainer.innerHTML = '';
    statusMessage.textContent = '';

    // Embaralha as imagens para seleção aleatória
    let shuffledImages = [...images].sort(() => 0.5 - Math.random());
    let selectedImage = shuffledImages[0];
    let options = [selectedImage];

    // Escolhe mais duas opções aleatórias diferentes da correta
    while (options.length < 3) {
        let randomOption = shuffledImages[Math.floor(Math.random() * shuffledImages.length)];
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // Embaralha as opções para não deixar a correta sempre na mesma posição
    options.sort(() => 0.5 - Math.random());

    // Atualiza a imagem a ser adivinhada
    imageElement.src = selectedImage.src;
    imageElement.alt = selectedImage.name;

    // Cria botões para as opções de resposta
    options.forEach(option => {
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
    // Atualiza os contadores na tela
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    // Configura a próxima rodada
    setTimeout(setupGame, 1000); // Dá um breve intervalo antes de iniciar a nova rodada
}

// Inicializa o jogo quando a janela é carregada
window.onload = setupGame;
