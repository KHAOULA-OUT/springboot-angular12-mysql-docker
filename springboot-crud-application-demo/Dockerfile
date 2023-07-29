# === Build Stage ===
FROM maven:3.8.4-openjdk-8-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file to the container
COPY pom.xml .

# Download and install Maven dependencies (this step will be cached if the pom.xml file doesn't change)
RUN mvn dependency:go-offline

# Copy the entire project to the container (excluding Docker ignored files)
COPY . .

# Build the application
RUN mvn clean package -DskipTests


# === Runtime Stage ===
FROM openjdk:8-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR from the builder stage to the runtime image
COPY --from=builder /app/target/crudapplication-0.0.1-SNAPSHOT.jar ./crudapplication.jar

# Set the entrypoint to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "crudapplication.jar"]
