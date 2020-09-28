import { Component } from '@angular/core';

import { Article } from '../../models/article'

@Component({
  selector: 'vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

listaNull= ''
articleArray: Article[] = []

selectArticle: Article = new Article()
api:string = 'http://localhost:3005/articles'

async main(){
  if(this.articleArray.length === 0){
    console.log('lista vacia')
    this.listaNull='Lista vacia inserta un articulo'
  }else{this.listaNull=''}
  try{
    const res = await fetch(this.api)
    const data = await res.json()
    console.log(data.body)
    this.articleArray = data.body
    if(this.articleArray.length === 0){
      console.log('lista vacia')
      this.listaNull='Lista vacia inserta un articulo'
    }else{this.listaNull=''}
  }catch (e){
    console.error(e)
  }
}

async addOrEdit(){
  if(this.selectArticle._id === 0){
    const data = { user: this.selectArticle.user, 
      nameArticle: this.selectArticle.nameArticle}
    //this.selectArticle._id = this.articleArray.length + 1
    try{
      await fetch(this.api,{method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(data) 
    })
    console.log('data agregada correctamente')
    }catch(e){
      console.error(e)
    }
    //this.articleArray.push(this.selectArticle)
  }

  const id = this.selectArticle._id
  console.log(`${id} para editar`)
  //this.selectArticle = new Article()
  try{
    await fetch(`${this.api}/${id}`,{method: 'PATCH', 
    headers: { 
      'Content-type': 'application/json'
  }})
  console.log('data eliminada correctamente')
  }catch(e){
    console.error(e)
  }
}

async openForEdit(article:Article){
  this.selectArticle= article
}

async deleteArticle(){
  if(confirm('Esta seguro de eliminar este articulo')){
    this.articleArray = this.articleArray.filter(art => art !== this.selectArticle)
    const id = this.selectArticle._id
    //this.selectArticle = new Article()
    try{
      await fetch(`${this.api}/${id}`,{method: 'DELETE', 
      headers: { 
        'Content-type': 'application/json'
    }})
    console.log('data eliminada correctamente')
    }catch(e){
      console.error(e)
    }
  }
}
  constructor() {  this.main() }

}
