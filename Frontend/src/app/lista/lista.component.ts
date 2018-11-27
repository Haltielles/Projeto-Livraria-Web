import { Component, OnInit } from '@angular/core';
import { ListaItem } from './listaitem';
import { Bookdescription } from '../Services/bookdescription'
import { BookdescriptionService } from '../Services/bookdescription.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {
  public a: Bookdescription;
  itensBase: Bookdescription[];
  itens = new Array<ListaItem>();

  constructor(private servBookDesk: BookdescriptionService) {
  }

  ngOnInit() {
    this.servBookDesk.getBooksDescriptions().subscribe(itens => {
      this.itensBase = itens;
      console.log(this.itensBase);
      for (let entry of itens) {
        this.itens.push(new ListaItem(entry.ISBN, entry.title, [], entry.description, entry.price, entry.publisher, entry.pubdate, entry.edition, entry.pages));
      }
    });

}

/*itens = [
  new ListaItem('0321344758', 'Java Script', ['Alan Beaulieu', 'John L. Viescas'], 'Usability design is one of the most important--yet often least attractive--tasks for a Web developer. In Dont Make Me Think, author Steve Krug lightens up the subject with good humor and excellent, to-the-point examples. The title of the book is its chief personal design premise. All of the tips, techniques, and examples presented revolve around users being able to surf merrily through a well-designed site with minimal cognitive strain. Readers will quickly come to agree with many of the books assumptions, such as "We dont read pages--we scan them" and "We dont figure out how things work--we muddle through." Coming to grips with such hard facts sets the stage for Web design that then produces topnotch sites. Using an attractive mix of full-color screen shots, cute cartoons and diagrams, and informative sidebars, the book keeps your attention and drives home some crucial points. Much of the content is devoted to proper use of conventions and content layout, and the "before and after" examples are superb. Topics such as the wise use of rollovers and usability testing are covered using a consistently practical approach. This is the type of book you can blow through in a couple of evenings. But despite its conciseness, it will give you an experts ability to judge Web design. Youll never form a first impression of a site in the same way again. --Stephen W. Plain', '44.95', 'Prentice Hall', 'April 16, 2004', '1', '560'),
  new ListaItem('0596005431', 'Web Database Applications with PHP & MySQL', ['John L. Viescas'], 'There are many reasons for serving up dynamic content from a web site: to offer an online shopping site, create customized information pages for users, or just manage a large volume of content through a database. Anyone with a modest knowledge of HTML and web site management can learn to create dynamic content through the PHP programming language and the MySQL database. This book gives you the background and tools to do the job safely and reliably. Web Database Applications with PHP and MySQL, Second Edition thoroughly reflects the needs of real-world applications. It goes into detail on such practical issues as validating input (do you know what a proper credit card number looks like?), logging in users, and using templates to give your dynamic web pages a standard look. But this book goes even further. It shows how JavaScript and PHP can be used in tandem to make a users experience faster and more pleasant. It shows the correct way to handle errors in user input so that a site looks professional. It introduces the vast collection of powerful tools available in the PEAR repository and shows how to use some of the most popular tools. Even while it serves as an introduction to new programmers, the book does not omit critical tasks that web sites require. For instance, every site that allows updates must handle the possibility of multiple users accessing data at the same time. This book explains how to solve the problem in detail with locking. Through a sophisticated sample application--Hugh and Daves Wine Store--all the important techniques of dynamic content are introduced. Good design is emphasized, such as dividing logic from presentation. The book introduces PHP 5 and MySQL 4.1 features, while providing techniques that can be used on older versions of the software that are still in widespread use. This new edition has been redesigned around the rich offerings of PEAR. Several of these, including the Template package and the database-independent query API, are fully integrated into examples and thoroughly described in the text. Topics include nstallation and configuration of Apache, MySQL, and PHP on Unix®, Windows®, and Mac OS® X systems Introductions to PHP, SQL, and MySQL administration Session management, including the use of a custom database for improved efficiency User input validation, security, and authentication The PEAR repository, plus details on the use of PEAR DB and Template classes Production of PDF reports', '44.95', 'Prentice Hall', 'April 16, 2004', '1', '560'),
  new ListaItem('0596007272', 'Learning SQL', ['Alan Beaulieu'], 'SQL (Structured Query Language) is a standard programming language for generating, manipulating, and retrieving information from a relational database. If youre working with a relational database--whether youre writing applications, performing administrative tasks, or generating reports--you need to know how to interact with your data. Even if you are using a tool that generates SQL for you, such as a reporting tool, there may still be cases where you need to bypass the automatic generation feature and write your own SQL statements. To help you attain this fundamental SQL knowledge, look to Learning SQL, an introductory guide to SQL, designed primarily for developers just cutting their teeth on the language. Learning SQL moves you quickly through the basics and then on to some of the more commonly used advanced features. Among the topics discussed: The history of the computerized database SQL Data Statements--those used to create, manipulate, and retrieve data stored in your database; example statements include select, update, insert, and delete SQL Schema Statements--those used to create database objects, such as tables, indexes, and constraints How data sets can interact with queries The importance of subqueries Data conversion and manipulation via SQLs built-in functions How conditional logic can be used in Data Statements Best of all, Learning SQL talks to you in a real-world manner, discussing various platform differences that youre likely to encounter and offering a series of chapter exercises that walk you through the learning process. Whenever possible, the book sticks to the features included in the ANSI SQL standards. This means youll be able to apply what you learn to any of several different databases; the book covers MySQL, Microsoft SQL Server, and Oracle Database, but the features and syntax should apply just as well (perhaps with some tweaking) to IBM DB2, Sybase Adaptive Server, and PostgreSQL. Put the power and flexibility of SQL to work. With Learning SQL you can master this important skill and know that the SQL statements you write are indeed correct.', '44.95', 'Prentice Hall', 'April 16, 2004', '1', '560')
];*/

descricaoResumida(descricao: String): String {
  return descricao.substr(0, 580);
}
}


