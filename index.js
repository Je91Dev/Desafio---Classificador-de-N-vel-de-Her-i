
let heroi = "Jean"
let xp = 50000
let nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']

switch (true) {
    case xp <= 1000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[0]}`)
        break
    case xp <= 2000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[1]}`)
        break    
    case xp <= 5000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[2]}`)
        break
    case xp <= 7000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[3]}`)
        break
    case xp <= 8000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[4]}`)
        break    
    case xp <= 9000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[5]}`)
        break
    case xp <= 10000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[6]}`)
        break    
    case xp >= 10000:
        console.log(`O Herói de nome ${heroi} está no nível de ${nivel[7]}`)
        break
}
