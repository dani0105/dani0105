import {
  collection, doc, getDoc, getDocs
} from 'firebase/firestore/lite';
import { Helmet } from 'react-helmet';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { db } from '../../../firebase';
import { i18n } from '../../i18n/i18n';
import {
  Back,
  Img,
  PostContent,
  Title
} from './Post.styles';

interface State {
  isLoading: boolean,
  post: {
    title: string,
    summary: string,
    image: string,
    keywords: string[],
    topic: {
      name: string
    },
    created_at: Date,
    attachments: any[],
    contents: any[]
  }
}

const content = (element: any) => {
  const text = element.text.replaceAll('  ', '\n');
  return (
    <div key={element.title} className="row mt-2">
      <PostContent className="col-12">
        <h2><strong>{element.title}</strong></h2>
        <ReactMarkdown children={text} />
      </PostContent>
    </div>
  );
};

const attachment = (element: any) => (
  <li key={element.link}>
    <a href={element.link}>
      {element.name}
    </a>
  </li>
);

class Post extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      post: {
        attachments: [],
        contents: [],
        created_at: new Date(),
        image: '',
        keywords: [],
        summary: '',
        title: '',
        topic: {
          name: ''
        }
      }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.postId;
    this.getDocument(id);
  }

  getDocument = async (postId: string) => {
    const docRef = doc(db, 'posts', postId);
    const docSnap = await getDoc(docRef);
    const topicSnap = await getDoc(docSnap.get('topic'));
    const topicInfo: any = topicSnap.data();
    const postInfo = docSnap.data();

    const attatchmentsRef = collection(docRef, 'attachments');
    const attachmentsSnap = await getDocs(attatchmentsRef);

    const contentsRef = collection(docRef, 'contents');
    const contentsSnap = await getDocs(contentsRef);

    const attachments = attachmentsSnap.docs.map((docInfo: any) => docInfo.data());
    const contents = contentsSnap.docs.map((docInfo: any) => docInfo.data());

    if (!postInfo) {
      this.setState({ isLoading: false });
      return;
    }
    this.setState({
      isLoading: false,
      post: {
        title: postInfo.title,
        topic: !topicInfo ? { name: 'Sin Tema' } : topicInfo,
        image: postInfo.image,
        keywords: postInfo.keywords,
        created_at: new Date(postInfo.created_at.seconds * 1000),
        summary: postInfo.summary,
        attachments,
        contents
      }
    });
  };

  formatDate = (date: Date | undefined): string => {
    if (!date) {
      return 'Sin fecha';
    }
    return date.toLocaleString(i18n.getLanguage(), { month: 'long', day: 'numeric', year: 'numeric' });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <Helmet>
            <title>
              Blog - Cargando
            </title>
          </Helmet>
          <div className="min-height">
            <div className="spinner-border mx-auto d-block mt-5" role="status">
              <span className="visually-hidden" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Helmet>
          <title>
            Blog -
            {this.state.post?.title}
          </title>
          <meta name="description" content={this.state.post?.summary} />
          <meta name="keywords" content={this.state.post?.keywords.join(', ')} />
        </Helmet>
        <div className="container min-height mb-5">
          <div className="row mt-sm-5 mt-4">
            <div className="col-12">
              <span className="material-symbols-outlined align-middle">
                arrow_back_ios
              </span>
              <Back className="link align-middle" to="/blog">{i18n.blog.backToFeed}</Back>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <Img src={this.state.post?.image} />
              <Title className="pb-3 mt-3">
                <h1>
                  <strong>{this.state.post?.title}</strong>
                </h1>
                <span className="d-block">
                  <strong className="me-2">
                    {i18n.blog.date}
                    :
                  </strong>
                  {this.formatDate(this.state.post?.created_at)}
                </span>
                <span>
                  <strong className="me-2">
                    {i18n.blog.topic}
                    :
                  </strong>
                  {this.state.post?.topic.name}
                </span>
              </Title>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <h2><strong>{i18n.blog.summary}</strong></h2>
              <p>
                {this.state.post.summary}
              </p>
            </div>
          </div>

          {this.state.post?.contents.map((element) => content(element))}
          {this.state.post?.attachments && this.state.post?.attachments.length > 0 ? (
            <div className="row mt-3">
              <div className="col-12">
                <h2><strong>{i18n.blog.attachments}</strong></h2>
                <ul>
                  {this.state.post?.attachments.map((element) => attachment(element))}
                </ul>
              </div>
            </div>
          ) : null}

        </div>
      </div>
    );
  }
}

export default withRouter(Post);
