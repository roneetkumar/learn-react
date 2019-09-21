import React from 'react';
import ReactDOM from 'react-dom';
import { } from './index.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {

    const authors = [
        {
            name: 'Roneet',
            date: '1:00AM',
            blogText: 'My First Blog!'
        },
        {
            name: 'Roop',
            date: '6:00PM',
            blogText: 'Best blog post ever!'
        },
        {
            name: 'Vinay',
            date: '2:00PM',
            blogText: 'Nice blog post!'
        },
        {
            name: 'Davinder',
            date: '4:00PM',
            blogText: 'Nice blog post!'
        },
        {
            name: 'Sunil',
            date: '10:00PM',
            blogText: 'Nice blog post!'
        }
    ];

    return (
        <React.Fragment>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure you want to do this?</p>
                </div>
            </ApprovalCard>
            {
                authors.map((author, index) => {
                    return (
                        <ApprovalCard key={index}>
                            <CommentDetail
                                author={author.name}
                                date={author.date}
                                blogPost={author.blogText}
                            />
                        </ApprovalCard>
                    )
                })
            }
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
