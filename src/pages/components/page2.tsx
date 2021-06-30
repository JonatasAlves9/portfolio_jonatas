import React, { Component } from 'react';
import './stylesPage2.css';


export default class boxLeft extends Component<any, any> {
    render() {
        return (<div className="App">
        <div className="box_left">
            <h1 className="titleOla" >Olá</h1>
            <h3 className="subTitleName" >Meu nome é</h3>
            <h1 className="titleName" >Jônatas Alves</h1>
            <button className="buttonSkills" >Skills</button>
        </div>
  
        <div className="box_right">
            <div className="image"></div>
            <h3 className="name">Jônatas Alves</h3>
            <h3 className="description">Desenvolvedor Web</h3>
  
            <div className="info">
              <p className="text">Email: alvesjonatas99@gmail.com</p>
              <p className="text">Telefone: (81)99252-8586</p>
              <p className="text">Caruaru - Pernambuco - Brasil</p>
            </div>
  
            <div className="links">
              <p className="text">Github: www.example.com</p>
              <p className="text">Linkedin: www.example.com</p>
              <p className="text">Currículo: www.example.com</p>
            </div>
        </div>
  
   
  
      </div>
      )
    }
}
