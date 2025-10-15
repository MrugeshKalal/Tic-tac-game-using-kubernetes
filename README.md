# Tic-Tac-Toe Game on Kubernetes

A simple Tic-Tac-Toe (noughts & crosses) web game, containerized and deployed using Kubernetes.

## Table of Contents

- [Project Structure](#project-structure)  
- [Prerequisites](#prerequisites)  
- [Build & Deploy Steps](#build--deploy-steps)  
- [Accessing the Application](#accessing-the-application)  
- [Cleanup](#cleanup)  
- [Notes & Troubleshooting](#notes--troubleshooting)  

---

## Project Structure

```text
.
├── Dockerfile
├── dockerignore
├── package.json
├── package-lock.json
├── server.js
├── public/
│   └── index.html (or your frontend files)
├── tic-tac-game-deployment.yaml
├── tic-tac-game-service.yaml
├── metrics.js
└── README.md  ← (this file)

Build & Deploy Steps

Follow these steps to build the Docker image, push it (if needed), and deploy to Kubernetes.

Step 1: Start Minikube:

minikube start


Step 2: Build Docker Image:

docker build -t tic-tac-game:latest .


Step 3: Apply Kubernetes Manifests:

kubectl apply -f tic-tac-game-deployment.yaml
kubectl apply -f tic-tac-game-service.yaml


Step 4: To get the Project URL automatically, run:

minikube service tic-tac-game --url


Step 5: Cleanup

To remove the deployment and service:

kubectl delete -f tic-tac-game-deployment.yaml
kubectl delete -f tic-tac-game-service.yaml

