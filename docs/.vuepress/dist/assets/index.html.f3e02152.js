import{_ as l,o as t,c as r,b as i,d,e,a as s,r as a}from"./app.30ed76b5.js";var v="/assets/arduino-language.d4eeed50.png",u="/assets/binaryClock.21b78a05.png",o="/assets/contatto_magnetico.fe082fca.jpg",c="/assets/rtc_lcd_bb.11c5e88f.png",m="/assets/Pinout-MKRwifi1010_latest.2cd6ada5.png";const b={},h=i("h1",{id:"documentazione",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#documentazione","aria-hidden":"true"},"#"),e(" Documentazione")],-1),p=e("Arduino utilizza il linguaggio "),_=i("code",null,"C++",-1),g=e(" ma esporta una serie di funzioni molto semplici per il controllo dell'Hardware. "),f={href:"https://www.arduino.cc/reference/it/",target:"_blank",rel:"noopener noreferrer"},D=e("Qui"),q=e(" puoi trovare la documentazione ufficiale del linguaggio di Arduino."),S=s('<p><img src="'+v+'" alt=""></p><p>Qua sotto riporto comunque qualche costrutto fondamentale del linguaggio <code>C++</code> e qualche funzione esportata da Arduino.</p><p><strong>Le variabili</strong></p><table><thead><tr><th>Tipo di Dato</th><th>Dimensione</th><th>Descrizione</th></tr></thead><tbody><tr><td>char</td><td>1 Byte</td><td>Contenitore per caratteri e valori alfanumerici (e.g., \u2018a\u2019, \u2018b\u2019, \u20181\u2019, etc)</td></tr><tr><td>bool</td><td>1 Byte</td><td>Contenitore per valori booleani (e.g., true, false)</td></tr><tr><td>int</td><td>2 Byte</td><td>Contenitore per numeri interi nel range numerico, da -32768 a 32767.</td></tr><tr><td>unsigned int</td><td>2 Byte</td><td>Contenitore per numeri interi senza segno nel range numerico, da 0 a 65535.</td></tr><tr><td>long</td><td>4 Byte</td><td>Contenitore per numeri interi nel range numerico, da -2147483648 a 2147483647</td></tr><tr><td>unsigned long</td><td>4 Byte</td><td>Contenitore per numeri interi nel range numerico, da 0 to 4,294,967,295 (2^32 \u2013 1)</td></tr><tr><td>float</td><td>4 Byte</td><td>Contenitore per numeri interi nel range numerico, da 0 to 4,294,967,295 (2^32 \u2013 1)</td></tr><tr><td>double</td><td>4 Byte</td><td>Contenitore per numeri interi nel range numerico, da 0 to 4,294,967,295 (2^32 \u2013 1)</td></tr><tr><td>String</td><td>-</td><td>Contenitore per testo (e.g., \u201CResistenza\u201D)</td></tr></tbody></table><h2 id="binary-clock" tabindex="-1"><a class="header-anchor" href="#binary-clock" aria-hidden="true">#</a> Binary Clock</h2>',5),y=e("Per questo orologio binario ho utilizzato la libreria "),w={href:"https://github.com/Electro707/Simple-LED-Matrix-Library",target:"_blank",rel:"noopener noreferrer"},R=e("simple_matrix"),C=e(" per la gestione della matrice di LED e la libreria "),L={href:"https://github.com/adafruit/RTClib",target:"_blank",rel:"noopener noreferrer"},N=e("RTClib"),T=e(" per la gestione del tempo."),I=e("Ho modificato la libreria "),A={href:"https://github.com/Electro707/Simple-LED-Matrix-Library",target:"_blank",rel:"noopener noreferrer"},E=e("simple_matrix"),k=e(" creando una nuova versione, "),P={href:"https://github.com/CodeCoagious19/arduino-libraries/tree/master/MatrixLEDLib_v2",target:"_blank",rel:"noopener noreferrer"},x=e("simple_matrix_v2"),O=e(" che in pi\xF9 contiene i metodi:"),W=s('<ul><li><code>writeSquare(order, x, y, value)</code></li><li><code>writePixel(x, y, value)</code></li></ul><h3 id="collegamenti-hardware" tabindex="-1"><a class="header-anchor" href="#collegamenti-hardware" aria-hidden="true">#</a> Collegamenti Hardware</h3><table><thead><tr><th>LED Matrix Pins</th><th>Arduino Pins</th></tr></thead><tbody><tr><td>VCC</td><td>VCC</td></tr><tr><td>GND</td><td>GND</td></tr><tr><td>DIN</td><td>D11</td></tr><tr><td>CLK</td><td>D13</td></tr><tr><td>CS</td><td>D4</td></tr></tbody></table><table><thead><tr><th>RTC</th><th>Arduino Pins</th></tr></thead><tbody><tr><td>VCC</td><td>VCC (+5V)</td></tr><tr><td>GND</td><td>GND</td></tr><tr><td>SDA</td><td>A4 (SDA)</td></tr><tr><td>SCL</td><td>A5 (SCL)</td></tr></tbody></table><p><img src="'+u+`" alt="binaryClock"></p><h3 id="il-codice" tabindex="-1"><a class="header-anchor" href="#il-codice" aria-hidden="true">#</a> Il codice</h3><p>L&#39;orologio binario consiste nel codificare ore, minuti e secondi con la relativa sequenza binaria.</p><p>Ho deciso di codificare ogni cifra in una sequenza binaria rappresentando quindi separatamente decine e unit\xE0 per ore, minuti e secondi.</p><p>Ad esempio:</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>12

//decine //unit\xE0
0001     0010
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inoltre la rappresentazione del tempo all&#39;interno della matrice di LED va dall&#39;alto verso il basso a partire dalle ore.</p><p>In conclusione, per rappresentare la seguente ora: <code>21:34:46</code> vedrai:</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>21:34:46

//d  //u
0010 0001
0011 0100
0100 0110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ecco quindi il codice completo..</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &quot;simple_matrix_v2.h&quot;  //Import the library
#include &quot;RTClib.h&quot;

#define NUMBER_OF_DISPLAYS 2 //Sets the number of display (4 for this example)

/*
Initialize the library. The 4 means that the CS pin is connected to pin D4.
You can change this to whatever you want, just make sure to connect the CS
pin to the pin number.

The disp means that any future function calls to the library uses &quot;disp&quot; as the
library&#39;s object name. For example, the library has a function called
&quot;setIntensity&quot;, you need to write &quot;disp.setIntensity&quot; to call that function.

If you notice that the display is upside-down per display, change
simpleMatrix disp(4, false, NUMBER_OF_DISPLAYS); to simpleMatrix disp(4, true, NUMBER_OF_DISPLAYS);
*/

/*
WARNING!!
There are several problems with the coding of (x, y) coordinates. I advise you to change the library for the LED matrix and switch to MD_MAX72XX which is much more complete and configurable.
*/
simpleMatrix disp(4, true, NUMBER_OF_DISPLAYS);
RTC_DS1307 rtc;

#define ORDER 2
#define START_X 0
#define START_Y 8

#define ADJUST_HOUR true

int seconds = 0;
int minutes = 0;
int hours = 0;

void seconds_unit(int i){
  //If you don&#39;t understand, see WARNINGS
  int x = 0;
  int y = 0;
  int value = 0;
  for (int bitNumber = 0; bitNumber &lt; 4; bitNumber++){
    x = START_Y - 1*ORDER;
    y = START_X + bitNumber*ORDER;
    value = (i&gt;&gt;bitNumber)&amp;1;
    disp.writeSquare(ORDER, x, y, value);
  }
}

void seconds_dozens(int i){
  //If you don&#39;t understand, see WARNINGS
  int x = 0;
  int y = 0;
  int value = 0;
  for (int bitNumber = 0; bitNumber &lt; 4; bitNumber++){
    x = START_Y - 1*ORDER;
    y = START_X + 8 + bitNumber*ORDER;
    value = (i&gt;&gt;bitNumber)&amp;1;
    disp.writeSquare(ORDER, x, y, value);
  }
}

void minutes_unit(int i){
  //If you don&#39;t understand, see WARNINGS
  int x = 0;
  int y = 0;
  int value = 0;
  for (int bitNumber = 0; bitNumber &lt; 4; bitNumber++){
    x = START_Y - 2*ORDER -1;
    y = START_X + bitNumber*ORDER;
    value = (i&gt;&gt;bitNumber)&amp;1;
    disp.writeSquare(ORDER, x, y, value);
  }
}
void minutes_dozens(int i){
  //If you don&#39;t understand, see WARNINGS
  int x = 0;
  int y = 0;
  int value = 0;
  for (int bitNumber = 0; bitNumber &lt; 4; bitNumber++){
    x = START_Y - 2*ORDER -1;
    y = START_X + 8 + bitNumber*ORDER;
    value = (i&gt;&gt;bitNumber)&amp;1;
    disp.writeSquare(ORDER, x, y, value);
  }
}  

void hours_unit(int i){
  //If you don&#39;t understand, see WARNINGS
  int x = 0;
  int y = 0;
  int value = 0;
  for (int bitNumber = 0; bitNumber &lt; 4; bitNumber++){
    x = START_Y - 3*ORDER -2;
    y = START_X + bitNumber*ORDER;
    value = (i&gt;&gt;bitNumber)&amp;1;
    disp.writeSquare(ORDER, x, y, value);
  }
}

void hours_dozens(int i){
  //If you don&#39;t understand, see WARNINGS
  int x = 0;
  int y = 0;
  int value = 0;
  for (int bitNumber = 0; bitNumber &lt; 4; bitNumber++){
    x = START_Y - 3*ORDER -2;
    y = START_X + 8 + bitNumber*ORDER;
    value = (i&gt;&gt;bitNumber)&amp;1;
    disp.writeSquare(ORDER, x, y, value);
  }
}


//This code will run only once when the Arduino is turned on.
void setup(){
  rtc.begin();
  //Starts the library
  disp.begin();
  //Set the LED&#39;s intensity. This value can be anywhere between 0 and 15.
  disp.setIntensity(0x01);

  if(ADJUST_HOUR){
     rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
   }
}

//After void setup(), this code will run and loop forever.
void loop(){

    DateTime adesso = rtc.now();

    seconds = adesso.second();
    minutes = adesso.minute();
    hours = adesso.hour();

    seconds_unit(seconds%10);
    seconds_dozens(seconds/10);

    minutes_unit(minutes%10);
    minutes_dozens(minutes/10);

    hours_unit(hours%10);
    hours_dozens(hours/10);

    delay(1000);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rtc-e-display-7-segmenti" tabindex="-1"><a class="header-anchor" href="#rtc-e-display-7-segmenti" aria-hidden="true">#</a> RTC e display 7 segmenti</h2><table><thead><tr><th>7 SEG Pins</th><th>Arduino Pins</th></tr></thead><tbody><tr><td>VCC</td><td>VCC</td></tr><tr><td>GND</td><td>GND</td></tr><tr><td>DIN</td><td>D11</td></tr><tr><td>CLK</td><td>D13</td></tr><tr><td>CS</td><td>D10</td></tr></tbody></table>`,17),U={href:"https://www.instructables.com/MAX7219-7-Segment-Using-Arduino/",target:"_blank",rel:"noopener noreferrer"},M=e("tutorial"),F=s(`<div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>//We always have to include the library

#include &quot;LedControl.h&quot;

/*
Now we need a LedControl to work with.
***** These pin numbers will probably not work with your hardware *****
pin 12 is connected to the DataIn
pin 11 is connected to the CLK
pin 10 is connected to LOAD
We have only a single MAX72XX.
*/

LedControl lc=LedControl(12,11,10,1);

/* we always wait a bit between updates of the display */
unsigned long delaytime=500;

void setup() {

  /* The MAX72XX is in power-saving mode on startup, we have to do a wakeup call */
  lc.shutdown(0,false);
  /* Set the brightness to a medium values */
  lc.setIntensity(0,8);
  /* and clear the display */
  lc.clearDisplay(0);
}

int ore = 22;
int minuti = 30;
int secondi = 0;
int centesimi = 0;

void loop() {
  lc.setDigit(0,7,ore/10,false);
  lc.setDigit(0,6,ore%10,true);
  lc.setDigit(0,5,minuti/10,false);
  lc.setDigit(0,4,minuti%10,true);
  lc.setDigit(0,3,secondi/10,false);
  lc.setDigit(0,2,secondi%10,true);
  lc.setDigit(0,1,centesimi/10,false);
  lc.setDigit(0,0,centesimi%10,false);
  delay(10);
  centesimi++;
  if (centesimi == 100){
    centesimi = 0;
    secondi++;
  }
  if (secondi == 60){
    minuti++;
    secondi = 0;
  }
  if (minuti == 60){
    ore++;
    minuti = 0;
  }
  if (ore == 24){
    ore = 0;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eeprom" tabindex="-1"><a class="header-anchor" href="#eeprom" aria-hidden="true">#</a> EEPROM</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &lt;EEPROM.h&gt;

int nByte = 0;
int value = 50;
void setup()
{
  Serial.begin(9600);
  if(EEPROM.read(nByte) == 255){
    Serial.println(String(String(nByte) + &quot;vuoto&quot;));
    EEPROM.write(nByte, value);
  }
  else{
    int tempvalue = EEPROM.read(nByte);
    String toprint = String(String(nByte) + &quot;:&quot; + String(tempvalue));
    Serial.println(toprint);
  }
  
}
void loop()
{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sleep-mode" tabindex="-1"><a class="header-anchor" href="#sleep-mode" aria-hidden="true">#</a> SLEEP MODE</h2><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>/**
 * Author:Ab Kurk
 * version: 1.0
 * date: 24/01/2018
 * Description: 
 * This sketch is part of the beginners guide to putting your Arduino to sleep
 * tutorial. It is to demonstrate how to put your arduino into deep sleep and
 * how to wake it up.
 * Link To Tutorial http://www.thearduinomakerman.info/blog/2018/1/24/guide-to-arduino-sleep-mode
 */

#include &lt;avr/sleep.h&gt;//this AVR library contains the methods that controls the sleep modes
#define interruptPin 2 //Pin we are going to use to wake up the Arduino


void setup() {
  Serial.begin(9600);//Start Serial Comunication
  pinMode(LED_BUILTIN,OUTPUT);//We use the led on pin 13 to indecate when Arduino is A sleep
  pinMode(interruptPin,INPUT);//Set pin d2 to input using the buildin pullup resistor
  attachInterrupt(digitalPinToInterrupt(interruptPin), wakeUp, RISING);//attaching a interrupt to pin d2
  digitalWrite(LED_BUILTIN,HIGH);//turning LED on
}

void loop() {
 delay(5000);//wait 5 seconds before going to sleep
 digitalWrite(LED_BUILTIN,LOW);//turning LED off
 Going_To_Sleep();
}

void Going_To_Sleep(){
    sleep_enable();//Enabling sleep mode
    set_sleep_mode(SLEEP_MODE_PWR_DOWN);//Setting the sleep mode, in our case full sleep
    sleep_cpu();//activating sleep mode
  }

void wakeUp(){
  Serial.println(&quot;Interrrupt Fired&quot;);//Print message to serial monitor
  sleep_disable();//Disable sleep mode
  Serial.println(&quot;just woke up!&quot;);//next line of code executed after the interrupt 
  digitalWrite(LED_BUILTIN,HIGH);//turning LED on
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contatto-magnetico" tabindex="-1"><a class="header-anchor" href="#contatto-magnetico" aria-hidden="true">#</a> Contatto magnetico</h2><p><img src="`+o+`" alt="language"></p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>void setup() {
  pinMode(2, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  bool v = digitalRead(2);
  digitalWrite(LED_BUILTIN, !v);
  delay(100);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rtc-e-display-i2c" tabindex="-1"><a class="header-anchor" href="#rtc-e-display-i2c" aria-hidden="true">#</a> RTC e Display I2C</h2><p>In questo esempio vedremo come realizzare un orologio utilizzando il modulo <strong>RTC</strong>, un display <strong>LCD</strong> con interfaccia <strong>I2C</strong> e un <strong>tasto touch</strong>. L&#39;orologio sar\xE0 alimentato da una <strong>pila a 9V</strong> quindi, per evitare che si scarichi nel giro di poche ore, faremo in modo che arduino vada in <strong>sleep mode</strong> disabilitando tutte le periferiche ad esso connesso. Il tasto touch servi\xE0 a risvegliare la arduino, il display e il modulo RTC per 10 secondi.</p><p><img src="`+c+`" alt=""></p><table><thead><tr><th>RTC</th><th>Arduino Pins</th></tr></thead><tbody><tr><td>VCC</td><td>VCC (+5V)</td></tr><tr><td>GND</td><td>GND</td></tr><tr><td>SDA</td><td>A4 (SDA)</td></tr><tr><td>SCL</td><td>A5 (SCL)</td></tr></tbody></table><table><thead><tr><th>LCD</th><th>Arduino Pins</th></tr></thead><tbody><tr><td>VCC</td><td>VCC (+5V)</td></tr><tr><td>GND</td><td>GND</td></tr><tr><td>SDA</td><td>A4 (SDA)</td></tr><tr><td>SCL</td><td>A5 (SCL)</td></tr></tbody></table><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &lt;Wire.h&gt; 
#include &lt;avr/sleep.h&gt;
#include &lt;LiquidCrystal_I2C.h&gt;
#include &quot;RTClib.h&quot;

#define WAKEUP_PIN 2 
#define RTC_LDC_PIN_POWER_SUPPLY 7
#define timeBeforeWakeUp 10000
#define refreshTime 1000

#define ON true
#define OFF false

enum Mesi {Jan = 1, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec};
enum Giorni {Sunday = 0, Monday, Tuesday, Wednesay, Thursday, Friday, Saturday};

//You shall flash the sketch two time.
//The first for adjust the time 
//The second for run arduino stand alone
#define ADJUST_HOUR false
DateTime dateNow = DateTime(2021, May, 19, 19, 9, 10);

LiquidCrystal_I2C lcd(0x27,20,2);  // set the LCD address to 0x27 for a 16 chars and 2 line display
RTC_DS1307 rtc;

//add 0 if number is  &lt; 9 and return a string
String fillZeros(int n) {return (n &lt; 10 ? String(&#39;0&#39; + String(n)) : String(n)); }

//receive h, m, s and return hh:mm:ss
String standardTime(int h, int m, int s){ return (String(fillZeros(h) + &#39;:&#39; + fillZeros(m) + &#39;:&#39; + fillZeros(s))); } 

void setup()
{
  pinMode(RTC_LDC_PIN_POWER_SUPPLY, OUTPUT);
  pinMode(WAKEUP_PIN,INPUT_PULLUP);

  attachInterrupt(digitalPinToInterrupt(WAKEUP_PIN), mcuWakeUp, FALLING); //attaching a interrupt to pin

  rtc_lcd_PowSupply(ON);
  
  if(ADJUST_HOUR){
     //to set time at the compilation time
     //rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
     rtc.adjust(dateNow);
   }
}

void loop()
{
    DateTime now = rtc.now();

    int year = now.year();
    int month = now.month();
    int day = now.day();
    int dayOfTheWeek = now.dayOfTheWeek();

    int seconds = now.second(); 
    int minutes = now.minute();
    int hours = now.hour();

    String LCD_firstRow = &quot;&quot;;
    switch(dayOfTheWeek){
      case Sunday: LCD_firstRow =  LCD_firstRow + &quot;Dom&quot; + &quot; &quot;; break;
      case Monday: LCD_firstRow =  LCD_firstRow + &quot;Lun&quot; + &quot; &quot;; break;
      case Tuesday: LCD_firstRow =  LCD_firstRow + &quot;Mar&quot; + &quot; &quot;; break;
      case Wednesay: LCD_firstRow =  LCD_firstRow + &quot;Mer&quot; + &quot; &quot;; break;
      case Thursday: LCD_firstRow =  LCD_firstRow + &quot;Gio&quot; + &quot; &quot;; break;
      case Friday: LCD_firstRow =  LCD_firstRow + &quot;Ven&quot; + &quot; &quot;; break;
      case Saturday: LCD_firstRow =  LCD_firstRow + &quot;Sab&quot; + &quot; &quot;; break;
      break;
      default:;
    }
    LCD_firstRow = LCD_firstRow + String(day) + &quot; &quot;;
    switch(month){
      case Jan: LCD_firstRow =  LCD_firstRow + &quot;gen&quot; + &quot; &quot;; break;
      case Feb: LCD_firstRow =  LCD_firstRow + &quot;gen&quot; + &quot; &quot;; break;
      case Mar: LCD_firstRow =  LCD_firstRow + &quot;mar&quot; + &quot; &quot;; break;
      case Apr: LCD_firstRow =  LCD_firstRow + &quot;apr&quot; + &quot; &quot;; break;
      case May: LCD_firstRow =  LCD_firstRow + &quot;mag&quot; + &quot; &quot;; break;
      case Jun: LCD_firstRow =  LCD_firstRow + &quot;giu&quot; + &quot; &quot;; break;
      case Jul: LCD_firstRow =  LCD_firstRow + &quot;lug&quot; + &quot; &quot;; break;
      case Aug: LCD_firstRow =  LCD_firstRow + &quot;ago&quot; + &quot; &quot;; break;
      case Sept: LCD_firstRow =  LCD_firstRow + &quot;set&quot; + &quot; &quot;; break;
      case Oct: LCD_firstRow =  LCD_firstRow + &quot;ott&quot; + &quot; &quot;; break;
      case Nov: LCD_firstRow =  LCD_firstRow + &quot;nov&quot; + &quot; &quot;; break;
      case Dec: LCD_firstRow =  LCD_firstRow + &quot;dic&quot; + &quot; &quot;; break;
      break;
      default:;
    }
    LCD_firstRow = LCD_firstRow + String(year);
    
    lcd.setCursor(0,0);
    lcd.print(LCD_firstRow);
    lcd.setCursor(0,1);
    lcd.print(standardTime(hours, minutes, seconds));
 

    delay(refreshTime);
    static int counter = 0; 
    if(counter &lt; timeBeforeWakeUp){
      counter +=  refreshTime; 
    } 
    //go to sleep
    else {
      counter = 0;
      rtc_lcd_PowSupply(OFF);
      mcuGoToSleep();
      //after wake up
      rtc_lcd_PowSupply(ON);
    }
}

void rtc_lcd_PowSupply(bool isOn){
  if(isOn){
    digitalWrite(RTC_LDC_PIN_POWER_SUPPLY, HIGH);
    lcd.init();  
    lcd.backlight();                   
    lcd.setCursor(0,0);
    delay(100);
    rtc.begin();
  }
  else{
    digitalWrite(RTC_LDC_PIN_POWER_SUPPLY, LOW);
  }
}

void mcuGoToSleep(){
  sleep_enable();
  set_sleep_mode(SLEEP_MODE_PWR_DOWN);
  sleep_cpu();
}

void mcuWakeUp(){
  sleep_disable();//Disable sleep mode
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wifi" tabindex="-1"><a class="header-anchor" href="#wifi" aria-hidden="true">#</a> wifi</h2>`,15),z=e("Utilizzer\xF2 un "),B={href:"https://store.arduino.cc/products/arduino-mkr-wifi-1010?queryID=undefined",target:"_blank",rel:"noopener noreferrer"},G=e("Arduino mkr wifi 1010"),V=e("."),X=i("p",null,[i("img",{src:m,alt:"overview"})],-1),Y=i("li",null,[e("Installa la scheda "),i("code",null,"Arduino SAMD Boards (32-bits ARM Cortex-M0+)"),e(" da "),i("code",null,"Strumenti/scheda/gestore scheda"),e(":")],-1),H=e("Installa la libreria "),J={href:"https://www.arduino.cc/en/Reference/WiFiNINA",target:"_blank",rel:"noopener noreferrer"},K=e("WiFiNINA"),j=e(" da "),Z=i("code",null,"Strumenti/Gestione librerie",-1),Q=i("p",null,[e("Apri, compila e carica lo scketch "),i("code",null,"ScanNetworks"),e(" tra gli esempi della libreria "),i("code",null,"WiFiNINA"),e(" in "),i("code",null,"File/Esempi/WiFiNINA/ScanNetworks"),e(". Aprendo il monitor seriale dovresti vedere le reti WiFi che la scheda riesce a trovare.")],-1),$=i("h1",{id:"mqtt",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#mqtt","aria-hidden":"true"},"#"),e(" mqtt")],-1),ii=e("Utilizzer\xF2 un "),ei={href:"https://store.arduino.cc/products/arduino-mkr-wifi-1010?queryID=undefined",target:"_blank",rel:"noopener noreferrer"},ni=e("Arduino mkr wifi 1010"),di=e("."),si=i("li",null,[i("p",null,[e("Installa la scheda "),i("code",null,"Arduino SAMD Boards (32-bits ARM Cortex-M0+)"),e(" da "),i("code",null,"Strumenti/scheda/gestore scheda"),e(":")])],-1),li=e("Installa la libreria "),ti={href:"https://www.arduino.cc/en/Reference/WiFiNINA",target:"_blank",rel:"noopener noreferrer"},ri=e("WiFiNINA"),ai=e(" e "),vi={href:"https://pubsubclient.knolleary.net/",target:"_blank",rel:"noopener noreferrer"},ui=e("PubSubClient (Nick O\u2019Leary)"),oi=e(" da "),ci=i("code",null,"Strumenti/Gestione librerie",-1),mi=i("li",null,[i("p",null,"Crea un file dove poter salvare le credenziali di accesso alla rete wifi:")],-1),bi=s(`<div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>//secrets.h 
const char WIFI_SSID[] = &quot;Vodafone-A37481864&quot;;
const char WIFI_PASS[] = &quot;lycl8uzu5x3m9utx&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Sketch</li></ol><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &quot;secrets.h&quot;
#include &lt;WiFiNINA.h&gt;
#include &lt;PubSubClient.h&gt;

WiFiClient wifi;
int status = WL_IDLE_STATUS;

IPAddress server(192,168,68,108); //indirizzo IP server mqtt
PubSubClient client(wifi);

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  while(!Serial){
    ;
  }
  Serial.begin(9600);
  Serial.println(&quot;OK&quot;);
  Serial.print(&quot;Connessione...&quot;);
  while(status != WL_CONNECTED){
    status =  WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.print(&quot;.&quot;);
    delay(1000);
  }
  Serial.println(&quot;Connected to WiFi\\n&quot;);
  client.setServer(server, 1883);
  client.setCallback(callback);

  if(client.connect(&quot;arduinosub&quot;)){
    Serial.println(&quot;mqtt connected&quot;);
    client.subscribe(&quot;/hello&quot;);
  } else{
    Serial.println(&quot;mqtt not connected&quot;);
    Serial.print(&quot;failed rc=&quot;);
    Serial.println(client.state());
  }
}

void loop()
{
  client.loop();
}

void callback(char* topic, byte* payload, unsigned int length){
  String msg;
  for(int i=0; i&lt;length; i++){
    msg += (char)payload[i];
  }
  if(strcmp(topic, &quot;/hello&quot;) == 0){
    if(msg == &quot;ON&quot;){
      digitalWrite(LED_BUILTIN, HIGH);
      Serial.println(&quot;ON&quot;);
    }
    else{
      digitalWrite(LED_BUILTIN, LOW);
      Serial.println(&quot;OFF&quot;);
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function hi(pi,_i){const n=a("ExternalLinkIcon");return t(),r("div",null,[h,i("p",null,[p,_,g,i("a",f,[D,d(n)]),q]),S,i("p",null,[y,i("a",w,[R,d(n)]),C,i("a",L,[N,d(n)]),T]),i("p",null,[I,i("a",A,[E,d(n)]),k,i("a",P,[x,d(n)]),O]),W,i("p",null,[i("a",U,[M,d(n)])]),F,i("p",null,[z,i("a",B,[G,d(n)]),V]),X,i("ol",null,[Y,i("li",null,[H,i("a",J,[K,d(n)]),j,Z])]),Q,$,i("p",null,[ii,i("a",ei,[ni,d(n)]),di]),i("ol",null,[si,i("li",null,[i("p",null,[li,i("a",ti,[ri,d(n)]),ai,i("a",vi,[ui,d(n)]),oi,ci])]),mi]),bi])}var fi=l(b,[["render",hi],["__file","index.html.vue"]]);export{fi as default};
