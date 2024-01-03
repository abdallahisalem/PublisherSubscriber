package mqttPublisher.mqtt;

import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

import java.util.Random;

public class App {

    public static void main(String[] args) {
        // Updated broker URL
        String broker = "ssl://8cd9dd5759164c88b7339b12f44c0a43.s1.eu.hivemq.cloud:8883";
        String clientId = "TemperaturePublisher";
        String topic = "Temp0";

        MemoryPersistence persistence = new MemoryPersistence();
        
        try {
            MqttClient client = new MqttClient(broker, clientId, persistence);

            MqttConnectOptions connOpts = new MqttConnectOptions();
            connOpts.setCleanSession(true);
            connOpts.setUserName("abdallahi");
            connOpts.setPassword("4PU!T_f2sCjeTLi".toCharArray());

            System.out.println("Connecting to broker: " + broker);
            client.connect(connOpts);
            System.out.println("Connected");

            while (true) {
                int temperature = generateRandomTemperature();
                String content = Integer.toString(temperature);

                MqttMessage message = new MqttMessage(content.getBytes());
                message.setQos(2);

                System.out.println("Publishing message: " + content);
                client.publish(topic, message);

                Thread.sleep(5000); // Publish every 5 seconds
            }
        } catch (MqttException | InterruptedException me) {
            me.printStackTrace();
        }
    }

    private static int generateRandomTemperature() {
        // Simulate a temperature between 20 and 30 degrees Celsius
        return new Random().nextInt(11) + 20;
    }
}
