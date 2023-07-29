# Use a Maven builder image to build the Spring Boot application
# Use the base image with JDK (you can choose a different version if needed)
FROM adoptopenjdk:11-jdk-hotspot

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file to the container
COPY pom.xml .

# Download and install Maven dependencies (this step will be cached if the pom.xml file doesn't change)
RUN mvn dependency:go-offline

# Copy the entire project to the container (excluding Docker ignored files)
COPY . .

# Build the application
RUN mvn package

# Set the entrypoint to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "crudapplication-0.0.1-SNAPSHOT.jar"]
