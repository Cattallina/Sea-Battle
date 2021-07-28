class Ship {
    constructor(elem) {
        this.elem = document.querySelectorAll(elem);
        this.x = Math.floor(Math.random() * this.elem.length);
        this.redShip = this.elem[this.x];
        console.log(this.x)
    }

    startGame(btn) {
        let count = 0;
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
                if (btn[i] === this.redShip) {
                    this.redShip = this.elem[this.x].style.backgroundColor = 'springgreen';
                    alert('You won!');
                    location.reload();

                } else {
                    ++count;
                    btn[i].style.backgroundColor = 'red';
                    btn[i].innerHTML = 'X'
                    if (count > 2) {
                        alert('You lost!');
                        location.reload();
                    }
                }
            })
        }
    }
}

let ship = new Ship('tr td');

let btn = document.querySelectorAll('tr td');
ship.startGame(btn);


























