import React, { Component } from "react";
import "../styles/PostView.css";
import { Card, Button, ButtonGroup } from "react-bootstrap";
const Post = [
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
  {
    id: 1,
    title: "Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content:
      "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. ",
  },
  {
    id: 2,
    title: "Java",
    image:
      "https://media.istockphoto.com/photos/generic-java-code-picture-id183805843?b=1&k=20&m=183805843&s=170667a&w=0&h=cAFttnU31LVVneHwlIWDBWtsCvowtJsas9eXKXiDgwQ=",
    content:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere,meaning that compiled Java code can run on all platforms that support Java. ",
  },
  {
    id: 3,
    title: "Javascript",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    content:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  },
];

// const addPost = () => {
//   return( Post.map((post) => {
//     console.log(post);

//     <Card style={{ width: "18rem" }} key={post.id}>
//       <Card.Img
//         variant="top"
//         src="https://source.unsplash.com/user/erondu/600x400"
//       />
//       <Card.Body>
//         <Card.Title>post.title</Card.Title>
//         <Card.Text>post.content</Card.Text>
//         <Button variant="primary">Read more</Button>
//       </Card.Body>
//     </Card>;
//   }))
// };

const addPost = () => {
  return (
    <ul
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid black",
        margin: "0",
        padding: "1rem",
      }}
    >
      {Post.map((post) => {
        return (
          <>
            <li style={{ display: "inline" }}>
              <Card
                style={{
                  width: "22rem",
                  height: "38rem",
                  margin: "30px 30px",
                }}
                key={post.id}
              >
                <Card.Img
                  variant="top"
                  style={{ width: "22rem", height: "15rem" }}
                  src={post.image}
                />
                <Card.Body style={{ display: "inline" }}>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <Button className="readMorebutton" variant="primary">
                    Read more
                  </Button>
                  <br />
                </Card.Body>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    style={{
                      width: "120px",
                      backgroundColor: "transparent",
                      border: "1px solid black",
                    }}
                  >
                    <img src="https://img.icons8.com/material-outlined/30/000000/filled-like.png" />
                  </Button>
                  <Button
                    style={{
                      width: "120px",
                      backgroundColor: "transparent",
                      border: "1px solid black",
                    }}
                  >
                    <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png" />
                  </Button>
                  <Button
                    style={{
                      width: "120px",
                      border: "1px solid black",
                      backgroundColor: "transparent",
                    }}
                  >
                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/30/000000/external-share-network-sharing-those-icons-lineal-those-icons-1.png" />
                  </Button>
                </ButtonGroup>
              </Card>
              ;
            </li>
          </>
        );
      })}
    </ul>
  );
};
export default addPost;
