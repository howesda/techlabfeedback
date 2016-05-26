FROM tomcat:8-jre8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# delete existing ROOT application
RUN rm -rf /usr/local/tomcat/webapps/ROOT

COPY techtalkfeedback-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080
