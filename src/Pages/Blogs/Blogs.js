import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Blogs = () => {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Difference between SQL and NoSQL. <p>Answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p></ListGroup.Item>
            <ListGroup.Item as="li">What is JWT, and how does it work? <p>Answer: SON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p></ListGroup.Item>
            <ListGroup.Item as="li">What is the difference between javascript and NodeJS? <p>Answer: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming languag</p></ListGroup.Item>
            <ListGroup.Item as="li">How does NodeJS handle multiple requests at the same time? <p>Answer: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p></ListGroup.Item>
        </ListGroup>
    );
};

export default Blogs;