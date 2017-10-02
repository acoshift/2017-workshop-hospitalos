FROM node:8.6.0

ADD package.json /package.json
ADD package-lock.json /package-lock.json
ADD index.js /index.js

RUN ["npm", "install"]

CMD ["node", "index.js"]
