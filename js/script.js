document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();


const nome = document.getElementById('nome').value;


alert(`Obrigado, ${nome}! Entrarei em contato em breve.`);


this.reset();
});

