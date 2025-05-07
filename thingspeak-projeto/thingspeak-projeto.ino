#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "SEU_WIFI";
const char* password = "SUA_SENHA";

const char* server = "http://api.thingspeak.com/update";
String apiKey = "HYW9XP98IDI6D9A9";

#define TRIG_VAGA1 19
#define ECHO_VAGA1 21
#define TRIG_VAGA2 22
#define ECHO_VAGA2 23
#define TRIG_ENTRADA 5
#define ECHO_ENTRADA 18

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
  pinMode(TRIG_VAGA1, OUTPUT); pinMode(ECHO_VAGA1, INPUT);
  pinMode(TRIG_VAGA2, OUTPUT); pinMode(ECHO_VAGA2, INPUT);
  pinMode(TRIG_ENTRADA, OUTPUT); pinMode(ECHO_ENTRADA, INPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); Serial.print(".");
  }
  Serial.println("WiFi conectado");
}

void loop() {
  long entrada = readDistanceCM(TRIG_ENTRADA, ECHO_ENTRADA);
  long vaga1 = readDistanceCM(TRIG_VAGA1, ECHO_VAGA1);
  long vaga2 = readDistanceCM(TRIG_VAGA2, ECHO_VAGA2);

  if(WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = server;
    url += "?api_key=" + apiKey;
    url += "&field1=" + String(entrada);
    url += "&field2=" + String(vaga1);
    url += "&field3=" + String(vaga2);

    http.begin(url);
    int httpCode = http.GET();
    if (httpCode > 0) {
      Serial.println("Dados enviados ao ThingSpeak.");
    } else {
      Serial.println("Erro ao enviar.");
    }
    http.end();
  }

  delay(15000);  // ThingSpeak aceita no mínimo 15s entre envios
}
