// console program

// write class of dog which:
// - have random name from open api (https://randomuser.me/)
// - have X,Y position (*based on class Position)
// - *have random color of fur
// - can make sound with log "woof! woof!"
// - randomly walking by 1 unit on area X:[-10,10], Y:[-10,10], (interval 1sec)
// - create 5 different dogs



class Position {
    constructor() {
        this.X = 0
        this.Y = 0
        this.color = this.choseColor()
        setInterval(() => this.move(), 1000)
    }
    choseColor() {
        const colorOption = Math.round(Math.random() * 5)
        if (colorOption === 0) return 'blue'
        else if (colorOption === 1) return 'green'
        else if (colorOption === 2) return 'white'
        else if (colorOption === 3) return 'red'
        else return 'black'
    }

    choseMinusPlus() {
        if (Math.random() > 0.5) return true
        else return false
    }
    move() {




        //let way = Math.round(Math.random() * 3)
        if (this.choseMinusPlus()) {
            this.X = this.X + 1
            if (this.X === 10) this.X = this.X - 1
            this.Y = this.Y + 1
            if (this.Y === 10) this.Y = this.Y - 1
        }

        else if (this.choseMinusPlus()) {
            this.X = this.X - 1
            if (this.X === -10) this.X = this.X - 1
            this.Y = this.Y - 1
            if (this.Y === -10) this.Y = this.Y - 1
        }

    }


}

class Dog extends Position {
    constructor(randomUserName) {

        super()
        this.picture = null;
        setInterval(
            () => this.activePosition(), 1000
        )

        fetch('https://randomuser.me/api/?results=1')
            .then((response) => {
                return response.json()
            })
            .then((j) => {
                console.log(j.results)
                this.picture = j.results[0].picture.large
            }

            )


        this.name = randomUserName
    }

    activePosition() {

        console.log(`DOG ${this.name} is on the position X: ${this.X} Y: ${this.Y}\n\n `)

    }

    makeSound() {
        return "Woof woof";
    }
}


const dog1 = new Dog('Reksio')
const dog2 = new Dog('Rico')
const dog3 = new Dog('Fox')
const dog4 = new Dog('Brutus')
const dog5 = new Dog('Baca')

const zmienna = null



