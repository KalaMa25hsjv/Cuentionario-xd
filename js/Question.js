class Question{
  constructor(){
    this.title=createElement('h1');
    this.input1=createInput("Introduce aqui tu nombre");
    this.input2=createInput("introduce el numero de la opcion correcta");
    this.button=createButton('enviar');
    this.question=createElement('h3');
    this.opcion1=createElement('h4');
    this.opcion2=createElement('h4');
    this.opcion3=createElement('h4');
    this.opcion4=createElement('h4');
}
hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
}
display(){
    this.title.html("JUEGO MI CUESTIONARIO");
    this.title.position(350,0);
    this.question.html("Pregunta: En el cielo brinco y buelo, me encanta subir y bajar,flotar y lucir mi pelo");
    this.question.position(150,80);
    this.opcion1.html("1.-avion");
    this.opcion1.position(150,100);
    this.opcion2.html("2.-cometa");
    this.opcion2.position(150,120);
    this.opcion3.html("3.-Aguila");
    this.opcion3.position(150,140);
    this.opcion4.html("4.-estrella");
    this.opcion4.position(150,160);
    this.input1.position(150,230);
    this.input2.position(350,230);
    this.button.position(290,300);
    this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
    });
  }
}