import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg" style={{height:'auto'}}>
              <div className="card-body" >
                <h2 className="card-title text-center mb-4 text-primary">About NewsBaba</h2>
                <p className="card-text">
                  Welcome to <strong>NewsBaba</strong>, your number one source for all things news. We're dedicated to giving you the very best of daily news, with a focus on <strong>reliability</strong>, <em>accuracy</em>, and <strong>timeliness</strong>.
                </p>
                <p className="card-text">
                  Founded in 2024 by a team of dedicated journalists, <strong>NewsBaba</strong> has come a long way from its beginnings. When we first started out, our passion for delivering the latest news drove us to do tons of research, so that <strong>NewsBaba</strong> can offer you the most updated and accurate news stories. We now serve readers all over the world and are thrilled that we're able to turn our passion into our own website.
                </p>
                <p className="card-text">
                  Our mission is to inform, educate, and engage our readers by providing them with high-quality journalism and in-depth analysis. We cover a wide range of topics, including politics, business, technology, sports, entertainment, and more.
                </p>
                <p className="card-text">
                  At <strong><em>NewsBaba</em></strong>, we believe in the power of the free press and the importance of staying informed in today's fast-paced world. Our team of experienced journalists works around the clock to bring you the latest news and updates, ensuring that you are always in the know.
                </p>
                <p className="card-text">
                  We hope you enjoy our news coverage as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us. We value your feedback and strive to improve with every edition.
                </p>
                <p className="card-text text-center">
                  <strong>Sincerely,<br /><span className="text-primary">The NewsBaba</span></strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
