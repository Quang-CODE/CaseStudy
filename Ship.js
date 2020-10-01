
let canvas = document.getElementById('background')
    canvas.height = 600
    canvas.width = 1000
    canvas.style.border = '3px solid black'
    canvas.style.backgroundColor = 'white'
    canvas.style.backgroundImage = "url('')"
    let ctx = canvas.getContext('2d')
    let score = 0
    let Ball_Y = 570


    function drawBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.arc(100, Ball_Y, 30, 0, 2 * Math.PI)
        ctx.fill()
        // ctx.drawImage('Starship',100, Ball_Y)
        checkdead()
    }
    let jump = 200
    function jumping (){
        audioBouncing.play()
       Ball_Y -= jump

    }

    let movingObstacle = 950
    let dx = 10
    var height = 450

   function drawObstacle(){
       ctx.clearRect(0,0,canvas.width,canvas.height)
       drawBall()
       scoreBoard()
       requestAnimationFrame(drawObstacle)
       ctx.fillStyle = 'black'
       ctx.fillRect(0,0,1000,10)
       ctx.fillRect(movingObstacle,height,50,400)
       movingObstacle = movingObstacle - dx
       if (movingObstacle < 0) {
           movingObstacle = 950
       }
       if ( Ball_Y < 570) {
           Ball_Y +=10;
       } else {
           Ball_Y = 570;
       }
       if ( score > 1000 && score < 2000 ){
           dx = 20
           height = 350
       } else if (score > 2000){
           dx = 30
           height = 250
       }
       scoreBoard()
}
   drawObstacle()



    function checkdead(){
       if ( movingObstacle < 130 && Ball_Y >= height || Ball_Y < 0 ) {
           alert("You are DEAD!!!!PRESS F5 TO PLAY AGAIN!!!")
           window.reload()
           audioGameOver.play()
           // ctx.clearRect(0,0,canvas.width,canvas.height)
           // ctx.font = '30px Arial';
           // ctx.fillText('Gameover: reload to play again',300,200)

       }
    }
    function scoreBoard(){
        setInterval(countScore(),1000)
}
    function countScore(){
        score = score + 1;
        ctx.font = '30px Arial';
        ctx.fillText('Score: ' + score,400,200)
    }

    var audioBouncing = new Audio('sound2.wav')
    var audioGameOver = new Audio('sound-gameover.wav')
