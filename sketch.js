let scoreX = 0; // scorekeeping X
let scoreO = 0; // scorekeeping O

let gameOn = true; //turns game off after a win

let playerStart = false; //rules selector
let toggle = false;

let autoFill = true;


let a1 = true; //a1 - c3 turns each tile unclickable after it has been pressed
let a2 = true;
let a3 = true;
let b1 = true;
let b2 = true;
let b3 = true;
let c1 = true;
let c2 = true;
let c3 = true;

let a1x = false; //keeps track of selected a-row tiles for declaring win
let a1o = false;
let a2x = false;
let a2o = false;
let a3x = false;
let a3o = false;

let b1x = false; //keeps track of selected b-row tiles for declaring win
let b1o = false;
let b2x = false;
let b2o = false;
let b3x = false;
let b3o = false;

let c1x = false; //keeps track of selected c-row tiles for declaring win
let c1o = false;
let c2x = false;
let c2o = false;
let c3x = false;
let c3o = false;

xo = false; //determines if "x" or "o" is drawn


function setup() {
  createCanvas(660, 700);
  resetSketch();
  var reset = createButton("Reset");
  reset.mousePressed(resetSketch);
  reset.position(15, 669);

  var rules = createButton("Rules");
  rules.position(480, 669);
  rules.mousePressed(playerSwap);





}

function playerSwap() {
  // console.log(playerStart);
  playerStart = !playerStart;
}



function resetSketch() { //------------RESET


  test = true;


  noFill();
  strokeWeight(3);
  stroke(0);
  background(100, 0, 100);
  line(230, 30, 230, 630);
  line(430, 30, 430, 630);
  line(30, 230, 630, 230);
  line(30, 430, 630, 430);

  gameOn = true;
  a1 = a2 = a3 = b1 = b2 = b3 = c1 = c2 = c3 = true;
  a1x = a2x = a3x = b1x = b2x = b3x = c1x = c2x = c3x = false;
  a1o = a2o = a3o = b1o = b2o = b3o = c1o = c2o = c3o = false;
  //toggle = !toggle;
  //xo = toggle;
  if (!playerStart) {
    toggle = !toggle;
    xo = toggle;
  }

} // ---------------------------------END RESET


