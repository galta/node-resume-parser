# Node Resume Parser

---
## Intro

The parser logic located on the /parser-utils/ folder.
1. **ExtractSections** - Split pdf's text to relevant sections. 
2. **Parse Each Section** - 
   1. parseIntroSection
   2. parseEducationSection
   3. parseEmploymentHistorySection

Code can be run from cli, or using browser's url.


---
## Installation
```sh
git clone git@github.com:galta/node-resume-parser.git
cd node-resume-parser
npm i 
```


---
## Running Server
Server serve static files, so you can use PDFs folder to serve pdf static files if needed.. 
```sh
npm start 
```


---
## Playing with the parser - by cli

```sh
node parser.js --url=http://localhost:3000/PDFs/Fake-Resume.pdf
```

More options:

Without url parameter: 
```sh
node parser.js
```

With url that is not exists: 
```sh
node parser.js --url=http://localhost:3000/PDFs/not-exists.pdf
```

With url that is not a pdf: 
```sh
node parser.js --url=http://localhost:3000/PDFs/not-pdf-file.txt
```


With url that is not a valid resume format: 
```sh
node parser.js --url=http://localhost:3000/PDFs/not-valid-format.pdf
```

---
## Playing with the parser - by browser's url

#### Server's root
http://localhost:3000/


#### Fake Resume Example
http://localhost:3000/?pdf=http://localhost:3000/PDFs/Fake-Resume.pdf

#### Not Valid Format Example
http://localhost:3000/?pdf=http://localhost:3000/PDFs/hello-world.pdf