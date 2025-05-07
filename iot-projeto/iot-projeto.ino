#define TRIG_ENTRADA 5
#define ECHO_ENTRADA 18

#define TRIG_VAGA1 19
#define ECHO_VAGA1 21

#define TRIG_VAGA2 22
#define ECHO_VAGA2 23

long readDistanceCM(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long duration = pulseIn(echoPin, HIGH);
  return duration * 0.034 / 2;
}

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_ENTRADA, OUTPUT);
  pinMode(ECHO_ENTRADA, INPUT);
  pinMode(TRIG_VAGA1, OUTPUT);
  pinMode(ECHO_VAGA1, INPUT);
  pinMode(TRIG_VAGA2, OUTPUT);
  pinMode(ECHO_VAGA2, INPUT);
}

void loop() {
  long distanciaEntrada = readDistanceCM(TRIG_ENTRADA, ECHO_ENTRADA);
  long distanciaVaga1 = readDistanceCM(TRIG_VAGA1, ECHO_VAGA1);
  long distanciaVaga2 = readDistanceCM(TRIG_VAGA2, ECHO_VAGA2);

  Serial.print("Entrada: ");
  Serial.print(distanciaEntrada);
  Serial.print(" cm | Vaga A1: ");
  Serial.print(distanciaVaga1);
  Serial.print(" cm | Vaga A2: ");
  Serial.print(distanciaVaga2);
  Serial.println(" cm");

  delay(1000);
}
