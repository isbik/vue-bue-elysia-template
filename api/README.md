docker build -t my-bun-app .

docker run -d -p 4001:4001 --name bun-app my-bun-app

docker logs -f bun-app

docker stop bun-app

docker rm bun-app