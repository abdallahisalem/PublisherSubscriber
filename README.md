# IoT Temperature Monitoring Project

Welcome to our IoT Temperature Monitoring project! This project combines the power of React for the frontend, Maven Java projects for the backend, and HiveMQ as the MQTT broker to create a seamless temperature monitoring system.

## Project Overview

The main goal of this project is to showcase a real-time temperature monitoring solution using IoT principles. The Java projects act as the temperature senders, pushing updates to the HiveMQ broker every 5 seconds. On the other end, the React project serves as the subscriber, retrieving these temperature updates from the broker and dynamically refreshing the UI.

## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces. In our project, React serves as the subscriber, handling the real-time display of temperature updates.

- **Maven Java Projects**: The backend of our IoT system is powered by Java projects using Maven for project management. These projects are responsible for sending temperature data to the HiveMQ broker.

- **HiveMQ**: As our MQTT broker, HiveMQ facilitates the communication between the Java projects (temperature senders) and the React project (temperature subscriber). It plays a crucial role in ensuring smooth and efficient data exchange.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Set up and run the Maven Java projects responsible for sending temperature updates.
3. Run the React project to visualize real-time temperature data.

## Connecting to HiveMQ

To connect to HiveMQ and receive temperature updates in your React project, refer to the `MqttComponent.js` file in the React project. This file contains the necessary configurations and information for establishing a connection to the HiveMQ broker.

Happy coding! 🚀
