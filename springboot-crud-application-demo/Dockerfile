# Use a Maven builder image to build the Spring Boot application
FROM maven:3.8.4-openjdk-8-slim AS builder

# Set the working directory in the builder image
WORKDIR /app

# Copy the project's pom.xml to the container
COPY springboot-crud-application-demo/pom.xml .

# Download the Maven dependencies specified in pom.xml
RUN mvn dependency:go-offline

# Copy the rest of the project source code to the container
COPY springboot-crud-application-demo/src ./src

# Build the application inside the container
RUN mvn package -DskipTests

# Use a minimal OpenJDK 8 JRE image to run the application
FROM adoptopenjdk/openjdk8:alpine-jre

# Set the working directory in the final image
WORKDIR /app

# Copy the built JAR from the builder image to the final image
COPY --from=builder /app/springboot-crud-application-demo/target/crudapplication-0.0.1-SNAPSHOT.jar ./crudapplication-0.0.1-SNAPSHOT.jar

# Set the entrypoint to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "crudapplication-0.0.1-SNAPSHOT.jar"]
