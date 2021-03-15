import React from 'react';

function NewsAlert({news}) {
    if (news) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col banner">
                        <NewsBanner news={news} />
                    </div>
                </div>
            </div>
        );
    }
}

function NewsBanner(props) {
    const banner = props.news.map(news => {
        return(
            <div key={news.id} classname="m-1">
                <RenderNewsBanner news={news} />
            </div>
        );
    });

    return (
        <div>
            {banner}
        </div>
    );
}

function RenderNewsBanner ({news}) {
    console.log(news);
    if (news) {
        return(
            <div className="fluid m-2">
                    <span className="m-1">Please join us for {news.name} on {news.date} at {news.startTime}!  </span>
                    <button className="btn btn-secondary">Register Now!</button>
            </div>
        );
    }
    return <div />
}

export default NewsAlert;