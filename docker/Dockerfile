FROM tomcat:8-jre8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY techtalkfeedback-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/techtalkfeedback.war

EXPOSE 8080
