<p align="center">
  <h3 align="center">RabbitMQ</h3>

  <p align="center">
    This is a messaging microservice API with RabbitMQ.
    <br />
    <a href="https://github.com/lucfersan/rabbitmq"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/lucfersan/rabbitmq/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucfersan/rabbitmq/issues">Request Feature</a>
  </p>
</p>

## 📚 About The Project

I wanted to develop a project using microservices so I decided to use RabbitMQ and build an API for sending emails, which is a good way of studying queues and things of this nature.

## 🚀 Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lucfersan/rabbitmq
   ```
2. Install Express folder NPM packages
   ```sh
   cd express && npm i
   ```
3. Install Messages folder NPM packages
   ```sh
   cd messages && npm i
   ```

## 💻 Running the app

First make sure prisma is setup
```bash
$ npx prisma generate
$ npx prisma migrate dev --name init
```

In the root folder run the docker compose
```bash
$ npm run up
```

Start the server in the Express and Messages folders
```bash
$ npm run dev
```

## 🗞️ License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Lucas Fernandes - fernandes.lucas11@outlook.com