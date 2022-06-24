# Dialog modal message
![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF) ![made-with-sass](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 
![GitHub repo size](https://img.shields.io/github/repo-size/StephaneLi/lib_typescript-dialog-react)
![GitHub jest](https://img.shields.io/badge/coverage-100%25-yellow)  

A simple customizable react dialog dialog with message in typescript.  
From project 14 OpenClassrooms, react app developer  
  
[Projet 14 Openclassroms](https://github.com/StephaneLi/StephaneLieumont_14_03062022)

## Installation
```npm install @stephane1920/ts-dialog-react```  
or  
```yarn add @stephane1920/ts-dialog-react```

## Usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dialog from '@stephane1920/ts-dialog-react';

const SomeComponent = () => {
  return (
    <div>
      <Dialog text="message de bienvenue" showDialog={true} />
    </div>
  )
};
```

## Props
|Label|Type|Required|Default|
|:----|:----:|:------:|:----:|
|text|string|yes|N/A|
|showDialog|boolean|no|false|
|duration|number|no|500|
|className|string|no|N/A|
|onClose|function|no|N/A|

## License  
ISC