function draw() {
  //background(220);

  //console.log(playerStart);

  noStroke();
  fill(150, 0, 150);
  rect(0, 660, width, 40);
  strokeWeight(1);
  stroke(200);
  fill(200);
  textSize(22);
  text("X :", 85, 687);
  text(scoreX, 120, 687);
  text("O :", 150, 687);
  text(scoreO, 185, 687);

  if (xo) { //displays if X or O's turn
    text("X", 280, 687);
  } else {
    text("O", 280, 687);
  }

  text("'s Turn", 300, 687) //displays "'s turn"

  textSize(10);
  strokeWeight(0.5);

  if (playerStart) {
    stroke(200);
    textSize(12);
    text("Loser Goes First", 550, 690);
    textSize(10);
    stroke(20);
    text("Alternate", 550, 675);
  } else {
    stroke(20);
    textSize(10);
    text("Loser Goes First", 550, 690);
    stroke(200);
    textSize(12);
    text("Alternate", 550, 675);
  }


  if (autoFill) {
    //rect(380,668,85,20);
    fill(0);
    textSize(12);
    stroke(0);
    text("AutoFill ON", 385, 683);
  } else {
    //rect(380,668,85,20);
    fill(0);
    textSize(12);
    stroke(0);
    text("AutoFill OFF", 385, 683);
  }



  //-----------------------------------------AUTO-COMPLETE
  if (autoFill) {

    noFill();
    strokeWeight(6);
    stroke(0);
    //HORIZONTAL
    //line 1
    if (a1o && a2o && a3 && !xo && gameOn || a1o && a2 && a3o && !xo && gameOn || a1 && a2o && a3o && !xo && gameOn) {
      a3o = true;
      ellipse(530, 130, 100, 100);
      ellipse(330, 130, 100, 100);
      ellipse(130, 130, 100, 100);
      xo = !xo
      stroke(200, 0, 0);
      line(50, 130, 610, 130);
      gameOn = false;
      scoreO += 1;
    }
    if (a1x && a2x && a3 && xo && gameOn || a1x && a2 && a3x && xo && gameOn || a1 && a2x && a3x && xo && gameOn) {
      a3x = true;
      line(80, 80, 180, 180);
      line(180, 80, 80, 180);
      line(280, 80, 380, 180);
      line(380, 80, 280, 180);
      line(480, 80, 580, 180);
      line(580, 80, 480, 180);
      xo = !xo
      stroke(200, 0, 0);
      line(50, 130, 610, 130);
      gameOn = false;
      scoreX += 1;
    }

    //line 2
    if (b1o && b2o && b3 && !xo && gameOn || b1o && b2 && b3o && !xo && gameOn || b1 && b2o && b3o && !xo && gameOn) {
      b3o = true;
      ellipse(530, 330, 100, 100);
      ellipse(330, 330, 100, 100);
      ellipse(130, 330, 100, 100);
      xo = !xo
      stroke(200, 0, 0);
      line(50, 330, 610, 330);
      gameOn = false;
      scoreO += 1;
    }
    if (b1x && b2x && b3 && xo && gameOn || b1x && b2 && b3x && xo && gameOn || b1 && b2x && b3x && xo && gameOn) {
      a3x = true;
      line(80, 280, 180, 380);
      line(180, 280, 80, 380);
      line(280, 280, 380, 380);
      line(380, 280, 280, 380);
      line(480, 280, 580, 380);
      line(580, 280, 480, 380);
      xo = !xo
      stroke(200, 0, 0);
      line(50, 330, 610, 330);
      gameOn = false;
      scoreX += 1;
    }

    //line 3

    if (c1o && c2o && c3 && !xo && gameOn || c1o && c2 && c3o && !xo && gameOn || c1 && c2o && c3o && !xo && gameOn) {
      c3o = true;
      ellipse(530, 530, 100, 100);
      ellipse(330, 530, 100, 100);
      ellipse(130, 530, 100, 100);
      xo = !xo
      stroke(200, 0, 0);
      line(50, 530, 610, 530);
      gameOn = false;
      scoreO += 1;
    }
    if (c1x && c2x && c3 && xo && gameOn || c1x && c2 && c3x && xo && gameOn || c1 && c2x && c3x && xo && gameOn) {
      a3x = true;
      line(80, 480, 180, 580);
      line(180, 480, 80, 580);
      line(280, 480, 380, 580);
      line(380, 480, 280, 580);
      line(480, 480, 580, 580);
      line(580, 480, 480, 580);
      xo = !xo
      stroke(200, 0, 0);
      line(50, 530, 610, 530);
      gameOn = false;
      scoreX += 1;
    }

    //VERTICAL
    //line 1
    if (a1o && b1o && c1 && !xo && gameOn || a1o && b1 && c1o && !xo && gameOn || a1 && b1o && c1o && !xo && gameOn) {
      a1o = b1o = c1o = true;
      ellipse(130, 130, 100, 100);
      ellipse(130, 330, 100, 100);
      ellipse(130, 530, 100, 100);
      xo = !xo;
      stroke(200, 0, 0);
      line(130, 50, 130, 610);
      gameOn = false;
      scoreO += 1;

    }
    if (a1x && b1x && c1 && xo && gameOn || a1x && b1 && c1x && xo && gameOn || a1 && b1x && c1x && xo && gameOn) {
      a1x = b1x = c1x = true;
      line(80, 80, 180, 180);
      line(180, 80, 80, 180);
      line(80, 280, 180, 380);
      line(180, 280, 80, 380);
      line(80, 480, 180, 580);
      line(180, 480, 80, 580);
      xo = !xo;
      stroke(200, 0, 0);
      line(130, 50, 130, 610);
      gameOn = false;
      scoreX += 1;
    }
    //line 2
    if (a2o && b2o && c2 && !xo && gameOn || a2o && b2 && c2o && !xo && gameOn || a2 && b2o && c2o && !xo && gameOn) {

      ellipse(330, 130, 100, 100);
      ellipse(330, 330, 100, 100);
      ellipse(330, 530, 100, 100);
      xo = !xo;
      stroke(200, 0, 0);
      line(330, 50, 330, 610);
      gameOn = false;
      scoreO += 1;
    }
    if (a2x && b2x && c2 && xo && gameOn || a2x && b2 && c2x && xo && gameOn || a2 && b2x && c2x && xo && gameOn) {
      line(280, 80, 380, 180);
      line(380, 80, 280, 180);
      line(280, 280, 380, 380);
      line(380, 280, 280, 380);
      line(280, 480, 380, 580);
      line(380, 480, 280, 580);
      xo = !xo;
      stroke(200, 0, 0);
      line(330, 50, 330, 610);
      gameOn = false;
      scoreX += 1;
    }
    //line 3
    if (a3o && b3o && c3 && !xo && gameOn || a3o && b3 && c3o && !xo && gameOn || a3 && b3o && c3o && !xo && gameOn) {

      ellipse(530, 130, 100, 100);
      ellipse(530, 330, 100, 100);
      ellipse(530, 530, 100, 100);
      xo = !xo;
      stroke(200, 0, 0);
      line(530, 50, 530, 610);
      gameOn = false;
      scoreO += 1;
    }
    if (a3x && b3x && c3 && xo && gameOn || a3x && b3 && c3x && xo && gameOn || a3 && b3x && c3x && xo && gameOn) {
      line(480, 80, 580, 180);
      line(580, 80, 480, 180);
      line(480, 280, 580, 380);
      line(580, 280, 480, 380);
      line(480, 480, 580, 580);
      line(580, 480, 480, 580);
      xo = !xo;
      stroke(200, 0, 0);
      line(530, 50, 530, 610);
      gameOn = false;
      scoreX += 1;
    }

    //DIAGONAL
    if (a3o && b2o && c1 && !xo && gameOn || a3o && b2 && c1o && !xo && gameOn || a3 && b2o && c1o && !xo && gameOn) {
      ellipse(530, 130, 100, 100);
      ellipse(330, 330, 100, 100);
      ellipse(130, 530, 100, 100);
      xo = !xo;
      stroke(200, 0, 0);
      line(590, 70, 70, 590);
      gameOn = false;
      scoreO += 1;
    }
    if (a3x && b2x && c1 && xo && gameOn || a3x && b2 && c1x && xo && gameOn || a3 && b2x && c1x && xo && gameOn) {
      line(480, 80, 580, 180);
      line(580, 80, 480, 180);
      line(280, 280, 380, 380);
      line(380, 280, 280, 380);
      line(80, 480, 180, 580);
      line(180, 480, 80, 580);
      xo = !xo;
      stroke(200, 0, 0);
      line(590, 70, 70, 590);
      gameOn = false;
      scoreX += 1;
    }

    //line 2
    if (a1o && b2o && c3 && !xo && gameOn || a1o && b2 && c3o && !xo && gameOn || a1 && b2o && c3o && !xo && gameOn) {
      ellipse(130, 130, 100, 100);
      ellipse(330, 330, 100, 100);
      ellipse(530, 530, 100, 100);
      xo = !xo;
      stroke(200, 0, 0);
      line(70, 70, 590, 590);
      gameOn = false;
      scoreO += 1;
    }
    if (a1x && b2x && c3 && xo && gameOn || a1x && b2 && c3x && xo && gameOn || a1 && b2x && c3x && xo && gameOn) {
      line(80, 80, 180, 180);
      line(180, 80, 80, 180);
      line(280, 280, 380, 380);
      line(380, 280, 280, 380);
      line(480, 480, 580, 580);
      line(580, 480, 480, 580);
      xo = !xo;
      stroke(200, 0, 0);
      line(70, 70, 590, 590);
      gameOn = false;
      scoreX += 1;
    }



    // console.log(a3o);

  }
  //--------------------------------------END AUTO-COMPLETE

  if (!gameOn) { //---------------------"Game Over" Text
    strokeWeight(3);
    stroke(200);
    fill(200);
    textSize(62);
    gameOver = text('GAME OVER', 140, 350);
  }//--------------------------------------------End "Game Over" Text

} //-------------------------END DRAW

