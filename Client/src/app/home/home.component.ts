import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from "./../../environments/environment";
interface ArticleListing {
	title: String;
	author: String;
	date: String;
	contentPreview: String,
	image:String
}

interface Article{
	id:Number;
    title: String;
	authorId:Number;
	content:String
}
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
	articles: Array<Article>;

	constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {

		this.articles =[]
	}

	async ngOnInit() {
		const accessToken = await this.oktaAuth.getAccessToken();
		const headers = new HttpHeaders({
			Authorization: 'Bearer ' + accessToken
		  });
		this.http.get<Article[]>(
			environment.apiUrl+ 'article/',
			{headers}
		  ).subscribe(result =>{
			this.articles = result
		  })
	}

}
