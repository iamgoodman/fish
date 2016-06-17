import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {Component1Component} from "./component1.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Component2Component} from "./component2.component";

@Component({
    selector: 'my-app',
 
  
    template: `


<div class="wrapper">
      <header>
        <h1>SeaFoodAlliance</h1>
        <nav>
          <ul>
            <li><a href="" class="current">首页</a></li>
            <li><a [routerLink]="['Component1', {source: 'AppComponent', optional: 'This is optional'}]">Component1</a></li>
            <li><a href="">catering</a></li>
            <li><a href="">关于我们</a></li>
            <li><a href="">联系我们</a></li>
          </ul>
        </nav>

      </header>
      <section class="courses">
        <article>
          <figure>
            <img src="images/bok-choi.jpg" alt="杀马特鱼" />
            <figcaption>杀马特鱼</figcaption>
          </figure>
          <hgroup>
            <h2>存放一些信息</h2>
            <h3>随便什么</h3>
          </hgroup>
          <p>吃鱼对身体特别好，以前大力水手爱吃菠菜，现在超人都爱吃鱼</p>
        </article>    
        <article>
          <figure>
            <img src="images/teriyaki.jpg" alt="洗剪吹鱼" />
            <figcaption>洗剪吹鱼</figcaption>
          </figure>
          <hgroup>
            <h2>存放一些信息2</h2>
            <h3>s随便存放一些信息都行3</h3>
          </hgroup>
          <p>超人的鱼要怎么吃呢， 要先买才行</p>
        </article>    
      </section>
      <aside>
        <section class="popular-recipes">
          <h2>做鱼的配方</h2>
          <a href="">沙拉鱼</a>
          <a href="">烧烤鱼</a>
          <a href="">生鱼</a>
          <a href="">火锅鱼</a>
        </section>
        <section class="contact-details">
          <h2>联系我</h2>
          <p>Joey hen shuai<br />
            JOey chao shuai street<br />
            henshuai <br />
            diqiu E2 7DP</p>
        </section>
      </aside>
      <footer>
        &copy; 2016joey
      </footer>
    </div><!-- .wrapper -->

 
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/component-1/:source/...', name: 'Component1', component: Component1Component},
    {path: '/component-2', name: 'Component2', component: Component2Component}
])
export class AppComponent {

}
