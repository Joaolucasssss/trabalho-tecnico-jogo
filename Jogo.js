let vida = 100;
let inventario = [];
let checkpoint = null;
let pontos = 0;

function atualizarStatus() {
    const status = `
        Vida: ${vida}
        Inventário: ${inventario.join(', ')}
        Checkpoint: ${checkpoint ? 'Salvo' : 'Não salvo'}
        Pontos: ${pontos}
    `;
    alert(status);
}

function explorar() {
    let escolha = prompt("Você está explorando a cidade. O que deseja fazer?\n1- Ir para o abrigo\n2- Procurar por um amigo\n3- Visitar um clube esportivo\n4- Ir para o treinamento olímpico");

    if (escolha === '1') {
        let abrigo = prompt("Escolha um abrigo:\n1- Abrigo do refugiado\n2- Abrigo de castigados");
        if (abrigo === '1') {
            alert("Você encontrou um abrigo seguro e ganha algum descanso.");
            vida += 10;
            pontos += 5;
        } else if (abrigo === '2') {
            alert("O abrigo de castigados é pouco amigável. Você perdeu um pouco de vida.");
            vida -= 10;
            pontos -= 5;
        } else {
            alert("Escolha inválida.");
        }
    } else if (escolha === '2') {
        let amigo = prompt("Encontre um amigo:\n1- Amigo que gosta de esporte\n2- Amigo que não faz nada");
        if (amigo === '1') {
            alert("Você encontrou um amigo que pode te ajudar a treinar para as Olimpíadas.");
            inventario.push('Dica de treino');
            pontos += 10;
        } else if (amigo === '2') {
            alert("Você encontrou um amigo que não ajuda muito. Não é muito útil.");
        } else {
            alert("Escolha inválida.");
        }
    } else if (escolha === '3') {
        let clube = prompt("Escolha um clube esportivo:\n1- Clube de atletismo\n2- Clube de voleibol");
        if (clube === '1') {
            alert("Você se junta ao clube de atletismo e melhora suas habilidades.");
            inventario.push('Equipamento de Atletismo');
            pontos += 15;
        } else if (clube === '2') {
            alert("Você se junta ao clube de voleibol e ganha alguma experiência em esportes.");
            inventario.push('Equipamento de Voleibol');
            pontos += 10;
        } else {
            alert("Escolha inválida.");
        }
    } else if (escolha === '4') {
        let treinamento = prompt("Escolha um tipo de treinamento:\n1- Treinar em casa\n2- Participar de um treino em grupo");
        if (treinamento === '1') {
            alert("Você treina em casa e melhora suas habilidades, mas precisa de mais prática.");
            vida -= 5;
            pontos -= 5;
        } else if (treinamento === '2') {
            alert("Você participa de um treino em grupo e aprende novas técnicas.");
            inventario.push('Técnicas de Treino');
            pontos += 20;
        } else {
            alert("Escolha inválida.");
        }
    } else {
        alert("Escolha inválida.");
    }

    atualizarStatus();
}

function interagir() {
    if (inventario.includes('Empatia')) {
        alert('O NPC está impressionado com sua empatia e lhe dá uma dica importante.');
        pontos += 10;
    } else if (inventario.includes('Dica de treino')) {
        alert('O NPC dá uma dica de treino para melhorar seu desempenho.');
        pontos += 5;
    } else {
        alert('O NPC está indiferente.');
    }
    atualizarStatus();
}

function coletar() {
    let item = Math.random() < 0.5 ? 'Comida' : 'Medicamento';
    inventario.push(item);
    alert(`Você encontrou ${item}.`);
    pontos += 5;
    atualizarStatus();
}

function salvarCheckpoint() {
    checkpoint = { vida, inventario: [...inventario], pontos };
    alert('Checkpoint salvo!');
    atualizarStatus();
}

function restaurarCheckpoint() {
    if (checkpoint) {
        vida = checkpoint.vida;
        inventario = [...checkpoint.inventario];
        pontos = checkpoint.pontos;
        alert('Checkpoint restaurado!');
        atualizarStatus();
    } else {
        alert('Nenhum checkpoint salvo.');
    }
}

function jogar() {
    let continuar = true;
    while (continuar) {
        let acao = prompt(
            'Escolha uma ação:\n' +
            '1. Explorar\n' +
            '2. Interagir com NPC\n' +
            '3. Coletar Itens\n' +
            '4. Salvar Checkpoint\n' +
            '5. Restaurar Checkpoint\n' +
            '6. Sair do Jogo'
        );

        switch (acao) {
            case '1':
                explorar();
                break;
            case '2':
                interagir();
                break;
            case '3':
                coletar();
                break;
            case '4':
                salvarCheckpoint();
                break;
            case '5':
                restaurarCheckpoint();
                break;
            case '6':
                continuar = false;
                alert('Obrigado por jogar! Boa sorte nas Olimpíadas de 2024!');
                break;
            default:
                alert('Escolha inválida. Tente novamente.');
        }
    }
}

atualizarStatus();
jogar();

                