function mousePressed() {

  if (mouseX >= 380 && mouseX <= 465 && mouseY >= 668 && mouseY <= 688) {
    autoFill = !autoFill;
  }


  // 
  noFill();
  strokeWeight(6);
  stroke(0);
  //---------------------------------------TILES
  //a1
  if (mouseX > 30 && mouseX < 230 && mouseY > 30 && mouseY < 230 && a1 && gameOn) {

    a1 = false;
    xo = !xo;

    if (xo) {
      ellipse(130, 130, 100, 100);
      a1o = true;

    } else {
      line(80, 80, 180, 180);
      line(180, 80, 80, 180);
      a1x = true;
    }
  } //end a1

  //a2
  if (mouseX > 230 && mouseX < 430 && mouseY > 30 && mouseY < 230 && a2 && gameOn) {

    a2 = false;
    xo = !xo;

    if (xo) {
      ellipse(330, 130, 100, 100);
      a2o = true;

    } else {
      line(280, 80, 380, 180);
      line(380, 80, 280, 180);
      a2x = true;
    }
  } //end a2

  //a3
  if (mouseX > 430 && mouseX < 630 && mouseY > 30 && mouseY < 230 && a3 && gameOn) {

    a3 = false;
    xo = !xo;

    if (xo) {
      ellipse(530, 130, 100, 100);
      a3o = true;

    } else {
      line(480, 80, 580, 180);
      line(580, 80, 480, 180);
      a3x = true;
    }
  } //end a3

  //b1
  if (mouseX > 30 && mouseX < 230 && mouseY > 230 && mouseY < 430 && b1 && gameOn) {

    b1 = false;
    xo = !xo;

    if (xo) {
      ellipse(130, 330, 100, 100);
      b1o = true;

    } else {
      line(80, 280, 180, 380);
      line(180, 280, 80, 380);
      b1x = true;
    }
  } //end b1

  //b2
  if (mouseX > 230 && mouseX < 430 && mouseY > 230 && mouseY < 430 && b2 && gameOn) {

    b2 = false;
    xo = !xo;

    if (xo) {
      ellipse(330, 330, 100, 100);
      b2o = true;

    } else {
      line(280, 280, 380, 380);
      line(380, 280, 280, 380);
      b2x = true;
    }
  } //end b2

  //b3
  if (mouseX > 430 && mouseX < 630 && mouseY > 230 && mouseY < 430 && b3 && gameOn) {

    b3 = false;
    xo = !xo;

    if (xo) {
      ellipse(530, 330, 100, 100);
      b3o = true;

    } else {
      line(480, 280, 580, 380);
      line(580, 280, 480, 380);
      b3x = true;
    }
  } //end b3

  //c1
  if (mouseX > 30 && mouseX < 230 && mouseY > 430 && mouseY < 630 && c1 && gameOn) {

    c1 = false;
    xo = !xo;

    if (xo) {
      ellipse(130, 530, 100, 100);
      c1o = true;

    } else {
      line(80, 480, 180, 580);
      line(180, 480, 80, 580);
      c1x = true;
    }
  } //end c1

  //c2
  if (mouseX > 230 && mouseX < 430 && mouseY > 430 && mouseY < 630 && c2 && gameOn) {

    c2 = false;
    xo = !xo;

    if (xo) {
      ellipse(330, 530, 100, 100);
      c2o = true;

    } else {
      line(280, 480, 380, 580);
      line(380, 480, 280, 580);
      c2x = true;
    }
  } //end c2

  //c3
  if (mouseX > 430 && mouseX < 630 && mouseY > 430 && mouseY < 630 && c3 && gameOn) {

    c3 = false;
    xo = !xo;

    if (xo) {
      ellipse(530, 530, 100, 100);
      c3o = true;

    } else {
      line(480, 480, 580, 580);
      line(580, 480, 480, 580);
      c3x = true;
    }
  } //end c3
  //------------------------------------------END TILES

  // ------------------------------------WIN LINES
  strokeWeight(10);
  //winner lines horizontal
  if (a1x && a2x && a3x || a1o && a2o && a3o) {
    stroke(200, 0, 0);
    line(50, 130, 610, 130);
    gameOn = false;
  }

  if (b1x && b2x && b3x || b1o && b2o && b3o) {
    stroke(200, 0, 0);
    line(50, 330, 610, 330);
    gameOn = false;
  }

  if (c1x && c2x && c3x || c1o && c2o && c3o) {
    stroke(200, 0, 0);
    line(50, 530, 610, 530);
    gameOn = false;
  }

  //winner lines vertical
  if (a1x && b1x && c1x || a1o && b1o && c1o) {
    stroke(200, 0, 0);
    line(130, 50, 130, 610);
    gameOn = false;
  }

  if (a2x && b2x && c2x || a2o && b2o && c2o) {
    stroke(200, 0, 0);
    line(330, 50, 330, 610);
    gameOn = false;
  }

  if (a3x && b3x && c3x || a3o && b3o && c3o) {
    stroke(200, 0, 0);
    line(530, 50, 530, 610);
    gameOn = false;
  }

  //winner lines diagonal
  if (a1x && b2x && c3x || a1o && b2o && c3o) {
    stroke(200, 0, 0);
    line(70, 70, 590, 590);
    gameOn = false;
  }
  if (a3x && b2x && c1x || a3o && b2o && c1o) {
    stroke(200, 0, 0);
    line(590, 70, 70, 590);
    gameOn = false;
  }



  // --------------------------------------END WIN LINES


  //-------------------------------------SCOREKEEPING
  //Horizontal
  if (a1x && a2x && a3x) {
    scoreX += 1;
  }
  if (a1o && a2o && a3o) {
    scoreO += 1;
  }

  if (b1x && b2x && b3x) {
    scoreX += 1;
  }
  if (b1o && b2o && b3o) {
    scoreO += 1;
  }

  if (c1x && c2x && c3x) {
    scoreX += 1;
  }
  if (c1o && c2o && c3o) {
    scoreO += 1;
  }

  //Vertical
  if (a1x && b1x && c1x) {
    scoreX += 1;
  }
  if (a1o && b1o && c1o) {
    scoreO += 1;
  }
  if (a2x && b2x && c2x) {
    scoreX += 1;
  }
  if (a2o && b2o && c2o) {
    scoreO += 1;
  }
  if (a3x && b3x && c3x) {
    scoreX += 1;
  }
  if (a3o && b3o && c3o) {
    scoreO += 1;
  }

  //Diagonal
  if (a1x && b2x && c3x) {
    scoreX += 1;
  }
  if (a1o && b2o && c3o) {
    scoreO += 1;
  }
  if (a3x && b2x && c1x) {
    scoreX += 1;
  }
  if (a3o && b2o && c1o) {
    scoreO += 1;
  }

  //---------------------------------------END SCOREKEEPING




}


