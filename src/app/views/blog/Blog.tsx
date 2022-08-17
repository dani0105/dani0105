import React from 'react';
import {
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  startAfter
} from 'firebase/firestore/lite';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BlogListComponent, FooterComponent, NavigatorComponent } from '../../components';
import { db } from '../../../firebase';
import { i18n } from '../../i18n/i18n';
import Post from '../post/Post';

const ROUTES = [
  {
    link: '/#profile', name: i18n.profile.sectionName, aria: i18n.profile.sectionName, isLink: false
  },
  {
    link: '/#experience', name: i18n.experience.sectionName, aria: i18n.experience.sectionName, isLink: false
  },
  {
    link: '/#education', name: i18n.education.sectionName, aria: i18n.education.sectionName, isLink: false
  },
  {
    link: '/#projects', name: i18n.projects.sectionName, aria: i18n.projects.sectionName, isLink: false
  },
  {
    link: '/blog', name: i18n.blog.sectionName, aria: i18n.blog.sectionName, isLink: true
  }
];

interface State {
  posts: any[],
  lastVisible: any,
  limit: number,
  isLoading: boolean
}

const blogView = (isLoading: boolean, posts: any[]) => (
  <div className="min-height mb-5">
    <div className="container mt-sm-5 mt-3 mb-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">{i18n.blog.blogFeed}</h1>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          {isLoading ? (
            <div className="min-height">
              <div className="spinner-border mx-auto d-block mt-5" role="status">
                <span className="visually-hidden" />
              </div>
            </div>
          ) : <BlogListComponent items={posts} />}
        </div>
      </div>

    </div>

  </div>
);

export class Blog extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: [], lastVisible: null, limit: 50, isLoading: true
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    let firebaseQuery: any;
    if (this.state.lastVisible) {
      firebaseQuery = query(collection(db, 'posts'), orderBy('created_at', 'desc'), startAfter(this.state.lastVisible), limit(this.state.limit));
    } else {
      firebaseQuery = query(collection(db, 'posts'), orderBy('created_at', 'desc'), limit(this.state.limit));
    }
    const POSTS_DOCUMENTS = await getDocs(firebaseQuery);
    const POSTS = POSTS_DOCUMENTS.docs.map((doc) => {
      const DATA: any = doc.data();
      DATA.id = doc.id;
      DATA.created_at = new Date(DATA.created_at.seconds * 1000);
      return DATA;
    });
    this.setState({ posts: POSTS, lastVisible: POSTS[POSTS.length - 1], isLoading: false });
  };

  render() {
    return (
      <div>
        <NavigatorComponent routes={ROUTES} />
        <Switch>
          <Route path="/blog/:postId" component={Post} />

          <Route path="*">
            <Helmet>
              <title>Blog - Daniel Rojas</title>
              <meta name="description" content="Hola!, Este es mi blog en el que comparto mis conocimientos" />
              <meta name="keywords" content="Danie Rojas, Blog, blog, portfolio, portafolio, blog feed, feed, programación, programming, developer, development" />
            </Helmet>
            {blogView(this.state.isLoading, this.state.posts)}
          </Route>

        </Switch>
        <FooterComponent />
      </div>
    );
  }
}
