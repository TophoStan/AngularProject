import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '@schoolproject/data';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly books: IBook[] = [
    {
      id: '0',
      title: 'Harry Potter en de steen der wijzen',
      summary:
        '"Na de dood van zijn ouders woont Harry Potter in de bezemkast bij zijn zeer onvriendelijke tante en oom. Op zijn elfde hoort hij dat hij een tovenaar is. Dat verandert zijn hele leven. Vanaf ca. 11 jaar."',
      price: 5.0,
      rating: 5,
      imageUrl: 'https://images.pathe-thuis.nl/15304_450x640.jpg',
      hasBeenRead: true,
    },
    {
      id: '1',
      title: 'Traffic Secrets',
      summary:
        "Traffic Secrets Is the FUEL The biggest problem that most entrepreneurs have isn't creating an amazing product or service; it's getting their future customers to discover that they even exist. Every year, tens of thousands of businesses start and fail because the entrepreneurs don't understand this one essential skill: the art and science of getting traffic (or people) to find you. And that is a tragedy. Traffic Secrets was written to help you get your message out to the world about your products and services. I strongly believe that entrepreneurs are the only people on earth who can actually change the world. It won't happen in government, and I don't think it will happen in schools. It'll happen because of entrepreneurs like you, who are crazy enough to build products and services that will actually change the world. It'll happen because we are crazy enough to risk everything to try and make that dream become a reality. To all the entrepreneurs who fail in their first year of business, what a tragedy it is when the one thing they risked everything for never fully gets to see the light of day. Waiting for people to come to you is not a strategy. Understanding exactly WHO your dream customer is, discovering where they're congregating, and throwing out the hooks that will grab their attention to pull them into your funnels (where you can tell them a story and make them an offer) is the strategy. That's the big secret. Traffic is just people. This book will help you find YOUR people, so you can focus on changing their world with the products and services that you sell. ",
      price: 3.0,
      rating: 1,
      imageUrl: 'https://m.media-amazon.com/images/I/812s2GM2XiL.jpg',
      hasBeenRead: true,
    },
    {
      id: '2',
      title: 'Expert Secrets',
      summary:
        "Your business is a calling. You've been called to serve a group of people with the products, services, and offers that you've created. The impact that the right message can have on someone at the right time in their life is immeasurable. Your message could help to save marriages, repair families, change someone's health, grow a company, or more. . . .  But only if you know how to get it into the hands of the people whose lives you have been called to change.  By positioning yourself as an expert and telling your story in a way that gets people to move, you will be able to guide people through your value ladder, offer solutions to their problems, and give them the results they are looking for. This is how you change the lives of your customers, and this is how you grow your company.  In this updated edition of Expert Secrets, Russell Brunson, CEO and co-founder of the multimillion-dollar software company ClickFunnels, gives you the step-by-step strategies you need to turn your expertise into a carefully crafted sales message that will attract your dream customers.  Don't hide inside your business. Implement these story selling techniques now so you can find your voice and gain the confidence to become a leader, build a movement of people whose lives you can change, and make this calling a career.",
      price: 5.6,
      rating: 2,
      hasBeenRead: false,
      imageUrl: 'https://m.media-amazon.com/images/I/51W6AQKcMNL.jpg',
    },
    {
      id: '3',
      title: "It Didn't Start with You",
      summary:
        'A groundbreaking approach to transforming traumatic legacies passed down in families over generations, by an acclaimed expert in the fieldDepression. Anxiety. Chronic Pain. Phobias. Obsessive thoughts. the evidence is compelling: the roots of these difficulties may not reside in our immediate life experience or in chemical imbalances in our brains—but in the lives of our parents, grandparents, and even great-grandparents. the latest scientific research, now making headlines, supports what many have long intuited—that traumatic experience can be passed down through generations. It Didnt Start with You builds on the work of leading experts in post-traumatic stress, including Mount Sinai School of Medicine neuroscientist Rachel Yehuda and psychiatrist Bessel van der Kolk, author of the Body Keeps the Score. Even if the person who suffered the original trauma has died, or the story has been forgotten or silenced, memory and feelings can live on. these emotional legacies are often hidden, encoded in everything from gene expression to everyday language, and they play a far greater role in our emotional and physical health than has ever before been understood. As a pioneer in the field of inherited family trauma, Mark Wolynn has worked with individuals and groups on a therapeutic level for over twenty years. It Didnt Start with You offers a pragmatic and prescriptive guide to his method, the Core Language Approach. Diagnostic self-inventories provide a way to uncover the fears and anxieties conveyed through everyday words, behaviors, and physical symptoms. Techniques for developing a genogram or extended family tree create a map of experiences going back through the generations. And visualization, active imagination, and direct dialogue create pathways to reconnection, integration, and reclaiming life and health. It Didnt Start With You is a transformative approach to resolving longstanding difficulties that in many cases, traditional therapy, drugs, or other interventions have not had the capacity to touch. ',
      price: 5.0,
      rating: 5,
      imageUrl: 'https://m.media-amazon.com/images/I/81Ap+XQeaRL.jpg',
      hasBeenRead: false,
    },
    {
      id: '4',
      title: 'Surrounded by idiots',
      summary:
        'Do you ever think youre the only one making any sense? Or tried to reason with your partner with disastrous results? Do long, rambling answers drive you crazy? Or does your colleagues abrasive manner get your back up? You are not alone. After a disastrous meeting with a highly successful entrepreneur, who was genuinely convinced he was surrounded by idiots, communication expert and Bestselling author, Thomas Erikson dedicated himself to understanding how people function and why we often struggle to connect with certain types of people. Originally published in Swedish in 2014 as Omgiven Av Idioter, Erikons Surrounded by Idiots is already an international phenomenon, selling over 1. 5 million copies worldwide, of which over 750,000 copies have been sold in Sweden alone. It offers a simple, yet ground-breaking method for assessing the personalities of people we communicate with - in and out of the office - based on four personality types (Red, Blue, Green and Yellow), and provides insights into how we can adjust the way(s) we speak and share information. Erikson will help you understand yourself better, hone communication and social skills, handle conflict with confidence, improve dynamics with your boss and team, and get the best out of the people you deal with and manage. He also shares simple tricks on body language, improving written communication and advice on when to back away or when to push on, and when to speak up or indeed shut up. Packed with aha! and oh no! moments, Surrounded by Idiots will help you understand and influence those around you, even people you currently think are beyond all comprehension. And with a bit of luck you can also be confident that the idiot out there isnt you! ',
      price: 3.0,
      rating: 1,
      imageUrl: 'https://media.s-bol.com/Y0R3qY9Rzg80/D1RpEKA/528x840.jpg',
      hasBeenRead: true,
    },
    {
      id: '5',
      title: 'DotCom Secrets',
      summary:
        'The Underground Playbook For Growing Your Company Online Founder of Click Funnels, Russell Brunson, shares the secrets that hes learned about driving online sales from helping 10,000s of en- trepreneurs sell millions of dollars of products, and services What is DotcomSecrets? It is NOT just another how to book on Internet Marketing. It is NOT about getting more traffic to your website - yet these secrets will help you to get exponentially MORE traffic than youve ever experienced before. It is NOT about increasing your conversion - yet these secrets will increase your conversion MORE than any headline tweak or split test ever could. In Russell Brunsons experience, after working with hundreds of thousands of businesses he realized that low traffic or conversions are symptoms of a much greater problem thats a little harder to see (thats the bad news), but a lot easier to fix (thats the good news). Inside this book will find the actual playbook we created after running thou- sands of tests and perfecting what works online. You now have access to all of the processes, funnels and scripts that we used to scale companies online. DotComSecrets will give you the marketing funnels and the sales scripts you need to be able to turn on a flood of new leads into your business. Russell Brunson is a serial entrepreneur who started his first online company while he was wrestling at Boise State University. Within a year of graduating he had sold over a million dollars worth of his own products and services from his basement! For over 10 years now Russell has been starting and scaling companies online. He owns a software company, a supplement company, a coaching company, and is one of the top super affiliates in the world. DotComSecrets was created to help entrepreneurs around the world to start, promote and grow their companies online. ',
      price: 5.6,
      rating: 2,
      hasBeenRead: false,
      imageUrl: 'https://m.media-amazon.com/images/I/511Tg8yw2YL.jpg',
    },
  ];

  getBooks(): IBook[] {
    return this.books;
  }
  getBookAsObservable() {
    // return of(this.books);
  }
  deleteBookById(id: number) {
    // let book = this.books.find((obj) => obj.id == id);
    // let index = this.books.indexOf(book!);
    // this.books.splice(index, 1);
  }
  getBookById(id: number): IBook {
    // let book;
    // // this.books.filter((c) => c.id == id)[0];
    // if (book !== undefined) {
    //   return book;
    // } else {
    throw new Error('Book list is empty');
    // }
  }
  addBook(book: IBook) {
    // book.id = this.books.length;
    this.books.push(book);
  }
  updateBook(newBook: IBook) {
    let book = this.books.find((obj) => obj.id == newBook.id);
    let index = this.books.indexOf(book!);
    this.books[index] = newBook;
  }

  constructor() {}
}
